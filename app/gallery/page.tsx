import Link from "next/link";
import type { Metadata } from "next";
import PageIntro from "../../components/pages/PageIntro";
import GalleryShowcase from "../../components/pages/GalleryShowcase";
import { destinations } from "../../lib/data/destinations";

export const metadata: Metadata = {
  title: "Travel Inspiration Gallery | Travel Door Ltd.",
  description:
    "Explore travel inspiration from Thailand, Dubai, Malaysia, Maldives, Singapore and Türkiye.",
};

const galleryImages = destinations.map((destination) => ({
  src: destination.image,
  alt: `${destination.name} travel inspiration`,
  location: destination.country,
}));

export default function Gallery() {
  return (
    <main className="simple-page interior-page gallery-page">
      <div className="container">
        <PageIntro
          eyebrow="TRAVEL INSPIRATION"
          title="Take a closer look at places to explore."
          description="A visual collection of destinations to spark ideas for your next journey. Select a photograph to view it up close."
        />
        <GalleryShowcase images={galleryImages} />
        <div className="gallery-bottom-note">
          <span>Have a destination in mind?</span>
          <Link href="/inquiry">
            Start planning your trip <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
