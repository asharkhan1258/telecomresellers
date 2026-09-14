import { SectionHeading } from "@/components/ui";
import { site } from "@/lib/site-config";

export const metadata = {
  title: "About Us",
  description: `Who ${site.brandName} is, how we're paid, and how we handle your information.`,
};

const values = [
  {
    title: "Say the price out loud",
    body: "If a number has conditions attached — a promo window, a fee, a contract — we say so next to the number, not in a footnote three pages later.",
  },
  {
    title: "You can always say no",
    body: "Comparing plans with us never enrolls you in anything. Ordering happens directly with the provider you choose, on their terms.",
  },
  {
    title: "Fewer, better calls",
    body: "We'd rather have one clear conversation about what fits your address than send you five follow-ups you didn't ask for.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-px py-16 md:py-20 border-b rule">
        <p className="text-sm text-steel font-medium mb-4">About us</p>
        <h1 className="font-display font-semibold text-[2.1rem] md:text-[2.6rem] leading-[1.1] text-ink max-w-3xl">
          We compare internet providers so you don't have to call five of them yourself
        </h1>
        <p className="mt-5 text-ink/70 leading-relaxed max-w-2xl">
          {site.legalName}, operating as {site.brandName}, exists to fix a simple,
          annoying problem: figuring out which internet provider actually serves your
          address, and what their plans really cost, usually takes calling around and
          getting different answers each time.
        </p>
      </section>

      <section className="container-px py-16 md:py-20 border-b rule grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display font-semibold text-xl text-ink">What we are</h2>
          <p className="mt-3 text-sm text-ink/65 leading-relaxed">
            We're an independent advisory and referral service. We're not owned by, and
            don't exclusively represent, any single internet provider. When you tell us
            your address, we check which providers actually serve it and lay out their
            plans clearly.
          </p>
        </div>
        <div>
          <h2 className="font-display font-semibold text-xl text-ink">How we're paid</h2>
          <p className="mt-3 text-sm text-ink/65 leading-relaxed">
            When you choose to order service through a provider we connect you with,
            that provider may pay us a referral fee. This doesn't change your price —
            you pay the provider directly, at the price they quote you, and that fee
            never gets added to your bill.
          </p>
        </div>
      </section>

      <section className="container-px py-16 md:py-20 border-b rule bg-white">
        <SectionHeading eyebrow="How we operate" title="Three things we hold ourselves to" />
        <div className="mt-12 grid sm:grid-cols-3 gap-10">
          {values.map((v) => (
            <div key={v.title} className="border-t-2 border-amber pt-5">
              <h3 className="font-display font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px py-16 md:py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display font-semibold text-xl text-ink">Where we are</h2>
          <p className="mt-3 text-sm text-ink/65 leading-relaxed">
            {site.legalName}
            <br />
            {site.address.line1}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
            <br />
            {site.address.country}
          </p>
          <p className="mt-3 text-sm text-ink/65">Authorized representative: {site.authorizedRep}</p>
          <p className="mt-4 text-sm text-ink/65">{site.hours}</p>
        </div>
        <div>
          <h2 className="font-display font-semibold text-xl text-ink">Questions about a plan?</h2>
          <p className="mt-3 text-sm text-ink/65 leading-relaxed">
            Call <a href={`tel:${site.phoneHref}`} className="text-steel underline underline-offset-2">{site.phoneDisplay}</a> or
            email <a href={`mailto:${site.email}`} className="text-steel underline underline-offset-2">{site.email}</a>, and
            we'll walk through what's available at your address.
          </p>
        </div>
      </section>
    </>
  );
}
