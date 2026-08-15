type ClassValue = string | number | null | false | undefined;

/** Minimal class-name joiner — avoids pulling in clsx for a handful of conditionals. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
