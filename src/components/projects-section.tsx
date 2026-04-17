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
    <section id="projects" className="py-24 sm:py-28">
      <Container className="space-y-12">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="Projects"
            title="Selected projects across cloud systems, analytics, and embedded control work."
            description="This section mixes production-style reference architectures, open source analysis tooling, and hands-on systems engineering work to show both depth and range."
          />
        </AnimatedReveal>

        <div className="grid gap-6 xl:grid-cols-3">
          {items.map((item, index) => (
            <AnimatedReveal
              key={item.slug}
              delay={0.08 + index * 0.06}
              className={item.featured ? "xl:col-span-2" : undefined}
            >
              <ProjectCard item={item} />
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
