import { useEffect, useMemo, useState } from "react";

type RollingImagesData = {
  images?: unknown;
};

const visibleImageLimit = 15;

function shuffleImages(images: string[]) {
  return [...images].sort(() => Math.random() - 0.5);
}

function toPexelsPhotoUrl(imageUrl: string) {
  const match = imageUrl.match(
    /https:\/\/images\.pexels\.com\/photos\/(\d+)\/[^/]+\/([^/]+)\.jpeg/,
  );

  if (!match) {
    return imageUrl;
  }

  return `https://www.pexels.com/photo/${match[2]}-${match[1]}/`;
}

export function RollingImages() {
  const [images, setImages] = useState<string[]>([]);
  const [loadedImageCount, setLoadedImageCount] = useState(0);
  const [hasError, setHasError] = useState(false);
  const shuffledImages = useMemo(
    () => shuffleImages(images).slice(0, visibleImageLimit),
    [images],
  );
  const isReady =
    shuffledImages.length > 0 && loadedImageCount >= shuffledImages.length;

  useEffect(() => {
    let isMounted = true;

    async function loadImages() {
      try {
        const response = await fetch("/data/rolling-images.json");

        if (!response.ok) {
          throw new Error(`Unable to load rolling images: ${response.status}`);
        }

        const data = (await response.json()) as RollingImagesData;
        const nextImages = Array.isArray(data.images)
          ? data.images.filter(
              (image): image is string => typeof image === "string",
            )
          : [];

        if (isMounted) {
          setImages(nextImages);
        }
      } catch {
        if (isMounted) {
          setHasError(true);
        }
      }
    }

    void loadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  function handleImageSettled() {
    setLoadedImageCount((currentCount) => currentCount + 1);
  }

  if (hasError) {
    return null;
  }

  return (
    <section
      aria-label="Photo gallery"
      className="rolling-images group relative overflow-hidden rounded-3xl border border-sky-200/10 bg-[rgb(3_25_48/0.78)] px-0 py-8 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)] sm:py-10"
    >
      <div
        className={`rolling-images-track flex w-max transition-opacity duration-500 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      >
        {[0, 1].map((trackIndex) => (
          <div className="flex shrink-0 gap-8 pr-8" key={trackIndex}>
            {shuffledImages.map((imageUrl) => (
              <a
                className="block shrink-0 overflow-hidden rounded-xl transition duration-500 outline-none hover:scale-110 focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
                href={toPexelsPhotoUrl(imageUrl)}
                key={`${trackIndex}-${imageUrl}`}
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt=""
                  className="h-70 w-100 object-cover sm:h-80 sm:w-120 lg:h-90 lg:w-140"
                  src={imageUrl}
                  onError={trackIndex === 0 ? handleImageSettled : undefined}
                  onLoad={trackIndex === 0 ? handleImageSettled : undefined}
                />
              </a>
            ))}
          </div>
        ))}
      </div>

      {!isReady && (
        <div className="absolute inset-8 animate-pulse rounded-2xl border border-sky-200/10 bg-sky-300/10" />
      )}
    </section>
  );
}
