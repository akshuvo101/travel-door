import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Globe2,
  Hotel,
  MessageCircle,
  Plane,
  type LucideIcon,
} from "lucide-react";
import PageIntro from "../../components/pages/PageIntro";
import { services } from "../../lib/data/services";

export const metadata: Metadata = {
  title: "Travel Services | Travel Door Ltd.",
  description:
    "Explore flight ticketing, visa assistance, tour packages, hotel reservations and travel planning support from Travel Door Ltd.",
};

const serviceIcons: Record<string, LucideIcon> = {
  Plane,
  BadgeCheck,
  Globe2,
  Hotel,
  MessageCircle,
  BriefcaseBusiness,
};

function toSlug(title: string) {
  return title.toLowerCase().replaceAll(" ", "-");
}

export default function ServicesPage() {
  return (
    <main className="simple-page interior-page services-page">
      <div className="container">
        <PageIntro
          eyebrow="TRAVEL SERVICES"
          title="The details that make a journey easier."
          description="Explore practical travel support, from flights and visa preparation to stays and holiday planning. Choose a service to tell us what you need."
        />

        <div className="service-catalog-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon] ?? Globe2;

            return (
              <article className="service-catalog-card" key={service.title}>
                <div className="service-catalog-top">
                  <span className="service-catalog-icon">
                    <Icon size={21} />
                  </span>
                  <span className="service-catalog-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <Link
                  className="service-catalog-link"
                  href={`/services/${toSlug(service.title)}`}
                  aria-label={`Learn more about ${service.title}`}
                >
                  Explore service <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="interior-cta">
          <div>
            <span className="section-eyebrow">NOT SURE WHERE TO START?</span>
            <h2>Tell us what your trip needs.</h2>
          </div>
          <Link href="/inquiry" className="interior-cta-button">
            Talk to our team <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </main>
  );
}
