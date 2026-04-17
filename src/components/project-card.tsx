import type { ProjectItem } from "@/content/types";

import { GlowCard } from "@/components/glow-card";
import { SecondaryButton } from "@/components/secondary-button";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  item: ProjectItem;
};

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <GlowCard
      className={cn(
        "group h-full overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200/20 hover:bg-white/[0.06]",
        item.featured && "border-blue-200/20 bg-[linear-gradient(180deg,rgba(93,146,255,0.14),rgba(255,255,255,0.04))]",
      )}
    >
      <div className="flex h-full flex-col gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.28em] text-blue-200/70">
              {item.featured ? "Featured Project" : "Project"}
            </p>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
              {item.slug.replaceAll("-", " ")}
            </span>
          </div>
          <div className="space-y-3">
            <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
            <p className="text-sm leading-7 text-slate-300">{item.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {item.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          {item.githubUrl ? (
            <SecondaryButton href={item.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </SecondaryButton>
          ) : null}
          {item.liveUrl ? (
            <SecondaryButton href={item.liveUrl} target="_blank" rel="noreferrer">
              Live Demo
            </SecondaryButton>
          ) : null}
        </div>
      </div>
    </GlowCard>
  );
}

