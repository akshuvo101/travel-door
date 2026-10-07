"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
  location: string;
};

export default function GalleryShowcase({
  images,
}: {
  images: GalleryImage[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const closeViewer = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      openerRef.current?.focus();
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "Tab") {
        const controls = [
          closeButtonRef.current,
          document.querySelector<HTMLButtonElement>(".gallery-viewer-previous"),
          document.querySelector<HTMLButtonElement>(".gallery-viewer-next"),
        ].filter((control): control is HTMLButtonElement => control !== null);
        const first = controls[0];
        const last = controls[controls.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, closeViewer, showNext, showPrevious]);

  return (
    <>
      <div className="gallery-mosaic">
        {images.map((image, index) => (
          <button
            className={`gallery-tile gallery-tile-${index + 1}`}
            key={image.src}
            type="button"
            onClick={(event) => {
              openerRef.current = event.currentTarget;
              setActiveIndex(index);
            }}
            aria-label={`View ${image.location} image`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index === 0}
            />
            <span className="gallery-tile-caption">{image.location}</span>
            <span className="gallery-tile-open" aria-hidden="true">
              View image
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="gallery-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${images[activeIndex].location} image viewer`}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeViewer();
          }}
        >
          <button
            ref={closeButtonRef}
            className="gallery-viewer-close"
            type="button"
            onClick={closeViewer}
            aria-label="Close image viewer"
          >
            <X size={22} />
          </button>
          <button
            className="gallery-viewer-arrow gallery-viewer-previous"
            type="button"
            onClick={showPrevious}
            aria-label="Previous image"
          >
            <ArrowLeft size={21} />
          </button>
          <figure className="gallery-viewer-figure">
            <div className="gallery-viewer-image">
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                sizes="(max-width: 900px) 92vw, 82vw"
                priority
              />
            </div>
            <figcaption>{images[activeIndex].location}</figcaption>
          </figure>
          <button
            className="gallery-viewer-arrow gallery-viewer-next"
            type="button"
            onClick={showNext}
            aria-label="Next image"
          >
            <ArrowRight size={21} />
          </button>
        </div>
      )}
    </>
  );
}
