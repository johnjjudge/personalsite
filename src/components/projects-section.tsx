import type { ProjectItem } from "@/content/types";

import { AnimatedReveal } from "@/components/animated-reveal";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";

type ProjectsSectionProps = {
  items: ProjectItem[];
};

export function ProjectsSection({ items }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <Container className="space-y-12">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="Projects"
            title="Projects"
            description="A few things I have built."
          />
        </AnimatedReveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {items.map((item, index) => (
            <AnimatedReveal
              key={item.slug}
              delay={0.08 + index * 0.06}
              className={
                items.length % 2 === 1 && index === items.length - 1
                  ? "border-t border-white/10 pt-6 lg:col-span-2"
                  : "border-t border-white/10 pt-6"
              }
            >
              <ProjectCard item={item} />
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
