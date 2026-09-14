# Telecom Resellers (telecomresellers.com) — Next.js site

A 5-page marketing site for Global Marketing Solutions Group LLC's internet
provider comparison/lead-gen business: Home, Internet Plans, About Us,
Contact Us, plus six policy pages linked from a "Policies" menu in the header
and footer (Privacy Policy, Terms of Service, Acceptable Use Policy, Refund &
Cancellation Policy, Cookie Policy, Advertising Disclosure).

Built with Next.js 14 (App Router), React 18, and Tailwind CSS. No database —
it's a static/marketing site with one client-side lead form.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production build
```

The first build needs internet access to fetch Space Grotesk and Inter from
Google Fonts (via `next/font/google`) — normal on your machine or on Vercel,
just not inside this sandbox.

## Business details are already filled in

`lib/site-config.js` holds every brand-specific value — business name, legal
entity, phone, mailing address — and it flows through the header, footer,
About page, and every policy page. It's already set to your real details:

- Brand: Telecom Resellers
- Legal entity: Global Marketing Solutions Group LLC
- Address: 25320 Whippoorwill Ter, South Riding, VA 20152
- Phone: (888) 369-2167
- Authorized representative: Solomon Zia (shown on the About page)

**One value is still a placeholder:** `support@telecomresellers.com`. I
generated that from your domain since you haven't given me a real inbox —
swap it for your actual support address in `lib/site-config.js` before
launch, or tell me the real one and I'll update it.

If you're operating this site as an authorized dealer for a specific carrier
(Verizon, Frontier, EarthLink, etc.) rather than a neutral multi-provider
comparison, say so and I'll adjust the About page and Advertising Disclosure
wording to match — right now they're written as a neutral comparison site.

## Wiring the contact form

`components/ContactForm.js` is fully built (validation, consent checkbox,
success state) but its `submitLead()` function only logs to the console right
now — nothing is sent anywhere yet. Point it at whichever backend you use for
leads: an API route + email service, EmailJS, or a CRM webhook.

## Google Ads compliance — what's already handled, what you still need to do

Google Ads reviews both the ad and the landing page for lead-gen/telecom
sites. This template was built with the "Unacceptable Business Practices" and
misrepresentation policies in mind:

**Already in the template:**
- Business legal name, physical address, and phone number visible in the
  header utility bar and footer on every page (not buried).
- Clear, repeated disclosure that the site is an independent advisory
  service and *not* the internet provider — on the homepage, About page, and
  in a dedicated Advertising Disclosure policy.
- No countdown timers, fake scarcity, or auto-checked opt-ins.
- Pricing always shown as a range/estimate with an explicit "starting from,
  not a quote" disclaimer next to it.
- A TCPA-style consent statement above the submit button on every lead form,
  and it's unticked by default.
- Working Privacy Policy, Terms, Acceptable Use, Refund/Cancellation,
  Cookie, and Advertising Disclosure pages, all reachable in two clicks from
  any page.

**You still need to:**
- Have a licensed attorney review the policy pages for your actual state,
  entity type, and how you handle data — the text here is a solid starting
  draft, not legal advice.
- If you resell or are an authorized dealer for a specific carrier (like
  Verizon, Frontier, EarthLink, etc.), say so explicitly and follow that
  carrier's brand-usage and co-marketing rules — this template is written as
  a neutral, multi-provider comparison site.
- Confirm your Google Ads account's business information matches the legal
  name/address/phone on this site exactly.
- Add a real cookie-consent banner if you enable analytics/ad cookies for
  visitors in regions that require opt-in consent (GDPR/UK, and increasingly
  US state laws) — the Cookie Policy describes this but doesn't implement a
  banner yet.

## Structure

```
app/
  layout.js              root layout, fonts, metadata
  page.js                home
  internet/page.js
  about/page.js
  contact/page.js
  policies/<slug>/page.js  six policy pages
  sitemap.js
components/
  Header.js               nav + Policies dropdown
  Footer.js                legal/contact block on every page
  ContactForm.js           shared lead form
  PolicyLayout.js          shared wrapper for policy pages
  ui.js                    small shared UI primitives
lib/site-config.js         all brand/business values — edit this first
```

## Deploying

Push to a GitHub repo and import it in Vercel (or any Next.js host). No
environment variables are required until you wire up the contact form to a
real backend.
