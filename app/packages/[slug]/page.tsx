import Link from "next/link";
import { notFound } from "next/navigation";
import { packages } from "../../../lib/data/packages";

export default async function PackageDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const travelPackage = packages.find((item) => item.slug === slug);

  if (!travelPackage) notFound();

  return (
    <main className="simple-page">
      <div className="container narrow">
        <span className="eyebrow">{travelPackage.destination}</span>
        <h1>{travelPackage.title}</h1>
        <img
          className="detail-image"
          src={travelPackage.image}
          alt={travelPackage.title}
        />
        <div className="detail-meta">
          <strong>৳ {travelPackage.price.toLocaleString("en-BD")}</strong>
          <span>{travelPackage.duration}</span>
        </div>
        <p>{travelPackage.description}</p>
        <h2>What can be included</h2>
        <p>
          Accommodation, travel arrangements and selected itinerary items can
          be tailored to your final package.
        </p>
        <Link className="page-cta" href="/inquiry">
          Enquire about this package <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
