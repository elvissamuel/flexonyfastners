"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us", cta: true },
];

export default function SiteNav({
  transparentHero = false,
}: {
  transparentHero?: boolean;
}) {
  const [scrolled, setScrolled] = useState(!transparentHero);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!transparentHero) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentHero]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navClass = [
    "home-nav",
    scrolled || !transparentHero ? "is-scrolled" : "",
    !transparentHero ? "is-solid" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <nav className={navClass}>
        <div className="home-container home-nav-inner">
          <Link href="/" className="home-nav-logo">
            <img
              className="home-nav-logo-img"
              src="/assets/imgs/flexony-logo-trans2.png"
              alt="Flexony Fasteners"
            />
          </Link>

          <ul className="home-nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={link.cta ? "home-nav-cta" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="home-nav-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        </div>
      </nav>

      <div className={`home-nav-mobile${menuOpen ? " is-open" : ""}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
