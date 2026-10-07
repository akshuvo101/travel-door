import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Compass, HeartHandshake, Sparkles } from "lucide-react";
import PageIntro from "../../components/pages/PageIntro";

export const metadata: Metadata = {
  title: "About Travel Door Ltd. | International Travel from Bangladesh",
  description:
    "Learn about Travel Door Ltd. and our approach to international travel planning, flight ticketing, visa assistance and holiday experiences.",
};

const principles = [
  {
    icon: Compass,
    title: "A clearer way to plan",
    description:
      "Bring flights, visa guidance and holiday ideas together while you decide what works for your journey.",
  },
  {
    icon: HeartHandshake,
    title: "Support shaped around you",
    description:
      "Start with your destination and priorities, then ask our team for guidance on the next practical step.",
  },
  {
    icon: Sparkles,
    title: "Journeys to look forward to",
    description:
      "A tour package is more than a trip—it can be a collection of moments you will remember.",
  },
];

export default function About() {
  return (
    <main className="simple-page interior-page about-page">
      <div className="container">
        <PageIntro
          eyebrow="ABOUT TRAVEL DOOR"
          title="A thoughtful start to your next journey."
          description="Travel Door Limited brings international travel planning into one place, with flight ticketing, visa assistance and holiday experiences for travelers from Bangladesh."
        />

        <section className="about-story" aria-labelledby="about-story-title">
          <div className="about-story-mark" aria-hidden="true">
            <span>TD</span>
            <i />
          </div>
          <div className="about-story-copy">
            <span className="section-eyebrow">THE TRAVEL DOOR APPROACH</span>
            <h2 id="about-story-title">
              Your plans come first.
            </h2>
            <p>
              Every journey begins with a different idea. Whether you are
              comparing destinations, preparing documents or looking for a
              holiday package, we help make the planning feel more
              straightforward.
            </p>
            <Link className="text-link about-story-link" href="/services">
              Explore how we can help <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="principles-section" aria-labelledby="principles-title">
          <div className="page-section-heading">
            <span className="section-eyebrow">WHAT MATTERS TO US</span>
            <h2 id="principles-title">Travel planning, with care.</h2>
          </div>
          <div className="principles-grid">
            {principles.map(({ icon: Icon, title, description }, index) => (
              <article className="principle-card" key={title}>
                <div className="principle-card-top">
                  <span className="principle-icon">
                    <Icon size={21} />
                  </span>
                  <span className="principle-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="interior-cta">
          <div>
            <span className="section-eyebrow">READY WHEN YOU ARE</span>
            <h2>Let’s make your travel idea a plan.</h2>
          </div>
          <Link href="/inquiry" className="interior-cta-button">
            Start planning <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </main>
  );
}
