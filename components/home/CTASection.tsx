import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  return <section className="final-cta"><div className="container final-cta-inner"><div><span className="eyebrow light">READY TO TRAVEL?</span><h2>Tell us where you want to go.</h2><p>We’ll help you turn your travel plan into a clear next step.</p></div><div className="hero-actions"><Link href="/inquiry" className="btn btn-white">Get a Travel Quote <ArrowRight size={18}/></Link><a href="#" className="btn btn-outline-light"><MessageCircle size={18}/> Talk to Us</a></div></div></section>;
}