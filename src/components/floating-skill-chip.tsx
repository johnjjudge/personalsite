"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/cn";

type FloatingSkillChipProps = {
  label: string;
  className?: string;
  index: number;
};

export function FloatingSkillChip({ label, className, index }: FloatingSkillChipProps) {
  return (
    <motion.div
      className={cn(
        "rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-xs font-medium tracking-[0.18em] text-blue-100 backdrop-blur-md",
        className,
      )}
      animate={{
        y: [0, -10, 0],
        rotate: [0, index % 2 === 0 ? 1 : -1, 0],
      }}
      transition={{
        duration: 6 + index,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {label}
    </motion.div>
  );
}

