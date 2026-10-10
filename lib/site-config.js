export const site = {
  brandName: "Telecom Resellers",
  legalName: "Global Marketing Solutions Group LLC",
  authorizedRep: "Solomon Zia",
  domain: "telecomresellers.com",
  tagline: "Straight answers on internet, before you sign anything.",
  shortDescription:
    "Telecom Resellers helps households compare internet providers and plans available at their address, and connects them with a provider's ordering team to complete sign-up.",
  // -------------------------------------------------------------------------
  // FALLBACK ONLY — do not edit this to change the live number.
  //
  // The number shown on the site is read at request time from Vercel Global
  // Config (see lib/phone.js). Change it in the Vercel dashboard instead:
  // Storage -> your Global Config store -> the "phone" key. It goes live
  // globally in ~10s with no push and no redeploy.
  //
  // These values are used only if the store is unreachable or unset.
  //
  // Numbers previously rotated here, for pasting into the dashboard:
  //   (888) 369-2167  ->  +18883692167
  //   (888) 834-5722  ->  +18888345722   (personal)
  // -------------------------------------------------------------------------
  phoneDisplay: "(833) 847-5497",
  phoneHref: "+18338475497",
  email: "support@telecomresellers.com",
  address: {
    line1: "25320 Whippoorwill Ter",
    city: "South Riding",
    state: "VA",
    zip: "20152",
    country: "United States",
  },
  hours: "Mon–Fri, 8:00 AM – 8:00 PM ET · Sat, 9:00 AM – 5:00 PM ET",
  socials: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/internet", label: "Internet Plans" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export const policyLinks = [
  { href: "/policies/disclaimer", label: "Disclaimer" },
  { href: "/policies/privacy-policy", label: "Privacy Policy" },
  { href: "/policies/terms-of-service", label: "Terms of Service" },
  { href: "/policies/acceptable-use-policy", label: "Acceptable Use Policy" },
  { href: "/policies/refund-and-cancellation-policy", label: "Refund & Cancellation Policy" },
  { href: "/policies/cookie-policy", label: "Cookie Policy" },
  { href: "/policies/advertising-disclosure", label: "Advertising Disclosure" },
];
