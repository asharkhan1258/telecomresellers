import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-px py-24 text-center">
      <p className="text-sm text-steel font-medium mb-4">404</p>
      <h1 className="font-display font-semibold text-3xl text-ink">Page not found</h1>
      <p className="mt-3 text-ink/65">The page you're looking for doesn't exist or moved.</p>
      <Link href="/" className="mt-8 inline-flex items-center justify-center bg-steel text-white px-6 py-3 text-sm font-medium hover:bg-steel-dark">
        Back to home
      </Link>
    </section>
  );
}
