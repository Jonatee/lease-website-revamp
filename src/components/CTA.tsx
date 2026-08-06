'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="avinell-container text-center">
        <h2 className="text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
          Ready to Bridge Capital?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Let&apos;s discuss your investment objectives and how we can help you access premium opportunities across Africa and beyond.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact-us" className="btn btn-primary">
            Book a Consultation
          </Link>
          <Link href="/what-we-do" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
            Explore Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
}
