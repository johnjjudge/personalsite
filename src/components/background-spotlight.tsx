"use client";

import { useEffect, useState } from "react";

import { motion, useReducedMotion } from "framer-motion";

export function BackgroundSpotlight() {
  const shouldReduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setDefault = () => {
      setPosition({
        x: window.innerWidth * 0.72,
        y: Math.min(window.innerHeight * 0.34, 360),
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    setDefault();
    window.addEventListener("resize", setDefault);

    if (!shouldReduceMotion) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }

    return () => {
      window.removeEventListener("resize", setDefault);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [shouldReduceMotion]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-[size:72px_72px] opacity-[0.035]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(93,146,255,0.18),transparent_30%)]" />
      <motion.div
        className="absolute h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(95,147,255,0.34),rgba(95,147,255,0.08)_42%,transparent_72%)] blur-3xl"
        animate={{
          x: position.x - 272,
          y: position.y - 272,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.35,
          ease: [0.21, 1, 0.32, 1],
        }}
      />
      <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-slate-400/10 blur-3xl" />
    </div>
  );
}

