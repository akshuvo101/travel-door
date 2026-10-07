import { BadgeCheck, BriefcaseBusiness, Globe2, Hotel, MessageCircle, Plane } from "lucide-react";
import { services } from "../../lib/data/services";


const icons = { Plane, BadgeCheck, Globe2, Hotel, MessageCircle, BriefcaseBusiness };

export default function Services() {
  return (
    <section className="section soft">
      <div className="container">
        <div className="center-head"><span className="eyebrow">WHAT WE OFFER</span><h2>Everything You Need for Your Journey</h2><p>From flight tickets to visa guidance, we help make international travel simpler.</p></div>
        <div className="service-grid">
          {services.map((s) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return <div className="service-card" key={s.title}><div className="service-icon"><Icon size={22}/></div><h3>{s.title}</h3><p>{s.description}</p><span>Learn more →</span></div>;
          })}
        </div>
      </div>
    </section>
  );
}