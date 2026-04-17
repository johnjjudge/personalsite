import { aboutHighlights, personalNotes, profile } from "@/content/profile";
import { experienceItems } from "@/content/experience";
import { projects } from "@/content/projects";
import { educationItems, resumeHighlights, resumeNotes } from "@/content/resume";
import { socialLinks } from "@/content/socials";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { ResumeSection } from "@/components/resume-section";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Resume", href: "#resume", id: "resume" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar navItems={navItems} resumeUrl={profile.resumeUrl} />
      <HeroSection profile={profile} />
      <AboutSection
        highlights={aboutHighlights}
        personalNotes={personalNotes}
        photoUrl={profile.aboutPhotoUrl}
        photoAlt={profile.aboutPhotoAlt}
        secondaryPhotoUrl={profile.aboutSecondaryPhotoUrl}
        secondaryPhotoAlt={profile.aboutSecondaryPhotoAlt}
      />
      <ExperienceSection items={experienceItems} />
      <EducationSection items={educationItems} />
      <ProjectsSection items={projects} />
      <ResumeSection
        resumeUrl={profile.resumeUrl}
        highlights={resumeHighlights}
        notes={resumeNotes}
      />
      <ContactSection socialLinks={socialLinks} email={profile.email} githubUrl={profile.githubUrl} />
      <Footer socialLinks={socialLinks} />
    </main>
  );
}
