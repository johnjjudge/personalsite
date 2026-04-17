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
  personalNotes: string[];
  personalTags: string[];
  photoUrl?: string;
  photoAlt?: string;
};

export function AboutSection({
  highlights,
  philosophyPoints,
  personalNotes,
  personalTags,
  photoUrl,
  photoAlt,
}: AboutSectionProps) {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <Container className="space-y-12">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="About"
            title="A concise narrative, not a long autobiography."
            description="The goal here is enough detail to understand how I work, what I care about, and a bit of the life around the work without turning the page into a memoir."
          />
        </AnimatedReveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <AnimatedReveal delay={0.08}>
            <GlowCard className="h-full p-8">
              <div className="space-y-6">
                <p className="font-display text-2xl font-semibold text-white">Professional summary</p>
                <div className="space-y-4 text-base leading-7 text-slate-300">
                  {highlights.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </GlowCard>
          </AnimatedReveal>

          <div className="grid gap-6">
            <AnimatedReveal delay={0.1}>
              <GlowCard className="overflow-hidden p-6">
                <div className="space-y-5">
                  {photoUrl ? (
                    <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                      <img src={photoUrl} alt={photoAlt ?? "John Judge"} className="h-72 w-full object-cover" />
                    </div>
                  ) : null}
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.28em] text-blue-200/65">Outside Work</p>
                    <h3 className="font-display text-2xl font-semibold text-white">A bit more context.</h3>
                    <div className="space-y-3 text-sm leading-7 text-slate-300">
                      {personalNotes.map((note) => (
                        <p key={note}>{note}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {personalTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </AnimatedReveal>

            {philosophyPoints.map((point, index) => (
              <AnimatedReveal key={point.title} delay={0.16 + index * 0.06}>
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
