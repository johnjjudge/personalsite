import type { ProjectItem } from "@/content/types";

export const projects: ProjectItem[] = [
  {
    slug: "azure-functions-event-sourcing-reference",
    title: "Azure Functions Event Sourcing Reference",
    period: "Jan 2026 - Present",
    description:
      "Clean-architecture reference for an event-sourced, event-driven Azure Functions workflow using Event Grid (CloudEvents 1.0), Cosmos DB for event storage and projections, and Table Storage intake with leasing. Includes idempotent handlers for at-least-once delivery, Bicep infrastructure, and a mock external service with managed identity-style auth.",
    techStack: ["C#", "Azure", "Azure Functions", "Event Grid", "Cosmos DB", "Bicep", "Event Sourcing"],
    githubUrl: "https://github.com/johnjjudge/azure-functions-event-sourcing-reference",
    featured: true,
  },
  {
    slug: "espn-fantasy-league-analyzer",
    title: "ESPN Fantasy League Analyzer",
    period: "Jun 2025 - Present",
    description:
      "Open source project created to export ESPN Fantasy Football league data to CSV and generate lightweight analyses, including draft value and start-sit efficiency, for deeper offline review.",
    techStack: ["Python", "Back Engineering (ESPN API)", "Data Analysis"],
    githubUrl: "https://github.com/johnjjudge/espn-fantasy-league-analyzer",
  },
  {
    slug: "lead-hybrid-rocket-control-systems-engineer",
    title: "Lead Hybrid Rocket Control Systems Engineer",
    period: "Aug 2018 - May 2019",
    description:
      "Led control systems engineering on a multidisciplinary team building a tested, functional, and reusable hybrid rocket engine for use in the 2020 IREC. Owned RTM monitoring system design and implementation, with work spanning high-frequency sensor reading, analog-to-digital conversion, high-speed data acquisition, and printed circuit board design.",
    techStack: ["Audrino", "Python", "Control Systems", "Sensor Telemetry", "Data Acquisition", "PCB Design"],
  },
  {
    slug: "interface-digital-electronics-nxp-cup",
    title: "Interface & Digital Electronics NXP Cup",
    period: "Spring 2017",
    description:
      "Developed an autonomous car for competition at Imagine RIT 2017. Designed and built both the hardware and software needed to capture and process sensor data, then implemented an autonomous driving algorithm based on those signals.",
    techStack: ["C++", "Audrino", "Embedded Systems", "Robotics", "Sensor Processing", "Autonomous Driving"],
  },
];
