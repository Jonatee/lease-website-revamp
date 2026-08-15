'use client';

import { useEffect, useRef, useState } from 'react';

const articles = [
  {
    title: 'Peckham Rising: Why London\'s Next Commercial Breakout Lies South of the River By Avinell',
    href: '/insights/peckham-rising-why-londons-next-commercial-breakout-lies-south-of-the-river-by-avinell/',
    image: '/images/Peckham-1-1.jpeg',
    category: 'Articles',
  },
  {
    title: 'Navigating Financing and Yield in Commercial Real Estate Amid Global Inflation',
    href: '/insights/navigating-financing-and-yield-in-commercial-real-estate-amid-globalinflation/',
    image: '/images/Navigating-Financing-and-Yield-in-Commercial-Real-Estate-Amid-Global-Inflation_2.jpg',
    category: 'Articles',
  },
  {
    title: 'Monaco Commercial Real Estate Office Outlook 2024',
    href: '/insights/monaco-commercial-real-estate-office-outlook-2024/',
    image: '/images/Monaco-Commercial-Real-Estate-Office-Outlook-2024_1.jpg',
    category: 'Articles',
  },
  {
    title: 'MIPIM Cannes 2024: A Comprehensive Review',
    href: '/insights/mipim-cannes-2024-a-comprehensive-review/',
    image: '/images/Mipim-Cannes-2024_2.jpg',
    category: 'Articles',
  },
  {
    title: 'Maximizing Hotel Yield in Lagos, Nigeria: Strategies for Success in a Dynamic Market',
    href: '/insights/maximizing-hotel-yield-in-lagos-nigeria-strategies-for-success-in-adynamic-market/',
    image: '/images/downloaded-lagos-aerial.jpg',
    category: 'Articles',
  },
  {
    title: 'Hudson Yards: A Snapshot of Commercial Tenancy and the Future of New York\'s Mega Development',
    href: '/insights/hudson-yards-a-snapshot-of-commercial-tenancy-and-the-future-of-new-yorks-mega-development/',
    image: '/images/Hudson-Yards-A-Snapshot-of-Commercial-Tenancy-_1.jpg',
    category: 'Articles',
  },
  {
    title: 'Commercial Retrofit in London: Transforming Buildings for a Sustainable Future',
    href: '/insights/commercial-retrofit-in-london-transforming-buildings-for-a-sustainablefuture/',
    image: '/images/Commercial-Retrofit-in-London-Transforming-Buildings-for-a-Sustainable-Future_2.jpg',
    category: 'Articles',
  },
  {
    title: 'Cannes Hospitality Real Estate Market: A 2024 Perspective',
    href: '/insights/cannes-hospitality-real-estate-market-a-2024-perspective/',
    image: '/images/Cannes-Hospitality-Real-Estate-Market_1.jpg',
    category: 'Articles',
  },
  {
    title: 'Billionaires and Family Offices: The Strategic Role of Commercial Real Estate in Wealth Preservation and Growth',
    href: '/insights/billionaires-and-family-offices-the-strategic-role-of-commercial-real-estate-in-wealth-preservation-and-growth/',
    image: '/images/Billionaires-and-Family-Offices_1.jpg',
    category: 'Articles',
  },
];

export default function NewsInsights() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (trackRef.current) {
      const slidesPerView = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 4;
      const offset = currentIndex * (100 / slidesPerView);
      trackRef.current.style.transform = `translateX(-${offset}%)`;
    }
  }, [currentIndex]);

  return (
    <section className="elementor-section elementor-top-section elementor-section-content-middle elementor-section-full_width elementor-section-height-default" style={{ backgroundColor: '#f7f8f9' }}>
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-586a1a1 elementor-widget elementor-widget-houzez_elementor_section_title">
              <div className="elementor-widget-container">
                <div className="houzez_section_title_wrap section-title-module">
                  <h2 className="houzez_section_title" style={{ textAlign: 'center' }}>News and insights</h2>
                </div>
              </div>
            </div>

            <div className="carousel-container">
              <div className="carousel-track" ref={trackRef}>
                {articles.map((article, i) => (
                  <div key={i} className="carousel-slide">
                    <div className="news-card">
                      <img src={article.image} alt={article.title} className="news-card-image" />
                      <div className="news-card-body">
                        <div className="news-card-category">{article.category}</div>
                        <h3 className="news-card-title">
                          <a href={article.href}>{article.title}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="carousel-nav">
                {articles.map((_, i) => (
                  <button
                    key={i}
                    className={`carousel-dot ${i === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
