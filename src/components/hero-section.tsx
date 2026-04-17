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
    <section id="hero" className="relative overflow-hidden pb-8 pt-24 sm:pb-10 sm:pt-28 lg:pb-12 lg:pt-32">
      <BackgroundSpotlight />
      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)] lg:gap-12">
          <AnimatedReveal className="max-w-4xl space-y-5">
            <div className="space-y-4">
              <h1 className="max-w-3xl font-display text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <div className="inline-flex items-center rounded-full border border-blue-200/15 bg-blue-200/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-blue-100/90">
                {profile.title}
              </div>
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

          {profile.photoUrl ? (
            <AnimatedReveal delay={0.08} className="mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(5,8,20,0.35)]">
                <img
                  src={profile.photoUrl}
                  alt={profile.photoAlt ?? profile.name}
                  className="aspect-[5/4] w-full object-cover object-center"
                />
              </div>
            </AnimatedReveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
