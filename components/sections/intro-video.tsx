import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { VideoPlayer } from "@/components/ui/video-player";
import { introVideo } from "@/content/video";

export function IntroVideo() {
  if (!introVideo.youtubeId) return null;

  return (
    <section className="border-b border-border">
      <Container className="flex flex-col gap-8 py-20">
        <SectionHeading eyebrow="Introduction" title={introVideo.title} description={introVideo.description} />
        <div className="mx-auto w-full max-w-2xl">
          <VideoPlayer youtubeId={introVideo.youtubeId} title={introVideo.title} />
        </div>
      </Container>
    </section>
  );
}
