import { Skeleton } from "@/components/ui/skeleton";
import React, { useMemo } from "react";
import { useLoadDataJson, useLoadPexelImages } from "@/hooks";

export function RollingImages() {
  const {
    data: images,
    isLoading,
    error,
  } = useLoadDataJson<string[]>("/data/rolling-images.json", "images");

  // Shuffle images
  const shuffledImages = useMemo(() => {
    return [...images].sort(() => Math.random() - 0.5);
  }, [images]);

  const [isAnimationRunning, setIsAnimationRunning] = React.useState(true);
  const { areImagesLoaded, handleImageLoad } =
    useLoadPexelImages(shuffledImages);

  // Show error state if error occurs
  if (error) {
    return <div>Error loading images</div>;
  }

  return (
    <div className={"h-52 overflow-hidden whitespace-nowrap"}>
      {[0, 1].map((index) => {
        return (
          <div
            className={
              areImagesLoaded && !isLoading
                ? "inline-flex h-full w-max animate-scroll whitespace-nowrap"
                : "hidden"
            }
            key={index}
            style={{
              animationPlayState: isAnimationRunning ? "running" : "paused",
            }}
            onMouseOver={() => setIsAnimationRunning(false)}
            onMouseOut={() => setIsAnimationRunning(true)}
          >
            {shuffledImages.map((imageUrl, imgIndex) => {
              return (
                <img
                  src={imageUrl}
                  key={imgIndex}
                  className="duration-500 scale-85 rounded-lg transition-all hover:scale-100 hover:cursor-pointer"
                  onClick={() => {
                    window.open(convertPexelsUrl(imageUrl), "_blank");
                  }}
                  onLoad={handleImageLoad}
                />
              );
            })}
          </div>
        );
      })}
      <div
        className={areImagesLoaded && !isLoading ? "hidden" : "h-full w-full"}
      >
        <Skeleton className="h-full w-full" />
      </div>
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
