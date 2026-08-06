'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type MenuItem = {
  label: string;
  href: string;
};

const menus: Array<{ key: string; label: string; items: MenuItem[] }> = [
  {
    key: 'about',
    label: 'About',
    items: [
      { label: 'Our Firm', href: '/vision/' },
      { label: 'What We Do', href: '/what-we-do/' },
      { label: 'Our Team', href: '/team/' },
      { label: 'Governance', href: '/governance-capital/' },
      { label: 'Insights', href: '/insights/' },
    ],
  },
  {
    key: 'property',
    label: 'Property',
    items: [
      { label: 'Dispose', href: '/dispose/' },
      { label: 'Lease', href: '/lease/' },
      { label: 'Acquire', href: '/acquire/' },
      { label: 'Active Deals', href: '/active-deals/' },
    ],
  },
  {
    key: 'capital',
    label: 'Capital',
    items: [
      { label: 'Finance', href: '/acquire-to-lease/' },
      { label: 'Deploy', href: '/investment-mandate-template/' },
    ],
  },
];

const directLinks = [
  { label: 'Insights', href: '/insights/' },
  { label: 'Contact', href: '/#contact' },
];

export default function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(80);

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        setNavbarHeight(rect.bottom);
      }
    };
    
    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24);
      requestAnimationFrame(updateNavbarHeight);
    };
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setActiveDesktopDropdown(null);
        setActiveMobileDropdown(null);
        setMobileOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDesktopDropdown(null);
        setActiveMobileDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
      window.removeEventListener('scroll', updateScrollState);
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('body-scroll-lock');
    } else {
      document.body.classList.remove('body-scroll-lock');
    }
    return () => {
      document.body.classList.remove('body-scroll-lock');
    };
  }, [mobileOpen]);

  const closeNavigation = () => {
    setActiveDesktopDropdown(null);
    setActiveMobileDropdown(null);
    setMobileOpen(false);
  };

  const toggleDesktopDropdown = (key: string) => {
    setActiveDesktopDropdown((current) => (current === key ? null : key));
  };

  const toggleMobileDropdown = (key: string) => {
    setActiveMobileDropdown((current) => (current === key ? null : key));
  };

  return (
    <header
      ref={headerRef}
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ease-out ${
        isScrolled ? 'pt-3 px-4 sm:px-6 lg:px-8' : 'pt-0 px-0'
      }`}
    >
      <div
        ref={navbarRef}
        className={`relative z-50 mx-auto w-full transition-all duration-300 ease-out ${
          isScrolled
            ? 'max-w-7xl rounded-full border border-black/10 bg-white/80 py-2.5 px-6 shadow-[0_14px_40px_rgba(51,51,51,0.12)] backdrop-blur-xl'
            : 'border-b border-black/5 bg-white/40 py-4 px-6 md:px-12 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center" onClick={closeNavigation}>
            <Image
              src="/images/Avinell-Cantagali-logo.png"
              alt="Avinell Cantagali"
              width={170}
              height={42}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {menus.map((menu) => {
              const isOpen = activeDesktopDropdown === menu.key;
              return (
                <div key={menu.key} className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDesktopDropdown(menu.key)}
                    className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#64748b] transition-colors hover:text-[#333333] cursor-pointer"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {menu.label}
                    <span
                      className={`h-1.5 w-1.5 rotate-45 border-b border-r border-current transition-transform duration-200 ${
                        isOpen ? 'rotate-[225deg]' : ''
                      }`}
                      aria-hidden
                    />
                  </button>

                  <div
                    className={`absolute left-1/2 top-full z-30 mt-4 w-48 -translate-x-1/2 rounded-xl border border-black/10 bg-white p-2 normal-case tracking-normal shadow-[0_18px_40px_rgba(51,51,51,0.14)] transition-all duration-[250ms] ease-out ${
                      isOpen
                        ? 'visible translate-y-0 scale-100 opacity-100'
                        : 'pointer-events-none invisible -translate-y-1 scale-95 opacity-0'
                    }`}
                  >
                    {menu.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeNavigation}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#475569] transition-colors hover:bg-[#f7f8f9] hover:text-[#333333]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            {directLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#64748b] transition-colors hover:text-[#333333]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action / Toggle Buttons */}
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-[#64748b] xl:inline">Capital Advisory | Lagos</span>
            <Link
              href="/#contact"
              onClick={closeNavigation}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#ffd500] font-semibold text-[#333333] shadow-[0_12px_30px_rgba(255,213,0,0.24)] transition-all duration-300 hover:-translate-y-0.5 ${
                isScrolled
                  ? 'px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm'
                  : 'px-5 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-sm'
              }`}
            >
              Book Consultation
            </Link>

            {/* Mobile Hamburger / Close Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#333333]/20 text-[#333333] transition-colors hover:bg-black/5 focus:outline-none lg:hidden"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            >
              <div className="relative h-4 w-4">
                <span
                  className={`absolute left-0 block h-0.5 w-4 bg-[#333333] transition-all duration-300 ease-in-out ${
                    mobileOpen ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-4 bg-[#333333] transition-all duration-300 ease-in-out ${
                    mobileOpen ? 'opacity-0' : 'top-1.5'
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-4 bg-[#333333] transition-all duration-300 ease-in-out ${
                    mobileOpen ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out lg:hidden flex flex-col justify-between overflow-y-auto ${
          mobileOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
        style={{ paddingTop: `${navbarHeight}px` }}
      >
        <div className="flex-1 px-6 py-8 space-y-4">
          <nav aria-label="Mobile navigation">
            {menus.map((menu) => {
              const isOpen = activeMobileDropdown === menu.key;
              return (
                <div key={menu.key} className="w-full">
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(menu.key)}
                    className="flex w-full items-center justify-between border-b border-black/10 py-4 text-left text-base font-semibold uppercase tracking-[0.15em] text-[#333333]"
                  >
                    <span>{menu.label}</span>
                    <span
                      className={`h-2 w-2 rotate-45 border-b-2 border-r-2 border-[#333333] transition-transform duration-300 ${
                        isOpen ? 'rotate-[225deg]' : ''
                      }`}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[350px] opacity-100 py-2' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    {menu.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeNavigation}
                        className="block py-2.5 pl-4 text-sm font-medium text-[#64748b] transition-colors hover:text-[#333333]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            {directLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeNavigation}
                className="block border-b border-black/10 py-4 text-base font-semibold uppercase tracking-[0.15em] text-[#333333]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="bg-[#f7f8f9] px-6 py-8 border-t border-black/5 space-y-4">
          <div className="text-xs uppercase tracking-[0.2em] text-[#64748b] font-semibold">
            Capital Advisory | Lagos
          </div>
          <div className="flex flex-col gap-2 text-sm text-[#475569]">
            <a href="mailto:hello@avinellcantagali.com" className="hover:text-[#333333]">
              hello@avinellcantagali.com
            </a>
            <a href="tel:+16285009670" className="hover:text-[#333333]">
              +1 (628) 500-9670
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
