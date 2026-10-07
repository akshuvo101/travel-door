import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock3, MapPin } from "lucide-react";
import { packages } from "../../lib/data/packages";

export default function FeaturedPackages() {
  return (
    <section className="section packages-premium">
      <div className="container">
        {/* Section Header */}
        <div className="section-head packages-section-head">
          <div>
            <span className="eyebrow">CURATED FOR YOU</span>

            <h2>Journeys worth taking.</h2>

            <p className="section-lead">
              Discover carefully selected travel experiences designed to make
              your next journey unforgettable.
            </p>
          </div>

          <Link href="/packages" className="text-link packages-view-all">
            <span>View all packages</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Package Grid */}
        <div className="package-grid package-grid-premium">
          {packages.map((pkg, index) => (
            <article
              className="package-card package-premium"
              key={pkg.slug}
            >
              {/* Image */}
              <Link
                href={`/packages/${pkg.slug}`}
                className="package-image"
                aria-label={`View ${pkg.title} package`}
              >
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="package-overlay" />

                <span className="package-label">
                  {index === 0 ? "BEST SELLER" : "FEATURED"}
                </span>

                <div className="package-location">
                  <MapPin size={13} />
                  <span>{pkg.destination}</span>
                </div>

                <span className="package-image-arrow">
                  <ArrowRight size={17} />
                </span>
              </Link>

              {/* Content */}
              <div className="package-body">
                <span className="package-destination">
                  {pkg.destination}
                </span>

                <h3>{pkg.title}</h3>

                <p className="package-description">
                  {pkg.description}
                </p>

                <div className="package-divider" />

                <div className="package-meta">
                  <span className="package-duration">
                    <Clock3 size={15} />
                    <span>{pkg.duration}</span>
                  </span>

                  <div className="package-price">
                    <small>From</small>
                    <strong>
                      ৳ {pkg.price.toLocaleString("en-BD")}
                    </strong>
                  </div>
                </div>

                <Link
                  href={`/packages/${pkg.slug}`}
                  className="package-btn"
                >
                  <span>View itinerary</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}