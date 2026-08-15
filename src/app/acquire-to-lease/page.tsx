'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type ReactNode } from 'react';
import SiteHeader from '@/components/SiteHeader';

const incomePrinciples = [
  'Capital Preservation + Yield',
  'Lease-Back & Tenanted Assets',
  'Net Operating Income (NOI) Certainty',
  'Cap Rate Arbitrage Across Jurisdictions',
  'Long-Term Cashflow Visibility',
];

const incomeAssets = [
  {
    title: '1. Logistics Warehouses',
    why: 'Demand driven by e-commerce and supply chain reform.',
    focus: 'Long leases (5-15 years), institutional tenants, CPI-linked rent reviews.',
    capRate: '4.75% - 6.5%',
    locations: 'Netherlands, Germany, U.S. Southeast, UK Midlands',
    edge: 'Underwriting tenant covenant risk, lease structuring, and exit planning.',
  },
  {
    title: '2. Fuel Stations & Convenience Retail',
    why: 'Recession-resilient, daily-need real estate with predictable turnover.',
    focus: 'Triple net (NNN) leases and branded operators such as Shell, Total, and BP.',
    capRate: '6.25% - 8.5%',
    locations: 'France, Morocco, Texas, South Africa',
    edge: 'Operator-credit underwriting and environmental due diligence.',
  },
  {
    title: '3. Multifamily / PRS (Private Rented Sector)',
    why: 'Strong occupancy, rental appreciation, and urban migration trends.',
    focus: 'Occupancy rates, unit mix, and market comparables.',
    capRate: '4% - 6.25%',
    locations: 'Berlin, Atlanta, Lisbon, Manchester',
    edge: 'Assessing local rent regulation exposure and building operating models.',
  },
  {
    title: '4. Healthcare & Clinics',
    why: 'Long leases, mission-critical use, and stable insurance-backed or state-funded tenants.',
    focus: '10-20 year leases with indexed rent.',
    capRate: '5.5% - 7%',
    locations: 'France, Kenya, Miami, UAE',
    edge: 'License risk, compliance, and FX hedge review for foreign tenants.',
  },
  {
    title: '5. Supermarkets & Grocery Retail Anchors',
    why: 'High turnover resilience, triple net leases, and strong tenant balance sheets.',
    focus: '10+ year leases with options to extend.',
    capRate: '5% - 7.25%',
    locations: 'UK, Spain, Ghana, Florida',
    edge: 'Lease audit, sales-to-rent ratio analysis, and ESG risk overlay.',
  },
  {
    title: '6. Branded Hotels with Lease/Management Contracts',
    why: 'Fixed lease models reduce volatility, with upside through hybrid structures.',
    focus: 'Net lease versus management contract hybrids and minimum guaranteed rents.',
    capRate: '6% - 8%',
    locations: 'Algarve, Dubai, Caribbean, Southern Italy',
    edge: 'Brand and operator negotiation, tourism income analysis, and seasonality risk adjustment.',
  },
  {
    title: "7. Restaurants & Drive-Thru's",
    why: 'Franchise operator resilience and strong alignment with consumer behavior.',
    focus: 'Franchise covenant, traffic flow analytics, and sales history.',
    capRate: '6.5% - 8.75%',
    locations: 'UK retail parks, Nigerian metro areas, Midwest U.S.',
    edge: 'Franchise diligence, net lease structuring, and brand re-licensing considerations.',
  },
  {
    title: '8. Light Industrial (Flex & Manufacturing)',
    why: 'Essential use, tenant stickiness, and higher yields with lower build cost.',
    focus: 'Modified gross or double net leases.',
    capRate: '6% - 8.5%',
    locations: 'Poland, Georgia (U.S.), Senegal, Midlands UK',
    edge: 'Industrial usage risk assessment, exit viability, and tax/depreciation benefits.',
  },
  {
    title: '9. Agricultural & Farm Land (Leased or Managed Use)',
    why: 'Tangible, inflation-resistant assets with steady income from long-term leases or managed crop and yield operations.',
    focus: 'Fixed ground leases, revenue-share agreements, and carbon-credit or regenerative land leases.',
    capRate: '5.5% - 8.25%',
    locations: 'Zambia, South Africa, Brazil, Romania, Central California',
    edge: 'Soil health, water rights, yield potential, and ESG-linked return optimization.',
  },
];

function Accordion({ title, children, open, onToggle }: { title: string; children: ReactNode; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-t border-black/10 py-5 last:border-b">
      <button type="button" onClick={onToggle} aria-expanded={open} className="flex w-full items-center justify-between gap-5 text-left">
        <span className="text-xl font-semibold tracking-[-0.03em] text-[#222222]">{title}</span>
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15 text-xl transition-transform duration-300 ${open ? 'rotate-45' : ''}`} aria-hidden>+</span>
      </button>
      <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="pt-4 text-sm leading-7 text-[#475569]">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function AcquireToLeasePage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => setOpenSection((current) => current === section ? null : section);

  return (
    <main className="min-h-screen bg-white text-[#333333]">
      <div className="w-full bg-white p-4 sm:p-6 lg:p-8">
        <SiteHeader />

        <section className="mt-8 grid gap-8 rounded-[24px] bg-[#f6f7f7] p-6 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#64748b]">Capital Advisory | Finance</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#222222] sm:text-7xl">Acquire to lease.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#475569]">Long-term yield. Secure tenancies. Structured acquisition. At Avinell, we don&apos;t just source property - we unlock predictable, institutional-grade income from global assets that perform.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#income-acquisition" className="rounded-full bg-[#ffd500] px-6 py-3.5 text-sm font-semibold text-[#333333] shadow-[0_12px_30px_rgba(255,213,0,0.22)] transition-transform duration-200 hover:-translate-y-0.5">Explore income acquisition</a>
              <Link href="/#contact" className="rounded-full border border-black/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#333333] transition-colors duration-200 hover:border-[#333333]/50">Schedule discovery call</Link>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[20px] bg-[#333333] lg:min-h-[500px]">
            <Image src="/images/downloaded-property-investment.jpg" alt="Avinell income-focused property acquisition" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" priority />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,51,51,0.04),rgba(51,51,51,0.72))]" />
            <div className="absolute bottom-5 left-5 right-5 rounded-[18px] bg-white/95 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">Income strategy</p>
              <p className="mt-2 text-lg font-semibold leading-7 text-[#333333]">Predictable cash flow, tenant stability, and defensible yield.</p>
            </div>
          </div>
        </section>

        <section id="income-acquisition" className="mx-auto mt-16 grid max-w-6xl gap-12 scroll-mt-28 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#64748b]">Income-focused real estate acquisition</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#222222]">A measured path to durable income.</h2>
            <p className="mt-5 text-base leading-8 text-[#475569]">Income-based acquisitions prioritize predictable cash flow, tenant stability, and defensible yield. Whether you&apos;re a private client or an institutional investor, our approach is centered around a clear income thesis.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {incomePrinciples.map((principle) => <div key={principle} className="rounded-xl border border-black/10 bg-[#f8f8f6] px-4 py-3 text-sm font-medium text-[#333333]">{principle}</div>)}
            </div>
            <p className="mt-7 text-sm leading-7 text-[#64748b]"><strong className="text-[#333333]">Typical targets:</strong> Net yields of 5-9%, with cap rates of 4.5-8.5% depending on region, asset type, and tenant strength.</p>
          </div>

          <div>
            <Accordion title="What is Income-Focused Real Estate Acquisition?" open={openSection === 'definition'} onToggle={() => toggleSection('definition')}>
              <p>We look beyond a purchase price. Each opportunity is assessed for lease quality, tenant stability, operating income, jurisdictional pricing, and long-term cashflow visibility.</p>
              <p className="mt-4">The result is a structured acquisition thesis built around capital preservation, yield, and the quality of the income stream.</p>
            </Accordion>
            <Accordion title="Asset-by-Asset Income Acquisition Breakdown" open={openSection === 'assets'} onToggle={() => toggleSection('assets')}>
              <div className="space-y-8">
                {incomeAssets.map((asset) => (
                  <article key={asset.title} className="border-b border-black/10 pb-6 last:border-b-0 last:pb-0">
                    <h3 className="text-lg font-semibold text-[#222222]">{asset.title}</h3>
                    <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div><dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748b]">Why</dt><dd className="mt-1">{asset.why}</dd></div>
                      <div><dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748b]">What we look for</dt><dd className="mt-1">{asset.focus}</dd></div>
                      <div><dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748b]">Cap rate range</dt><dd className="mt-1 font-semibold text-[#333333]">{asset.capRate}</dd></div>
                      <div><dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748b]">Ideal locations</dt><dd className="mt-1">{asset.locations}</dd></div>
                      <div className="sm:col-span-2"><dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748b]">Avinell edge</dt><dd className="mt-1">{asset.edge}</dd></div>
                    </dl>
                  </article>
                ))}
              </div>
            </Accordion>
            <Accordion title="Avinell's Income Acquisition Toolkit" open={openSection === 'toolkit'} onToggle={() => toggleSection('toolkit')}>
              <ul className="space-y-4">
                <li><strong className="text-[#333333]">Sourcing:</strong> Access to off-market deals and fund disposal pipelines.</li>
                <li><strong className="text-[#333333]">Research:</strong> Full market comparables, demographic overlays, and rent reviews.</li>
                <li><strong className="text-[#333333]">Negotiation:</strong> Strategic price discovery and transaction structuring.</li>
                <li><strong className="text-[#333333]">Execution:</strong> Local conveyancing, legal, and tax specialists.</li>
                <li><strong className="text-[#333333]">Reporting:</strong> Post-acquisition yield tracking, tenant monitoring, and exit advisory.</li>
              </ul>
            </Accordion>
            <Accordion title="Begin Your Income Strategy With Avinell" open={openSection === 'begin'} onToggle={() => toggleSection('begin')}>
              <p>Schedule a discovery call or submit your yield criteria for a custom acquisition review.</p>
              <p className="mt-4 italic">Let&apos;s define your risk-reward profile and match you to high-performing, tenanted assets aligned to your capital goals.</p>
              <Link href="/#contact" className="mt-5 inline-flex rounded-full bg-[#ffd500] px-5 py-3 text-sm font-semibold text-[#333333]">Submit your yield criteria &rarr;</Link>
            </Accordion>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl rounded-[24px] bg-[#333333] px-6 py-12 text-white sm:px-10 lg:px-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ffd500]">Structured acquisition</p>
          <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Long-term yield starts with the right asset and the right tenant.</h2>
            <Link href="/#contact" className="inline-flex w-fit rounded-full bg-[#ffd500] px-6 py-3.5 text-sm font-semibold text-[#333333]">Talk to Avinell &rarr;</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
