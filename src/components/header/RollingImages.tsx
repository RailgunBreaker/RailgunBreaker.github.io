import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { useLoadDataJson, useLoadPexelImages } from "@/hooks";

const DISPLAY_IMAGE_COUNT = 5;
const REFRESH_INTERVAL_MS = 12000;
const RESPONSIVE_WIDTHS = [480, 720, 960];

function buildPexelsImageUrl(imageUrl: string, width: number, dpr = 1): string {
  try {
    const url = new URL(imageUrl);

    // Deliver web-optimized sizes for the current viewport density.
    url.searchParams.set("auto", "compress");
    url.searchParams.set("cs", "tinysrgb");
    url.searchParams.set("fit", "crop");
    url.searchParams.set("fm", "webp");
    url.searchParams.set("w", String(width));
    url.searchParams.set("h", String(Math.round(width * 0.56)));
    url.searchParams.set("dpr", String(dpr));

    return url.toString();
  } catch {
    return imageUrl;
  }
}

function getResponsiveImageSources(imageUrl: string) {
  const src = buildPexelsImageUrl(imageUrl, 720, 1);
  const srcSet = RESPONSIVE_WIDTHS.map(
    (width) => `${buildPexelsImageUrl(imageUrl, width, 1)} ${width}w`
  ).join(", ");

  return { src, srcSet };
}

function pickRandomImages(images: string[], count: number, previous: string[]) {
  const shuffled = [...images].sort(() => Math.random() - 0.5);
  const nextSelection = shuffled.slice(0, Math.min(count, shuffled.length));

  if (images.length <= count || previous.length === 0) {
    return nextSelection;
  }

  const nextKey = [...nextSelection].sort().join("|");
  const previousKey = [...previous].sort().join("|");

  if (nextKey !== previousKey) {
    return nextSelection;
  }

  for (let attempt = 0; attempt < 3; attempt++) {
    const retrySelection = [...images]
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(count, images.length));
    const retryKey = [...retrySelection].sort().join("|");

    if (retryKey !== previousKey) {
      return retrySelection;
    }
  }

  return nextSelection;
}

export function RollingImages() {
  const { data: images, error } = useLoadDataJson<string[]>(
    "/data/rolling-images.json",
    "images"
  );

  const [isAnimationRunning, setIsAnimationRunning] = React.useState(true);
  const [displayImages, setDisplayImages] = React.useState<string[]>([]);
  const { handleImageLoad } = useLoadPexelImages(displayImages);

  const [loadedImages, setLoadedImages] = React.useState<Set<string>>(
    new Set()
  );

  React.useEffect(() => {
    if (images.length === 0) {
      return;
    }

    setDisplayImages((previous: string[]) =>
      pickRandomImages(images, DISPLAY_IMAGE_COUNT, previous)
    );

    const intervalId = window.setInterval(() => {
      setDisplayImages((previous: string[]) =>
        pickRandomImages(images, DISPLAY_IMAGE_COUNT, previous)
      );
    }, REFRESH_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [images]);

  React.useEffect(() => {
    setLoadedImages(new Set());
  }, [displayImages]);

  const handleIndividualImageLoad = (imageUrl: string) => {
    setLoadedImages((prev: Set<string>) => new Set(prev).add(imageUrl));
    handleImageLoad();
  };

  // Show error state if error occurs
  if (error) {
    return <div>Error loading images</div>;
  }

  return (
    <div className={"md:h-104 overflow-hidden whitespace-nowrap h-40"}>
      {[0, 1].map((index) => {
        return (
          <div
            className={
              "inline-flex h-full w-max animate-scroll whitespace-nowrap"
            }
            key={index}
            style={{
              animationPlayState: isAnimationRunning ? "running" : "paused",
            }}
            onMouseOver={() => setIsAnimationRunning(false)}
            onMouseOut={() => setIsAnimationRunning(true)}
          >
            {displayImages.map((imageUrl: string, imgIndex: number) => {
              const isImageLoaded = loadedImages.has(imageUrl);
              const { src, srcSet } = getResponsiveImageSources(imageUrl);

              return (
                <div className="inline-block relative" key={imgIndex}>
                  {!isImageLoaded && (
                    <Skeleton className="h-full w-full aspect-video duration-500 scale-85 rounded-lg transition-all hover:scale-100 hover:cursor-pointer" />
                  )}

                  <img
                    src={src}
                    srcSet={srcSet}
                    sizes="(max-width: 768px) 72vw, 32vw"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    width={720}
                    height={405}
                    alt={`Rolling image ${imgIndex}`}
                    className={`h-full w-full aspect-video duration-500 scale-85 rounded-lg transition-all hover:scale-100 hover:cursor-pointer object-contain md:object-cover ${
                      isImageLoaded
                        ? "block"
                        : "absolute opacity-0 pointer-events-none"
                    }`}
                    onLoad={() => handleIndividualImageLoad(imageUrl)}
                    onClick={() =>
                      window.open(convertPexelsUrl(imageUrl), "_blank")
                    }
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

/**
 * Convert the Pexels image URL to the description page URL
 * @param imageUrl A `string` of the Pexels image URL
 * @returns A `string` of the Pexels image URL in description page
 */
function convertPexelsUrl(imageUrl: string): string {
  const regex =
    /https:\/\/images\.pexels\.com\/photos\/(\d+)\/[^/]+\/([^/]+)\.jpeg/;
  const match = imageUrl.match(regex);

  if (match) {
    const photoId = match[1]; // Extract the photo ID
    const photoSlug = match[2]; // Extract the photo slug
    return `https://www.pexels.com/photo/${photoSlug}-${photoId}/`; // Construct the new URL
  } else {
    // Return an error message if the URL doesn't match the expected pattern
    return "Invalid Pexels image URL";
  }
}
