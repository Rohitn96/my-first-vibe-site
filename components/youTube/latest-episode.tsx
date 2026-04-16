import type { YouTubeEpisode } from "@/lib/youtube-playlist";

export function LatestEpisodeEmbed({ episode }: { episode: YouTubeEpisode }) {
  const src = `https://www.youtube.com/embed/${episode.videoId}?rel=0&modestbranding=1`;

  return (
    <div className="overflow-hidden border border-white/10 bg-white/5">
      <div className="relative aspect-video w-full">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title={episode.title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

