'use client';

import { useState } from 'react';
import Image from 'next/image';
import InsightsCarousel from '@/components/InsightsCarousel';
import SiteHeader from '@/components/SiteHeader';

const articles = [
  {
    title: 'Hudson Yards: A Snapshot of Commercial Tenancy and the Future of New York’s Mega Development',
    category: 'Global Markets',
    excerpt: 'A closer look at commercial tenancy, institutional demand, and the future of New York’s landmark mega development.',
    image: '/images/Hudson-Yards-A-Snapshot-of-Commercial-Tenancy-_1.jpg',
    href: 'https://avinellcantagali.com/insights/hudson-yards-a-snapshot-of-commercial-tenancy-and-the-future-of-new-yorks-mega-development/',
  },
  {
    title: 'Commercial Retrofit in London: Transforming Buildings for a Sustainable Future',
    category: 'Property Finance',
    excerpt: 'How retrofit strategies are reshaping London buildings, capital planning, and long-term asset value.',
    image: '/images/Commercial-Retrofit-in-London-Transforming-Buildings-for-a-Sustainable-Future_2.jpg',
    href: 'https://avinellcantagali.com/insights/commercial-retrofit-in-london-transforming-buildings-for-a-sustainablefuture/',
  },
  {
    title: 'Cannes Hospitality Real Estate Market: A 2024 Perspective',
    category: 'Hospitality',
    excerpt: 'Market context for hospitality assets in Cannes and the investment signals shaping the sector.',
    image: '/images/Cannes-Hospitality-Real-Estate-Market_1.jpg',
    href: 'https://avinellcantagali.com/insights/cannes-hospitality-real-estate-market-a-2024-perspective/',
  },
  {
    title: 'Billionaires and Family Offices: The Strategic Role of Commercial Real Estate in Wealth Preservation and Growth',
    category: 'Capital Strategy',
    excerpt: 'Why commercial real estate remains central to diversified wealth preservation and family-office strategy.',
    image: '/images/Billionaires-and-Family-Offices_1.jpg',
    href: 'https://avinellcantagali.com/insights/billionaires-and-family-offices-the-strategic-role-of-commercial-real-estate-in-wealth-preservation-and-growth/',
  },
  {
    title: 'Peckham Rising: Why London’s Next Commercial Breakout Lies South of the River By Avinell',
    category: 'Property Markets',
    excerpt: 'A perspective on Peckham’s commercial trajectory, regeneration, and emerging investor attention.',
    image: '/images/Peckham-1-1.jpeg',
    href: 'https://avinellcantagali.com/insights/peckham-rising-why-londons-next-commercial-breakout-lies-south-of-the-river-by-avinell/',
  },
  {
    title: 'Navigating Financing and Yield in Commercial Real Estate Amid Global Inflation',
    category: 'Property Finance',
    excerpt: 'Practical considerations for financing, yield, and risk as inflation changes commercial real estate decisions.',
    image: '/images/Navigating-Financing-and-Yield-in-Commercial-Real-Estate-Amid-Global-Inflation_2.jpg',
    href: 'https://avinellcantagali.com/insights/navigating-financing-and-yield-in-commercial-real-estate-amid-globalinflation/',
  },
  {
    title: 'Monaco Commercial Real Estate Office Outlook 2024',
    category: 'Global Markets',
    excerpt: 'The forces influencing office demand, pricing, and investment strategy in Monaco.',
    image: '/images/Monaco-Commercial-Real-Estate-Office-Outlook-2024_1.jpg',
    href: 'https://avinellcantagali.com/insights/monaco-commercial-real-estate-office-outlook-2024/',
  },
  {
    title: 'MIPIM Cannes 2024: A Comprehensive Review',
    category: 'Industry Notes',
    excerpt: 'Key themes and signals from one of the most important gatherings in global real estate.',
    image: '/images/Mipim-Cannes-2024_2.jpg',
    href: 'https://avinellcantagali.com/insights/mipim-cannes-2024-a-comprehensive-review/',
  },
  {
    title: 'Maximizing Hotel Yield in Lagos, Nigeria: Strategies for Success in a Dynamic Market',
    category: 'Lagos Market',
    excerpt: 'Strategies for improving hotel yield, positioning hospitality assets, and responding to local demand.',
    image: '/images/Maximizing-Hotel-Yield-in-Lagos.jpg',
    href: 'https://avinellcantagali.com/insights/maximizing-hotel-yield-in-lagos-nigeria-strategies-for-success-in-adynamic-market/',
  },
];

const categories = ['All', ...Array.from(new Set(articles.map((article) => article.category)))];

function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <article className="group overflow-hidden rounded-[22px] bg-[#f7f8f9] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1">
      <a href={article.href} aria-label={`Read ${article.title}`}>
        <div className="relative h-56 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </a>
      <div className="p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">{article.category}</p>
        <h3 className="mt-3 text-xl font-semibold leading-7 tracking-[-0.03em] text-[#222222]">
          <a href={article.href} className="transition-colors duration-200 hover:text-[#64748b]">{article.title}</a>
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#475569]">{article.excerpt}</p>
        <a href={article.href} className="mt-5 inline-flex text-sm font-semibold text-[#333333] underline decoration-[#ffd500] decoration-2 underline-offset-4">
          Read article
        </a>
      </div>
    </article>
  );
}

export default function InsightsPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const normalizedQuery = query.trim().toLowerCase();
  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const searchableText = `${article.title} ${article.category} ${article.excerpt}`.toLowerCase();
    return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
  });

  return (
    <main className="min-h-screen bg-white text-[#333333]">
      <div className="w-full bg-white p-4 sm:p-6 lg:p-8">
        <SiteHeader />

        <section className="py-12 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Insights</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-[#222222] sm:text-6xl lg:text-7xl">
                The Cantagali Blog
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-[#475569]">
                Insights - Capital Market Notes and Property Finance Analysis
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#64748b]">
                Analysis, market intelligence, and practical guidance for Lagos and London property finance.
              </p>
            </div>

            <label className="flex w-full max-w-md items-center gap-3 rounded-full border border-black/10 bg-[#f7f8f9] px-5 py-3.5 focus-within:border-[#333333]/30">
              <span className="text-lg text-[#64748b]" aria-hidden>⌕</span>
              <span className="sr-only">Search articles</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search articles..."
                className="min-w-0 flex-1 bg-transparent text-sm text-[#333333] outline-none placeholder:text-[#64748b]"
              />
            </label>
          </div>
        </section>

        <section className="border-t border-black/10 py-10 sm:py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#64748b]">Featured articles</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#222222] sm:text-4xl">Selected perspectives</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#64748b]">Original commentary on markets, capital, and the decisions shaping real estate.</p>
          </div>
          <InsightsCarousel cards={articles.slice(0, 5)} />
        </section>

        <section className="border-t border-black/10 py-10 sm:py-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#64748b]">Latest news</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#222222] sm:text-4xl">All articles</h2>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Filter articles by category">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm transition-colors duration-200 ${activeCategory === category ? 'bg-[#333333] text-white' : 'border border-black/10 bg-white text-[#475569] hover:bg-[#f7f8f9]'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => <ArticleCard key={article.title} article={article} />)}
            </div>
          ) : (
            <div className="mt-8 rounded-[22px] bg-[#f7f8f9] px-6 py-16 text-center text-sm text-[#64748b]">
              No articles found for this search.
            </div>
          )}
        </section>

        <footer className="border-t border-black/10 pt-6 text-sm text-[#64748b]">
          CRE Advisory Firm - AvinellCantagali
        </footer>
      </div>
    </main>
  );
}
