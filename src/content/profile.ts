import type { Profile } from "@/content/types";

export const profile: Profile = {
  name: "John Judge",
  title: "Software Engineer II at Microsoft",
  tagline:
    "Software engineer focused on cloud-backed platform work, security, and service reliability for the Windows driver ecosystem.",
  summary:
    "With over six years of professional experience, I specialize in software engineering and cloud-based solutions at Microsoft. My work centers on improving security, scalability, and usability across the Windows driver ecosystem that supports approximately 1.4 billion active devices.",
  location: "Seattle area",
  email: "judgejohn17@gmail.com",
  githubUrl: "https://github.com/johnjjudge",
  linkedinUrl: "https://www.linkedin.com/in/johnj-judge/",
  resumeUrl: "/JohnJudge.pdf",
  skillChips: ["Azure", "C#", "Python", "Distributed Systems", "Security"],
  photoUrl: "/john-judge-with-apollo-and-finn.jpeg",
  photoAlt: "John Judge with Apollo and Finn outdoors",
};

export const heroStats = [
  {
    label: "Current Focus",
    value: "Windows driver ecosystem",
    detail: "Designing and shipping secure, scalable workflow and platform features inside Microsoft's Hardware Dev Center.",
  },
  {
    label: "Impact Surface",
    value: "~1.4B active devices",
    detail: "Building services and certification flows that influence stability, usability, and trust for hardware partners at global scale.",
  },
  {
    label: "Core Stack",
    value: "Azure, C#, Python",
    detail: "Event-driven services, security-sensitive workflows, and production systems engineered for reliability and operational clarity.",
  },
];

export const aboutHighlights = [
  "I specialize in software engineering and cloud-based solutions at Microsoft, with a focus on improving the Windows driver ecosystem through secure, scalable, and highly usable platform work.",
  "At Hardware Dev Center, I have helped design and implement Azure-backed services for driver validation, certification, scanning, and publishing while improving pipeline stability, service performance, and security posture.",
  "I thrive in collaborative environments where technical depth and operational discipline matter, turning complex engineering problems into durable systems that serve users and partners at meaningful scale.",
];

export const personalNotes = [
  "I live in the Seattle area with my wife and our two dogs, Apollo, a Samoyed, and Finn, an American Eskimo mix. We are also getting ready to welcome our first child.",
  "I grew up in the New York metro area, and outside of work I spend a lot of time cooking, skiing, and building side projects that I care about for their own sake.",
  "I am also the unofficial, team-nominated organizer of a top-ranked Sporcle pub quiz team, which is probably the clearest possible sign that I enjoy collaborative problem solving even when it is entirely unnecessary.",
];

export const personalTags = [
  "Seattle Area",
  "New York Metro Roots",
  "Married",
  "Soon-To-Be Father",
  "Apollo",
  "Finn",
  "Cooking",
  "Skiing",
  "Side Projects",
  "Pub Quiz",
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
