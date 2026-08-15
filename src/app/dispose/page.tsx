'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';

const disposalServices = [
  {
    title: 'Off-Market Asset Sales',
    text: 'Access to global buyers and institutional capital across Africa, Europe, US, and Middle East.',
  },
  {
    title: 'Real Estate Fund Exits',
    text: 'Partnered strategies for exiting REPE structures, co-investments, or joint ventures.',
  },
  {
    title: 'Portfolio Restructuring',
    text: 'Divest underperforming or non-core holdings to optimize balance sheets.',
  },
  {
    title: 'Developer Buyouts',
    text: 'Exit partially developed or value-stalled projects through our developer and fund network.',
  },
  {
    title: 'Distressed Asset Strategy',
    text: 'Support in repositioning or disposing of distressed or encumbered assets with compliance and financial integrity.',
  },
];

const clients = [
  'HNWI and Family Offices',
  'Private Equity & Real Estate Funds',
  'Sovereign Wealth Vehicles',
  'Institutional Asset Managers',
  'Developers & Project Sponsors',
];

const advantages = [
  {
    title: 'Global Access to Capital',
    text: 'Tap into buyers and funds actively acquiring cross-border assets.',
  },
  {
    title: 'Discreet & Structured Process',
    text: 'Full lifecycle support - from valuation and advisory to documentation and negotiations.',
  },
  {
    title: 'Reciprocal Capital Loop',
    text: 'Every asset disposed through us is an opportunity to reinvest back into high-growth African markets.',
  },
];

const propertyTypes = [
  'Farm Land',
  'Fuel Station',
  'Healthcare',
  'Hotel & Hospitality',
  'Multi-Family',
  'Office',
  'Restaurant',
  'Retail',
  'Warehouse',
];

function Accordion({
  title,
  children,
  open,
  onToggle,
}: {
  title: string;
  children: ReactNode;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-[#333333]/15 py-5 last:border-b">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-5 text-left text-xl font-semibold text-[#222222]"
      >
        <span>{title}</span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#333333]/20 text-2xl font-normal leading-none text-[#333333] transition-transform duration-300 ease-out ${open ? 'rotate-45' : ''}`} aria-hidden>
          +
        </span>
      </button>
      <div
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className={`max-w-3xl pt-4 text-base leading-8 text-[#475569] transition-opacity duration-200 ease-out ${open ? 'opacity-100' : 'opacity-0'}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DisposePage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection((current) => (current === title ? null : title));
  };

  return (
    <main className="min-h-screen bg-white text-[#333333]">
      <div className="w-full bg-white p-4 sm:p-6 lg:p-8">
        <SiteHeader />

        <section className="grid gap-10 py-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-20">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Property | Dispose</p>
            <h1 className="mt-4 max-w-2xl text-5xl font-semibold tracking-[-0.05em] text-[#222222] sm:text-6xl">
              Unlock Value. Free Up Capital. Reposition Strategically.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#475569]">
              At <strong className="text-[#333333]">Avinell</strong>, we help high-net-worth individuals, family
              offices, and institutions dispose of real estate and related holdings with precision, confidentiality,
              and strategic alignment.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#475569]">
              Disposing of an asset isn&apos;t just about sale - it&apos;s about <strong className="text-[#333333]">timing,
              optics, capital recovery, and repositioning for growth</strong>. Whether you&apos;re preparing for
              reinvestment, reducing exposure, or shifting geographies, we guide every step with discretion and
              expertise.
            </p>
            <a
              href="#disposal-request"
              className="mt-8 inline-flex rounded-full bg-[#ffd500] px-6 py-3.5 text-sm font-semibold text-[#333333] shadow-[0_10px_28px_rgba(255,213,0,0.24)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start a Disposal Conversation
            </a>
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-[24px] bg-[#333333] lg:min-h-[560px]">
            <Image
              src="/images/downloaded-commercial-construction.jpg"
              alt="Avinell disposal and capital advisory services"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,51,51,0.05),rgba(51,51,51,0.6))]" />
            <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#333333]">
              Strategic disposal
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-[18px] bg-white/95 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-[#64748b]">Positioning matters</p>
              <p className="mt-2 text-lg font-medium leading-7 text-[#333333]">
                A measured exit can create the next opportunity for capital.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 border-t border-black/10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Our approach</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#222222]">Disposal with strategic alignment</h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[#475569]">
              We bring market intelligence, buyer access, and disciplined execution together so an asset can be
              repositioned with clarity and discretion.
            </p>
          </div>

          <div>
            <Accordion title="Our Disposal Services Include" open={openSection === 'Our Disposal Services Include'} onToggle={() => toggleSection('Our Disposal Services Include')}>
              <ul className="space-y-4">
                {disposalServices.map((service) => (
                  <li key={service.title}>
                    <strong className="text-[#333333]">{service.title}:</strong> {service.text}
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion title="Who We Work With" open={openSection === 'Who We Work With'} onToggle={() => toggleSection('Who We Work With')}>
              <ul className="list-disc space-y-3 pl-5">
                {clients.map((client) => <li key={client}>{client}</li>)}
              </ul>
            </Accordion>
            <Accordion title="The Avinell Advantage" open={openSection === 'The Avinell Advantage'} onToggle={() => toggleSection('The Avinell Advantage')}>
              <ul className="space-y-4">
                {advantages.map((advantage) => (
                  <li key={advantage.title}>
                    <strong className="text-[#333333]">{advantage.title}:</strong> {advantage.text}
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>
        </section>

        <section id="disposal-request" className="border-t border-black/10 py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Next step</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#222222]">Looking to Dispose of an Asset or Stake?</h2>
              <p className="mt-5 max-w-md text-base leading-8 text-[#475569]">
                Let&apos;s evaluate it together. We will assess market appetite, advise on positioning, and tap into our
                partner channels to ensure the right outcome.
              </p>
              <a
                href="mailto:hello@avinellcantagali.com?subject=Asset%20Disposal%20Request"
                className="mt-6 inline-flex rounded-full bg-[#ffd500] px-6 py-3.5 text-sm font-semibold text-[#333333] shadow-[0_10px_28px_rgba(255,213,0,0.2)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Discuss Your Asset
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Have a property you need disposed?</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {propertyTypes.map((propertyType) => (
                  <a
                    key={propertyType}
                    href={`mailto:hello@avinellcantagali.com?subject=${encodeURIComponent(`${propertyType} Disposal Form`)}`}
                    className="group flex items-center justify-between rounded-[18px] border border-black/10 bg-[#f7f8f9] px-4 py-4 text-sm font-semibold text-[#333333] transition-colors duration-200 hover:bg-[#333333] hover:text-white"
                  >
                    <span>{propertyType} form</span>
                    <span className="text-lg transition-transform duration-200 group-hover:translate-x-1" aria-hidden>→</span>
                  </a>
                ))}
              </div>
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
