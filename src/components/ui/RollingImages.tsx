import { useEffect, useMemo, useState } from "react";

type RollingImagesData = {
  images?: unknown;
};

const visibleImageLimit = 15;

const fallbackImages = [
  "https://images.pexels.com/photos/32475280/pexels-photo-32475280/free-photo-of-vibrant-pink-roses-blooming-in-lush-garden.jpeg",
  "https://images.pexels.com/photos/32357594/pexels-photo-32357594/free-photo-of-airplane-mid-flight-against-clear-sky.jpeg",
  "https://images.pexels.com/photos/32357589/pexels-photo-32357589/free-photo-of-commercial-airplane-landing-on-runway.jpeg",
  "https://images.pexels.com/photos/32357549/pexels-photo-32357549/free-photo-of-j-air-plane-in-flight-against-clear-sky.jpeg",
  "https://images.pexels.com/photos/32357588/pexels-photo-32357588/free-photo-of-ana-connection-jet-airliner-in-flight-against-blue-sky.jpeg",
  "https://images.pexels.com/photos/32244716/pexels-photo-32244716/free-photo-of-gray-herons-nesting-on-tranquil-lake.jpeg",
  "https://images.pexels.com/photos/32244712/pexels-photo-32244712/free-photo-of-traditional-chinese-garden-architecture-with-curved-roofs.jpeg",
  "https://images.pexels.com/photos/32244705/pexels-photo-32244705/free-photo-of-vibrant-pink-water-lily-on-pond-surface.jpeg",
  "https://images.pexels.com/photos/32244704/pexels-photo-32244704/free-photo-of-vibrant-yellow-flowers-with-raindrops-and-bee.jpeg",
  "https://images.pexels.com/photos/32244701/pexels-photo-32244701/free-photo-of-great-blue-heron-observing-calm-lakeside-scene.jpeg",
];

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
  const [images, setImages] = useState<string[]>(fallbackImages);
  const [loadedImageCount, setLoadedImageCount] = useState(0);
  const visibleImages = useMemo(
    () => images.slice(0, visibleImageLimit),
    [images],
  );
  const isReady =
    visibleImages.length > 0 && loadedImageCount >= visibleImages.length;

  useEffect(() => {
    let isMounted = true;

    async function loadImages() {
      try {
        const response = await fetch(
          `/data/rolling-images.json?refresh=${Date.now()}`,
          { cache: "no-store" },
        );

        if (!response.ok) {
          throw new Error(`Unable to load rolling images: ${response.status}`);
        }

        const data = (await response.json()) as RollingImagesData;
        const nextImages = Array.isArray(data.images)
          ? data.images.filter(
              (image): image is string => typeof image === "string",
            )
          : [];

        if (isMounted && nextImages.length > 0) {
          setLoadedImageCount(0);
          setImages(nextImages);
        }
      } catch {
        // Keep the last-resort preview visible until AWS data is available again.
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

  return (
    <section
      aria-label="Photo gallery"
      className="rolling-images group relative overflow-hidden rounded-3xl border border-sky-200/10 bg-[rgb(3_25_48/0.78)] px-0 py-8 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)] sm:py-10"
    >
      <div
        className={`flex w-max transition-opacity duration-500 ${
          isReady ? "rolling-images-track opacity-100" : "opacity-0"
        }`}
      >
        {[0, 1].map((trackIndex) => (
          <div className="flex shrink-0 gap-8 pr-8" key={trackIndex}>
            {visibleImages.map((imageUrl) => (
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
