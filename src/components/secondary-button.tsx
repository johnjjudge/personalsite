import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type SecondaryButtonProps = ComponentPropsWithoutRef<"a">;

export function SecondaryButton({ className, children, ...props }: SecondaryButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07]",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

