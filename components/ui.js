import Link from "next/link";
import { site } from "@/lib/site-config";

export function Eyebrow({ children }) {
  return <p className="text-sm text-steel font-medium mb-3">{children}</p>;
}

export function SectionHeading({ eyebrow, title, lede, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display font-semibold text-[1.75rem] md:text-[2.1rem] leading-[1.15] text-ink">
        {title}
      </h2>
      {lede && <p className="mt-4 text-ink/70 leading-relaxed">{lede}</p>}
    </div>
  );
}

export function ButtonLink({ href, children, variant = "primary", ...props }) {
  const base = "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors";
  const styles = {
    primary: "bg-steel text-white hover:bg-steel-dark",
    accent: "bg-amber text-ink hover:bg-amber-dark",
    outline: "border border-ink/25 text-ink hover:border-steel hover:text-steel",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </Link>
  );
}

export function PhoneCTA({ label }) {
  return (
    <a
      href={`tel:${site.phoneHref}`}
      className="inline-flex items-center justify-center gap-2 bg-amber text-ink px-6 py-3 text-sm font-medium hover:bg-amber-dark transition-colors"
    >
      {label || `Call ${site.phoneDisplay}`}
    </a>
  );
}
