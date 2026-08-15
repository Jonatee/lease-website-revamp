'use client';

import Link from 'next/link';

export default function About() {
  return (
    <section className="section bg-white">
      <div className="avinell-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-heading)' }}>
              Purpose-Built to Bridge Capital
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Connecting investors, entrepreneurs, and institutions through strategic capital advisory across Africa and global markets.
            </p>
            <Link href="/what-we-do" className="btn btn-dark">
              Learn More
            </Link>
          </div>
          <div>
            <img
              src="/images/downloaded-lagos-aerial.jpg"
              alt="Avinell Advisory"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
