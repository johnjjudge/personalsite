import type { Profile } from "@/content/types";

export const profile: Profile = {
  name: "John Judge",
  title: "Software Engineer at Microsoft",
  tagline:
    "Software engineer focused on cloud based distributed systems, platform work, security, and service reliability.",
  summary:
    "I build secure, scalable Azure-hosted systems at Microsoft, with a focus on improving the Windows driver ecosystem used across approximately 1.4 billion active Windows devices.",
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
  "I am a software engineer at Microsoft where I have spent the first 7ish years of my career building distributed event-driven services, microservices, and maintaining complex legacy code bases. I have designed and shipped dozens of features as well as some complete services which allow for Microsoft’s Hardware Partners such as NVIDIA, Intel, AMD, etc. certify sign and deliver device drivers to the 1.4B active Windows devices around the globe. Its mission critical work for Microsoft as well as the customers we support. It requires a lot of cross-team coordination, on-call responsibilities, and even working directly with the customers to deliver fixes and answer questions.",
  "Prior to my time at Microsoft, I graduated with a degree in Computer Engineering at RIT. During my time there I held a leadership position in the school’s rocketry club and even worked on a multidisciplinary team to create a hybrid rocket engine as my senior design project. I was also fortunate to spend 2 semesters and two summers in a co-op program where I worked full time at internships. Giving me a full year of experience before I even graduated.",
];

export const personalNotes = [
  "I live in the Seattle area with my wife and our two dogs, Apollo, a Samoyed, and Finn, an American Eskimo mix. We are also getting ready to welcome our first child.",
  "Outside of work I spend a lot of time learning and improving cooking techniques, skiing, building side projects, and helping keep a top-ranked Sporcle pub quiz team organized. I have a real knack for remembering random facts. Probably because I spend a lot of free time watching video essays on YouTube. I am originally from New York. I spend far too much time worrying about the NY Jets, Mets, and Rangers. I love the NFL and can spend hours talking (and criticizing) the New York Jets.",
];

export const philosophyPoints = [
  {
    title: "Engineer For Scale",
    body: "I care about systems that stay understandable and dependable under real production load, whether that means distributed event-driven services, high-traffic APIs, or products with global reach.",
  },
  {
    title: "Make Reliability Concrete",
    body: "Monitoring, alerting, defining SLOs, building test solutions, and strong incident response are part of the product. I treat operational excellence as an engineering responsibility, not cleanup after launch.",
  },
  {
    title: "Collaborate With Intent",
    body: "I enjoy working across disciplines, teams, and product boundaries to turn hard requirements into shippable solutions that raise both technical quality and team effectiveness.",
  },
];
