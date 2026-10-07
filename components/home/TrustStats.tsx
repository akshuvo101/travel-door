const stats = [
  ["10+", "Years of Experience"],
  ["1000+", "Happy Travelers"],
  ["20+", "Destinations"],
  ["24/7", "Travel Support"]
];

export default function TrustStats() {
  return <section className="stats"><div className="container stats-grid">{stats.map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></section>;
}