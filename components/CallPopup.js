"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site-config";

const STORAGE_KEY = "tr_call_popup_dismissed";
const SHOW_DELAY_MS = 2500;

export default function CallPopup() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) return;

    let dismissed = false;
    try {
      dismissed = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch (e) {
      dismissed = false;
    }
    if (dismissed) return;

    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch (e) {
      /* storage unavailable — popup simply reappears next visit */
    }
  }

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();

    function onKeyDown(e) {
      if (e.key === "Escape") dismiss();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] md:hidden" role="dialog" aria-modal="true" aria-labelledby="call-popup-title">
      <button
        type="button"
        aria-label="Close"
        onClick={dismiss}
        className="absolute inset-0 w-full h-full bg-ink/70 cursor-default"
      />

      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2">
        <div className="relative bg-white shadow-2xl overflow-hidden">
          <button
            ref={closeRef}
            type="button"
            onClick={dismiss}
            aria-label="Close this message"
            className="absolute top-2 right-2 z-10 flex items-center justify-center w-10 h-10 text-white/90 hover:text-white text-2xl leading-none"
          >
            &times;
          </button>

          <div className="bg-[#000000] px-6 pt-7 pb-6 text-center">
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/60">
              {site.brandName} · Independent support line
            </p>
            <h2
              id="call-popup-title"
              className="mt-3 font-display font-semibold text-[1.4rem] leading-snug text-white"
            >
              Call Us for Billing Questions or to Resolve a Service Issue
            </h2>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Speak with an advisor about your internet options, billing questions, or an
              issue you're having — and we'll point you to the right place.
            </p>
          </div>

          <a
            href={`tel:${site.phoneHref}`}
            onClick={dismiss}
            className="block bg-[#EE0000] active:bg-[#CC0000] px-6 py-5 text-center"
          >
            <span className="block text-xs uppercase tracking-wide text-white/80">
              Tap to call
            </span>
            <span className="mt-1 block font-display font-bold text-[1.75rem] text-white">
              {site.phoneDisplay}
            </span>
          </a>

          <div className="px-6 py-4 text-center">
            <p className="text-xs text-ink/55 leading-relaxed">{site.hours}</p>
            <p className="mt-2 text-[11px] text-ink/45 leading-relaxed">
              {site.legalName} is an independent advisory service and is not an internet
              service provider. We are not affiliated with, endorsed by, or acting on behalf
              of any provider. Your account and bill remain with your provider.
            </p>
            <button
              type="button"
              onClick={dismiss}
              className="mt-3 text-xs text-ink/60 underline hover:text-ink"
            >
              No thanks, continue browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
