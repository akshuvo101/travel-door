import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations } from "../../../lib/data/destinations";

export default async function DestinationDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) notFound();

  return (
    <main className="simple-page">
      <div className="container narrow">
        <span className="eyebrow">{destination.country}</span>
        <h1>{destination.name}</h1>
        <p>{destination.tagline}</p>
        <img
          className="detail-image"
          src={destination.image}
          alt={`${destination.name} travel destination`}
        />
        <h2>Plan your {destination.name} trip</h2>
        <p>
          Tell us what kind of experience you have in mind. Our team can help
          you explore travel options and prepare a plan that suits your journey.
        </p>
        <Link className="page-cta" href="/inquiry">
          Plan a trip to {destination.name} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
