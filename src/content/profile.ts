import type { Profile } from "@/content/types";

export const profile: Profile = {
  name: "John Judge",
  title: "Software Engineer at Microsoft",
  tagline:
    "Software engineer focused on cloud-backed platform work, security, and service reliability for the Windows driver ecosystem.",
  summary:
    "I build secure, scalable cloud-backed systems at Microsoft, with a focus on improving the Windows driver ecosystem used across approximately 1.4 billion active devices.",
  location: "Seattle area",
  email: "judgejohn17@gmail.com",
  githubUrl: "https://github.com/johnjjudge",
  linkedinUrl: "https://www.linkedin.com/in/johnj-judge/",
  resumeUrl: "/JohnJudge.pdf",
  photoUrl: "/john-judge-with-apollo-and-finn.jpeg",
  photoAlt: "John Judge with Apollo and Finn outdoors",
};

export const heroStats = [
  {
    label: "Current Work",
    value: "Microsoft's Hardware Dev Center",
    detail: "Designing and shipping secure, scalable workflow and platform features inside Microsoft's Hardware Dev Center.",
  },
  {
    label: "Impact",
    value: "~1.4B active devices",
    detail: "Building services and certification flows that influence stability, usability, and trust for hardware partners at global scale.",
  },
  {
    label: "Core Stack",
    value: "Azure, C#, TypeScript, Python",
    detail: "I mostly work with this stack, however, I am always learning new things",
  },
];

export const aboutHighlights = [
  "At Microsoft I work on Azure-backed services and workflows that support driver validation, certification, signing, publishing, and security across the Windows ecosystem.",
  "My work tends to sit at the intersection of platform engineering, operational reliability, and practical systems design, with an emphasis on shipping durable solutions that scale cleanly.",
];

export const personalNotes = [
  "I live in the Seattle area with my wife and our two dogs, Apollo, a Samoyed, and Finn, an American Eskimo mix. We are also getting ready to welcome our first child.",
  "I am originally from the New York metro area. Outside of work I enjoy cooking, skiing, side projects, and helping keep a top-ranked Sporcle pub quiz team organized.",
];

export const philosophyPoints = [
  {
    title: "Engineer For Scale",
    body: "I care about systems that stay understandable and dependable under real production load, whether that means distributed event-driven services, high-traffic APIs, or certification workflows with global reach.",
  },
  {
    title: "Make Reliability Concrete",
    body: "Monitoring, SLOs, alert tuning, synthetic validation, and strong incident response are part of the product. I treat operational excellence as an engineering responsibility, not cleanup after launch.",
  },
  {
    title: "Collaborate With Intent",
    body: "I enjoy working across engineering, security, legal, and product boundaries to turn hard requirements into shippable solutions that raise both technical quality and team effectiveness.",
  },
];
