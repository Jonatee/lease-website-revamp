'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';

const assetExamples = [
  {
    title: '1. Hotels & Hospitality',
    region: 'Portugal, Morocco, Southeast U.S.',
    investment: '$2M - $7M',
    capex: '25%-35% of acquisition price',
    hold: '3-5 years',
    irr: '18%-24%',
    example: 'Boutique hotel in Lisbon acquired for $4.5M, $1.5M renovation, rebranded & sold for $8.9M',
  },
  {
    title: '2. Fuel Stations & Roadside Assets',
    region: 'West Africa, Southern Europe, Midwest U.S.',
    investment: '$1.5M - $3M',
    capex: '15%-25%',
    hold: '2-4 years',
    irr: '16%-20%',
    example: 'Ghana roadside fuel station upgraded with EV, mini-mart added; $2M invested, sold at $3.5M stabilized valuation',
  },
  {
    title: '3. Warehouses & Light Industrial',
    region: 'UK Midlands, Lagos suburbs, U.S. Sunbelt',
    investment: '$3M - $10M',
    capex: '20%-30%',
    hold: '3-6 years',
    irr: '18%-22%',
    example: 'Logistics park repositioned near Birmingham, UK for $6M, $1.2M upgrades, leased to e-com operator, sold for $10.5M',
  },
  {
    title: '4. Office Repositioning (Conversions or Flex)',
    region: 'Paris suburbs, Nairobi CBD, NYC outer boroughs',
    investment: '$2M - $8M',
    capex: '30%-40% (if conversion involved)',
    hold: '3-5 years',
    irr: '18%-25%',
    example: 'Nairobi CBD office bought for $3M, converted to co-working & residential hybrid, sold for $6.9M',
  },
  {
    title: '5. Agricultural / Farm Land (AgriTech / ESG Value)',
    region: 'East Africa, Midwest U.S., Southern Europe',
    investment: '$750K - $2.5M',
    capex: '10%-20% for irrigation, solar, tech',
    hold: '5-8 years',
    irr: '14%-18%',
    example: '100 hectares near Eldoret acquired for $1.2M, smart irrigation and lease to impact operator, sold at $2.8M',
  },
  {
    title: '6. Retail & Neighbourhood Centres',
    region: 'Secondary cities in UK, South Africa, Florida',
    investment: '$1.5M - $4M',
    capex: '15%-25%',
    hold: '3-5 years',
    irr: '17%-21%',
    example: 'Cape Town suburban strip mall re-tenanted with health & beauty, acquired $2.3M, upgraded, sold $4.6M',
  },
  {
    title: '7. Restaurants & Food Retail',
    region: 'Urban corridors in Lagos, Accra, Chicago',
    investment: '$500K - $2M',
    capex: '10%-20%',
    hold: '2-4 years',
    irr: '16%-20%',
    example: 'Standalone restaurant in Accra flipped after leasing to franchise chain with 2x equity multiple',
  },
  {
    title: '8. Healthcare Clinics & Wellness',
    region: 'Nairobi, Birmingham, Houston',
    investment: '$2M - $6M',
    capex: '20%-30% (compliance & outfitting)',
    hold: '4-6 years',
    irr: '18%-22%',
    example: 'Day clinic in Nairobi bought $2.5M, ESG medical tenant installed, stabilized, sold at $5.2M',
  },
  {
    title: '9. Multifamily Residential',
    region: 'London outskirts, Lusaka, Atlanta',
    investment: '$3M - $10M',
    capex: '25%-35%',
    hold: '3-6 years',
    irr: '19%-24%',
    example: '24-unit apartment in Atlanta acquired $4.2M, upgraded interiors and amenities, exited at $8.7M',
  },
];

const deRiskingSteps = [
  'In-depth due diligence & deal underwriting',
  'Access to international planning, legal, and leasing specialists',
  'Development & exit strategy mapped from day one',
  'Localized expertise + global structuring = outperformance',
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
          <div className={`pt-4 text-base leading-8 text-[#475569] transition-opacity duration-200 ease-out ${open ? 'opacity-100' : 'opacity-0'}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AcquirePage() {
  const [openAsset, setOpenAsset] = useState<string | null>(null);

  const toggleAsset = (title: string) => {
    setOpenAsset((current) => (current === title ? null : title));
  };

  return (
    <main className="min-h-screen bg-white text-[#333333]">
      <div className="w-full bg-white p-4 sm:p-6 lg:p-8">
        <SiteHeader />

        <section className="grid gap-10 py-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-20">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Property | Acquire</p>
            <h1 className="mt-4 max-w-2xl text-5xl font-semibold tracking-[-0.05em] text-[#222222] sm:text-6xl">
              Acquire to Develop / Reposition &amp; Sell
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#475569]">
              At Avinell, we specialize in identifying undervalued or underutilized real estate and repositioning it
              for optimal performance. Whether it&apos;s a vacant retail site, an outdated hotel, or raw farmland, our
              team brings the expertise to plan, reimagine, and execute high-impact value-add strategies.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#475569]">
              Through smart capital deployment, strong local insight, and precise asset management, we unlock both
              short-term gains and long-term growth.
            </p>
            <a
              href="#acquisition-criteria"
              className="mt-8 inline-flex rounded-full bg-[#ffd500] px-6 py-3.5 text-sm font-semibold text-[#333333] shadow-[0_10px_28px_rgba(255,213,0,0.24)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Submit Your Acquisition Criteria
            </a>
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-[24px] bg-[#333333] lg:min-h-[560px]">
            <Image
              src="/images/Advisory.jpg"
              alt="Avinell acquisition and real estate repositioning advisory"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,51,51,0.05),rgba(51,51,51,0.68))]" />
            <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#333333]">
              Value-add strategy
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-[18px] bg-white/95 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-[#64748b]">Investment thesis</p>
              <p className="mt-2 text-lg font-medium leading-7 text-[#333333]">
                Acquire with the development plan, repositioning strategy, and exit mapped from day one.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 border-t border-black/10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Value-add acquisition</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#222222]">Where we look for value</h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[#475569]">
              Each example below outlines realistic entry costs, value-add budgets, and exit expectations across nine
              asset types. Open an asset type to review the target regions, hold period, and operating thesis.
            </p>
            <p className="mt-5 max-w-md text-base leading-8 text-[#475569]">
              We bring together local insight, global structuring, and disciplined asset management to turn overlooked
              property into a clear investment proposition.
            </p>
          </div>

          <div>
            {assetExamples.map((asset) => (
              <Accordion key={asset.title} title={asset.title} open={openAsset === asset.title} onToggle={() => toggleAsset(asset.title)}>
                <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">Target region</dt>
                    <dd className="mt-1 text-[#333333]">{asset.region}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">Typical investment size</dt>
                    <dd className="mt-1 text-[#333333]">{asset.investment}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">CapEx budget</dt>
                    <dd className="mt-1 text-[#333333]">{asset.capex}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">Hold period</dt>
                    <dd className="mt-1 text-[#333333]">{asset.hold}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">Gross IRR target</dt>
                    <dd className="mt-1 text-[#333333]">{asset.irr}</dd>
                  </div>
                  <div className="sm:col-span-2 border-t border-[#333333]/10 pt-4">
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">Illustrative example</dt>
                    <dd className="mt-1 text-[#333333]">{asset.example}</dd>
                  </div>
                </dl>
              </Accordion>
            ))}
          </div>
        </section>

        <section id="acquisition-criteria" className="border-t border-black/10 py-12 lg:py-16">
          <div className="rounded-[24px] bg-[#333333] p-7 text-white sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/60">Lets Get to Work</p>
                <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  How We De-Risk and Accelerate Your Outcome
                </h2>
              </div>
              <div>
                <p className="max-w-2xl text-base leading-8 text-white/75">
                  We connect underwriting, planning, legal, leasing, and exit strategy from day one so each acquisition
                  has a clear path from entry to outcome.
                </p>
                <ul className="mt-6 grid gap-3 text-base leading-7 text-white/85 sm:grid-cols-2">
                  {deRiskingSteps.map((step) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ffd500]" aria-hidden />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-white/65">
                We&apos;ll respond with a live opportunity pipeline and recommended next steps - no commitment required.
              </p>
              <a
                href="mailto:hello@avinellcantagali.com?subject=Acquisition%20Criteria"
                className="inline-flex shrink-0 rounded-full bg-[#ffd500] px-6 py-3.5 text-sm font-semibold text-[#333333] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Submit Your Acquisition Criteria &rarr;
              </a>
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
