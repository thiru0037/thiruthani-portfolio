import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkedinIcon } from "@/components/ui/icons";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      <Container className="flex flex-col gap-10 py-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Let&apos;s talk.
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Open to Senior, Staff, Technical, and AI Product Manager
            conversations. Reach out directly — no forms, no gatekeeping.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {year} {siteConfig.name}. {profile.location}.
          </span>
          <a href="/resume.pdf" download className="hover:text-foreground">
            Download resume (PDF)
          </a>
        </div>
      </Container>
    </footer>
  );
}
