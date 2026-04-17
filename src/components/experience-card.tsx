import type { ExperienceItem } from "@/content/types";

import { GlowCard } from "@/components/glow-card";

type ExperienceCardProps = {
  item: ExperienceItem;
  index: number;
};

export function ExperienceCard({ item, index }: ExperienceCardProps) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-8 h-3 w-3 rounded-full border border-blue-200/50 bg-blue-300 shadow-[0_0_30px_rgba(147,197,253,0.55)]" />
      <GlowCard className="p-6 sm:p-7">
        <div className="space-y-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-blue-200/70">Role {index + 1}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">{item.role}</h3>
              <p className="mt-2 text-base text-slate-300">{item.company}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300">
              <div>{item.start}</div>
              <div className="text-slate-500">{item.end}</div>
            </div>
          </div>

          {item.location ? <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{item.location}</p> : null}

          <ul className="space-y-3 text-sm leading-7 text-slate-300">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-200/70" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </GlowCard>
    </div>
  );
}

