import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, MapPin } from "lucide-react";
import PageIntro from "../../components/pages/PageIntro";
import { destinations } from "../../lib/data/destinations";

export const metadata: Metadata = {
  title: "International Destinations | Travel Door Ltd.",
  description:
    "Explore Thailand, Dubai, Malaysia, Maldives, Singapore and Türkiye, and start planning your next international trip with Travel Door.",
};

export default function DestinationsPage() {
  return (
    <main className="simple-page interior-page destinations-page">
      <div className="container">
        <PageIntro
          eyebrow="DESTINATIONS"
          title="Find a place that feels like your kind of trip."
          description="From lively city breaks to slower days by the sea, explore destination ideas and start shaping your next international journey."
        />

        <div className="destination-catalog-grid">
          {destinations.map((destination, index) => (
            <Link
              className={`destination-catalog-card${index === 0 ? " destination-catalog-featured" : ""}`}
              href={`/destinations/${destination.slug}`}
              key={destination.slug}
              aria-label={`Explore ${destination.name}: ${destination.tagline}`}
            >
              <Image
                src={destination.image}
                alt={`${destination.name}, ${destination.country}`}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority={index === 0}
              />
              <span className="destination-catalog-shade" />
              <span className="destination-catalog-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="destination-catalog-copy">
                <span className="destination-catalog-country">
                  <MapPin size={14} /> {destination.country}
                </span>
                <strong>{destination.name}</strong>
                <span className="destination-catalog-tagline">
                  {destination.tagline}
                </span>
                <span className="destination-catalog-link">
                  Explore destination <ArrowUpRight size={17} />
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="interior-cta">
          <div>
            <span className="section-eyebrow">YOUR NEXT CHAPTER</span>
            <h2>Have somewhere else in mind?</h2>
          </div>
          <Link href="/inquiry" className="interior-cta-button">
            Ask about your destination <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </main>
  );
}
