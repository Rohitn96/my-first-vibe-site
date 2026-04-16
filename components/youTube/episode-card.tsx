import Image from "next/image";
import Link from "next/link";

import type { YouTubeEpisode } from "@/lib/youtube-playlist";
import { Card } from "@/components/ui/card";

export function EpisodeCard({ episode }: { episode: YouTubeEpisode }) {
  return (
    <Card className="group overflow-hidden">
      <Link href={episode.youtubeUrl} target="_blank" rel="noreferrer" className="block">
        <div className="relative aspect-video w-full bg-white/5">
          <Image
            src={episode.thumbnailUrl}
            alt={episode.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            priority={false}
          />
        </div>
      </Link>

      <div className="space-y-3 p-4 sm:p-5">
        <h3 className="text-sm font-semibold leading-snug text-zinc-100">{episode.title}</h3>

        <Link
          href={episode.youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-bitcoin hover:text-bitcoin/90"
        >
          Watch on YouTube
        </Link>
      </div>
    </Card>
  );
}

