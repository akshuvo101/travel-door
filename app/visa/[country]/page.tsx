import Link from "next/link";

export default async function VisaDetail({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const name = country
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="simple-page">
      <div className="container narrow">
        <span className="eyebrow">VISA ASSISTANCE</span>
        <h1>{name}</h1>
        <p>
          Get documentation and application preparation guidance for your
          journey. Visa approval is subject to the relevant embassy or
          immigration authority.
        </p>
        <h2>Typical preparation areas</h2>
        <ul className="bullet-list">
          <li>Passport and personal information</li>
          <li>Travel itinerary and supporting documents</li>
          <li>Financial and employment documents where applicable</li>
          <li>Application preparation and submission guidance</li>
        </ul>
        <Link className="page-cta" href="/inquiry">
          Ask about {name} visa support <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
