import Link from "next/link";
import { SectionHeading, ButtonLink, PhoneCTA } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import Disclaimer from "@/components/Disclaimer";
import CallPopup from "@/components/CallPopup";
import { site } from "@/lib/site-config";

const steps = [
  {
    n: "01",
    title: "Enter your address",
    body: "We check which providers actually run lines to your building — not just your zip code.",
  },
  {
    n: "02",
    title: "Compare real plans",
    body: "See speeds, monthly price, contract length, and equipment fees side by side, before you commit to anything.",
  },
  {
    n: "03",
    title: "Talk to a real person",
    body: "If a plan looks right, we connect you directly with that provider's ordering line. You order with them, not us.",
  },
];

const planSnapshot = [
  { tier: "Home Starter", speed: "100 Mbps", best: "Browsing, email, one or two devices", from: "$40" },
  { tier: "Home Plus", speed: "300 Mbps", best: "Streaming and video calls across a household", from: "$55" },
  { tier: "Home Gig", speed: "940 Mbps–1 Gbps", best: "Multiple heavy users, smart-home, gaming", from: "$75" },
];

const faqs = [
  {
    q: "Are you the internet provider?",
    a: `No. ${site.legalName} is an independent advisory service. We compare providers available at your address and, if you want to proceed, connect you with that provider's own ordering team. Your account and bill are with the provider, not with us.`,
  },
  {
    q: "Do you charge a fee?",
    a: "Comparing plans on this site is free. Some services we offer, like a guided setup call, are disclosed and priced clearly before you agree to anything — never added after the fact.",
  },
  {
    q: "Will you sell my information?",
    a: "We only share what you submit with the specific provider(s) you ask to be connected with, so they can complete your order. Details are in our Privacy Policy.",
  },
  {
    q: "Why do prices vary by address?",
    a: "Providers build and lease network infrastructure street by street. The same plan name can have different pricing, speeds, or availability a few blocks apart.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b rule">
        <div className="container-px py-16 md:py-24 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p className="text-sm text-steel font-medium mb-4">Independent internet plan advisory</p>
            <h1 className="font-display font-semibold text-[2.3rem] md:text-[3.1rem] leading-[1.08] text-ink">
              Straight answers on internet, before you sign anything.
            </h1>
            <p className="mt-6 text-ink/70 text-lg leading-relaxed max-w-xl">
              Tell us your address. We'll show you which providers actually serve it, what
              their plans really cost, and connect you with the right team to order — no
              guesswork, no bait-and-switch pricing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PhoneCTA label={`Call now — ${site.phoneDisplay}`} />
              <ButtonLink href="/internet" variant="outline">See internet plans</ButtonLink>
            </div>
            <p className="mt-3 text-sm text-ink/55">
              Fastest option: call and get address-level answers in one conversation.{" "}
              <span className="text-ink/40">{site.hours}</span>
            </p>
            <p className="mt-5 text-xs text-ink/45 max-w-md">
              {site.legalName} is not an internet service provider. We're an independent
              service that compares plans and connects you with the provider you choose.
            </p>
          </div>

          <SignalGraphic />
        </div>
      </section>

      <Disclaimer detailed />

      {/* How it works */}
      <section className="container-px py-16 md:py-20 border-b rule">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps. No pressure to decide today."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {steps.map((s) => (
            <div key={s.n} className="border-t-2 border-steel pt-5">
              <span className="font-display text-sm text-steel/70">{s.n}</span>
              <h3 className="mt-2 font-display font-semibold text-lg text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <CallBanner
          title="Skip the research — call and we'll check your address live."
          body="One call gets you the providers, real prices, and current promos at your exact address. No forms, no waiting for a callback."
        />
      </section>

      {/* Plan snapshot */}
      <section className="container-px py-16 md:py-20 border-b rule">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Plan snapshot"
            title="A typical range of home internet tiers"
            lede="Exact speeds, prices, and names vary by provider and address — this is a general guide to what's out there."
          />
          <div className="flex flex-wrap gap-3">
            <PhoneCTA label="Call for exact pricing" />
            <ButtonLink href="/internet" variant="outline">Full plan details</ButtonLink>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[520px]">
            <thead>
              <tr className="border-b border-ink/20 text-xs uppercase tracking-wide text-ink/50">
                <th className="pb-3 pr-4 font-medium">Tier</th>
                <th className="pb-3 pr-4 font-medium">Typical speed</th>
                <th className="pb-3 pr-4 font-medium">Best for</th>
                <th className="pb-3 font-medium">Starting from*</th>
              </tr>
            </thead>
            <tbody>
              {planSnapshot.map((row) => (
                <tr key={row.tier} className="border-b rule">
                  <td className="py-4 pr-4 font-display font-medium text-ink">{row.tier}</td>
                  <td className="py-4 pr-4 text-ink/70">{row.speed}</td>
                  <td className="py-4 pr-4 text-ink/70">{row.best}</td>
                  <td className="py-4 text-ink/70">{row.from}/mo</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-ink/45">
          *Promotional pricing shown for illustration only. Final pricing, taxes, equipment
          fees, and contract terms depend on the provider and are confirmed before you order.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4 border border-ink/15 bg-white px-6 py-5">
          <p className="text-sm text-ink/70 flex-1 min-w-[220px]">
            Want the real numbers for <span className="font-medium text-ink">your</span> address?
            An advisor can pull them up while you're on the phone.
          </p>
          <PhoneCTA label={`Call ${site.phoneDisplay}`} />
        </div>
      </section>

      {/* Trust points */}
      <section className="container-px py-16 md:py-20 border-b rule bg-white -mx-0">
        <SectionHeading
          eyebrow="Why use an advisor"
          title="We work from your address, not a sales quota"
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {[
            {
              title: "Transparent pricing",
              body: "Every price we show includes what it covers — promo length, standard rate after, and known fees.",
            },
            {
              title: "No fake urgency",
              body: "We don't run countdown timers or 'only 2 left' banners. Take the time you need.",
            },
            {
              title: "Your data, limited use",
              body: "Information you submit only goes to the provider(s) you ask us to connect you with.",
            },
            {
              title: "Real phone support",
              body: "Call and reach a person during posted hours — not a bot loop.",
            },
            {
              title: "Address-level accuracy",
              body: "We check serviceability at the address level, because coverage maps by zip code are often wrong.",
            },
            {
              title: "You order, you own it",
              body: "Your service agreement is with the provider. We don't bill you for your internet service.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-display font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-px py-16 md:py-20 border-b rule">
        <SectionHeading eyebrow="Before you call" title="Common questions" />
        <div className="mt-10 divide-y rule border-t border-b rule max-w-3xl">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none font-display font-medium text-ink">
                {f.q}
                <span className="text-steel text-xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-ink/65 leading-relaxed max-w-2xl">{f.a}</p>
            </details>
          ))}
        </div>

        <CallBanner
          title="Still deciding? A two-minute call usually settles it."
          body="Ask us anything — speeds, fees, contracts, installation. If a plan fits, we connect you straight to the provider's ordering line."
        />
      </section>

      {/* Contact / lead form */}
      <section className="container-px py-16 md:py-20 grid lg:grid-cols-[1fr_1.1fr] gap-14">
        <div>
          <SectionHeading
            eyebrow="Get started"
            title="Check what's available at your address"
            lede="Share a few details and we'll follow up with real options for your address — no automatic sign-up, no obligation."
          />
          <div className="mt-8 border border-ink/15 bg-white px-6 py-6 max-w-md">
            <p className="text-sm text-steel font-medium">Rather talk to a person?</p>
            <a
              href={`tel:${site.phoneHref}`}
              className="mt-2 block font-display font-semibold text-2xl text-ink hover:text-steel transition-colors"
            >
              {site.phoneDisplay}
            </a>
            <p className="mt-2 text-xs text-ink/50">{site.hours}</p>
            <PhoneCTA label="Call an advisor now" />
          </div>
          <p className="mt-6 text-xs text-ink/45 max-w-sm">
            By submitting, you agree to be contacted by {site.legalName} about internet
            options at the address provided. See our{" "}
            <Link href="/policies/privacy-policy" className="underline">Privacy Policy</Link>.
            No purchase is required and you will not be automatically enrolled in any plan.
          </p>
        </div>
        <ContactForm compact />
      </section>

      <CallPopup />

      {/* Sticky mobile call bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-amber border-t border-ink/10 px-4 py-3">
        <a
          href={`tel:${site.phoneHref}`}
          className="flex items-center justify-center gap-2 text-sm font-semibold text-ink"
        >
          Call now — {site.phoneDisplay}
        </a>
      </div>
    </>
  );
}

function CallBanner({ title, body }) {
  return (
    <div className="mt-12 border border-ink/15 bg-white px-6 py-8 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <p className="text-sm text-steel font-medium">Talk to an advisor</p>
        <h3 className="mt-1 font-display font-semibold text-xl md:text-2xl text-ink">{title}</h3>
        <p className="mt-2 text-sm text-ink/60 max-w-lg">{body}</p>
      </div>
      <div className="shrink-0">
        <PhoneCTA label={`Call ${site.phoneDisplay}`} />
        <p className="mt-2 text-xs text-ink/45">{site.hours}</p>
      </div>
    </div>
  );
}

function SignalGraphic() {
  return (
    <div className="relative">
      <svg viewBox="0 0 420 360" className="w-full h-auto" role="img" aria-label="Illustration of network signal lines connecting houses to a central hub">
        <rect x="0" y="0" width="420" height="360" fill="none" />
        <g stroke="#D8DEE4" strokeWidth="1">
          <line x1="0" y1="60" x2="420" y2="60" />
          <line x1="0" y1="150" x2="420" y2="150" />
          <line x1="0" y1="240" x2="420" y2="240" />
          <line x1="0" y1="330" x2="420" y2="330" />
        </g>
        <circle cx="210" cy="150" r="46" fill="#1F4E79" />
        <circle cx="210" cy="150" r="70" fill="none" stroke="#1F4E79" strokeWidth="1" opacity="0.35" />
        <circle cx="210" cy="150" r="94" fill="none" stroke="#1F4E79" strokeWidth="1" opacity="0.18" />

        <path d="M210 150 L70 60" stroke="#E8A33D" strokeWidth="2" />
        <path d="M210 150 L350 70" stroke="#E8A33D" strokeWidth="2" />
        <path d="M210 150 L90 260" stroke="#E8A33D" strokeWidth="2" />
        <path d="M210 150 L330 270" stroke="#E8A33D" strokeWidth="2" />

        <g fill="#16202B">
          <HouseIcon x={70} y={60} />
          <HouseIcon x={350} y={70} />
          <HouseIcon x={90} y={260} />
          <HouseIcon x={330} y={270} />
        </g>

        <text x="210" y="155" textAnchor="middle" fontFamily="var(--font-grotesk)" fontSize="13" fill="#F7F8FA" fontWeight="600">
          HUB
        </text>
      </svg>
    </div>
  );
}

function HouseIcon({ x, y }) {
  return (
    <g transform={`translate(${x - 12}, ${y - 12})`}>
      <circle cx="12" cy="12" r="12" fill="#F7F8FA" stroke="#16202B" strokeWidth="1" />
      <path d="M6 13L12 8L18 13V18H6V13Z" fill="none" stroke="#16202B" strokeWidth="1.3" strokeLinejoin="round" />
    </g>
  );
}
