import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm text-zinc-400">Contact</p>
          <a
            href="mailto:contact@bitcoinfinland.fi"
            className="text-sm text-zinc-200 hover:text-bitcoin"
          >
            contact@bitcoinfinland.fi
          </a>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a className="text-sm text-zinc-400 hover:text-zinc-200" href="#">
            X
          </a>
          <a className="text-sm text-zinc-400 hover:text-zinc-200" href="#">
            LinkedIn
          </a>
          <a className="text-sm text-zinc-400 hover:text-zinc-200" href="#">
            YouTube
          </a>
        </div>
      </div>

      <div className="mt-8 text-xs text-zinc-500">
        © {new Date().getFullYear()} Bitcoin Finland. All rights reserved.
      </div>
    </footer>
  );
}

