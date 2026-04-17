import { AnimatedReveal } from "@/components/animated-reveal";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";

type EducationSectionProps = {
  items: Array<{
    school: string;
    credential: string;
    years?: string;
    location?: string;
  }>;
};

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <section id="education" className="py-16 sm:py-20">
      <Container className="space-y-10">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="Education"
            title="Education"
            description="Academic background and foundation."
          />
        </AnimatedReveal>

        <div className="space-y-8">
          {items.map((item, index) => (
            <AnimatedReveal
              key={item.school}
              delay={0.08 + index * 0.06}
              className="border-t border-white/10 pt-6"
            >
              <div className="space-y-2">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <p className="font-display text-2xl font-semibold text-white">{item.school}</p>
                  {item.years ? <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{item.years}</p> : null}
                </div>
                <p className="text-base leading-7 text-slate-300">{item.credential}</p>
                {item.location ? <p className="text-sm text-slate-500">{item.location}</p> : null}
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
