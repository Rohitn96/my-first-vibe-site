import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Bitcoin Finland Podcast",
    template: "%s · Bitcoin Finland Podcast"
  },
  description: "A modern podcast about Bitcoin in Finland — clean, minimal, and free to listen."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-200">
          <SiteHeader />
          <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

