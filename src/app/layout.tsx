import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import ThemeToggle from "@/components/ui/ThemeToggle";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import GlobalErrorHandler from "@/components/common/GlobalErrorHandler";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Move Beyond | Sports & Events Consultancy",
    template: "%s | Move Beyond",
  },
  description:
    "Strategic Sports & Events Consultancy for MENA & the Gulf. We help federations, governments, clubs, and brands plan, deliver, and digitize world-class sports experiences.",
  metadataBase: new URL("https://www.movebeyond.example"),
  openGraph: {
    type: "website",
    url: "https://www.movebeyond.example",
    title: "Move Beyond | Sports & Events Consultancy",
    description:
      "Strategic Sports & Events Consultancy for MENA & the Gulf. We help federations, governments, clubs, and brands plan, deliver, and digitize world-class sports experiences.",
    images: [
      {
        url: "/og-default.svg",
        width: 1200,
        height: 630,
        alt: "Move Beyond",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Move Beyond | Sports & Events Consultancy",
    description:
      "Strategic Sports & Events Consultancy for MENA & the Gulf. We help federations, governments, clubs, and brands plan, deliver, and digitize world-class sports experiences.",
    images: ["/og-default.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${urbanist.variable} antialiased font-sans`}>
        <ThemeProvider>
        <GlobalErrorHandler />
        <ErrorBoundary>
        {/* Global animated background */}
        <div aria-hidden className="site-bg">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <div className="bg-grid" />
        </div>
        <header className="sticky top-0 z-50 backdrop-blur bg-[color-mix(in oklab,var(--mb-bg-0) 80%,transparent)] border-b border-[var(--mb-border)]">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/Logos/mb%20logo.png" alt="Move Beyond logo" width={28} height={28} className="rounded-md" />
              <span className="font-display text-lg">Move Beyond</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/about" className="hover:opacity-80">About</Link>
              <Link href="/services" className="hover:opacity-80">Services</Link>
              <Link href="/pass-app" className="hover:opacity-80">Pass App</Link>
              <Link href="/solutions" className="hover:opacity-80">Solutions</Link>
              <Link href="/solutions/saas-academy-management-platform" className="hover:opacity-80">SAMP</Link>
              <Link href="/contact" className="hover:opacity-80">Contact</Link>
              <Link href="/rfp" className="inline-flex items-center rounded-lg px-4 py-2 text-white bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)]">Request a Proposal</Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-24 border-t border-[var(--mb-border)] bg-[var(--mb-bg-1)]">
          <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm text-[var(--mb-muted)]">
            <div>
              <div className="flex items-center gap-3">
                <Image src="/Logos/mb%20logo.png" alt="Move Beyond logo" width={28} height={28} className="rounded-md" />
                <div className="font-display text-lg text-[var(--mb-text)]">Move Beyond</div>
              </div>
              <p className="mt-3">Strategic Sports & Events Consultancy for MENA & the Gulf.</p>
            </div>
            <div>
              <div className="text-[var(--mb-text)] font-medium">Company</div>
              <ul className="mt-3 space-y-2">
                <li><Link href="/about" className="hover:opacity-80">About</Link></li>
                <li><Link href="/careers" className="hover:opacity-80">Careers</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-[var(--mb-text)] font-medium">Resources</div>
              <ul className="mt-3 space-y-2">
                <li><Link href="/solutions" className="hover:opacity-80">Solutions</Link></li>
                <li><Link href="/solutions/illusionaire" className="hover:opacity-80">Illusionaire VR</Link></li>
                <li><Link href="/solutions/saas-academy-management-platform" className="hover:opacity-80">SaaS Academy Platform</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-[var(--mb-text)] font-medium">Legal</div>
              <ul className="mt-3 space-y-2">
                <li><Link href="/terms" className="hover:opacity-80">Terms</Link></li>
                <li><Link href="/privacy" className="hover:opacity-80">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--mb-border)] py-6 text-center text-xs text-[var(--mb-muted)]">© 2025 Move Beyond. All rights reserved.</div>
        </footer>
        {/* Sticky CTA (mobile-first) */}
        <div className="fixed bottom-4 right-4 z-50 md:hidden">
          <a href="/contact?type=demo" className="rounded-full px-5 py-3 text-white shadow-md bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)]">Book a Demo</a>
        </div>
        </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
