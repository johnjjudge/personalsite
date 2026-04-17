import type { Profile } from "@/content/types";

export const profile: Profile = {
  name: "John Judge",
  title: "Software Engineer II at Microsoft",
  tagline:
    "Software engineer focused on cloud-backed platform work, security, and service reliability for the Windows driver ecosystem.",
  summary:
    "With seven years of post-grad experience, I specialize in software engineering and cloud-based solutions at Microsoft. My work focuses on improving security, scalability, and usability across the Windows driver ecosystem that supports approximately 1.4 billion active devices.",
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
  "I specialize in software engineering and cloud-based solutions at Microsoft, with a focus on improving the Windows driver ecosystem through secure, scalable, and highly usable platform work.",
  "At Hardware Dev Center, I have helped design and implement Azure-backed services for driver validation, certification, scanning, and publishing while improving pipeline stability, service performance, and security posture.",
  "I thrive in collaborative environments where technical depth and operational discipline matter, turning complex engineering problems into durable systems that serve users and partners at meaningful scale.",
];

export const personalNotes = [
  "I live in the Seattle area with my wife and our two dogs, Apollo, a Samoyed, and Finn, an American Eskimo mix. We are also getting ready to welcome our first child.",
  "Outside of work I spend a lot of time cooking, skiing, and building side projects that I care about for their own sake.",
  "I have a real knack for memorizing fun facts. I am the captain of a top ranked Sporcle Pub Quiz trivia team.",
  "I grew up in the NY metro area and spend far too much time worrying about the NY Jets, Mets, and Rangers"
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
