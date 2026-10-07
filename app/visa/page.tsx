import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, FileText, ShieldCheck } from "lucide-react";
import PageIntro from "../../components/pages/PageIntro";
import { visaServices } from "../../lib/data/visa";

export const metadata: Metadata = {
  title: "Visa Assistance | Travel Door Ltd.",
  description:
    "Explore visa preparation guidance for selected destinations. Always confirm current requirements with the relevant embassy or immigration authority.",
};

function toSlug(country: string) {
  return country.toLowerCase().replaceAll(" ", "-");
}

export default function VisaPage() {
  return (
    <main className="simple-page interior-page visa-page">
      <div className="container">
        <PageIntro
          eyebrow="VISA ASSISTANCE"
          title="Get your travel documents in order, one step at a time."
          description="Explore preparation guidance for selected destinations. Requirements differ by traveler and can change, so always confirm current rules with the relevant embassy or authority."
        />

        <div className="visa-intro-strip">
          <span className="visa-intro-icon" aria-hidden="true">
            <ShieldCheck size={22} />
          </span>
          <p>
            Travel Door can help you prepare and understand the process. Visa
            decisions are made only by the relevant embassy or immigration
            authority.
          </p>
        </div>

        <div className="visa-catalog-grid">
          {visaServices.map((visa, index) => (
            <Link
              className="visa-catalog-card"
              href={`/visa/${toSlug(visa.country)}`}
              key={visa.country}
            >
              <span className="visa-card-top">
                <span className="visa-card-icon">
                  {index % 2 === 0 ? (
                    <FileText size={19} />
                  ) : (
                    <BadgeCheck size={19} />
                  )}
                </span>
                <span className="visa-card-type">{visa.type}</span>
              </span>
              <strong>{visa.country}</strong>
              <span className="visa-card-note">{visa.note}</span>
              <span className="visa-card-link">
                Explore guidance <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>

        <section className="visa-process" aria-labelledby="visa-process-title">
          <div>
            <span className="section-eyebrow">A CLEARER START</span>
            <h2 id="visa-process-title">How we can support your preparation</h2>
          </div>
          <div className="visa-process-steps">
            <article>
              <span>01</span>
              <h3>Share your destination</h3>
              <p>Tell us where you plan to travel and when.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Review your preparation</h3>
              <p>Discuss the documents and application steps to check.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Confirm official requirements</h3>
              <p>Verify current rules with the relevant authority.</p>
            </article>
          </div>
        </section>

        <div className="interior-cta">
          <div>
            <span className="section-eyebrow">NEED DESTINATION-SPECIFIC HELP?</span>
            <h2>Talk through your visa preparation.</h2>
          </div>
          <Link href="/inquiry" className="interior-cta-button">
            Ask for guidance <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </main>
  );
}
