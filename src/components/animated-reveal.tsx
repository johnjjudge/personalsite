"use client";

import type { PropsWithChildren } from "react";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/cn";

type AnimatedRevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function AnimatedReveal({ className, children, delay = 0 }: AnimatedRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.21, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

