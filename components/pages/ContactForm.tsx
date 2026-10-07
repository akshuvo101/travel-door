"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("Please complete each field before continuing.");
      return;
    }

    const subject = encodeURIComponent(`Travel inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nTravel plans:\n${message}`,
    );

    setStatus("Opening your email app with your message ready to send.");
    window.location.href = `mailto:info@traveldoorbd.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form contact-form-premium" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <span className="contact-form-icon" aria-hidden="true">
          <Mail size={19} />
        </span>
        <div>
          <h2>Send us a message</h2>
          <p>Tell us what you have in mind and we’ll help you take the next step.</p>
        </div>
      </div>

      <div className="contact-form-fields">
        <label>
          Your name
          <input
            name="name"
            autoComplete="name"
            placeholder="Full name"
            required
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </label>
        <label className="contact-form-message">
          How can we help?
          <textarea
            name="message"
            placeholder="Share your destination, dates or questions..."
            rows={5}
            required
          />
        </label>
      </div>

      <button className="contact-submit" type="submit">
        Prepare message
        <ArrowUpRight size={17} />
      </button>
      <p className="contact-form-note" aria-live="polite">
        {status || "Your default email app will open so you can send your message."}
      </p>
    </form>
  );
}
