'use client';

import Image from 'next/image';
import { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';

type ArrayKey =
  | 'investorTypes'
  | 'regulatoryStatus'
  | 'capital'
  | 'horizon'
  | 'liquidity'
  | 'geographies'
  | 'strategies'
  | 'alternatives'
  | 'goals'
  | 'engagement';

type MandateForm = {
  fullName: string;
  entityName: string;
  investorTypes: string[];
  otherInvestor: string;
  regulatoryStatus: string[];
  otherRegulatory: string;
  email: string;
  phone: string;
  capital: string[];
  ticketSize: string;
  horizon: string[];
  liquidity: string[];
  geographies: string[];
  strategies: string[];
  alternatives: string[];
  otherStrategy: string;
  goals: string[];
  targetIrr: string;
  taxNotes: string;
  exclusions: string;
  engagement: string[];
  managers: string;
  notes: string;
  signed: string;
  date: string;
};

const initialForm: MandateForm = {
  fullName: '',
  entityName: '',
  investorTypes: [],
  otherInvestor: '',
  regulatoryStatus: [],
  otherRegulatory: '',
  email: '',
  phone: '',
  capital: [],
  ticketSize: '',
  horizon: [],
  liquidity: [],
  geographies: [],
  strategies: [],
  alternatives: [],
  otherStrategy: '',
  goals: [],
  targetIrr: '',
  taxNotes: '',
  exclusions: '',
  engagement: [],
  managers: '',
  notes: '',
  signed: '',
  date: '',
};

const investorTypes = ['HNWI', 'Family Office', 'Institutional LP', 'Other'];
const regulatoryStatuses = ['Qualified Purchaser', 'Professional Investor', 'Sophisticated Investor', 'Other'];
const capitalRanges = ['<$1M', '$1M-$5M', '$5M-$25M', '$25M+'];
const horizons = ['1-3 years', '3-7 years', '7-10+ years'];
const liquidityOptions = ['Open-ended / NAV-based', 'Closed-end (w/ defined exit)', 'No preference'];
const geographies = ['Africa', 'United States', 'United Kingdom / Europe', 'MENA / GCC', 'LATAM', 'Asia-Pacific', 'Global Mandate'];
const strategies = ['Core / Core Plus', 'Value Add', 'Opportunistic', 'Development-Backed', 'REIT / Income Funds', 'Secondaries / NAV Recaps'];
const alternatives = ['Infrastructure', 'Private Credit / Real Assets', 'Agri / Timber', 'Other'];
const goals = ['Income / Yield', 'Capital Appreciation', 'Diversification', 'Strategic Market Entry', 'ESG / Impact'];
const engagementOptions = ['Review a shortlist of funds', 'Receive direct intros to managers', 'Discuss co-investment or GP-led deals', 'All of the above'];

const inputClass = 'mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-[#333333] outline-none transition-colors duration-200 focus:border-[#333333]';
const labelClass = 'text-xs font-semibold uppercase tracking-[0.16em] text-white/65';

function Accordion({ title, children, open, onToggle }: { title: string; children: React.ReactNode; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-t border-black/10 py-5 last:border-b">
      <button type="button" onClick={onToggle} aria-expanded={open} className="flex w-full items-center justify-between gap-4 text-left">
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

function ChoiceGroup({ label, options, selected, onToggle, required = false }: { label: string; options: string[]; selected: string[]; onToggle: (value: string) => void; required?: boolean }) {
  return (
    <fieldset>
      <legend className={labelClass}>{label}{required && <span className="ml-1 text-[#b45309]">*</span>}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selected.includes(option);
          return <button key={option} type="button" onClick={() => onToggle(option)} className={`rounded-full border px-3.5 py-2.5 text-sm transition-colors duration-200 ${active ? 'border-[#333333] bg-[#333333] text-white' : 'border-black/15 bg-white text-[#475569] hover:border-[#333333]/50'}`}>{option}</button>;
        })}
      </div>
    </fieldset>
  );
}

export default function InvestmentMandatePage() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<MandateForm>(initialForm);
  const [errors, setErrors] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof MandateForm>(key: K, value: MandateForm[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    setSaved(false);
  };

  const toggleList = (key: ArrayKey, value: string) => {
    setForm((current) => {
      const values = current[key];
      return { ...current, [key]: values.includes(value) ? values.filter((item) => item !== value) : [...values, value] };
    });
    setSaved(false);
  };

  const validateStep = () => {
    const nextErrors: string[] = [];
    if (step === 1 && !form.fullName.trim()) nextErrors.push('Please enter your full name.');
    if (step === 2 && !/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.push('Please enter a valid primary contact email.');
    if (step === 3) {
      if (!form.capital.length) nextErrors.push('Select an estimated capital deployment range.');
      if (!form.ticketSize.trim()) nextErrors.push('Enter your preferred ticket size.');
      if (!form.horizon.length) nextErrors.push('Select an investment horizon.');
      if (!form.liquidity.length) nextErrors.push('Select a liquidity preference.');
    }
    if (step === 6) {
      if (!form.targetIrr.trim()) nextErrors.push('Enter your target IRR or return expectations.');
      if (!form.exclusions.trim()) nextErrors.push('Enter your exclusion list or restricted jurisdictions.');
    }
    if (step === 7 && !form.managers.trim()) nextErrors.push('Tell us about any preferred managers or brands.');
    if (step === 8 && !form.date) nextErrors.push('Select the mandate date.');
    setErrors(nextErrors);
    return nextErrors.length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((current) => Math.min(8, current + 1));
  };

  const saveProgress = () => {
    localStorage.setItem('avinell-investment-mandate', JSON.stringify({ step, form }));
    setSaved(true);
  };

  const submit = () => {
    if (!validateStep()) return;
    localStorage.removeItem('avinell-investment-mandate');
    setSubmitted(true);
  };

  const stepTitles = ['Investor Profile', 'Jurisdiction & Contact', 'Capital Deployment Intentions', 'Geographic Focus', 'Asset Classes of Interest', 'Objectives & Constraints', 'Engagement Preferences', 'Submission Agreement'];

  return (
    <main className="min-h-screen bg-white text-[#333333]">
      <div className="w-full bg-white p-4 sm:p-6 lg:p-8">
        <SiteHeader />

        <section className="mt-8 grid gap-8 rounded-[24px] bg-[#f6f7f7] p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-14">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#64748b]">Capital Advisory | Deploy</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#222222] sm:text-7xl">Institutional-grade access for purposeful capital.</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#475569]">Avinell connects qualified investors to institutional-grade real estate funds across Core, Core Plus, Value-Add, and Opportunistic strategies.</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#475569]">We do not manage funds. Instead, we screen, negotiate access, and introduce you directly to the best global managers, from boutique specialists to global giants.</p>
            <a href="#mandate" className="mt-8 inline-flex w-fit rounded-full bg-[#ffd500] px-6 py-3.5 text-sm font-semibold text-[#333333] shadow-[0_12px_30px_rgba(255,213,0,0.22)] transition-transform duration-200 hover:-translate-y-0.5">Submit your investment mandate</a>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[20px] bg-[#333333]">
            <Image src="/images/downloaded-meeting-room.jpg" alt="Avinell investment mandate advisory" fill className="object-cover opacity-85" sizes="(max-width: 1024px) 100vw, 45vw" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/90 p-5 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">Avinell Investment Mandate</p>
              <p className="mt-2 text-lg font-semibold leading-7 text-[#222222]">Confidential investor intake for capital deployment.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#64748b]">Why Avinell</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#222222]">Clarity before commitment.</h2>
            <p className="mt-5 text-base leading-8 text-[#475569]">We shortlist high-integrity managers and strategies, then map the right opportunities to your mandate without placement noise or soft pitches.</p>
          </div>
          <div>
            <Accordion title="Why Investors Rely on Avinell for Fund Allocation" open={openSection === 'why'} onToggle={() => setOpenSection((current) => current === 'why' ? null : 'why')}>
              <ul className="space-y-4">
                <li><strong className="text-[#333333]">No Noise, Just Access.</strong> We shortlist high-integrity managers and real estate strategies with discipline.</li>
                <li><strong className="text-[#333333]">Tailored Matchmaking.</strong> We map NAV-based funds, income-yielding vehicles, and GP co-investments to your mandate.</li>
                <li><strong className="text-[#333333]">Cross-Border Expertise.</strong> From U.S. multifamily and European core-plus to African logistics and emerging hospitality, we bridge continents and compliance.</li>
                <li><strong className="text-[#333333]">Advisory + Facilitation, Not Sales.</strong> We act as your institutional partner, bringing clarity, due diligence, and trusted access.</li>
              </ul>
            </Accordion>
            <Accordion title="What You Can Access Through Avinell" open={openSection === 'access'} onToggle={() => setOpenSection((current) => current === 'access' ? null : 'access')}>
              <ul className="space-y-4">
                <li><strong className="text-[#333333]">Core &amp; Core Plus Income Funds.</strong> Low-volatility, income-generating portfolios with stable distributions.</li>
                <li><strong className="text-[#333333]">Value-Add &amp; Opportunistic Vehicles.</strong> Higher-return funds targeting repositioning, development, and lease-up upside.</li>
                <li><strong className="text-[#333333]">Africa-Focused Real Estate Funds.</strong> Thematic strategies from local GPs in logistics, hospitality, and urban housing.</li>
                <li><strong className="text-[#333333]">NAV-Based / Evergreen Structures.</strong> Flexible liquidity with consistent mark-to-market pricing and redemption windows.</li>
                <li><strong className="text-[#333333]">Co-Investment + Secondaries.</strong> Direct participation in GP-led deals, recapitalizations, or LP stake acquisitions.</li>
              </ul>
            </Accordion>
          </div>
        </section>

        <section id="mandate" className="mx-auto mt-16 max-w-6xl scroll-mt-28 rounded-[24px] bg-[#333333] p-5 text-white sm:p-8 lg:p-12">
          {!submitted ? (
            <>
              <div className="flex flex-col justify-between gap-5 border-b border-white/15 pb-7 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Confidential investor intake</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Submit Your Investment Mandate</h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">Tell us what you&apos;re looking for. We&apos;ll share a tailored fund shortlist, with no pressure and no commitment.</p>
                </div>
                <span className="text-sm text-white/60">Step {step} of 8</span>
              </div>

              <div className="mt-6 flex gap-1.5" aria-label="Mandate progress">
                {stepTitles.map((title, index) => <span key={title} title={title} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${index < step ? 'bg-[#ffd500]' : 'bg-white/15'}`} />)}
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffd500]">{stepTitles[step - 1]}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{step === 1 ? 'Tell us who you are.' : step === 2 ? 'Where should we reach you?' : step === 3 ? 'Define your deployment parameters.' : step === 4 ? 'Where do you want to invest?' : step === 5 ? 'Which strategies fit your mandate?' : step === 6 ? 'Set the decision framework.' : step === 7 ? 'Tell us how you want to engage.' : 'One final confirmation.'}</h3>
                </div>

                <div className="space-y-6">
                  {step === 1 && <>
                    <label className="block"><span className={labelClass}>Full Name <span className="text-[#ffd500]">*</span></span><input value={form.fullName} onChange={(event) => update('fullName', event.target.value)} className={inputClass} placeholder="Your full name" /></label>
                    <label className="block"><span className={labelClass}>Entity Name (if applicable)</span><input value={form.entityName} onChange={(event) => update('entityName', event.target.value)} className={inputClass} placeholder="Company, family office, or institution" /></label>
                    <ChoiceGroup label="Type of Investor" options={investorTypes} selected={form.investorTypes} onToggle={(value) => toggleList('investorTypes', value)} />
                    {form.investorTypes.includes('Other') && <label className="block"><span className={labelClass}>Other Type of Investor</span><input value={form.otherInvestor} onChange={(event) => update('otherInvestor', event.target.value)} className={inputClass} placeholder="Describe your investor profile" /></label>}
                  </>}

                  {step === 2 && <>
                    <p className="text-sm text-white/65">Jurisdiction of Domicile</p>
                    <ChoiceGroup label="Regulatory Status (if applicable)" options={regulatoryStatuses} selected={form.regulatoryStatus} onToggle={(value) => toggleList('regulatoryStatus', value)} />
                    {form.regulatoryStatus.includes('Other') && <label className="block"><span className={labelClass}>Other Regulatory Status</span><input value={form.otherRegulatory} onChange={(event) => update('otherRegulatory', event.target.value)} className={inputClass} placeholder="Describe your status" /></label>}
                    <label className="block"><span className={labelClass}>Primary Contact Email <span className="text-[#ffd500]">*</span></span><input type="email" value={form.email} onChange={(event) => update('email', event.target.value)} className={inputClass} placeholder="you@company.com" /></label>
                    <label className="block"><span className={labelClass}>Phone / WhatsApp (optional)</span><input value={form.phone} onChange={(event) => update('phone', event.target.value)} className={inputClass} placeholder="+234 000 000 0000" /></label>
                  </>}

                  {step === 3 && <>
                    <ChoiceGroup label="Estimated Capital to Deploy (Next 6-12 Months)" options={capitalRanges} selected={form.capital} onToggle={(value) => toggleList('capital', value)} required />
                    <label className="block"><span className={labelClass}>Preferred Ticket Size (per deal or fund) <span className="text-[#ffd500]">*</span></span><span className="mt-1 block text-xs text-white/45">e.g., $2M minimum / $10M maximum</span><input value={form.ticketSize} onChange={(event) => update('ticketSize', event.target.value)} className={inputClass} placeholder="Your preferred range" /></label>
                    <ChoiceGroup label="Investment Horizon" options={horizons} selected={form.horizon} onToggle={(value) => toggleList('horizon', value)} required />
                    <ChoiceGroup label="Liquidity Preference" options={liquidityOptions} selected={form.liquidity} onToggle={(value) => toggleList('liquidity', value)} required />
                  </>}

                  {step === 4 && <ChoiceGroup label="Geographic Focus - select all that apply" options={geographies} selected={form.geographies} onToggle={(value) => toggleList('geographies', value)} />}

                  {step === 5 && <>
                    <ChoiceGroup label="Real Estate Strategies" options={strategies} selected={form.strategies} onToggle={(value) => toggleList('strategies', value)} />
                    <ChoiceGroup label="Other Alternatives (Optional)" options={alternatives} selected={form.alternatives} onToggle={(value) => toggleList('alternatives', value)} />
                    {form.alternatives.includes('Other') && <label className="block"><span className={labelClass}>Other Real Estate Strategies</span><input value={form.otherStrategy} onChange={(event) => update('otherStrategy', event.target.value)} className={inputClass} placeholder="Describe another strategy" /></label>}
                  </>}

                  {step === 6 && <>
                    <ChoiceGroup label="Primary Investment Goals" options={goals} selected={form.goals} onToggle={(value) => toggleList('goals', value)} />
                    <label className="block"><span className={labelClass}>Target IRR / Return Expectations <span className="text-[#ffd500]">*</span></span><span className="mt-1 block text-xs text-white/45">e.g., 10-14% net IRR</span><input value={form.targetIrr} onChange={(event) => update('targetIrr', event.target.value)} className={inputClass} placeholder="Your return expectations" /></label>
                    <label className="block"><span className={labelClass}>Tax / Regulatory / FX Considerations</span><input value={form.taxNotes} onChange={(event) => update('taxNotes', event.target.value)} className={inputClass} placeholder="Describe if applicable" /></label>
                    <label className="block"><span className={labelClass}>Exclusion List / Restricted Jurisdictions <span className="text-[#ffd500]">*</span></span><input value={form.exclusions} onChange={(event) => update('exclusions', event.target.value)} className={inputClass} placeholder="List exclusions or write None" /></label>
                  </>}

                  {step === 7 && <>
                    <ChoiceGroup label="Would you prefer to" options={engagementOptions} selected={form.engagement} onToggle={(value) => toggleList('engagement', value)} />
                    <label className="block"><span className={labelClass}>Any managers or brands of preference? <span className="text-[#ffd500]">*</span></span><span className="mt-1 block text-xs text-white/45">e.g., Starwood, KKR, local African GPs, etc.</span><input value={form.managers} onChange={(event) => update('managers', event.target.value)} className={inputClass} placeholder="Managers, brands, or open to recommendations" /></label>
                  </>}

                  {step === 8 && <>
                    <label className="block"><span className={labelClass}>Additional Notes or Mandate Instructions</span><textarea value={form.notes} onChange={(event) => update('notes', event.target.value)} className={`${inputClass} min-h-28 resize-y`} placeholder="Anything else we should know?" /></label>
                    <div className="rounded-xl border border-white/15 bg-white/5 p-4 text-sm leading-6 text-white/70">By submitting this mandate, I confirm I am authorized to explore investment opportunities on behalf of the stated entity and request Avinell to share pre-qualified opportunities on a strictly confidential basis. This is not a binding commitment; all next steps are subject to due diligence and independent review.</div>
                    <label className="block"><span className={labelClass}>Signed</span><input value={form.signed} onChange={(event) => update('signed', event.target.value)} className={inputClass} placeholder="Type your name" /></label>
                    <label className="block"><span className={labelClass}>Date <span className="text-[#ffd500]">*</span></span><input type="date" value={form.date} onChange={(event) => update('date', event.target.value)} className={inputClass} /></label>
                  </>}

                  {errors.length > 0 && <div className="rounded-xl border border-[#fca5a5]/40 bg-[#7f1d1d]/40 px-4 py-3 text-sm leading-6 text-[#fecaca]" role="alert">{errors.map((error) => <p key={error}>{error}</p>)}</div>}
                </div>
              </div>

              <div className="mt-8 flex flex-col-reverse gap-3 border-t border-white/15 pt-6 sm:flex-row sm:items-center">
                {step > 1 && <button type="button" onClick={() => { setErrors([]); setStep((current) => current - 1); }} className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15">&larr; Previous</button>}
                <button type="button" onClick={step === 8 ? submit : nextStep} className="flex-1 rounded-full bg-[#ffd500] px-5 py-3 text-sm font-semibold text-[#333333] transition-transform duration-200 hover:-translate-y-0.5">{step === 8 ? 'Submit Mandate' : 'Continue'} <span aria-hidden>&rarr;</span></button>
              </div>
              <button type="button" onClick={saveProgress} className="mt-3 w-full rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/60 transition-colors hover:border-white/30 hover:text-white">Save &amp; Continue Later</button>
              {saved && <p className="mt-3 text-center text-xs text-white/60">Your progress has been saved in this browser.</p>}
            </>
          ) : (
            <div className="py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ffd500] text-3xl font-bold text-[#333333]">&#10003;</div>
              <h2 className="mt-6 text-3xl font-semibold">Mandate received.</h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/70">Thank you, {form.fullName.split(' ')[0] || 'there'}. We&apos;ll review your mandate and follow up with relevant opportunities and next steps.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
