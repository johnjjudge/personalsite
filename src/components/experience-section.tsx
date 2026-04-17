import type { ExperienceItem } from "@/content/types";

import { AnimatedReveal } from "@/components/animated-reveal";
import { Container } from "@/components/container";
import { ExperienceCard } from "@/components/experience-card";
import { SectionHeader } from "@/components/section-header";

type ExperienceSectionProps = {
  items: ExperienceItem[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <Container className="space-y-12">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="Experience"
            title="11 years of delivering and counting"
            description="The timeline is tuned for concise, impact-oriented bullets so real role content can drop in without structural rework."
          />
        </AnimatedReveal>

        <div className="relative space-y-8 before:absolute before:left-[0.3125rem] before:top-8 before:h-[calc(100%-4rem)] before:w-px before:bg-gradient-to-b before:from-blue-200/70 before:via-white/15 before:to-transparent">
          {items.map((item, index) => (
            <AnimatedReveal key={`${item.company}-${item.role}`} delay={0.08 + index * 0.06}>
              <ExperienceCard item={item} index={index} />
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

