import { AnimatedReveal } from "@/components/animated-reveal";
import { BackgroundSpotlight } from "@/components/background-spotlight";
import { Container } from "@/components/container";
import { PrimaryButton } from "@/components/primary-button";
import { SecondaryButton } from "@/components/secondary-button";
import type { Profile } from "@/content/types";

type HeroSectionProps = {
  profile: Profile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-32 sm:pt-36">
      <BackgroundSpotlight />
      <Container className="relative z-10">
        <AnimatedReveal className="max-w-4xl space-y-6">
          <div className="inline-flex items-center rounded-full border border-blue-200/15 bg-blue-200/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-blue-100/90">
            {profile.title}
          </div>
          <div className="space-y-5">
            <h1 className="max-w-3xl font-display text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{profile.tagline}</p>
            <p className="max-w-3xl text-base leading-7 text-slate-400">{profile.summary}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={profile.resumeUrl} target="_blank" rel="noreferrer">
              View Resume
            </PrimaryButton>
            <SecondaryButton href={profile.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </SecondaryButton>
            <SecondaryButton href="#contact">Contact</SecondaryButton>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
