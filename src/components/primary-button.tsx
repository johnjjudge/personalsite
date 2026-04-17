import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type PrimaryButtonProps = ComponentPropsWithoutRef<"a">;

export function PrimaryButton({ className, children, ...props }: PrimaryButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-blue-300/40 bg-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-blue-400",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

