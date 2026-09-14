import { SectionHeading, PhoneCTA } from "@/components/ui";
import { site } from "@/lib/site-config";

export const metadata = {
  title: "Internet Plans",
  description: "Compare home internet tiers, typical pricing, and what affects your final quote.",
};

const tiers = [
  {
    name: "Home Starter",
    speed: "50–100 Mbps",
    from: "$40",
    good: "1–2 people, browsing, streaming one show at a time, remote email",
    notes: "Often the lowest-cost tier; usually the most widely available option in a coverage area.",
  },
  {
    name: "Home Plus",
    speed: "200–400 Mbps",
    from: "$55",
    good: "A household of 3–4, multiple streams, video calls, some gaming",
    notes: "The most commonly chosen tier for families working and studying from home.",
  },
  {
    name: "Home Gig",
    speed: "800 Mbps–1 Gbps+",
    from: "$75",
    good: "Heavy multi-device homes, 4K streaming on several screens, large uploads",
    notes: "Availability depends heavily on the network technology run to your address.",
  },
];

const factors = [
  {
    title: "Technology at your address",
    body: "Fiber, cable, fixed wireless, and satellite all carry different realistic speeds and reliability — and not every technology reaches every address.",
  },
  {
    title: "Promotional vs. standard rate",
    body: "Many plans start at a discounted rate for 12–24 months, then move to a higher standard rate. We show both when a provider discloses them.",
  },
  {
    title: "Equipment and installation",
    body: "Modem/router rental, professional installation, and activation fees are sometimes separate from the monthly plan price.",
  },
  {
    title: "Contract length",
    body: "Some plans are month-to-month; others require a term commitment with an early termination fee. This is set by the provider, not by us.",
  },
  {
    title: "Data allowances",
    body: "A small number of plans — mainly satellite and fixed wireless — cap monthly data or slow speeds after a threshold.",
  },
  {
    title: "Taxes and regulatory fees",
    body: "Advertised prices typically exclude taxes and provider surcharges, which appear on your actual bill.",
  },
];

export default function InternetPage() {
  return (
    <>
      <section className="container-px py-16 md:py-20 border-b rule">
        <p className="text-sm text-steel font-medium mb-4">Internet plans</p>
        <h1 className="font-display font-semibold text-[2.1rem] md:text-[2.6rem] leading-[1.1] text-ink max-w-3xl">
          Plans are shown by tier, because exact pricing is set by address
        </h1>
        <p className="mt-5 text-ink/70 leading-relaxed max-w-2xl">
          The ranges below reflect what's typically available across the providers we
          work with. Your exact price, speed, and contract terms depend on which
          provider serves your specific address — we confirm that before you order
          anything.
        </p>
      </section>

      <section className="container-px py-16 md:py-20 border-b rule">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-ink/20 text-xs uppercase tracking-wide text-ink/50">
                <th className="pb-3 pr-6 font-medium">Tier</th>
                <th className="pb-3 pr-6 font-medium">Typical speed</th>
                <th className="pb-3 pr-6 font-medium">Good for</th>
                <th className="pb-3 pr-6 font-medium">Starting from*</th>
                <th className="pb-3 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((t) => (
                <tr key={t.name} className="border-b rule align-top">
                  <td className="py-5 pr-6 font-display font-medium text-ink whitespace-nowrap">{t.name}</td>
                  <td className="py-5 pr-6 text-ink/70 whitespace-nowrap">{t.speed}</td>
                  <td className="py-5 pr-6 text-ink/70">{t.good}</td>
                  <td className="py-5 pr-6 text-ink/70 whitespace-nowrap">{t.from}/mo</td>
                  <td className="py-5 text-ink/60 text-sm">{t.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-xs text-ink/45 max-w-2xl">
          *"Starting from" prices are illustrative promotional examples, not a quote.
          Actual pricing, the length of any promotional period, equipment costs, taxes,
          and contract terms are set by the provider and confirmed with you before you
          order — never charged to you by {site.legalName}.
        </p>
      </section>

      <section className="container-px py-16 md:py-20 border-b rule bg-white">
        <SectionHeading
          eyebrow="Read before you compare"
          title="What actually changes your final price"
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {factors.map((f) => (
            <div key={f.title}>
              <h3 className="font-display font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px py-16 md:py-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        <div>
          <h2 className="font-display font-semibold text-xl text-ink">
            Ready to see exact pricing for your address?
          </h2>
          <p className="mt-2 text-sm text-ink/65 max-w-md">
            A quick call is the fastest way to get address-accurate speeds and pricing
            instead of general ranges.
          </p>
        </div>
        <PhoneCTA />
      </section>
    </>
  );
}
