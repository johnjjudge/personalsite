"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/container";
import { PrimaryButton } from "@/components/primary-button";
import { cn } from "@/lib/cn";

type NavItem = {
  label: string;
  href: string;
  id: string;
};

type NavbarProps = {
  navItems: NavItem[];
  resumeUrl: string;
};

export function Navbar({ navItems, resumeUrl }: NavbarProps) {
  const [activeSection, setActiveSection] = useState(navItems[0]?.id ?? "about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0.1,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <Container className="pt-4">
          <div
            className={cn(
              "flex items-center justify-between rounded-full border px-4 py-3 transition duration-300 sm:px-5",
              scrolled
                ? "border-white/12 bg-slate-950/70 shadow-[0_16px_50px_rgba(5,8,20,0.42)] backdrop-blur-xl"
                : "border-transparent bg-transparent",
            )}
          >
            <a href="#hero" className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-white">
              JohnJudge.me
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition duration-200",
                    activeSection === item.id
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/[0.05] hover:text-white",
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <PrimaryButton href={resumeUrl} target="_blank" rel="noreferrer">
                View Resume
              </PrimaryButton>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white lg:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-x-5 top-24 z-40 rounded-[2rem] border border-white/10 bg-slate-950/95 p-5 shadow-[0_24px_80px_rgba(5,8,20,0.6)] backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22, ease: [0.21, 1, 0.32, 1] }}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium transition",
                    activeSection === item.id
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/[0.04] hover:text-white",
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <PrimaryButton href={resumeUrl} target="_blank" rel="noreferrer" className="mt-2">
                View Resume
              </PrimaryButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

