"use client";

import Link from "next/link";
import { Menu, Plane, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Destinations", "/destinations"],
  ["Packages", "/packages"],
  ["Visa", "/visa"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        {/* Brand */}
        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="Travel Door Ltd. Home"
        >
          <span className="brand-mark">
            <Plane size={17} strokeWidth={2.4} />
          </span>

          <span className="brand-name">
            TRAVEL<span>DOOR</span>
            <small>Ltd.</small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link href="/inquiry" className="nav-cta desktop-cta">
          <span>Start Planning</span>
          <ArrowUpRight size={16} strokeWidth={2.2} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={23} strokeWidth={2} />
          ) : (
            <Menu size={23} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        inert={!open}
        className={`mobile-nav ${open ? "mobile-nav-open" : ""}`}
      >
        <div className="mobile-nav-inner">
          {links.map(([label, href], index) => (
            <Link
              key={href}
              href={href}
              className="mobile-nav-link"
              style={{ "--delay": `${index * 45}ms` } as React.CSSProperties}
              onClick={() => setOpen(false)}
            >
              <span>{label}</span>
              <ArrowUpRight size={16} />
            </Link>
          ))}

          <Link
            href="/inquiry"
            className="nav-cta mobile-cta"
            onClick={() => setOpen(false)}
          >
            <span>Start Planning</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </nav>
    </header>
  );
}