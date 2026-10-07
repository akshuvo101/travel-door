import { BadgeCheck, Headphones, HeartHandshake, Sparkles } from "lucide-react";

const items = [
  [BadgeCheck, "Trusted Support", "Get reliable assistance throughout your travel planning."],
  [Sparkles, "Personalized Planning", "Build a trip around your destination, schedule and budget."],
  [HeartHandshake, "Travel Guidance", "Get practical guidance for documentation and travel preparation."],
  [Headphones, "Responsive Service", "Talk to our team when you need help with your journey."]
];

export default function WhyChooseUs() {
  return <section className="section dark-section"><div className="container why-grid"><div><span className="eyebrow light">WHY TRAVEL DOOR</span><h2>Travel with confidence, from planning to departure.</h2><p>We bring travel services together so Bangladeshi travelers can plan international journeys with greater clarity and support.</p><a className="btn btn-primary" href="/about">About Travel Door</a></div><div className="why-items">{items.map(([Icon, title, text]) => <div key={title as string}><div className="why-icon"><Icon size={19}/></div><div><h3>{title as string}</h3><p>{text as string}</p></div></div>)}</div></div></section>;
}