import Image from 'next/image';
import InsightsCarousel from '@/components/InsightsCarousel';
import SiteHeader from '@/components/SiteHeader';

const advisoryBullets = [
  'Nigeria-focused investment and capital strategy',
  'Legal, tax, and regulatory structuring aligned with Nigerian frameworks',
  'Transaction-level due diligence and asset verification',
  'Asset readiness, deal qualification, and investor packaging',
  'Market intelligence across Nigeria, with cross-border investor context',
];

const planningBullets = [
  'Deal & fund structuring',
  'Legal, tax, and regulatory structuring',
  'Timeline & milestone definition',
  'Document preparation & presentation',
  'Coordination with legal and compliance teams',
];

const executionBullets = [
  'Capital introductions & matching',
  'Dealroom setup & negotiation support',
  'Exit strategy activation',
  'Debt sourcing & refinancing',
  'Leasing & asset stabilization',
  'Transaction coordination across stakeholders',
];

const insightCards = [
  {
    title: 'Hudson Yards: A Snapshot of Commercial Tenancy and the Future of New York’s Mega Development',
    image: '/images/Hudson-Yards-A-Snapshot-of-Commercial-Tenancy-_1.jpg',
    href: 'https://avinellcantagali.com/insights/hudson-yards-a-snapshot-of-commercial-tenancy-and-the-future-of-new-yorks-mega-development/',
  },
  {
    title: 'Commercial Retrofit in London: Transforming Buildings for a SustainableFuture',
    image: '/images/Commercial-Retrofit-in-London-Transforming-Buildings-for-a-Sustainable-Future_2.jpg',
    href: 'https://avinellcantagali.com/insights/commercial-retrofit-in-london-transforming-buildings-for-a-sustainablefuture/',
  },
  {
    title: 'Cannes Hospitality Real Estate Market: A 2024 Perspective',
    image: '/images/Cannes-Hospitality-Real-Estate-Market_1.jpg',
    href: 'https://avinellcantagali.com/insights/cannes-hospitality-real-estate-market-a-2024-perspective/',
  },
  {
    title: 'Billionaires and Family Offices: The Strategic Role of Commercial Real Estate in Wealth Preservation and Growth',
    image: '/images/Billionaires-and-Family-Offices_1.jpg',
    href: 'https://avinellcantagali.com/insights/billionaires-and-family-offices-the-strategic-role-of-commercial-real-estate-in-wealth-preservation-and-growth/',
  },
  {
    title: 'Peckham Rising: Why London’s Next Commercial Breakout Lies South of the River By Avinell',
    image: '/images/Peckham-1-1.jpeg',
    href: 'https://avinellcantagali.com/insights/peckham-rising-why-londons-next-commercial-breakout-lies-south-of-the-river-by-avinell/',
  },
  {
    title: 'Navigating Financing and Yield in Commercial Real Estate Amid GlobalInflation',
    image: '/images/Navigating-Financing-and-Yield-in-Commercial-Real-Estate-Amid-Global-Inflation_2.jpg',
    href: 'https://avinellcantagali.com/insights/navigating-financing-and-yield-in-commercial-real-estate-amid-globalinflation/',
  },
  {
    title: 'Monaco Commercial Real Estate Office Outlook 2024',
    image: '/images/Monaco-Commercial-Real-Estate-Office-Outlook-2024_1.jpg',
    href: 'https://avinellcantagali.com/insights/monaco-commercial-real-estate-office-outlook-2024/',
  },
  {
    title: 'MIPIM Cannes 2024: A Comprehensive Review',
    image: '/images/Mipim-Cannes-2024_2.jpg',
    href: 'https://avinellcantagali.com/insights/mipim-cannes-2024-a-comprehensive-review/',
  },
  {
    title: 'Maximizing Hotel Yield in Lagos, Nigeria: Strategies for Success in aDynamic Market',
    image: '/images/Maximizing-Hotel-Yield-in-Lagos.jpg',
    href: 'https://avinellcantagali.com/insights/maximizing-hotel-yield-in-lagos-nigeria-strategies-for-success-in-adynamic-market/',
  },
];

const footerGroups = [
  {
    title: 'Company',
    items: ['Careers', 'Equality & Diversity', 'Fraud Prevention', 'Privacy Policy'],
  },
  {
    title: 'Partners',
    items: ['Partner Network', 'Lender Partners', 'Strategic Partners'],
  },
  {
    title: 'Compliance',
    items: ['KYC Form', 'AML Protocol'],
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip px-0 py-0 text-[#333333]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#ffd500]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-white/60 blur-3xl" />
      </div>

      <div className="relative w-full bg-white p-4 sm:p-6 lg:p-8">
        <SiteHeader />

        <section className="pt-6 lg:pt-8">
          <div className="rounded-[24px] bg-[linear-gradient(180deg,#f7f8f9_0%,#ffffff_52%,#f1f1f1_100%)] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#64748b] backdrop-blur">
                  Capital Advisory | Lagos
                </span>
                <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[#222222] sm:text-5xl lg:text-7xl">
                  Purpose-Built to Bridge Capital
                </h1>
                <p className="mt-5 max-w-2xl text-base text-[#475569] sm:text-lg">
                  We are a trusted bridge between capital and opportunity, enabling entrepreneurs, investors, and
                  institutions to access high-quality investment opportunities across global markets. With a focus on
                  real estate, private equity, and fund placements, we help family offices and high-net-worth
                  individuals deploy and raise capital through a seamless, strategic model.
                </p>
                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
                  <a
                    href="lease/"
                    className="inline-flex items-center justify-center rounded-full bg-[#ffd500] px-6 py-3.5 text-sm font-semibold text-[#333333] shadow-[0_10px_28px_rgba(255,213,0,0.24)] transition-transform hover:-translate-y-0.5"
                  >
                    Explore Lease Opportunities
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border border-[#333333]/20 bg-white px-6 py-3.5 text-sm font-semibold text-[#333333] transition-colors hover:bg-[#f1f1f1]"
                  >
                    Explore Advisory Services
                  </a>
                </div>
                <p className="mt-4 max-w-xl text-sm leading-6 text-[#64748b]">
                  For landlords, developers, and credible tenants seeking well-positioned commercial and mixed-use
                  opportunities across Nigeria.
                </p>
              </div>

              <div className="relative min-h-[340px] overflow-hidden rounded-[24px] bg-[#333333] shadow-2xl lg:min-h-[560px]">
                <Image
                  src="/images/Advisory.jpg"
                  alt="Commercial Real Estate"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover opacity-95"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,51,51,0.04)_0%,rgba(51,51,51,0.1)_30%,rgba(51,51,51,0.46)_100%)]" />
                <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#333333] backdrop-blur">
                  Avinell x Cantagali
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-[18px] bg-[rgba(255,255,255,0.94)] p-4 backdrop-blur">
                  <div className="text-xs uppercase tracking-[0.22em] text-[#64748b]">Focus</div>
                  <p className="mt-2 text-lg font-medium text-[#333333]">
                    Real estate, private equity, fund placements, and leasing & asset stabilization.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="about" className="grid gap-8 px-1 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-2">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#64748b]">About</p>
            <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-[#222222] sm:text-5xl">
              By doing so, we elevate Africa&apos;s presence in global investing.
            </h2>
            <a
              href="#services"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#ffd500] px-5 py-3 text-sm font-semibold text-[#333333] shadow-[0_12px_30px_rgba(255,213,0,0.2)] transition-transform hover:-translate-y-0.5"
            >
              Learn More
            </a>
          </div>
          <div className="max-w-2xl text-lg leading-8 text-[#475569]">
            <p>
              Our work empowers African leaders to shape and participate in the world&apos;s most influential capital
              flows, with strategy and local context at the centre of every mandate.
            </p>
          </div>
        </section>

        <section id="services" className="grid items-start gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-[24px] bg-[#f1f1f1] p-6 shadow-sm ring-1 ring-black/10">
            <h3 className="text-3xl font-semibold tracking-[-0.03em] text-[#222222]">Advise</h3>
            <p className="mt-5 text-sm leading-7 text-[#475569]">
              We advise Nigerian asset owners, developers, investors, and institutions at the earliest and most
              critical stages of the capital cycle - where strategy, structure, and local context make the
              difference.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#475569]">
              From sourcing and assessing opportunities across Nigeria&apos;s major cities and emerging markets, to
              structuring compliant investment vehicles and cross-border transactions, we combine deep local market
              knowledge with global best practice.
            </p>
            <div className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#64748b]">
              Our advisory capabilities include:
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#475569]">
              {advisoryBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#333333]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[24px] bg-[#333333] p-6 text-white shadow-sm ring-1 ring-black/10">
            <h3 className="text-3xl font-semibold tracking-[-0.03em]">Plan</h3>
            <p className="mt-5 text-sm leading-7 text-white/78">
              Clarity leads to confidence. At Avinell, we move beyond high-level advice to co-design actionable plans
              - tailored to your capital objectives.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/78">
              Whether you&apos;re preparing a capital raise, structuring a deployment vehicle, or aligning
              multi-jurisdictional interests, we translate strategy into a precise, step-by-step blueprint.
            </p>
            <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
              Our planning capabilities include:
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
              {planningBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#ffd500]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[24px] bg-[#333333] p-6 text-white shadow-sm ring-1 ring-black/10 lg:col-span-2">
            <h3 className="text-3xl font-semibold tracking-[-0.03em]">Execute</h3>
            <p className="mt-5 text-sm leading-7 text-white/78">
              This is where capital moves - and results happen. At Avinell, we activate our network to deliver on
              what&apos;s been strategically designed and structurally planned.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/78">
              Whether deploying capital into prime opportunities, raising funds for credible ventures, or disposing
              of assets for maximum return - we coordinate, align, and execute with discipline.
            </p>
            <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
              Our execution capabilities include:
            </div>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/80 sm:grid-cols-2 lg:grid-cols-3">
              {executionBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ffd500]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section
          id="capital"
          className="mt-6 rounded-[24px] bg-[#333333] px-6 py-8 text-white shadow-[0_16px_40px_rgba(51,51,51,0.18)] sm:px-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/55">Leasing &amp; Asset Stabilization</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                We also work with landlords and developers across Nigeria.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/78">
                We also work with landlords and developers across Nigeria to lease commercial and mixed-use assets to
                credible, high-quality tenants - securing optimal terms, reducing vacancy risk, and enhancing
                long-term asset value.
              </p>
              <a
                href="https://avinellcantagali.com/lease/"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#ffd500] px-6 py-3.5 text-sm font-semibold text-[#333333] transition-transform hover:-translate-y-0.5"
              >
                Explore Leasing Services
              </a>
            </div>

            <div className="overflow-hidden rounded-[20px] bg-white p-4 text-[#333333]">
              <div className="text-sm uppercase tracking-[0.22em] text-[#64748b]">Cross-border positioning</div>
              <p className="mt-4 text-lg leading-8 text-[#475569]">
                From institutional tenant placement and lease structuring to build-to-lease strategy and cross-border
                positioning, our leasing approach balances local market demand with investor expectations.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-[16px] bg-[#f7f8f9] p-4 shadow-sm">
                    <div className="text-sm uppercase tracking-[0.18em] text-[#64748b]">Tenant placement</div>
                  <div className="mt-2 text-base font-medium">Credible, high-quality tenants</div>
                </div>
                <div className="rounded-[16px] bg-[#f7f8f9] p-4 shadow-sm">
                  <div className="text-sm uppercase tracking-[0.18em] text-[#64748b]">Asset value</div>
                  <div className="mt-2 text-base font-medium">Enhancing long-term asset value</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="insights" className="py-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#64748b]">News and insights</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#222222] sm:text-5xl">
                News and insights
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#475569]">
              Selected commentary from Avinell&apos;s original site, presented here with the same language and a
              cleaner editorial layout.
            </p>
          </div>

          <InsightsCarousel cards={insightCards} />
        </section>

        <footer id="contact" className="mt-2 rounded-[24px] bg-[#333333] px-6 py-8 text-white sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_auto_auto_auto] lg:items-start">
            <div>
              <Image
                src="/images/Avinell-Cantagali-logo.png"
                alt="Avinell Cantagali"
                width={180}
                height={48}
                className="h-9 w-auto brightness-200"
              />
              <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
                CRE Advisory Firm - AvinellCantagali
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
                <a href="mailto:hello@avinellcantagali.com" className="transition-colors hover:text-white">
                  hello@avinellcantagali.com
                </a>
                <a href="tel:+16285009670" className="transition-colors hover:text-white">
                  +1 (628) 500-9670
                </a>
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            {footerGroups.map((group) => (
              <div key={group.title}>
                <div className="text-sm uppercase tracking-[0.22em] text-white/50">{group.title}</div>
                <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-4 text-sm text-white/60">
            © Copyright 2026 Avinell Group. Lagos.
          </div>
        </footer>
      </div>
    </main>
  );
}
