'use client';

import { useState } from 'react';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';
import type { ReactNode } from 'react';

const principles = [
  {
    title: 'Responsibility',
    text: 'We act as stewards of capital, not just facilitators. We deploy, raise, and manage funds with a long-term view on societal impact, environmental sustainability, and economic empowerment - both within Africa and abroad.',
  },
  {
    title: 'Accountability',
    text: 'We track, disclose, and uphold the performance of every engagement. We believe in responsibility to investors, partners, regulators, and communities - and welcome review, feedback, and redress.',
  },
  {
    title: 'Awareness',
    text: 'We prioritize deep contextual understanding in every transaction. We engage with cultural, legal, and regional nuances - especially when bridging global and African markets - to ensure smarter, more respectful outcomes.',
  },
  {
    title: 'Impartiality',
    text: 'We are independent and merit-based. We avoid conflicts of interest and commit to introducing or partnering based on value alignment, not personal relationships or political affiliation.',
  },
  {
    title: 'Transparency',
    text: 'We provide clear structures, fees, roles, and expectations. We communicate openly and honestly - especially where risk, pricing, and incentives are involved.',
  },
];

const signatoryCommitments = [
  'Conduct all capital engagements - whether deploying, raising, advising, or introducing - in line with the five principles above.',
  'Avoid self-dealing, unethical brokerage, or hidden incentives in capital structuring or introductions.',
  'Notify Avinell of any conflicts of interest or governance breaches within shared transactions or engagements.',
  'Contribute to a culture of feedback, shared learning, and ethical leadership across our joint network.',
  'Hold yourself and your teams accountable for upholding this standard of professional conduct.',
];

const partnerBenefits = [
  'You may be invited to featured deals, strategic collaborations, and early access capital flows.',
  'Your profile may be listed within our trusted partner network, shared with institutions and HNWIs.',
  'You help reshape Africa\'s role in the global capital narrative - not just as a destination, but as a source of wisdom, discipline, and innovation.',
];

const registrationIncludes = [
  {
    title: 'Verified Registry Listing',
    text: 'Gain official recognition as a Governance Partner, listed in our network as a committed participant in responsible capital practice.',
  },
  {
    title: 'Quarterly Roundtables & Online Panels',
    text: 'Join high-level, curated discussions on capital flows, policy shifts, structuring standards, and cross-border innovation - featuring thought leaders from Africa and global markets.',
  },
  {
    title: 'Global Seminars & In-Person Forums',
    text: 'Receive priority invites to exclusive partner events in key financial cities including London, Nairobi, Lagos, Dubai, and New York.',
  },
  {
    title: 'Policy & Impact Briefings',
    text: 'Access internal reports, shared benchmarks, and Avinell-led reviews on how African capital is being used - with input from institutions, DFIs, and capital markets.',
  },
  {
    title: 'Dealroom & Initiative Access',
    text: 'Participate in vetted, co-governed transactions where transparency and principle-led execution are required. Be considered for syndication, advisory, or execution roles.',
  },
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
        className="flex w-full cursor-pointer items-center justify-between gap-5 text-left text-xl font-semibold text-[#222222]"
      >
        {title}
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#333333]/20 text-2xl font-normal leading-none text-[#333333] transition-transform duration-300 ease-out ${open ? 'rotate-45' : ''}`}>
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

export default function VisionPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white text-[#333333]">
      <div className="w-full bg-white p-4 sm:p-6 lg:p-8">
        <SiteHeader />

        <section className="grid gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-20">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Our Firm</p>
            <h1 className="mt-4 max-w-2xl text-5xl font-semibold tracking-[-0.05em] text-[#222222] sm:text-6xl">
              Avinell Governance &amp; Capital Stewardship Pledge
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-[#475569]">
              A shared commitment to ethical, transparent, and purpose-driven capital.
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[24px] bg-[#333333] lg:min-h-[520px]">
            <Image
              src="/images/Advisory.jpg"
              alt="Avinell capital advisory team"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,51,51,0.05),rgba(51,51,51,0.5))]" />
            <div className="absolute bottom-5 left-5 right-5 rounded-[18px] bg-white/95 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-[#64748b]">Avinell</p>
              <p className="mt-2 text-lg font-medium text-[#333333]">
                Building a trust-driven, pan-African capital ecosystem.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 border-t border-black/10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Our direction</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#222222]">Our vision and mission</h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[#475569]">
              We exist to restore Africa&apos;s legacy of wealth and global influence while creating trusted pathways for
              capital to be raised, deployed, and reinvested.
            </p>
          </div>
          <div>
            <Accordion
              title="Our Vision"
              open={openAccordion === 'Our Vision'}
              onToggle={() => setOpenAccordion((current) => (current === 'Our Vision' ? null : 'Our Vision'))}
            >
              <p>To restore Africa&apos;s legacy of wealth and global influence by projecting Africa as a respected and active force in global investing.</p>
            </Accordion>
            <Accordion
              title="Our Mission"
              open={openAccordion === 'Our Mission'}
              onToggle={() => setOpenAccordion((current) => (current === 'Our Mission' ? null : 'Our Mission'))}
            >
              <p>To act as a bridge and operate as a trusted vehicle - enabling entrepreneurs and investors to raise and deploy capital into real estate, private equity, and global funds.</p>
            </Accordion>
            <Accordion
              title="Our Invitation"
              open={openAccordion === 'Our Invitation'}
              onToggle={() => setOpenAccordion((current) => (current === 'Our Invitation' ? null : 'Our Invitation'))}
            >
              <p>
                Whether you&apos;re deploying capital, seeking capital, or advising in the process, you are part of a larger movement. The Avinell Governance &amp; Capital Stewardship Pledge is a shared framework that defines how we do business, who we partner with, and what we stand for.
              </p>
              <p className="mt-4">
                This is not a box-ticking exercise. It is a living covenant for those committed to building a trust-driven, pan-African capital ecosystem that is globally respected and locally impactful.
              </p>
            </Accordion>
          </div>
        </section>

        <section className="grid gap-10 border-t border-black/10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Our standard</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#222222]">Five operating principles</h2>
          </div>
          <div>
            <Accordion
              title="Our Five Operating Principles"
              open={openAccordion === 'Our Five Operating Principles'}
              onToggle={() =>
                setOpenAccordion((current) =>
                  current === 'Our Five Operating Principles' ? null : 'Our Five Operating Principles',
                )
              }
            >
              <div className="space-y-5">
                {principles.map((principle, index) => (
                  <p key={principle.title}>
                    <strong className="text-[#333333]">{index + 1}. {principle.title}</strong>
                    <br />
                    {principle.text}
                  </p>
                ))}
              </div>
            </Accordion>
          </div>
        </section>

        <section className="grid gap-10 border-t border-black/10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Governance partners</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#222222]">A shared responsibility</h2>
          </div>
          <div>
            <Accordion
              title="As a Signatory to This Pledge, You Agree to:"
              open={openAccordion === 'As a Signatory to This Pledge, You Agree to:'}
              onToggle={() =>
                setOpenAccordion((current) =>
                  current === 'As a Signatory to This Pledge, You Agree to:'
                    ? null
                    : 'As a Signatory to This Pledge, You Agree to:',
                )
              }
            >
              <ul className="list-disc space-y-3 pl-5">
                {signatoryCommitments.map((commitment) => (
                  <li key={commitment}>{commitment}</li>
                ))}
              </ul>
            </Accordion>
            <Accordion
              title="What It Means to Be an Avinell-Aligned Partner"
              open={openAccordion === 'What It Means to Be an Avinell-Aligned Partner'}
              onToggle={() =>
                setOpenAccordion((current) =>
                  current === 'What It Means to Be an Avinell-Aligned Partner'
                    ? null
                    : 'What It Means to Be an Avinell-Aligned Partner',
                )
              }
            >
              <ul className="list-disc space-y-3 pl-5">
                {partnerBenefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </Accordion>
            <Accordion
              title="Join the Pledge & Register as a Governance Partner"
              open={openAccordion === 'Join the Pledge & Register as a Governance Partner'}
              onToggle={() =>
                setOpenAccordion((current) =>
                  current === 'Join the Pledge & Register as a Governance Partner'
                    ? null
                    : 'Join the Pledge & Register as a Governance Partner',
                )
              }
            >
              <p>
                Signing the Avinell Governance &amp; Capital Stewardship Pledge is more than a statement. It&apos;s an entry point into a global alliance of professionals, capital leaders, and institutions who are reimagining how African capital is deployed, managed, and reinvested.
              </p>
              <p className="mt-4">Whether you&apos;re an advisor, asset owner, fund manager, investor, or policy contributor, you have a role to play.</p>
            </Accordion>
            <Accordion
              title="Governance Partner Registration Includes:"
              open={openAccordion === 'Governance Partner Registration Includes:'}
              onToggle={() =>
                setOpenAccordion((current) =>
                  current === 'Governance Partner Registration Includes:'
                    ? null
                    : 'Governance Partner Registration Includes:',
                )
              }
            >
              <div className="space-y-5">
                {registrationIncludes.map((benefit) => (
                  <p key={benefit.title}>
                    <strong className="text-[#333333]">{benefit.title}</strong>
                    <br />
                    {benefit.text}
                  </p>
                ))}
              </div>
            </Accordion>
          </div>
        </section>

        <footer className="border-t border-black/10 pt-6 text-sm text-[#64748b]">
          CRE Advisory Firm - AvinellCantagali
        </footer>
      </div>
    </main>
  );
}
