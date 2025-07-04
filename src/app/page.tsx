import { contacts, projects, skills } from "@/lib/collections";

import Image from "next/image";

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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const arrays = ["LANGUAGES", "FRAMEWORKS", "APPS AND PROGRAMS"];
  return (
    <div className="flex flex-col items-center">
      <div className="pt-15 text-center w-full">
        <Popover>
          <PopoverTrigger className="hover:underline">CONTACT</PopoverTrigger>
          <PopoverContent
            className="flex flex-row max-w-fit gap-x-2"
            style={{ backgroundColor: "var(--background)" }}
          >
            {contacts.map((contact, index) => (
              <div key={index}>
                <a href={contact.link} className="hover:underline">
                  {contact.label}
                </a>
              </div>
            ))}
          </PopoverContent>
        </Popover>
        <div className="flex flex-col items-center">
          <Image
            src="/images/tel-aviv.jpg"
            width={250}
            height={200}
            alt="tel-aviv"
          />
        </div>
        <Tabs
          defaultValue="overview"
          className="pt-10 flex flex-col items-center"
        >
          <TabsList className="gap-2">
            <TabsTrigger value="overview">OVERVIEW</TabsTrigger>
            <TabsTrigger value="projects">PROJECTS</TabsTrigger>
            <TabsTrigger value="skills">SKILLS</TabsTrigger>
          </TabsList>
          {/* BREAKING UP THE CONTENT WITH A COMMENT*/}
          <TabsContent value="overview" className="w-1/4">
            <p>
              Hey! I&apos;m Noam, an Honors Computer Science student at Yeshiva
              University.
              <br />
              <br />
              While in school, I have worked hard to grow and develop my
              skillset and knowledge in the field, including projects such as
              this website, a rhythm game I built with my friends, and a mock of
              AWS Lambda for dsitributed compute.
              <br />
              <br />
              In my free time I like to read, go bouldering, cook, and spend
              time with my friends (not all at once, though. I tried it once.
              BIG mistake. The food turned out ok, though).
              <br />
              <br />I hope you enjoy this website, and if you have any comments,
              critiques, or concerns, please feel free to reach out to me!
            </p>
          </TabsContent>
          <TabsContent value="projects" className="max-w-1/4">
            <Carousel>
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index}>
                    <h3 className="font-bold mb-4">{project.label}</h3>
                    <p className="mb-4">{project.text}</p>
                    <a href={project.link} className="hover:underline">
                      - GitHub -
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
          <TabsContent value="skills" className="w-1/4">
            <Accordion type="multiple">
              {skills.map((array, index) => (
                <AccordionItem
                  key={index}
                  value={arrays[index]}
                  className="max-w-full"
                >
                  <AccordionTrigger>{arrays[index]}</AccordionTrigger>
                  <AccordionContent className="flex flex-row flex-wrap justify-center">
                    {array.map((item, index) => (
                      <div key={index}>
                        <Badge>{item}</Badge>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
      <Separator
        className="my-4 max-w-1/3"
        style={{ backgroundColor: "var(--foreground)" }}
      />
      <h1 className="pt-10">WHAT I AM UP TO</h1>
      <div className="pt-10 flex flex-row">
        <div className="flex flex-col text-center">
          <h1>PROFESSIONAL</h1>
          <p>I AM WORKING</p>
        </div>
        <Separator
        orientation="vertical"
        className="mx-2 h-16"
        style={{ backgroundColor: "var(--foreground)" }}
        />
        <div className="flex flex-col text-center">
          <h1>PROFESSIONAL</h1>
          <p>I AM WORKING</p>
        </div>
      </div>
    </div>
  );
}
