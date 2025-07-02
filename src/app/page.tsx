import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const contacts = [
  {
    image: "icons/linkedin100.png",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/noambensimon/",
  },
  {
    image: "icons/github100.png",
    label: "Github",
    link: "https://github.com/NoamBenS",
  },
  {
    image: "icons/resume100.png",
    label: "Resume",
    link: "/NoamBenSimonResumeDemo.pdf",
  },
  {
    image: "icons/email100.png",
    label: "Email",
    link: "mailto:me@noambensimon.com",
  },
];

const projects = [
  {
    label: "Personal Website",
    text: "This site is a great representation of my joy in programming and turning code into something functional and pleasing. This website also serves as a reflection of my dedication and passion in the field away from the classroom. As a personal project, I had the freedom to choose exactly how I wanted it to look and feel, which served as an incredibly enjoyable and fulfilling endeavor.",
    link: "https://github.com/NoamBenS/Personal-Website",
  },
  {
    label: "Radio Rideshare",
    text: "Radio Rideshare is a project that I am currentl working on with my partners. It is a rhythm games that comes with a built-in level editor, all made in-house. The game is built in Godot, and written in GDScript.",
    link: "https://github.com/Calverin/Radio-Rideshare",
  },
  {
    label: "Pseudo Lambda",
    text: "This is my take on a mock of AWS Lambda for serverless code execution. This project has been an undertaking to familiarize myself and learn the basics of the major problems and ideas behind distributed computing. This includes leader election, task scheduling, logging, fault tolerance, and more!",
    link: "https://github.com/NoamBenS/PseudoLambda",
  },
  {
    label: "Stock Terminal",
    text: "Stock Terminal is a Java-based CLI that uses API calls to receive current, relevant, and customizable data on requested tickers. With customizability and professional use in mind, the project is built around user freedom and functionality. My partner and I collaborated and succeeded to develop Stock Terminal as a working program within a week of work.",
    link: "https://github.com/MaxFdev/StocksTerminal_SE_Project",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="pt-15 text-center">
        <Popover>
          <PopoverTrigger className="hover:underline">CONTACT</PopoverTrigger>
          <PopoverContent
            style={{ backgroundColor: "var(--background)" }}
          ></PopoverContent>
        </Popover>
        <Tabs
          defaultValue="experience"
          className="pt-10 flex flex-col items-center"
        >
          <TabsList className="gap-4">
            <TabsTrigger value="experience">EXPERIENCE</TabsTrigger>
            <TabsTrigger value="projects">PROJECTS</TabsTrigger>
            <TabsTrigger value="skills">SKILLS</TabsTrigger>
          </TabsList>
          {/* BREAKING UP THE CONTENT WITH A COMMENT*/}
          <TabsContent
            value="experience"
            className="flex flex-col"
          ></TabsContent>
          <TabsContent value="projects" className="max-w-1/2">
            <Carousel>
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index}>
                    <div className="p-4">
                      <h3 className="mb-2">{project.label}</h3>
                      <p className="mb-4">{project.text}</p>
                      <a href={project.link} className="hover:underline"></a>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
          <TabsContent value="skills">skills.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
