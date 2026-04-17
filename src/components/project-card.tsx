import type { ProjectItem } from "@/content/types";

import { SecondaryButton } from "@/components/secondary-button";

type ProjectCardProps = {
  item: ProjectItem;
};

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
        {item.period ? <p className="text-sm text-slate-500">{item.period}</p> : null}
        <p className="text-sm leading-7 text-slate-300">{item.description}</p>
        <p className="text-sm text-slate-400">Stack: {item.techStack.join(", ")}</p>
      </div>

      <div className="flex flex-wrap gap-3">
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
  );
}
