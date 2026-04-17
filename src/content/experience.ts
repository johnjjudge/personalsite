import type { ExperienceItem } from "@/content/types";

export const experienceItems: ExperienceItem[] = [
  {
    company: "Microsoft",
    role: "Software Engineer II",
    start: "Mar 2022",
    end: "Present",
    location: "Redmond, Washington",
    bullets: [
      "Designed and delivered features across driver certification, signing, and publishing workflows that support the Windows driver ecosystem used by roughly 1.4 billion active Windows devices, improving stability, usability, and security for hardware partners.",
      "Co-designed and shipped an Azure event-driven, domain-driven service to rescan Windows Update-published drivers; processed 250,000+ drivers and surfaced hundreds of suspicious drivers for deeper security investigation.",
      "Improved API performance by roughly 35x by designing and implementing a reusable filtering algorithm across authorization and provider paths, reducing latency in a high-traffic service.",
      "Led operational excellence work by improving monitoring and SLO coverage, tuning noisy alerts, mitigating production issues, and documenting playbooks that shortened time-to-mitigation and reduced repeat incidents.",
      "Architected and delivered an Azure-hosted synthetic end-to-end availability testing solution adopted across 5+ production services to validate critical workflows and catch regressions before customers do.",
      "Helped raise engineering standards through Scrum Master support, engineering excellence guidance, hackathon leadership, technical workshops, and onboarding and mentorship for 8+ engineers.",
    ],
  },
  {
    company: "Microsoft",
    role: "Software Engineer",
    start: "Jun 2019",
    end: "Mar 2022",
    location: "Redmond, Washington",
    bullets: [
      "Planned and executed zero-downtime operating system upgrades across the team's VM fleet in every environment, including production, balancing development and cloud-cost tradeoffs and completing the rollout within one sprint without service interruption.",
      "Partnered with engineering, security, and legal stakeholders to close a critical EV certificate validation gap by gathering requirements and implementing the validation algorithm used to harden identity verification in the signing workflow.",
      "Designed and shipped a new Azure-hosted REST API microservice handling tens of thousands of requests per day, with production telemetry and operational readiness built in from the start.",
      "Independently delivered a customer-facing workflow improvement adopted by thousands of enterprise customers, saving substantial time for customers and Technical Account Managers through streamlined case and engagement handling.",
      "Owned infrastructure automation for a new service by building ARM-based IaC and CI/CD pipelines that enabled consistent, automated, test-gated deployments from initial build through MVP.",
    ],
  },
  {
    company: "Wegmans Food Markets",
    role: "Software Quality Analyst Co-op",
    start: "Jan 2018",
    end: "Aug 2018",
    location: "Rochester, New York Area",
    bullets: [
      "Worked in an agile environment performing quality analysis for the continual improvement of wegmans.com and Wegmans mobile apps.",
      "Led quality analysis on several new feature releases while logging bugs and helping author user stories in Microsoft VSTS.",
      "Developed test plans at both the feature and user story level to support repeatable validation and smoother team execution.",
    ],
  },
  {
    company: "Architecture Technology Corporation",
    role: "Software Engineering Co-op",
    start: "Jun 2017",
    end: "Aug 2018",
    location: "Tompkins County, New York, United States",
    bullets: [
      "Contributed in an agile and scrum environment to the CYRIN virtual cyber training center and learning management system.",
      "Built backend services and automation to move lesson packages across development, staging, and production, including virtual machines, database entries, and XML-backed data.",
      "Improved monitoring of student progress across multiple virtual machines and increased efficiency in the data processing path between those machines and the backend progress-tracking framework.",
      "Created cybersecurity and system administration lessons using tools such as Nmap, The Sleuth Kit, OWASP tooling, Hydra, and Security Onion, and helped design a simple, intuitive user interface.",
    ],
  },
  {
    company: "Sterling Classic Builders",
    role: "General Contractor Assistant",
    start: "Jun 2015",
    end: "Feb 2017",
    location: "Pearl River, New York",
    bullets: [
      "Worked for a general contractor supporting residential home building, renovation, and maintenance projects.",
      "Built practical experience across job-site execution, material handling, and the day-to-day coordination required to keep residential projects moving.",
      "Frequently sourced materials and helped ensure crews had what they needed to complete work efficiently.",
    ],
  },
];
