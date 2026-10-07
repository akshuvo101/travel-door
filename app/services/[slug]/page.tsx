import Link from "next/link";

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="simple-page">
      <div className="container narrow">
        <span className="eyebrow">TRAVEL DOOR SERVICE</span>
        <h1>{title}</h1>
        <p>
          Our team can help you understand your options and prepare the
          arrangements for this part of your journey. Share your plans and
          we&apos;ll follow up with relevant guidance.
        </p>
        <Link className="page-cta" href="/inquiry">
          Enquire about {title} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
