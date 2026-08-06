'use client';

import { useState } from 'react';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';
import type { ReactNode } from 'react';

const pillars = [
  {
    title: 'Pillar 1: Facilitating Capital Formation for Africa',
    label: 'Ventures',
    challenge: 'African entrepreneurs and businesses often lack access to deep, structured pools of capital.',
    beams: [
      'Custodial infrastructure that allows African assets (land, receivables, commodities, and more) to be held, valued, and used as collateral.',
      'Fund structuring that pools African capital and institutionalizes it for easier fundraising, including SPVs and feeder funds.',
      'Investor credibility tools such as data rooms, third-party audits, and financial reporting to make ventures more attractive to international investors.',
      'Tokenization or fractionalization to lower entry barriers and increase liquidity from diaspora or retail investors.',
    ],
  },
  {
    title: 'Pillar 2: Enabling Trustworthy Capital Deployment Across Borders',
    label: 'Borders',
    challenge: 'Even when capital exists, deploying it into US and EU markets is often blocked or delayed due to compliance concerns.',
    beams: [
      'KYC/AML-grade custodial accounts for African-origin funds to hold capital pre-deployment in recognized institutions.',
      'Provenance tracking using fintech, blockchain, and audit trails to verify source of funds in compliance with global standards.',
      'Dual-jurisdiction compliance desks to ensure both African and destination-market regulators are satisfied.',
      'Integration with global custodians and brokers to provide a clean pipeline for capital outflows.',
    ],
  },
  {
    title: 'Pillar 3: Building a Regulated Bridge Between Markets',
    label: 'Bridge',
    challenge: 'This is the connective tissue between capital seekers and capital deployers.',
    beams: [
      'Regulated financial vehicles domiciled in trust-friendly jurisdictions such as Mauritius, Luxembourg, and Delaware.',
      'Partnerships with Tier-1 financial institutions for credibility and custody.',
      'Transparent reporting systems that build trust with regulators and investors alike.',
    ],
  },
  {
    title: 'Pillar 4: African Capital Sovereignty',
    label: 'Legacy',
    challenge: "This pillar focuses on control, continuity, and legacy for African investors.",
    beams: [
      "Custodial accounts structured to ensure African-origin capital isn't stranded or seized unfairly.",
      'Tools for multi-generational wealth transfer, cross-border inheritance, and estate planning.',
      'Governance frameworks that let Africans remain majority controllers of their capital, even abroad.',
    ],
  },
];

function PillarAccordion({
  title,
  label,
  challenge,
  beams,
  open,
  onToggle,
}: {
  title: string;
  label: string;
  challenge: string;
  beams: string[];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-[#333333]/15 py-5 last:border-b">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-start justify-between gap-5 text-left"
      >
        <span>
          <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[#64748b]">{label}</span>
          <span className="mt-2 block text-xl font-semibold leading-7 text-[#222222]">{title}</span>
        </span>
        <span className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#333333]/20 text-2xl font-normal leading-none text-[#333333] transition-transform duration-300 ease-out ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className={`max-w-3xl pt-5 text-base leading-8 text-[#475569] transition-opacity duration-200 ease-out ${open ? 'opacity-100' : 'opacity-0'}`}>
          <p>
            <strong className="text-[#333333]">Challenge:</strong> {challenge}
          </p>
          <p className="mt-5 font-semibold text-[#333333]">Supporting beams:</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            {beams.map((beam) => (
              <li key={beam}>{beam}</li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceImage() {
  return (
    <div className="relative min-h-[440px] overflow-hidden rounded-[24px] bg-[#333333] lg:sticky lg:top-8 lg:min-h-[calc(100vh-120px)]">
      <Image
        src="/images/Advisory.jpg"
        alt="Avinell capital advisory services"
        fill
        sizes="(min-width: 1024px) 48vw, 100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,51,51,0.05),rgba(51,51,51,0.62))]" />
      <div className="absolute bottom-5 left-5 right-5 rounded-[18px] bg-white/95 p-5">
        <p className="text-sm uppercase tracking-[0.2em] text-[#64748b]">The bridge</p>
        <p className="mt-2 text-lg font-medium leading-7 text-[#333333]">
          Strong, intentional, and regulated, connecting capital with opportunity across continents.
        </p>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">{children}</p>;
}

export default function WhatWeDoPage() {
  const [openPillar, setOpenPillar] = useState<string | null>(pillars[0].title);

  return (
    <main className="min-h-screen bg-white text-[#333333]">
      <div className="w-full bg-white p-4 sm:p-6 lg:p-8">
        <SiteHeader />

        <section className="grid gap-10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
          <div>
            <SectionLabel>What We Do</SectionLabel>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-[#222222] sm:text-6xl">
              A bridge built to move capital with purpose.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#475569]">
              At Avinell, we serve as a bridge - strong, intentional, and regulated - built to connect capital with
              opportunity across continents. Our role is to support institutions, family offices, and high-net-worth
              individuals in deploying and raising capital within the global real estate landscape.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#475569]">
              Think of our platform as a bridge held up by four critical pillars, each addressing a structural gap in
              the movement, protection, and activation of capital.
            </p>

            <div className="mt-8 border-t border-[#333333]/15 pt-6">
              <p className="font-semibold text-[#333333]">Our two core service tracks:</p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-[#475569]">
                <li><strong className="text-[#333333]">Deploy Capital:</strong> Direct Property Acquisition, REPE fund introductions, Co-investments.</li>
                <li><strong className="text-[#333333]">Raise Capital:</strong> Dispositions, Leasing Strategy, Debt Advisory and Financing.</li>
              </ul>
            </div>
          </div>
          <ServiceImage />
        </section>

        <section className="grid gap-10 border-t border-black/10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
          <div>
            <SectionLabel>Four pillars</SectionLabel>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#222222]">How the platform works</h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[#475569]">
              Each pillar strengthens a different part of the capital journey, from formation and deployment to
              regulation and long-term sovereignty.
            </p>
          </div>
          <div>
            {pillars.map((pillar) => (
              <PillarAccordion
                key={pillar.title}
                {...pillar}
                open={openPillar === pillar.title}
                onToggle={() =>
                  setOpenPillar((current) => (current === pillar.title ? null : pillar.title))
                }
              />
            ))}
          </div>
        </section>

        <footer className="border-t border-black/10 pt-6 text-sm text-[#64748b]">
          CRE Advisory Firm - AvinellCantagali
        </footer>
      </div>
    </main>
  );
}
