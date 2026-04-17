type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-sm uppercase tracking-[0.32em] text-blue-200/70">{eyebrow}</p>
      <div className="space-y-3">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
      </div>
    </div>
  );
}

