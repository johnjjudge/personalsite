import type { ExperienceItem } from "@/content/types";

import { AnimatedReveal } from "@/components/animated-reveal";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";

type ExperienceSectionProps = {
  items: ExperienceItem[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <Container className="space-y-10">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="Experience"
            title="Experience"
            description="Roles and selected impact."
          />
        </AnimatedReveal>

        <div className="space-y-10">
          {items.map((item, index) => (
            <AnimatedReveal
              key={`${item.company}-${item.role}`}
              delay={0.08 + index * 0.06}
              className="border-t border-white/10 pt-6"
            >
              <div className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-base text-slate-300">{item.company}</p>
                    {item.location ? <p className="mt-1 text-sm text-slate-500">{item.location}</p> : null}
                  </div>
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                    {item.start} - {item.end}
                  </p>
                </div>

                <ul className="space-y-3 text-sm leading-7 text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-200/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
