import { AnimatedReveal } from "@/components/animated-reveal";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";

type AboutSectionProps = {
  highlights: string[];
  personalNotes: string[];
  photoUrl?: string;
  photoAlt?: string;
};

export function AboutSection({
  highlights,
  personalNotes,
  photoUrl,
  photoAlt,
}: AboutSectionProps) {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <Container className="space-y-12">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="About"
            title="Overview and a bit about me."
            description="A short professional summary and some personal context."
          />
        </AnimatedReveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <AnimatedReveal delay={0.08}>
            <div className="space-y-5 border-t border-white/10 pt-6">
              <p className="font-display text-2xl font-semibold text-white">Professional</p>
              <div className="space-y-4 text-base leading-7 text-slate-300">
                {highlights.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <div className="space-y-5 border-t border-white/10 pt-6">
              {photoUrl ? (
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                  <img src={photoUrl} alt={photoAlt ?? "John Judge"} className="h-72 w-full object-cover" />
                </div>
              ) : null}
              <div className="space-y-3">
                <p className="font-display text-2xl font-semibold text-white">Personal</p>
                <div className="space-y-3 text-base leading-7 text-slate-300">
                  {personalNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
