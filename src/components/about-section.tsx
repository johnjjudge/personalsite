import { AnimatedReveal } from "@/components/animated-reveal";
import { Container } from "@/components/container";
import { GlowCard } from "@/components/glow-card";
import { SectionHeader } from "@/components/section-header";

type PhilosophyPoint = {
  title: string;
  body: string;
};

type AboutSectionProps = {
  highlights: string[];
  philosophyPoints: PhilosophyPoint[];
};

export function AboutSection({ highlights, philosophyPoints }: AboutSectionProps) {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <Container className="space-y-12">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="About"
            title="A concise narrative, not a long autobiography."
            description="This section is structured to carry a sharp professional summary, a few principles, and a small amount of human context without losing signal."
          />
        </AnimatedReveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <AnimatedReveal delay={0.08}>
            <GlowCard className="h-full p-8">
              <div className="space-y-6">
                <p className="font-display text-2xl font-semibold text-white">Professional summary placeholder</p>
                <div className="space-y-4 text-base leading-7 text-slate-300">
                  {highlights.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </GlowCard>
          </AnimatedReveal>

          <div className="grid gap-6">
            {philosophyPoints.map((point, index) => (
              <AnimatedReveal key={point.title} delay={0.12 + index * 0.06}>
                <GlowCard className="p-6">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.28em] text-blue-200/65">Approach {index + 1}</p>
                    <h3 className="font-display text-2xl font-semibold text-white">{point.title}</h3>
                    <p className="text-sm leading-7 text-slate-300">{point.body}</p>
                  </div>
                </GlowCard>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

