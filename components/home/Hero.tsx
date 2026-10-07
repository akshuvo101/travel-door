"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=75",
    alt: "Mountain landscape and travel destination",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=75",
    alt: "Tropical beach destination",
  },
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=75",
    alt: "Dubai city skyline",
  },
  {
    src: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1920&q=75",
    alt: "Thailand travel destination",
  },
  {
    src: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1920&q=75",
    alt: "Singapore city skyline",
  },
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const [outgoingImage, setOutgoingImage] = useState<number | null>(null);
  const activeImageRef = useRef(0);
  const transitionTimerRef = useRef<number | null>(null);

  const showImage = useCallback((nextImage: number) => {
    if (nextImage === activeImageRef.current) return;

    setOutgoingImage(activeImageRef.current);
    activeImageRef.current = nextImage;
    setActiveImage(nextImage);

    if (transitionTimerRef.current !== null) {
      window.clearTimeout(transitionTimerRef.current);
    }

    transitionTimerRef.current = window.setTimeout(() => {
      setOutgoingImage(null);
      transitionTimerRef.current = null;
    }, 1400);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const interval = window.setInterval(() => {
      showImage((activeImageRef.current + 1) % heroImages.length);
    }, 5500);

    return () => {
      window.clearInterval(interval);
      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, [showImage]);

  return (
    <section className="hero hero-premium">
      {/* Background Slideshow */}
      <div className="hero-slideshow" aria-hidden="true">
        {heroImages.map((image, index) => {
          if (index !== activeImage && index !== outgoingImage) return null;

          return (
            <div
              key={image.src}
              className={`hero-slide ${
                index === activeImage ? "hero-slide-active" : ""
              }`}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="100vw"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </div>
          );
        })}
      </div>

      {/* Cinematic Overlays */}
      <div className="hero-overlay" />
      <div className="hero-overlay-bottom" />
      <div className="hero-glow" />

      {/* Main Content */}
      <div className="container hero-content">
        <div className="hero-copy">
          {/* Eyebrow */}
          <div className="hero-badge">
            <span className="pulse-dot" />
            <span>Travel beyond boundaries</span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            The world is
            <br />
            <span>waiting for you.</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Discover unforgettable destinations with trusted travel support
            from Bangladesh — from international flights and visa assistance
            to carefully planned holiday experiences.
          </p>

          {/* Actions */}
          <div className="hero-actions">
            <Link href="/inquiry" className="btn btn-primary">
              Plan Your Trip
              <ArrowRight size={18} />
            </Link>

            <Link href="/contact" className="btn btn-glass">
              <MessageCircle size={17} />
              Talk to an Expert
            </Link>
          </div>

          {/* Features */}
          <div className="hero-mini">
            <div>
              <CheckCircle2 size={17} />
              <span>International Flights</span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>Visa Assistance</span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>Holiday Packages</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Information */}
      <div className="hero-bottom">
        <div className="container hero-bottom-inner">
          <div className="hero-bottom-left">
            <span className="hero-bottom-label">
              EXPLORE THE WORLD
            </span>

            <div className="hero-slide-counter">
              <strong>
                {String(activeImage + 1).padStart(2, "0")}
              </strong>

              <span>/</span>

              <small>
                {String(heroImages.length).padStart(2, "0")}
              </small>
            </div>
          </div>

          <div className="hero-dots">
            {heroImages.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show travel image ${index + 1}`}
                aria-pressed={index === activeImage}
                className={`hero-dot ${
                  index === activeImage ? "active" : ""
                }`}
                onClick={() => showImage(index)}
              />
            ))}
          </div>

          <div className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </section>
  );
}