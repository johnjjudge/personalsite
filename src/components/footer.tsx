import type { SocialLink } from "@/content/types";

import { Container } from "@/components/container";

type FooterProps = {
  socialLinks: SocialLink[];
};

export function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} JohnJudge.me</p>
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}

