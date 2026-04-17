import { AnimatedReveal } from "@/components/animated-reveal";
import { Container } from "@/components/container";
import { PrimaryButton } from "@/components/primary-button";
import { SecondaryButton } from "@/components/secondary-button";
import { SectionHeader } from "@/components/section-header";

type ResumeSectionProps = {
  resumeUrl: string;
  highlights: Array<{
    title: string;
    body: string;
  }>;
  notes: string[];
};

export function ResumeSection({ resumeUrl, highlights, notes }: ResumeSectionProps) {
  return (
    <section id="resume" className="py-16 sm:py-20">
      <Container className="space-y-10">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="Resume"
            title="Resume"
            description="Highlights here, full PDF linked below."
          />
        </AnimatedReveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <AnimatedReveal delay={0.08}>
            <div className="space-y-8 border-t border-white/10 pt-6">
              <div className="space-y-4">
                <p className="font-display text-2xl font-semibold text-white">Highlights</p>
                <div className="space-y-4">
                  {highlights.map((item) => (
                    <div key={item.title} className="space-y-1">
                      <p className="font-display text-xl font-semibold text-white">{item.title}</p>
                      <p className="text-sm leading-7 text-slate-300">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.14}>
            <div className="space-y-6 border-t border-white/10 pt-6 lg:pl-6">
              <div className="space-y-3">
                <p className="font-display text-2xl font-semibold text-white">Resume</p>
                <p className="text-sm leading-7 text-slate-300">
                  My current resume is viewable on the site or available for download directly below.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <PrimaryButton href={resumeUrl} target="_blank" rel="noreferrer">
                  Open Resume
                </PrimaryButton>
                <SecondaryButton href={resumeUrl} download>
                  Download PDF
                </SecondaryButton>
              </div>

              <div className="space-y-3">
                {notes.map((note) => (
                  <p key={note} className="text-sm leading-7 text-slate-300">
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
