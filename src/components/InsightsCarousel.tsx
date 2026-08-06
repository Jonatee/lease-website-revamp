'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

type InsightCard = {
  title: string;
  image: string;
  href: string;
};

type InsightsCarouselProps = {
  cards: InsightCard[];
};

export default function InsightsCarousel({ cards }: InsightsCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      const scroller = scrollerRef.current;

      if (!scroller || pausedRef.current || document.hidden) {
        return;
      }

      const step = scroller.clientWidth * 0.78;
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;

      if (scroller.scrollLeft >= maxScroll - 8) {
        scroller.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scroller.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const move = (direction: number) => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    scroller.scrollBy({
      left: direction * scroller.clientWidth * 0.78,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="relative mt-8"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
      onFocus={() => {
        pausedRef.current = true;
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          pausedRef.current = false;
        }
      }}
    >
      <div className="mb-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => move(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#333333]/20 bg-white text-lg text-[#333333] transition-colors hover:bg-[#f1f1f1]"
          aria-label="Previous insight"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd500] text-lg text-[#333333] transition-transform hover:-translate-y-0.5"
          aria-label="Next insight"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="insights-scroller flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5"
        aria-label="News and insights carousel"
      >
        {cards.map((card) => (
          <article
            key={card.title}
            className="w-[88vw] shrink-0 snap-start overflow-hidden rounded-[26px] bg-white shadow-sm ring-1 ring-black/5 sm:w-[52vw] lg:w-[32%]"
          >
            <a href={card.href} aria-label={`Read ${card.title}`}>
              <div className="relative h-52">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 52vw, 88vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </a>
            <div className="p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-[#64748b]">Insight</p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[#222222]">
                <a href={card.href} className="transition-colors hover:text-[#64748b]">
                  {card.title}
                </a>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
