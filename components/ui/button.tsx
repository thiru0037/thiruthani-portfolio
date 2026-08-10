import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:opacity-90",
  secondary:
    "border border-border bg-transparent text-foreground hover:bg-surface",
  ghost: "text-foreground hover:bg-surface",
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
