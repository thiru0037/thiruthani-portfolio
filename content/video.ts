import type { IntroVideo } from "@/types/content";

// Set youtubeId once the video is uploaded (unlisted) to YouTube — the ID is
// the part after `v=` in the video's URL. Leave it null to hide the section.
export const introVideo: IntroVideo = {
  youtubeId: null,
  title: "A short introduction",
  description: "A quick, personal walkthrough of how I approach product work.",
};
