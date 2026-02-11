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
    label: "Personal Website",
    text: "This website serves as a reflection of my dedication to the field away from the classroom. It is also an example of my growth in software development, as this has been an iterative process that I've used to funnel my creativity and apply new skills and tools as I have progressed along my career. As a personal project, I had the freedom to choose exactly how I wanted it to look and feel, which served as an incredibly enjoyable and fulfilling endeavor.",
    link: "https://github.com/NoamBenS/Personal-Website",
    image: "",
  },
  {
    label: "Radio Rideshare",
    text: "Radio Rideshare is a rhythm game I designed with my team and presented in a project showcase. It comes with a built-in level editor, all made in-house. The game is built in Godot and written in GDScript.",
    link: "https://github.com/Calverin/Radio-Rideshare",
    image: "",
  },
  {
    label: "AWS Lambda Mock",
    text: "I built a mock AWS Lambda environment to dive deep into distributed systems concepts like leader election, task scheduling, and fault tolerance. It features a distributed execution layer with an HTTP gateway for submitting serverless workloads, plus a local simulation script that helped me test how the system handles concurrent requests, worker failures, and leader recovery. It was a fantastic learning experience exploring the challenges of building reliable distributed systems.",
    link: "https://github.com/NoamBenS/PseudoLambda",
    image: "",
  },
  {
    label: "Distributed Tablature Version Control",
    text: "I designed the architecture for a distributed tablature storage system that synchronizes music notation across multiple nodes. The project explores asynchronous patterns for high-throughput reads and writes, with skeleton Java services that model real-time data flow through Kafka. It's been an exciting dive into how to handle concurrent updates and load balancing in a distributed environment.",
    link: "https://github.com/NoamBenS/OpenTab",
    image: "",
  },
  {
    label: "Fat32 Image Reader",
    text: "This Java CLI tool lets you parse FAT32 disk images by reading boot sectors, FAT tables, and directory entries. I built it to learn about low-level binary parsing and file system internals, implementing file-traversal logic and metadata inspection from the ground up. It was a fun challenge getting into the nitty-gritty of how file systems work at the byte level.",
    link: "https://github.com/NoamBenS/fat32reader",
    image: "",
  },
  {
    label: "Stock Terminal",
    text: "Stock Terminal is a Java-based CLI that uses API calls to receive current, relevant, and customizable data on requested tickers. With customizability and professional use in mind, the project is built around user freedom and functionality. My partner and I collaborated and succeeded to develop Stock Terminal as a working program within a week of work.",
    link: "https://github.com/MaxFdev/StocksTerminal_SE_Project",
    image: "",
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
