import type { SocialLink } from "@/content/types";

import { AnimatedReveal } from "@/components/animated-reveal";
import { Container } from "@/components/container";
import { GlowCard } from "@/components/glow-card";
import { PrimaryButton } from "@/components/primary-button";
import { SectionHeader } from "@/components/section-header";

type ContactSectionProps = {
  socialLinks: SocialLink[];
  email?: string;
  githubUrl: string;
};

export function ContactSection({ socialLinks, email, githubUrl }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <Container className="space-y-12">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="Contact"
            title="Keep the last section simple, visible, and one click away."
            description="v1 uses direct links instead of a workflow-heavy form, which keeps the site lightweight while still covering the recruiter and collaborator use case."
          />
        </AnimatedReveal>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedReveal delay={0.08}>
            <GlowCard className="h-full p-8">
              <div className="space-y-6">
                <p className="font-display text-3xl font-semibold text-white">Placeholder outreach prompt</p>
                <p className="text-base leading-7 text-slate-300">
                  Replace this copy with the final availability note, preferred contact method, and a short invitation for
                  recruiters, collaborators, or peers to reach out.
                </p>
                <div className="flex flex-wrap gap-3">
                  {email ? <PrimaryButton href={`mailto:${email}`}>Email John</PrimaryButton> : null}
                  <PrimaryButton href={githubUrl} target="_blank" rel="noreferrer">
                    Visit GitHub
                  </PrimaryButton>
                </div>
              </div>
            </GlowCard>
          </AnimatedReveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {socialLinks.map((link, index) => (
              <AnimatedReveal key={link.label} delay={0.12 + index * 0.05}>
                <GlowCard className="h-full p-6">
                  <a href={link.url} target={link.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <div className="space-y-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] font-display text-sm font-semibold text-blue-100">
                        {link.icon}
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Link</p>
                        <p className="mt-3 font-display text-2xl font-semibold text-white">{link.label}</p>
                      </div>
                    </div>
                  </a>
                </GlowCard>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

