"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Click-to-play YouTube embed. Renders only a static thumbnail (no YouTube
 * script or iframe) until the user clicks — keeps the page light and avoids
 * loading any third-party player until someone actually opts in to watch.
 */
export function VideoPlayer({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const [thumbnailSrc, setThumbnailSrc] = useState(
    `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
  );

  if (playing) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-surface">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-surface"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- external, per-video thumbnail; not a build-time optimizable asset */}
      <img
        src={thumbnailSrc}
        alt=""
        loading="lazy"
        onError={() => setThumbnailSrc(`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`)}
        className="h-full w-full object-cover transition-opacity group-hover:opacity-80"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:scale-105">
          <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" aria-hidden="true" />
        </span>
      </span>
    </button>
  );
}
