import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type GlowCardProps = HTMLAttributes<HTMLDivElement>;

export function GlowCard({ className, ...props }: GlowCardProps) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] shadow-[0_18px_70px_rgba(8,15,35,0.38)] backdrop-blur-xl",
        className,
      )}
      {...props}
    />
  );
}

