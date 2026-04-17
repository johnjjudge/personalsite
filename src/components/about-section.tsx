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
  const hasPhoto = Boolean(photoUrl);

  return (
    <section id="about" className="relative pb-16 pt-12 sm:pb-20 sm:pt-14">
      <Container className="space-y-8 sm:space-y-10">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="About"
            title="A bit about me."
            description="A short professional summary and some personal context."
          />
        </AnimatedReveal>

        <div className={hasPhoto ? "grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-10" : ""}>
          <AnimatedReveal delay={0.08}>
            <div className="space-y-8 border-t border-white/10 pt-5">
              <div className="space-y-4">
                <p className="font-display text-2xl font-semibold text-white">Professional</p>
                <div className="space-y-4 text-base leading-7 text-slate-300">
                  {highlights.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-display text-2xl font-semibold text-white">Personal</p>
                <div className="space-y-4 text-base leading-7 text-slate-300">
                  {personalNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {photoUrl ? (
            <AnimatedReveal delay={0.1}>
              <div className="border-t border-white/10 pt-5">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                  <img
                    src={photoUrl}
                    alt={photoAlt ?? "John Judge"}
                    className="aspect-[4/3] w-full object-cover object-center"
                  />
                </div>
              </div>
            </AnimatedReveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
