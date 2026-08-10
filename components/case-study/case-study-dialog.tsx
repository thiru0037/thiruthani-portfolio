"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import type { ReactNode } from "react";

export function CaseStudyDialog({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const close = () => router.back();

  return (
    <dialog
      ref={dialogRef}
      onClose={close}
      onClick={(event) => {
        // A click that lands on the <dialog> element itself (not its content
        // wrapper) means the user clicked the backdrop area.
        if (event.target === dialogRef.current) close();
      }}
      aria-label="Case study details"
      className="m-0 h-dvh max-h-none w-dvw max-w-none bg-transparent p-0 backdrop:bg-black/60 backdrop:backdrop-blur-sm sm:m-auto sm:h-auto sm:max-h-[85vh] sm:w-[min(720px,90vw)] sm:max-w-[720px] sm:rounded-2xl"
    >
      <div className="relative h-full overflow-y-auto rounded-none border-0 border-border bg-background p-6 sm:h-auto sm:max-h-[85vh] sm:rounded-2xl sm:border sm:p-10">
        <button
          type="button"
          onClick={close}
          aria-label="Close case study"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-background sm:right-6 sm:top-6"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
        {children}
      </div>
    </dialog>
  );
}
