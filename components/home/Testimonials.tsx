const testimonials = [
  ["Customer Story", "The travel planning process felt much easier because everything was explained clearly and the team was responsive."],
  ["Family Traveler", "A clean, helpful travel experience with support from planning through the final arrangements."],
  ["International Traveler", "The team helped us understand the travel requirements and organize our trip confidently."]
];

export default function Testimonials() {
  return <section className="section"><div className="container"><div className="center-head"><span className="eyebrow">TRAVELER STORIES</span><h2>What Our Travelers Say</h2></div><div className="testimonial-grid">{testimonials.map(([name,text]) => <div className="testimonial" key={name}><div className="stars">★★★★★</div><p>“{text}”</p><strong>{name}</strong><small>Travel Door customer</small></div>)}</div></div></section>;
}