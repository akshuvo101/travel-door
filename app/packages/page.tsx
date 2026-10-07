import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Clock3, MapPin } from "lucide-react";
import PageIntro from "../../components/pages/PageIntro";
import { packages } from "../../lib/data/packages";

export const metadata: Metadata = {
  title: "Holiday Tour Packages | Travel Door Ltd.",
  description:
    "Browse holiday package ideas for Thailand, Dubai and Malaysia. Contact Travel Door Ltd. to confirm current details and pricing.",
};

export default function PackagesPage() {
  return (
    <main className="simple-page interior-page packages-page">
      <div className="container">
        <PageIntro
          eyebrow="CURATED TOUR PACKAGES"
          title="A holiday starts with the right idea."
          description="Explore these international holiday ideas, then talk with our team about the details and arrangements that could suit your plans."
        />

        <div className="package-grid package-grid-premium package-catalog-grid">
          {packages.map((travelPackage, index) => (
            <article
              className="package-card package-premium"
              key={travelPackage.slug}
            >
              <Link
                href={`/packages/${travelPackage.slug}`}
                className="package-image"
                aria-label={`View ${travelPackage.title} package`}
              >
                <Image
                  src={travelPackage.image}
                  alt={travelPackage.title}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />
                <span className="package-overlay" />
                <span className="package-label">
                  {index === 0 ? "TRAVEL IDEA" : "HOLIDAY IDEA"}
                </span>
                <span className="package-location">
                  <MapPin size={13} />
                  <span>{travelPackage.destination}</span>
                </span>
                <span className="package-image-arrow" aria-hidden="true">
                  <ArrowRight size={17} />
                </span>
              </Link>

              <div className="package-body">
                <span className="package-destination">
                  {travelPackage.destination}
                </span>
                <h2>{travelPackage.title}</h2>
                <p className="package-description">
                  {travelPackage.description}
                </p>
                <div className="package-divider" />
                <div className="package-meta">
                  <span className="package-duration">
                    <Clock3 size={15} />
                    <span>{travelPackage.duration}</span>
                  </span>
                  <div className="package-price">
                    <small>From</small>
                    <strong>
                      ৳ {travelPackage.price.toLocaleString("en-BD")}
                    </strong>
                  </div>
                </div>
                <Link
                  className="package-btn"
                  href={`/packages/${travelPackage.slug}`}
                >
                  View itinerary <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="package-price-note">
          Package details and pricing can be confirmed with our team before you
          make a decision.
        </p>

        <div className="interior-cta">
          <div>
            <span className="section-eyebrow">MAKE IT YOURS</span>
            <h2>Looking for a different kind of getaway?</h2>
          </div>
          <Link href="/inquiry" className="interior-cta-button">
            Ask about a custom trip <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </main>
  );
}
