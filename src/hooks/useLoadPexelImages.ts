import { useState, useEffect } from "react";

/**
 * A hook to handle Pexel image loading state
 * @param images Array of image URLs to load
 * @returns Object containing loading state and loaded image count
 */
export function useLoadPexelImages(images: string[]) {
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);
  const [imageLoadCount, setImageLoadCount] = useState(0);
  const totalImages = images.length;

  // Reset loading state when images array changes
  useEffect(() => {
    setImageLoadCount(0);
    setAreImagesLoaded(false);
  }, [images]);

  // Handle individual image load
  const handleImageLoad = () => {
    setImageLoadCount((prevCount) => {
      const newCount = prevCount + 1;
      // Set loaded state when all images are loaded
      if (newCount === totalImages) {
        setAreImagesLoaded(true);
      }
      return newCount;
    });
  };

  return {
    areImagesLoaded,
    imageLoadCount,
    totalImages,
    handleImageLoad,
  };
}
