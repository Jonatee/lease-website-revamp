'use client';

import { useState } from 'react';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';

type DealFilter = 'all' | 'to-let' | 'for-sale' | 'finance';

type Deal = {
  title: string;
  status: 'To Let' | 'For Sale';
  category: Exclude<DealFilter, 'all' | 'finance'>;
  location: string;
  price: string;
  amenities: string[];
  image: string;
  alt: string;
};

const deals: Deal[] = [
  {
    title: 'Testmot House Boardroom',
    status: 'To Let',
    category: 'to-let',
    location: 'Victoria Island, Lagos',
    price: 'NGN 7,000 / hour',
    amenities: ['Parking', 'AC'],
    image: '/images/Advisory.jpg',
    alt: 'Boardroom interior for Testmot House',
  },
  {
    title: 'Campos Square Office Floor',
    status: 'To Let',
    category: 'to-let',
    location: 'Lagos Island',
    price: 'NGN 50,000,000 / year',
    amenities: ['Parking', 'AC'],
    image: '/images/sincerely-media-7QFks1kY5ts-unsplash-1.jpg.jpeg',
    alt: 'Office space at Campos Square',
  },
  {
    title: 'Encounter House Event Centre',
    status: 'To Let',
    category: 'to-let',
    location: 'Magodo GRA, Lagos',
    price: 'NGN 150,000 / day',
    amenities: ['Parking', '200 Chairs', 'AC'],
    image: '/images/Peckham-1-1.jpeg',
    alt: 'Event venue for Encounter House',
  },
  {
    title: 'Eko Court Co-Working',
    status: 'To Let',
    category: 'to-let',
    location: 'Victoria Island, Lagos',
    price: 'NGN 27,000,000 / year',
    amenities: ['Parking', 'AC'],
    image: '/images/Commercial-Retrofit-in-London-Transforming-Buildings-for-a-Sustainable-Future_2.jpg',
    alt: 'Flexible office space at Eko Court',
  },
  {
    title: 'Plot 22 Breadfruit Street',
    status: 'For Sale',
    category: 'for-sale',
    location: 'Lagos Island',
    price: 'NGN 165,000,000',
    amenities: ['Land'],
    image: '/images/Monaco-Commercial-Real-Estate-Office-Outlook-2024_1.jpg',
    alt: 'Commercial property opportunity at Plot 22 Breadfruit Street',
  },
];

const filters: Array<{ label: string; value: DealFilter }> = [
  { label: 'All Deals', value: 'all' },
  { label: 'To Let', value: 'to-let' },
  { label: 'For Sale', value: 'for-sale' },
  { label: 'Finance Available', value: 'finance' },
];

export default function ActiveDealsPage() {
  const [filter, setFilter] = useState<DealFilter>('all');
  const [selectedTitle, setSelectedTitle] = useState(deals[0].title);

  const filteredDeals = filter === 'all'
    ? deals
    : filter === 'finance'
      ? []
      : deals.filter((deal) => deal.category === filter);
  const selectedDeal = deals.find((deal) => deal.title === selectedTitle) ?? deals[0];

  const handleFilterChange = (nextFilter: DealFilter) => {
    setFilter(nextFilter);
    const nextDeals = nextFilter === 'all'
      ? deals
      : nextFilter === 'finance'
        ? []
        : deals.filter((deal) => deal.category === nextFilter);

    if (nextDeals.length > 0 && !nextDeals.some((deal) => deal.title === selectedTitle)) {
      setSelectedTitle(nextDeals[0].title);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#333333]">
      <div className="w-full bg-white p-4 sm:p-6 lg:p-8">
        <SiteHeader />

        <section className="grid gap-10 border-b border-black/10 py-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:py-20">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Property | Active Deals</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-[#222222] sm:text-6xl">
              Spaces and properties ready for their next move.
            </h1>
          </div>
          <div>
            <p className="max-w-xl text-lg leading-8 text-[#475569]">
              Exclusive spaces and properties available for immediate lease, finance, or purchase via Avinell. Click a
              property to view its featured space.
            </p>
            <a
              href="mailto:hello@avinellcantagali.com?subject=Active%20Deals%20Inquiry"
              className="mt-7 inline-flex rounded-full bg-[#ffd500] px-6 py-3.5 text-sm font-semibold text-[#333333] shadow-[0_10px_28px_rgba(255,213,0,0.24)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Discuss an Opportunity
            </a>
          </div>
        </section>

        <section className="grid gap-10 py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,1.1fr)] lg:py-16">
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2 border-b border-black/10 pb-6">
              {filters.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => handleFilterChange(item.value)}
                  aria-pressed={filter === item.value}
                  className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${filter === item.value
                    ? 'border-[#333333] bg-[#333333] text-white'
                    : 'border-[#333333]/15 bg-white text-[#475569] hover:border-[#333333]/40 hover:text-[#333333]'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-6 max-h-[48rem] space-y-4 overflow-y-auto pr-2 [scrollbar-color:#333333_#f7f8f9]">
              {filteredDeals.length > 0 ? filteredDeals.map((deal) => {
                const isSelected = selectedDeal.title === deal.title;

                return (
                  <button
                    key={deal.title}
                    type="button"
                    onClick={() => setSelectedTitle(deal.title)}
                    aria-pressed={isSelected}
                    className={`group flex w-full flex-col gap-4 rounded-[20px] border bg-white p-3 text-left transition-[border-color,box-shadow,transform] duration-300 ease-out sm:flex-row ${isSelected
                      ? 'border-[#333333] shadow-[0_14px_35px_rgba(51,51,51,0.12)]'
                      : 'border-black/10 hover:-translate-y-0.5 hover:border-[#333333]/35 hover:shadow-[0_10px_25px_rgba(51,51,51,0.08)]'}`}
                  >
                    <div className="relative h-44 shrink-0 overflow-hidden rounded-[14px] bg-[#f0f0f0] sm:h-[140px] sm:w-[180px]">
                      <Image src={deal.image} alt={deal.alt} fill sizes="(min-width: 640px) 180px, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col py-1 sm:py-2">
                      <div className="flex items-center justify-between gap-4">
                        <span className="rounded-md bg-[#f0f0f0] px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                          {deal.status}
                        </span>
                        <span className="text-xl text-[#64748b] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden>
                          &nearr;
                        </span>
                      </div>
                      <h2 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-[#222222]">{deal.title}</h2>
                      <p className="mt-2 text-sm text-[#64748b]">{deal.location}</p>
                      <p className="mt-auto pt-4 text-lg font-semibold text-[#222222]">{deal.price}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {deal.amenities.map((amenity) => (
                          <span key={amenity} className="rounded-full border border-black/10 px-2.5 py-1 text-xs text-[#64748b]">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                );
              }) : (
                <div className="rounded-[20px] border border-dashed border-black/15 p-8 text-[#475569]">
                  <p className="text-lg font-semibold text-[#222222]">No finance listings are live right now.</p>
                  <p className="mt-3 max-w-md leading-7">Contact us to discuss a financing mandate or to receive the next available opportunity pipeline.</p>
                  <a
                    href="mailto:hello@avinellcantagali.com?subject=Finance%20Available%20Inquiry"
                    className="mt-5 inline-flex rounded-full border border-[#333333]/20 px-4 py-2.5 text-sm font-semibold text-[#333333] transition-colors duration-200 hover:bg-[#333333] hover:text-white"
                  >
                    Ask About Finance
                  </a>
                </div>
              )}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative min-h-[460px] overflow-hidden rounded-[24px] bg-[#333333] sm:min-h-[560px]">
              <Image
                key={selectedDeal.image}
                src={selectedDeal.image}
                alt={selectedDeal.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-opacity duration-300"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(51,51,51,0.05),rgba(51,51,51,0.78))]" />
              <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#333333]">
                Featured opportunity
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-[18px] bg-white/95 p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#64748b]">{selectedDeal.status}</p>
                  <span className="text-xs text-[#64748b]">{selectedDeal.location}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#333333]">{selectedDeal.title}</h2>
                <p className="mt-2 text-lg font-medium text-[#333333]">{selectedDeal.price}</p>
                <a
                  href={`mailto:hello@avinellcantagali.com?subject=${encodeURIComponent(`${selectedDeal.title} Inquiry`)}`}
                  className="mt-5 inline-flex rounded-full bg-[#ffd500] px-4 py-2.5 text-sm font-semibold text-[#333333] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Request details
                </a>
              </div>
            </div>
          </aside>
        </section>

        <footer className="border-t border-black/10 pt-6 text-sm text-[#64748b]">
          CRE Advisory Firm - AvinellCantagali
        </footer>
      </div>
    </main>
  );
}
