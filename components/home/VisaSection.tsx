import Link from "next/link";
import { ArrowRight, FileCheck2 } from "lucide-react";

export default function VisaSection() {
  return (
    <section className="visa-cta">
      <div className="visa-bg"/>
      <div className="container visa-inner">
        <div><span className="eyebrow light">VISA ASSISTANCE</span><h2>Need help preparing for your visa?</h2><p>Get guidance on documentation and application preparation for popular international destinations.</p></div>
        <Link href="/visa" className="btn btn-white">Explore Visa Services <ArrowRight size={18}/></Link>
      </div>
      <div className="visa-badge"><FileCheck2 size={19}/><span>Documentation<br/><strong>Guidance</strong></span></div>
    </section>
  );
}