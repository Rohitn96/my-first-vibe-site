import Link from "next/link";

import { FadeInOnScroll } from "@/components/fade-in-on-scroll";
import { LatestEpisodeEmbed } from "@/components/youTube/latest-episode";
import { Button } from "@/components/ui/button";
import { getYouTubePlaylistEpisodes } from "@/lib/youtube-playlist";

export default async function HomePage() {
  const episodes = await getYouTubePlaylistEpisodes();
  const latest = episodes[0];

  return (
    <div className="space-y-14">
      <section className="space-y-6" aria-label="Hero">
        <FadeInOnScroll>
          <div className="inline-flex items-center gap-2 rounded-none border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            Finland · Bitcoin · Podcasts
          </div>
          <h1 className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-zinc-100 sm:text-5xl">
            Bitcoin from Finland. Clean insights, real builders.
          </h1>
          <p className="max-w-2xl text-pretty text-base text-zinc-300 sm:text-lg">
            A modern podcast for curious minds: what’s happening with Bitcoin, businesses, and community
            in the Nordics.
          </p>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button asChild className="rounded-none bg-bitcoin text-black hover:bg-bitcoin/90">
              <Link href="/episodes">Listen now</Link>
            </Button>

            <Link href="/about" className="text-sm text-zinc-300 hover:text-zinc-100">
              About the show
            </Link>
          </div>
        </FadeInOnScroll>
      </section>

      <section id="latest" className="space-y-4">
        <FadeInOnScroll>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Latest episode</h2>
        </FadeInOnScroll>

        {latest ? (
          <FadeInOnScroll delayMs={80}>
            <LatestEpisodeEmbed episode={latest} />
          </FadeInOnScroll>
        ) : (
          <div className="rounded-none border border-white/10 bg-white/5 p-6 text-sm text-zinc-300">
            Couldn’t load the latest episode right now.
          </div>
        )}
      </section>

      <section className="space-y-4">
        <FadeInOnScroll>
          <h2 className="text-lg font-semibold text-zinc-100">About the show</h2>
          <p className="max-w-2xl text-zinc-300">
            We’re a Finnish Bitcoin company sharing practical conversations: education, adoption,
            privacy, entrepreneurship, and the culture around money — with a Nordic, no-fluff approach.
          </p>
        </FadeInOnScroll>
      </section>
    </div>
  );
}

