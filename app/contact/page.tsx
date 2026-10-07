import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import ContactForm from "../../components/pages/ContactForm";
import PageIntro from "../../components/pages/PageIntro";

export const metadata: Metadata = {
  title: "Contact Travel Door Ltd. | Plan Your Trip",
  description:
    "Contact Travel Door Ltd. about international flights, visa assistance, holiday packages or your next travel plan.",
};

export default function Contact() {
  return (
    <main className="simple-page interior-page contact-page">
      <div className="container">
        <PageIntro
          eyebrow="LET’S TALK TRAVEL"
          title="Tell us what you’re dreaming about."
          description="A destination, a date or just an early idea—share what you have in mind and take the next step with Travel Door."
        />

        <div className="contact-layout">
          <aside className="contact-side">
            <div className="contact-side-card">
              <span className="contact-side-icon">
                <Mail size={20} />
              </span>
              <span className="contact-side-label">EMAIL</span>
              <h2>We’re ready to hear from you.</h2>
              <a href="mailto:info@traveldoorbd.com">
                info@traveldoorbd.com <ArrowRight size={15} />
              </a>
            </div>
            <div className="contact-side-note">
              <MessageCircle size={19} />
              <p>
                Prefer to share trip details? Use the travel inquiry form and
                include your destination, dates and the help you need.
              </p>
              <Link href="/inquiry">
                Open trip inquiry <ArrowRight size={15} />
              </Link>
            </div>
          </aside>

          <ContactForm />
        </div>

        <p className="contact-response-note">
          The message form opens your default email app; it does not send or
          store your details on this website.
        </p>
      </div>
    </main>
  );
}
