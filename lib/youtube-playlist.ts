import { XMLParser } from "fast-xml-parser";

export const YOUTUBE_PLAYLIST_ID = "PL5KrgrM7s98TyYA8LbktZIMVV7AEME2hW";

export type YouTubeEpisode = {
  title: string;
  videoId: string;
  thumbnailUrl: string;
  youtubeUrl: string;
};

const FEED_URL = `https://www.youtube.com/feeds/videos.xml?playlist_id=${YOUTUBE_PLAYLIST_ID}`;

function toText(value: unknown): string | undefined {
  if (value == null) return undefined;
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (typeof value === "object") {
    const obj = value as Record<string, unknown>;
    const text = obj["#text"] ?? obj["_"];
    if (typeof text === "string") return text;
  }
  return undefined;
}

export async function getYouTubePlaylistEpisodes(): Promise<YouTubeEpisode[]> {
  try {
    const res = await fetch(FEED_URL, {
      // Revalidate periodically so Vercel caches the response.
      next: { revalidate: 3600 }
    });

    if (!res.ok) return [];

    const xml = await res.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
      removeNSPrefix: true,
      trimValues: true
    });

    const parsed = parser.parse(xml) as any;
    const entriesRaw = parsed?.feed?.entry ?? parsed?.entry ?? [];
    const entries = Array.isArray(entriesRaw) ? entriesRaw : [entriesRaw];

    const episodes = entries
      .map((entry: any): YouTubeEpisode | null => {
        const title = toText(entry?.title) ?? "Untitled episode";
        const videoId = toText(entry?.videoId) ?? "";
        if (!videoId) return null;

        const group = entry?.group ?? entry?.media?.group;
        const thumbnailObj = group?.thumbnail;
        const thumbnailUrl =
          (thumbnailObj?.["@_url"] as string | undefined) ??
          (typeof thumbnailObj?.url === "string" ? thumbnailObj.url : undefined) ??
          `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

        return {
          title,
          videoId,
          thumbnailUrl,
          youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`
        };
      })
      .filter(Boolean) as YouTubeEpisode[];

    return episodes;
  } catch {
    return [];
  }
}

