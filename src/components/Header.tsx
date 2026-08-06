'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'About', href: '/vision' },
  { label: 'Capabilities', href: '/what-we-do' },
  { label: 'Capital', href: '/acquire-to-lease' },
  { label: 'Insights', href: '/insight' },
  { label: 'Contact', href: '/contact-us' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar-main ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo">
            <img src="/images/Avinell-Cantagali-logo.png" alt="Avinell Cantagali" />
          </Link>

          <nav className="navbar-nav" role="navigation">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="navbar-cta">
            <a href="tel:+1(628) 500-9670" className="navbar-phone">
              +1 (628) 500-9670
            </a>
            <Link href="/contact-us" className="btn btn-primary">
              Book Consultation
            </Link>
            <button
              className="navbar-menu-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu open">
          <button
            className="mobile-menu-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
          <nav>
            <ul className="mobile-menu-nav">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact-us" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
                  Book Consultation
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
