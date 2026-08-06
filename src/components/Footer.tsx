import Link from 'next/link';

export default function Footer() {
  return (
    <footer data-elementor-type="footer" data-elementor-id="19793" className="elementor elementor-19793 elementor-location-footer" data-elementor-post-type="elementor_library">
      <section className="elementor-section elementor-top-section elementor-section-full_width elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-f872b9a elementor-widget elementor-widget-html">
                <div className="elementor-widget-container">
                  <div className="avinell-footer-wrapper">
                    <footer className="avinell-footer">
                      <div className="footer-grid">
                        <div>
                          <div className="footer-col-title">Company</div>
                          <Link className="footer-link" href="/careers/">Careers</Link>
                          <Link className="footer-link" href="/equality-diversity/">Equality &amp; Diversity</Link>
                          <Link className="footer-link" href="/fraud-prevention-security-awareness/">Fraud Prevention</Link>
                          <Link className="footer-link" href="/privacy-policy/">Privacy Policy</Link>
                        </div>
                        <div>
                          <div className="footer-col-title">Partners</div>
                          <Link className="footer-link" href="/avinell-partner-network/">Partner Network</Link>
                          <Link className="footer-link" href="/avinell-lender-partner-network/">Lender Partners</Link>
                          <Link className="footer-link" href="/strategic-partnerships/">Strategic Partners</Link>
                        </div>
                        <div>
                          <div className="footer-col-title">Compliance</div>
                          <Link className="footer-link" href="/enhanced-kyc-form/">KYC Form</Link>
                          <Link className="footer-link" href="/avinell-aml-innovation-protocol/">AML Protocol</Link>
                        </div>
                        <div>
                          <div className="footer-col-title">Connect</div>
                          <a className="footer-link" href="https://www.linkedin.com/company/avinell-cantagali/" target="_blank" rel="noopener noreferrer" aria-label="Visit Avinell Cantagali on LinkedIn">LinkedIn</a>
                          <a className="footer-link" href="https://wa.link/u2pnv7" target="_blank" rel="noopener noreferrer" aria-label="Chat with Avinell Cantagali on WhatsApp">WhatsApp</a>
                          <a className="footer-link" href="https://www.instagram.com/avinellcantagali/" target="_blank" rel="noopener noreferrer" aria-label="Visit Avinell Cantagali on Instagram">Instagram</a>
                          <Link className="footer-link" href="/contact-us/">Contact Us</Link>
                        </div>
                      </div>

                      <div className="footer-bottom">
                        <div className="footer-brand">
                          <img src="/images/Avinell-Cantagali-logo.png" alt="Avinell Logo" />
                        </div>
                        <div className="footer-copy">© Copyright 2026 Avinell Group. Lagos.</div>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
