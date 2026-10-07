import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";

import { destinations } from "../../lib/data/destinations";

export default function PopularDestinations() {
  return (
    <section className="destinations-premium">
      <div className="container">
        {/* Section Header */}
        <div className="destinations-heading">
          <div className="destinations-heading-left">
            <div className="section-eyebrow">
              <Sparkles size={14} />
              <span>EXPLORE THE WORLD</span>
            </div>

            <h2>
              Places worth
              <br />
              <em>discovering.</em>
            </h2>
          </div>

          <div className="destinations-heading-right">
            <p>
              Discover inspiring destinations around the world and find the
              perfect place for your next journey with Travel Door.
            </p>

            <Link
              href="/destinations"
              className="destinations-view-all"
            >
              <span>View all destinations</span>
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* Destination Grid */}
        <div className="destinations-grid-premium">
          {destinations.map((destination, index) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className={`destination-card-premium ${
                index === 0 ? "large" : ""
              }`}
            >
              {/* Image */}
              <div className="destination-image-wrap">
                <Image
                  src={destination.image}
                  alt={`${destination.name}, ${destination.country}`}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
              </div>

              {/* Overlay */}
              <div className="destination-card-overlay" />

              {/* Number */}
              <div className="destination-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Country */}
              <div className="destination-location">
                <MapPin size={13} />
                <span>{destination.country}</span>
              </div>

              {/* Content */}
              <div className="destination-content">
                <h3>{destination.name}</h3>

                <p>{destination.tagline}</p>

                <span className="destination-explore">
                  Explore
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="destinations-bottom">
          <div>
            <span>Not sure where to go?</span>
            <strong>
              Let Travel Door help you plan your journey.
            </strong>
          </div>

          <Link href="/inquiry" className="destination-cta">
            Plan My Journey
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}