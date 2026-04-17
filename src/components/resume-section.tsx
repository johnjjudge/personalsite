import { AnimatedReveal } from "@/components/animated-reveal";
import { Container } from "@/components/container";
import { PrimaryButton } from "@/components/primary-button";
import { SecondaryButton } from "@/components/secondary-button";
import { SectionHeader } from "@/components/section-header";

type ResumeSectionProps = {
  resumeUrl: string;
  githubUrl: string;
  highlights: Array<{
    title: string;
    body: string;
  }>;
  education: Array<{
    school: string;
    credential: string;
    years?: string;
    location?: string;
  }>;
  notes: string[];
};

export function ResumeSection({ resumeUrl, githubUrl, highlights, education, notes }: ResumeSectionProps) {
  return (
    <section id="resume" className="py-20 sm:py-24">
      <Container className="space-y-12">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="Resume"
            title="Resume and education"
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

              <div className="space-y-4">
                <p className="font-display text-2xl font-semibold text-white">Education</p>
                <div className="space-y-4">
                  {education.map((item) => (
                    <div key={item.school} className="space-y-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <p className="font-display text-xl font-semibold text-white">{item.school}</p>
                        {item.years ? <p className="text-sm text-slate-500">{item.years}</p> : null}
                      </div>
                      <p className="text-sm leading-7 text-slate-300">{item.credential}</p>
                      {item.location ? <p className="text-sm text-slate-500">{item.location}</p> : null}
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
                  The current PDF is bundled with the site and linked directly below.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <PrimaryButton href={resumeUrl} target="_blank" rel="noreferrer">
                  Open Resume
                </PrimaryButton>
                <SecondaryButton href={resumeUrl} download>
                  Download PDF
                </SecondaryButton>
                <SecondaryButton href={githubUrl} target="_blank" rel="noreferrer">
                  View GitHub
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
