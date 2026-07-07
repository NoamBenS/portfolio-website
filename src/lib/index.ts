/**
 * array for contact links and labels
 */
export const contacts = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/noambensimon/",
  },
  {
    label: "GitHub",
    link: "https://github.com/NoamBenS",
  },
  {
    label: "Email",
    link: "mailto:me@noambensimon.com",
  },
];

/**
 * array of project data for the carousel
 */
export const projects = [
  {
    label: "Agent Changelog",
    text: "An open source versioning tool for OpenClaw that automatically tracks workspace changes with per-user attribution. It batches commits, provides natural language commands for browsing history, diffs, and rollbacks, and supports synchronization with GitHub or PromptLayer, making AI agent development more transparent and reproducible.",
    link: "https://github.com/MagnivOrg/agent-changelog",
    image: "/images/agent_changelog.jpeg",
  },
  {
    label: "Personal Website",
    text: "I built this website to showcase my work while experimenting with modern web technologies and design. It has evolved alongside my experience as an engineer, serving as a place to explore new frameworks, refine my development workflow, and create a polished user experience.",
    link: "https://github.com/NoamBenS/Personal-Website",
    image: "/images/personal_website.png",
  },
  {
    label: "Radio Rideshare",
    text: "A rhythm game built with friends using Godot and GDScript. We developed the gameplay, mechanics, and a fully featured in-house level editor, then presented the project at a university showcase.",
    link: "https://github.com/Calverin/Radio-Rideshare",
    image: "/images/radio_rideshare.png",
  },
  {
    label: "AWS Lambda Mock",
    text: "A distributed systems project that simulates an AWS Lambda-style execution environment. It includes leader election, task scheduling, fault tolerance, an HTTP gateway for submitting workloads, and local cluster simulations to test worker failures, concurrent execution, and leader recovery.",
    link: "https://github.com/NoamBenS/PseudoLambda",
    image: "/images/lambda_mock.jpg",
  },
  {
    label: "Distributed Tablature Version Control",
    text: "A distributed architecture for synchronizing guitar tablature across multiple nodes. The project explores scalable data synchronization, asynchronous messaging with Kafka, and strategies for handling concurrent updates and load balancing in distributed systems.",
    link: "https://github.com/NoamBenS/OpenTab",
    image: "/images/distributed_tablature.jpg",
  },
  {
    label: "Fat32 Image Reader",
    text: "A Java command-line tool for exploring FAT32 disk images. It parses boot sectors, FAT tables, and directory structures while implementing low-level binary parsing and file system traversal from scratch.",
    link: "https://github.com/NoamBenS/fat32reader",
    image: "/images/fat_32.jpg",
  },
  {
    label: "Stock Terminal",
    text: "A Java command-line application that retrieves real-time stock market data through external APIs. Built collaboratively in one week, it provides customizable financial information through an efficient terminal interface.",
    link: "https://github.com/MaxFdev/StocksTerminal_SE_Project",
    image: "/images/stock_terminal.png",
  },
];

/**
 * array of skills, sorted by category of use
 */
export const skills = [
  [
    "Java",
    "Python",
    "C",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "GDScript",
    "Groq",
    "Bash",
  ],
  ["Next.js", "Vue", "Quasar", "Vercel", "React", "JUnit", "Maven"],
  [
    "Figma",
    "Sanity",
    "Supabase",
    "Arduino",
    "Google Suite",
    "GitHub",
    "Git",
    "Godot",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "Kafka",
    "Redis",
    "Node.js",
  ],
];
