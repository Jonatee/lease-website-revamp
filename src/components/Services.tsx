'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'Capital Advisory',
    description: 'Strategic guidance for capital raising, deal structuring, and investment strategy across African and global markets.',
    color: 'bg-[#0E1726]',
  },
  {
    title: 'Private Equity',
    description: 'Access to curated private equity opportunities and fund placements for institutional and high-net-worth investors.',
    color: 'bg-[#B58A55]',
  },
  {
    title: 'Real Estate Investments',
    description: 'Premium commercial real estate acquisitions, dispositions, and asset stabilization across key markets.',
    color: 'bg-[#0E1726]',
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="elementor-section elementor-top-section elementor-section-full_width elementor-section-height-default">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="services">
              <div className="container">
                <div className="services-container" style={{ scrollBehavior: 'smooth' }}>
                  <div className="main-content">
                    <h2>Purpose-Built to Bridge Capital</h2>
                    <p>
                      We are a trusted bridge between capital and opportunity, enabling entrepreneurs, investors, and
                      institutions to access high-quality investment opportunities across global markets. With a focus
                      on real estate, private equity, and fund placements, we help family offices and high-net-worth
                      individuals deploy and raise capital through a seamless, strategic model.
                    </p>
                    <p>
                      By doing so, we elevate Africa&apos;s presence in global investing—empowering its leaders to
                      shape and participate in world&apos;s most influential capital flows.
                    </p>
                  </div>

                  <div className="accordion-wrapper">
                    {services.map((service, index) => (
                      <div
                        key={service.title}
                        className={`service-card ${openIndex === index ? 'active-form' : ''}`}
                      >
                        <div className="service-head" onClick={() => toggle(index)}>
                          <h3>{service.title}</h3>
                          <div className={`service-arrow ${openIndex === index ? 'expanded' : ''}`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>

                        <div className={`expanded-content ${openIndex === index ? 'show' : ''}`}>
                          <div className="expanded-text">
                            <p>{service.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="lease-cta">
                    <h3>Leasing & Asset Stabilization</h3>
                    <p>
                      We also work with landlords and developers across Nigeria to lease commercial and mixed-use assets
                      to credible, high-quality tenants—securing optimal terms, reducing vacancy risk, and enhancing
                      long-term asset value.
                    </p>
                    <a href="/lease/" className="lease-cta-btn">
                      Explore Leasing Services
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="services-content">
                  <div className="content-wrapper">
                    <div className="image-container">
                      <div className="services-img">
                        <img src="/images/Advisory.jpg" alt="Avinell Services" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
