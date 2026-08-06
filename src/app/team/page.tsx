'use client';

import { useState } from 'react';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';

const divisions = [
  {
    title: 'Capital Structuring',
    role: 'Director of Capital Strategy.',
    description: 'Leads capital deployment, capital raising design, and investor alignment.',
    email: 'capital@avinell.com',
  },
  {
    title: 'Real Estate Investment',
    role: 'Head of Real Estate & Deployment',
    description: 'Manages sourcing, underwriting, and REPE strategy via partners',
    email: 'investment@avinell.com',
  },
  {
    title: 'Legal & Regulatory Advisory',
    role: 'Legal Structuring Lead',
    description: 'Coordinates legal, tax, compliance and diligence experts',
    email: 'legal@avinell.com',
  },
  {
    title: 'Fundraising & Exits',
    role: 'Capital Markets & IR',
    description: 'Engages with global capital sources, structures exit strategies',
    email: 'raise@avinell.com',
  },
  {
    title: 'Governance & Compliance',
    role: 'Governance & Ethics Chair',
    description: 'Oversees principle enforcement, pledges, and ethical practice',
    email: 'governance@avinell.com',
  },
  {
    title: 'Impact & Research',
    role: 'Director of Intelligence',
    description: 'Tracks African capital performance, publishes briefs & insights',
    email: 'research@avinell.com',
  },
  {
    title: 'Partnerships & Platform',
    role: 'Partner Success & Ops Lead',
    description: 'Onboards suppliers, manages collaboration & integration',
    email: 'partners@avinell.com',
  },
];

function DivisionAccordion({
  division,
  open,
  onToggle,
}: {
  division: (typeof divisions)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#333333]/15">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-5 py-5 text-left transition-colors duration-200 hover:bg-[#f7f8f9]"
      >
        <span className="text-lg font-medium text-[#222222]">{division.title}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center text-2xl font-light leading-none text-[#333333] transition-transform duration-300 ease-out ${open ? 'rotate-45' : ''}`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className={`pb-5 pr-10 text-base leading-7 text-[#475569] transition-opacity duration-200 ease-out ${open ? 'opacity-100' : 'opacity-0'}`}>
            <p>
              <strong className="font-semibold text-[#333333]">Role/Title</strong>
              <br />
              {division.role}
            </p>
            <p className="mt-3">
              <strong className="font-semibold text-[#333333]">Description</strong>
              <br />
              {division.description}
            </p>
            <p className="mt-3">
              <strong className="font-semibold text-[#333333]">Contact</strong>
              <br />
              <a className="text-[#64748b] underline decoration-[#ffd500] decoration-2 underline-offset-4 hover:text-[#333333]" href={`mailto:${division.email}`}>
                {division.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const [openDivision, setOpenDivision] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white text-[#333333]">
      <div className="w-full bg-white p-4 sm:p-6 lg:p-8">
        <SiteHeader />

        <section className="grid gap-10 py-12 lg:min-h-[calc(100vh-140px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-16">
          <div className="flex min-h-0 flex-col">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Our Team</p>
              <h1 className="mt-4 max-w-2xl text-5xl font-semibold tracking-[-0.05em] text-[#222222] sm:text-6xl">
                A lean, global structure built around trust.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#475569]">
                We operate with a lean, global structure - led by strategic leadership and powered by a trusted
                network of institutional partners, expert advisors, and sector specialists.
              </p>
            </div>

            <div className="mt-12 min-h-0 lg:flex lg:flex-1 lg:flex-col">
              <div className="mb-3 flex items-end justify-between gap-4">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#222222]">Our Core Divisions</h2>
                <span className="text-xs uppercase tracking-[0.2em] text-[#64748b]">Explore</span>
              </div>
              <div className="border-t border-[#333333]/15 lg:overflow-y-auto lg:pr-3">
                {divisions.map((division) => (
                  <DivisionAccordion
                    key={division.title}
                    division={division}
                    open={openDivision === division.title}
                    onToggle={() =>
                      setOpenDivision((current) => (current === division.title ? null : division.title))
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[480px] overflow-hidden rounded-[24px] bg-[#333333] lg:min-h-0">
            <Image
              src="/images/Advisory.jpg"
              alt="Avinell team advisory environment"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,51,51,0.04),rgba(51,51,51,0.62))]" />
            <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#333333]">
              Avinell x Cantagali
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-[18px] bg-white/95 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-[#64748b]">One connected platform</p>
              <p className="mt-2 text-lg font-medium leading-7 text-[#333333]">
                Strategic leadership supported by the right specialists for every capital mandate.
              </p>
            </div>
          </div>
        </section>

        <footer className="border-t border-black/10 pt-6 text-sm text-[#64748b]">
          CRE Advisory Firm - AvinellCantagali
        </footer>
      </div>
    </main>
  );
}
