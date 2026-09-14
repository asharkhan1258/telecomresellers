import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";
import { site } from "@/lib/site-config";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(`https://www.${site.domain}`),
  title: {
    default: `${site.brandName} — Compare Internet Providers at Your Address`,
    template: `%s — ${site.brandName}`,
  },
  description: site.shortDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${inter.variable}`}>
      <body className="font-body antialiased flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Disclaimer />
        <Footer />
      </body>
    </html>
  );
}
