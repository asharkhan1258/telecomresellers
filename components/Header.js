"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { site, navLinks, policyLinks } from "@/lib/site-config";

export default function Header() {
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const policiesRef = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (policiesRef.current && !policiesRef.current.contains(e.target)) {
        setPoliciesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b rule">
      {/* utility strip — required for Google Ads: business identity always visible */}
      <div className="hidden md:flex items-center justify-end gap-6 container-px py-1.5 text-xs text-ink/70 border-b rule">
        <span>{site.legalName}</span>
        <a href={`tel:${site.phoneHref}`} className="hover:text-steel">
          {site.phoneDisplay}
        </a>
      </div>

      <div className="container-px flex items-center justify-between h-16 md:h-[72px]">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <BridgeMark />
          <span className="font-display font-semibold text-lg tracking-tight text-ink">
            {site.brandName}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-body text-[0.95rem]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-ink/80 hover:text-steel transition-colors">
              {link.label}
            </Link>
          ))}

          <div className="relative" ref={policiesRef}>
            <button
              type="button"
              onClick={() => setPoliciesOpen((v) => !v)}
              aria-expanded={policiesOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 text-ink/80 hover:text-steel transition-colors"
            >
              Policies
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${policiesOpen ? "rotate-180" : ""}`}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {policiesOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-white border rule shadow-lg py-2">
                {policyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setPoliciesOpen(false)}
                    className="block px-4 py-2 text-sm text-ink/80 hover:bg-paper hover:text-steel"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center gap-2 bg-steel text-white px-5 py-2.5 text-sm font-medium hover:bg-steel-dark transition-colors"
          >
            Call {site.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="#16202B" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="#16202B" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t rule bg-paper">
          <nav className="container-px py-4 flex flex-col gap-1 font-body">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-ink/85 border-b rule"
              >
                {link.label}
              </Link>
            ))}
            <p className="pt-4 pb-1 text-xs uppercase tracking-wide text-ink/50">Policies</p>
            {policyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm text-ink/70"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phoneHref}`}
              className="mt-4 inline-flex justify-center items-center gap-2 bg-steel text-white px-5 py-3 text-sm font-medium"
            >
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function BridgeMark() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <circle cx="15" cy="15" r="14" stroke="#1F4E79" strokeWidth="1.4" />
      <path d="M6 18C9 12 12 12 15 15C18 18 21 18 24 12" stroke="#E8A33D" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="6" cy="18" r="1.6" fill="#1F4E79" />
      <circle cx="24" cy="12" r="1.6" fill="#1F4E79" />
    </svg>
  );
}
