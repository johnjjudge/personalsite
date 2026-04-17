import { AnimatedReveal } from "@/components/animated-reveal";
import { BackgroundSpotlight } from "@/components/background-spotlight";
import { Container } from "@/components/container";
import { FloatingSkillChip } from "@/components/floating-skill-chip";
import { GlowCard } from "@/components/glow-card";
import { PrimaryButton } from "@/components/primary-button";
import { SecondaryButton } from "@/components/secondary-button";
import type { Profile } from "@/content/types";

type HeroStat = {
  label: string;
  value: string;
  detail: string;
};

type HeroSectionProps = {
  profile: Profile;
  heroStats: HeroStat[];
};

const chipPositions = [
  "-left-10 top-12 xl:-left-16 xl:top-16",
  "right-2 -top-3 xl:-right-8 xl:top-6",
  "-left-14 bottom-32 xl:-left-20 xl:bottom-36",
  "right-2 bottom-28 xl:-right-10 xl:bottom-32",
  "left-1/2 -bottom-5 -translate-x-1/2 xl:-bottom-7",
];

export function HeroSection({ profile, heroStats }: HeroSectionProps) {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-32 sm:pt-36">
      <BackgroundSpotlight />
      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <AnimatedReveal className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-blue-200/15 bg-blue-200/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-blue-100/90">
                Software Engineer
              </div>
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Premium personal site in progress</p>
                <h1 className="max-w-3xl font-display text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                  {profile.name}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{profile.tagline}</p>
                <p className="max-w-2xl text-base leading-7 text-slate-400">{profile.summary}</p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal className="flex flex-col gap-3 sm:flex-row" delay={0.08}>
              <PrimaryButton href={profile.resumeUrl} target="_blank" rel="noreferrer">
                View Resume
              </PrimaryButton>
              <SecondaryButton href={profile.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </SecondaryButton>
              <SecondaryButton href="#contact">Contact</SecondaryButton>
            </AnimatedReveal>

            <AnimatedReveal className="flex flex-wrap gap-3 lg:hidden" delay={0.12}>
              {profile.skillChips.map((chip) => (
                <div
                  key={chip}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-200"
                >
                  {chip}
                </div>
              ))}
            </AnimatedReveal>
          </div>

          <AnimatedReveal className="relative hidden min-h-[34rem] lg:block" delay={0.12}>
            <GlowCard className="relative overflow-hidden p-6 xl:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(93,146,255,0.18),transparent_32%)]" />
              <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />
              <div className="relative space-y-6">
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Signal Board</p>
                    <h2 className="font-display text-2xl font-semibold text-white">Placeholder profile snapshot</h2>
                  </div>
                  <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-emerald-200">
                    Available
                  </div>
                </div>

                <div className="grid gap-4">
                  {heroStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-blue-200/20 hover:bg-white/[0.05]"
                    >
                      <p className="text-xs uppercase tracking-[0.26em] text-slate-500">{item.label}</p>
                      <p className="mt-3 font-display text-2xl font-semibold text-white">{item.value}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.75rem] border border-blue-200/15 bg-blue-200/5 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-blue-100/70">Implementation note</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Content is intentionally placeholder-first. The structure, motion, and styling are ready for a final
                    profile, project, and resume content pass.
                  </p>
                </div>
              </div>
            </GlowCard>

            <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
              {profile.skillChips.map((chip, index) => (
                <FloatingSkillChip
                  key={chip}
                  label={chip}
                  index={index}
                  className={`absolute ${chipPositions[index] ?? "left-10 top-10"}`}
                />
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
