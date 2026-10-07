const steps = [["01","Tell Us Your Plan"],["02","Choose Your Destination"],["03","Get Your Travel Plan"],["04","Start Your Journey"]];

export default function HowItWorks() {
  return <section className="section soft"><div className="container"><div className="center-head"><span className="eyebrow">HOW IT WORKS</span><h2>A simpler way to plan your trip</h2></div><div className="steps">{steps.map(([n,t]) => <div className="step" key={n}><span>{n}</span><h3>{t}</h3><p>Our team helps you move to the next step with clear guidance.</p></div>)}</div></div></section>;
}