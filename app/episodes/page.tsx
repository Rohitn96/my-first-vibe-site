import { FadeInOnScroll } from "@/components/fade-in-on-scroll";
import { EpisodeCard } from "@/components/youTube/episode-card";
import { getYouTubePlaylistEpisodes, YOUTUBE_PLAYLIST_ID } from "@/lib/youtube-playlist";

const PLAYLIST_IFRAME_SRC = `https://www.youtube.com/embed/videoseries?list=${YOUTUBE_PLAYLIST_ID}`;

export default async function EpisodesPage() {
  const episodes = await getYouTubePlaylistEpisodes();

  return (
    <div className="space-y-10">
      <section className="space-y-5">
        <FadeInOnScroll>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">Episodes</h1>
          <p className="max-w-2xl text-zinc-300">
            Browse all episodes from our YouTube playlist. Each episode includes a direct
            “Watch on YouTube” link.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delayMs={60}>
          <div className="aspect-video w-full overflow-hidden bg-white/5">
            <iframe
              className="h-full w-full"
              src={PLAYLIST_IFRAME_SRC}
              title="YouTube playlist player"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </FadeInOnScroll>
      </section>

      <section className="space-y-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((episode, idx) => (
            <FadeInOnScroll key={episode.videoId} delayMs={Math.min(200, idx * 30)}>
              <EpisodeCard episode={episode} />
            </FadeInOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}

