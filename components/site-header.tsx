import Link from "next/link";

import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10">
      <div className="flex items-center justify-between gap-4 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight text-zinc-100">
          Bitcoin Finland Podcast
        </Link>

        <nav className="flex items-center gap-5">
          <Link
            href="/episodes"
            className="hidden text-sm text-zinc-300 hover:text-zinc-100 sm:block"
          >
            Episodes
          </Link>
          <Link href="/about" className="hidden text-sm text-zinc-300 hover:text-zinc-100 sm:block">
            About
          </Link>

          <Button asChild className="rounded-none">
            <Link href="/episodes">Listen now</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

