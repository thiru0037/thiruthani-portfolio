import Image from "next/image";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Renders /public/images/headshot.jpg once it exists (see README for how to add it).
 * Until then, falls back to an initials monogram so the hero never ships a broken image.
 */
export function Avatar({
  name,
  src,
  size = 128,
}: {
  name: string;
  src?: string;
  size?: number;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={`Portrait of ${name}`}
        width={size}
        height={size}
        className="rounded-full border border-border object-cover"
        style={{ width: size, height: size }}
        priority
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`Portrait of ${name}`}
      className="flex items-center justify-center rounded-full border border-border bg-surface font-mono font-semibold text-foreground"
      style={{ width: size, height: size, fontSize: size / 2.8 }}
    >
      {getInitials(name)}
    </div>
  );
}
