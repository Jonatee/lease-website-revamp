'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const heroSlides = [
  {
    src: '/images/downloaded-boardroom.jpg',
    label: 'Capital Advisory',
  },
];

export default function Hero() {
  const currentSlide = useRef(0);

  useEffect(() => {
    if (heroSlides.length <= 1) return;
    const interval = setInterval(() => {
      const prev = document.querySelector('.hero-slide.active');
      const next = document.querySelectorAll('.hero-slide')[currentSlide.current];
      if (prev) prev.classList.remove('active');
      currentSlide.current = (currentSlide.current + 1) % heroSlides.length;
      next.classList.add('active');
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide ${i === 0 ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.src})` }}
          />
        ))}
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-inner">
          <span className="hero-label">{heroSlides[0].label}</span>
          <h1 className="hero-title">
            Capital Advisory for Global Investment Opportunities
          </h1>
          <p className="hero-description">
            Connecting visionary entrepreneurs, family offices, and institutional investors
            to premium real estate and private equity transactions across Africa and beyond.
          </p>
          <div className="hero-actions">
            <Link href="/what-we-do" className="btn btn-primary">
              Explore Opportunities
            </Link>
            <Link href="/contact-us" className="btn btn-secondary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
