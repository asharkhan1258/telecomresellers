import { cache } from "react";
import { get } from "@vercel/global-config";
import { site } from "./site-config";

// ---------------------------------------------------------------------------
// The live phone number is read from Vercel Global Config (formerly Edge
// Config) on every request, so it can be changed from the Vercel dashboard
// with no code push and no redeploy. Propagation is global within ~10s.
//
// Uses @vercel/global-config, which reads the GLOBAL_CONFIG connection string
// and falls back to the legacy EDGE_CONFIG name — so it works with stores
// connected either before or after Vercel's rename. The older
// @vercel/edge-config package only reads EDGE_CONFIG and cannot see a store
// connected today.
//
// Expected shape of the "phone" key in the store:
//   { "display": "(833) 847-5497", "href": "+18338475497" }
//
// If the store is unreachable, unset, or malformed we fall back to the values
// in site-config.js rather than rendering an empty call-to-action — a blank
// phone CTA on a paid-traffic landing page is worse than a stale one.
// ---------------------------------------------------------------------------

const FALLBACK = Object.freeze({
  display: site.phoneDisplay,
  href: site.phoneHref,
});

// cache() dedupes the read so a single request renders one consistent number
// even though several components ask for it independently.
export const getPhone = cache(async () => {
  try {
    const value = await get("phone");

    if (
      value &&
      typeof value.display === "string" &&
      typeof value.href === "string" &&
      value.display.trim() &&
      value.href.trim()
    ) {
      return { display: value.display.trim(), href: value.href.trim() };
    }
  } catch (err) {
    // No EDGE_CONFIG connection string (e.g. local dev) or a transient read
    // failure. Fall through to FALLBACK.
    if (process.env.NODE_ENV !== "production") {
      console.warn("[phone] Global Config unavailable, using fallback:", err?.message);
    }
  }

  return FALLBACK;
});
