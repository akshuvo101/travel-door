import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand footer-brand">TRAVEL<span>DOOR</span><small>Ltd.</small></Link>
          <p className="footer-copy">International flights, visa assistance and holiday planning for travelers from Bangladesh.</p>
          <div>
            <Link className="footer-contact-link" href="/contact">
              Contact our team <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link href="/about">About Us</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/visa">Visa Services</Link>
        </div>

        <div>
          <h4>Services</h4>
          <Link href="/services">Air Ticketing</Link>
          <Link href="/services">Visa Assistance</Link>
          <Link href="/services">Tour Packages</Link>
          <Link href="/services">Hotel Reservation</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p><Mail size={15}/> <a href="mailto:info@traveldoorbd.com">info@traveldoorbd.com</a></p>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Travel Door Ltd.</span>
        <span>Travel information is subject to change.</span>
      </div>
    </footer>
  );
}