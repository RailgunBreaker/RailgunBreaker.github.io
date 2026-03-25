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

function shuffleImages(images: string[]) {
  const shuffled = [...images];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

export function RollingImages() {
  const { data: images, error } = useLoadDataJson<string[]>(
    "/data/rolling-images.json",
    "images"
  );

  const [isAnimationRunning, setIsAnimationRunning] = React.useState(true);
  const [displayImages, setDisplayImages] = React.useState<string[]>([]);
  const { handleImageLoad } = useLoadPexelImages(displayImages);
  const shuffledPoolRef = React.useRef<string[]>([]);

  const [loadedImages, setLoadedImages] = React.useState<Set<string>>(
    new Set()
  );

  const getNextImageBatch = React.useCallback(
    (sourceImages: string[], count: number) => {
      if (sourceImages.length === 0) {
        return [];
      }

      if (sourceImages.length <= count) {
        return shuffleImages(sourceImages);
      }

      if (shuffledPoolRef.current.length < count) {
        shuffledPoolRef.current = shuffleImages(sourceImages);
      }

      return shuffledPoolRef.current.splice(0, count);
    },
    []
  );

  React.useEffect(() => {
    if (images.length === 0) {
      return;
    }

    shuffledPoolRef.current = shuffleImages(images);
    setDisplayImages(getNextImageBatch(images, DISPLAY_IMAGE_COUNT));

    const intervalId = window.setInterval(() => {
      setDisplayImages(getNextImageBatch(images, DISPLAY_IMAGE_COUNT));
    }, REFRESH_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [getNextImageBatch, images]);

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
    <div className={"md:h-104 overflow-hidden whitespace-nowrap h-52 w-full"}>
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
                <div
                  className="inline-block relative w-[84vw] max-w-sm sm:w-72 md:w-80 lg:w-96 mr-3 sm:mr-4"
                  key={imgIndex}
                >
                  {!isImageLoaded && (
                    <Skeleton className="h-full w-full aspect-video duration-500 scale-100 md:scale-85 rounded-lg transition-all hover:scale-100 hover:cursor-pointer" />
                  )}

                  <img
                    src={src}
                    srcSet={srcSet}
                    sizes="(max-width: 768px) 94vw, 32vw"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    width={720}
                    height={405}
                    alt={`Rolling image ${imgIndex}`}
                    className={`h-full w-full aspect-video duration-500 scale-100 md:scale-85 rounded-lg transition-all hover:scale-100 hover:cursor-pointer object-contain md:object-cover ${
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
