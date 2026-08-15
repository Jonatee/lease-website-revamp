import Image from 'next/image';
import InsightsCarousel from '@/components/InsightsCarousel';
import SiteHeader from '@/components/SiteHeader';
import ScrollReveal from '@/components/ScrollReveal';

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
    image: '/images/downloaded-lagos-aerial.jpg',
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
  {
    title: 'Socials',
    items: ['LinkedIn', 'WhatsApp', 'Instagram'],
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen text-[#333333]">
      <SiteHeader />
      <main className="relative min-h-screen overflow-x-clip px-2 pb-4 pt-28">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#ffd500]/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-white/60 blur-3xl" />
        </div>

        <div className="relative w-full px-4 pt-6 sm:px-6 lg:px-8">
          <ScrollReveal>
          <section className="pt-6 lg:pt-8">
            <div className="overflow-hidden rounded-[28px] bg-white px-5 pb-5 pt-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:px-8 sm:pb-8 sm:pt-12 lg:px-12 lg:pb-10 lg:pt-14">
              <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#333333]/10 bg-[#f7f8f9] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#64748b] shadow-[0_6px_18px_rgba(51,51,51,0.06)]">
                  <span className="h-2 w-2 rounded-full bg-[#ffd500] shadow-[0_0_0_3px_rgba(255,213,0,0.18)]" aria-hidden />
                  Capital Advisory | Lagos
                </span>
                <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.06em] text-[#222222] sm:text-5xl lg:text-6xl">
                  Purpose-Built to Bridge Capital
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[#475569] sm:text-lg sm:leading-8">
                  We are a trusted bridge between capital and opportunity,
                  enabling entrepreneurs, investors, and institutions to access
                  high-quality investment opportunities across global markets.
                  With a focus on real estate, private equity, and fund
                  placements, we help family offices and high-net-worth
                  individuals deploy and raise capital through a seamless,
                  strategic model.
                </p>
                <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
                  <a
                    href="lease/"
                    className="inline-flex items-center justify-center rounded-full bg-[#ffd500] px-7 py-3.5 text-sm font-semibold text-[#333333] shadow-[0_10px_28px_rgba(255,213,0,0.24)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Explore Lease Opportunities <span className="ml-2" aria-hidden>→</span>
                  </a>
                  <a
                    href="#services"
                    className="text-sm font-semibold text-[#475569] underline decoration-[#ffd500] decoration-2 underline-offset-8 transition-colors duration-200 hover:text-[#333333]"
                  >
                    Explore Advisory Services
                  </a>
                </div>
                <p className="mt-5 max-w-xl text-sm leading-6 text-[#64748b]">
                  For landlords, developers, and credible tenants seeking
                  well-positioned commercial and mixed-use opportunities across
                  Nigeria.
                </p>
              </div>

              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[22px] bg-[#333333] shadow-[0_18px_50px_rgba(51,51,51,0.16)] sm:mt-10 sm:aspect-[16/8] lg:mt-12">
                <Image
                  src="/images/downloaded-boardroom.jpg"
                  alt="Commercial real estate advisory meeting room"
                  fill
                  priority
                  sizes="(min-width: 1024px) 90vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,34,34,0)_55%,rgba(34,34,34,0.46)_100%)]" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80">
                    Avinell x Cantagali
                  </span>
                  <span className="hidden text-right text-sm font-medium text-white/90 sm:block">
                    Real estate, capital, and opportunity
                  </span>
                </div>
              </div>
            </div>
          </section>
          </ScrollReveal>

        <ScrollReveal>
        <section
          id="about"
          className="grid gap-8 bg-white px-1 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-2"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#64748b]">
              About
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-[#222222] sm:text-5xl">
              By doing so, we elevate Africa&apos;s presence in global
              investing.
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
              Our work empowers African leaders to shape and participate in the
              world&apos;s most influential capital flows, with strategy and
              local context at the centre of every mandate.
            </p>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section id="services" className="border-t border-black/10 bg-white py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#64748b]">
                Our approach
              </p>
              <h2 className="mt-4 max-w-sm text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#222222] sm:text-5xl">
                Advice that moves capital.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-7 text-[#475569]">
                From strategy to execution, we bring the right context and
                discipline to each stage of the capital cycle.
              </p>
            </div>

            <div className="border-t border-black/15">
              <article className="grid gap-5 border-b border-black/15 py-8 sm:grid-cols-[56px_150px_1fr] sm:gap-6">
                <div className="text-sm font-semibold tracking-[0.18em] text-[#64748b]">01</div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#222222]">Advise</h3>
                <div>
                  <p className="text-sm leading-7 text-[#475569]">
                    We advise Nigerian asset owners, developers, investors, and
                    institutions at the earliest and most critical stages of the
                    capital cycle - where strategy, structure, and local context
                    make the difference.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#475569]">
                    We combine deep local market knowledge with global best
                    practice across sourcing, assessment, compliant investment
                    vehicles, and cross-border transactions.
                  </p>
                  <ul className="mt-5 grid gap-x-6 gap-y-2 text-sm leading-6 text-[#475569] sm:grid-cols-2">
                    {advisoryBullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#333333]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="grid gap-5 border-b border-black/15 py-8 sm:grid-cols-[56px_150px_1fr] sm:gap-6">
                <div className="text-sm font-semibold tracking-[0.18em] text-[#64748b]">02</div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#222222]">Plan</h3>
                <div>
                  <p className="text-sm leading-7 text-[#475569]">
                    Clarity leads to confidence. We move beyond high-level advice
                    to co-design actionable plans tailored to your capital
                    objectives and the realities of the market.
                  </p>
                  <ul className="mt-5 grid gap-x-6 gap-y-2 text-sm leading-6 text-[#475569] sm:grid-cols-2">
                    {planningBullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffd500]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="grid gap-5 py-8 sm:grid-cols-[56px_150px_1fr] sm:gap-6">
                <div className="text-sm font-semibold tracking-[0.18em] text-[#64748b]">03</div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#222222]">Execute</h3>
                <div>
                  <p className="text-sm leading-7 text-[#475569]">
                    This is where capital moves and results happen. We activate
                    our network to deliver on what has been strategically designed
                    and structurally planned.
                  </p>
                  <ul className="mt-5 grid gap-x-6 gap-y-2 text-sm leading-6 text-[#475569] sm:grid-cols-2">
                    {executionBullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffd500]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section
          id="capital"
          className="mt-6 rounded-[24px] bg-[#333333] px-6 py-8 text-white shadow-[0_16px_40px_rgba(51,51,51,0.18)] sm:px-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/55">
                Leasing &amp; Asset Stabilization
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                We also work with landlords and developers across Nigeria.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/78">
                We also work with landlords and developers across Nigeria to
                lease commercial and mixed-use assets to credible, high-quality
                tenants - securing optimal terms, reducing vacancy risk, and
                enhancing long-term asset value.
              </p>
              <a
                href="lease/"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#ffd500] px-6 py-3.5 text-sm font-semibold text-[#333333] transition-transform hover:-translate-y-0.5"
              >
                Explore Leasing Services
              </a>
            </div>

            <div className="overflow-hidden rounded-[20px] bg-white p-4 text-[#333333]">
              <div className="text-sm uppercase tracking-[0.22em] text-[#64748b]">
                Cross-border positioning
              </div>
              <p className="mt-4 text-lg leading-8 text-[#475569]">
                From institutional tenant placement and lease structuring to
                build-to-lease strategy and cross-border positioning, our
                leasing approach balances local market demand with investor
                expectations.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-[16px] bg-[#f7f8f9] p-4 shadow-sm">
                  <div className="text-sm uppercase tracking-[0.18em] text-[#64748b]">
                    Tenant placement
                  </div>
                  <div className="mt-2 text-base font-medium">
                    Credible, high-quality tenants
                  </div>
                </div>
                <div className="rounded-[16px] bg-[#f7f8f9] p-4 shadow-sm">
                  <div className="text-sm uppercase tracking-[0.18em] text-[#64748b]">
                    Asset value
                  </div>
                  <div className="mt-2 text-base font-medium">
                    Enhancing long-term asset value
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section id="insights" className="py-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#64748b]">
                News and insights
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#222222] sm:text-5xl">
                News and insights
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#475569]">
              Selected commentary from Avinell&apos;s original site, presented
              here with the same language and a cleaner editorial layout.
            </p>
          </div>

          <InsightsCarousel cards={insightCards} />
        </section>
        </ScrollReveal>

        <footer
          id="contact"
          className="mt-2 rounded-[24px] bg-[#333333] px-6 py-8 text-white sm:px-8"
        >
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
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello%40avinellcantagali.com&su=Contact%20Avinell%20Cantagali"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email Avinell Cantagali"
                  className="transition-colors hover:text-white"
                >
                  hello@avinellcantagali.com
                </a>
                <a
                  href="tel:+16285009670"
                  className="transition-colors hover:text-white"
                >
                  +1 (628) 500-9670
                </a>
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            {footerGroups.map((group) => (
              <div key={group.title}>
                <div className="text-sm uppercase tracking-[0.22em] text-white/50">
                  {group.title}
                </div>
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
  </div>
  );
}
