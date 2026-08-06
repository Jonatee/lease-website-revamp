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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);

    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('scroll', updateScrollState);
    };
  }, []);

  const toggleDropdown = (key: string) => {
    setActiveDropdown((current) => (current === key ? null : key));
  };

  const closeNavigation = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  const renderDropdown = (menu: (typeof menus)[number], mobile = false) => {
    const isOpen = activeDropdown === menu.key;

    return (
      <div key={menu.key} className={mobile ? 'w-full' : 'relative'}>
        <button
          type="button"
          onClick={() => toggleDropdown(menu.key)}
          className={mobile
            ? 'flex w-full items-center justify-between border-b border-black/10 py-4 text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#475569]'
            : 'inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#64748b] transition-colors hover:text-[#333333]'}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {menu.label}
          <span className={`h-1.5 w-1.5 rotate-45 border-b border-r border-current transition-transform ${isOpen ? 'rotate-[225deg]' : ''}`} aria-hidden />
        </button>

          <div
            className={mobile
              ? `overflow-hidden pl-3 transition-[max-height,opacity] duration-300 ease-out ${isOpen ? 'max-h-96 py-2 opacity-100' : 'pointer-events-none max-h-0 opacity-0'}`
              : `absolute left-1/2 top-full z-30 mt-4 w-48 -translate-x-1/2 rounded-xl border border-black/10 bg-white p-2 normal-case tracking-normal shadow-[0_18px_40px_rgba(51,51,51,0.14)] transition-[opacity,transform,visibility] duration-[250ms] ease-out ${isOpen ? 'visible translate-y-0 scale-100 opacity-100' : 'pointer-events-none invisible -translate-y-1 scale-95 opacity-0'}`}
          >
          {menu.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeNavigation}
              className="dropdown-item block rounded-lg px-3 py-2.5 text-sm font-medium text-[#475569] transition-colors hover:bg-[#f7f8f9] hover:text-[#333333]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <header
      ref={headerRef}
      className={`sticky z-50 transition-[top,background-color,border-color,border-radius,box-shadow,padding] duration-300 ease-out ${
        isScrolled
          ? 'top-3 rounded-[9999px] border border-black/10 bg-white/75 px-3 py-2.5 shadow-[0_14px_40px_rgba(51,51,51,0.12)] backdrop-blur-xl sm:px-4 sm:py-3'
          : 'top-0 border-b border-black/5 pb-4'
      }`}
    >
      <div className={`flex items-center gap-4 ${isScrolled ? 'justify-center' : 'justify-between'}`}>
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/images/Avinell-Cantagali-logo.png"
            alt="Avinell Cantagali"
            width={170}
            height={42}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {menus.map((menu) => renderDropdown(menu))}
          {directLinks.map((item) => (
            <a key={item.label} href={item.href} className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#64748b] transition-colors hover:text-[#333333]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-[#64748b] xl:inline">Capital Advisory | Lagos</span>
          <Link
            href="/#contact"
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#ffd500] font-semibold text-[#333333] shadow-[0_12px_30px_rgba(255,213,0,0.24)] transition-[padding,font-size,transform] duration-300 hover:-translate-y-0.5 ${isScrolled ? 'px-3 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm' : 'px-4 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm'}`}
          >
            Book Consultation
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#333333]/20 text-[#333333] lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          >
            <span aria-hidden="true" className="text-xl leading-none">{mobileOpen ? '×' : '≡'}</span>
          </button>
        </div>
      </div>

      <nav
        className={`overflow-hidden transition-[max-height,margin,padding,opacity] duration-300 ease-out lg:hidden ${mobileOpen ? 'mt-4 max-h-[40rem] border-t border-black/10 pt-2 opacity-100' : 'pointer-events-none max-h-0 border-t-0 pt-0 opacity-0'}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
          {menus.map((menu) => renderDropdown(menu, true))}
          {directLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeNavigation}
              className="block border-b border-black/10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#475569]"
            >
              {item.label}
            </a>
          ))}
      </nav>
    </header>
  );
}
