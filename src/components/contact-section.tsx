import type { SocialLink } from "@/content/types";

import { AnimatedReveal } from "@/components/animated-reveal";
import { Container } from "@/components/container";
import { PrimaryButton } from "@/components/primary-button";
import { SecondaryButton } from "@/components/secondary-button";
import { SectionHeader } from "@/components/section-header";

type ContactSectionProps = {
  socialLinks: SocialLink[];
  email?: string;
  githubUrl: string;
};

export function ContactSection({ socialLinks, email, githubUrl }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container className="space-y-10">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="Contact"
            title="Connect"
            description="Email, LinkedIn, and GitHub"
          />
        </AnimatedReveal>

        <AnimatedReveal delay={0.08} className="space-y-6 border-t border-white/10 pt-6">
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            Always open to connecting, especially around engineering work, interesting problems, or opportunities
            to collaborate.
          </p>
          <div className="flex flex-wrap gap-3">
            {email ? <PrimaryButton href={`mailto:${email}`}>Email John</PrimaryButton> : null}
            <SecondaryButton href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </SecondaryButton>
            {socialLinks
              .filter((link) => link.label !== "Email" && link.label !== "GitHub")
              .map((link) => (
                <SecondaryButton
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  {link.label}
                </SecondaryButton>
              ))}
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
