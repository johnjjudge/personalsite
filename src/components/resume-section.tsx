import { AnimatedReveal } from "@/components/animated-reveal";
import { Container } from "@/components/container";
import { GlowCard } from "@/components/glow-card";
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
  notes: string[];
};

export function ResumeSection({ resumeUrl, githubUrl, highlights, notes }: ResumeSectionProps) {
  return (
    <section id="resume" className="py-24 sm:py-28">
      <Container className="space-y-12">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="Resume"
            title="The delivery path is ready before the final PDF lands."
            description="This section exposes both view and download actions, while the on-page summary gives enough signal for visitors who stay on the page."
          />
        </AnimatedReveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <AnimatedReveal delay={0.08}>
            <GlowCard className="h-full p-8">
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.28em] text-blue-200/70">Resume Summary</p>
                  <h3 className="font-display text-3xl font-semibold text-white">Placeholder highlights on the page.</h3>
                </div>

                <div className="space-y-5">
                  {highlights.map((item) => (
                    <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="font-display text-xl font-semibold text-white">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{item.body}</p>
                    </div>
                  ))}
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
              </div>
            </GlowCard>
          </AnimatedReveal>

          <AnimatedReveal delay={0.14}>
            <GlowCard className="h-full p-8">
              <div className="space-y-6">
                <div className="rounded-[1.8rem] border border-white/12 bg-slate-950/80 p-6 shadow-[0_18px_50px_rgba(5,8,20,0.45)]">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Resume Asset</p>
                      <div className="flex gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                      </div>
                    </div>
                    <div className="rounded-[1.35rem] border border-dashed border-blue-200/18 bg-[linear-gradient(180deg,rgba(93,146,255,0.1),rgba(255,255,255,0.02))] p-6">
                      <p className="font-display text-2xl font-semibold text-white">resume-placeholder.pdf</p>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        A static placeholder PDF is already included in `public/`, so deployment and CTA wiring are ready for the final export.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {notes.map((note) => (
                    <div key={note} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-200/80" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}

