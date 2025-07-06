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
import { Card, CardContent } from "@/components/ui/card";

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
          <TabsContent value="overview" className="md:max-w-1/2 max-w-full">
            <p className="p-3">
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
          <TabsContent value="projects" className="max-w-2/3 md:w-1/2">
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
          <TabsContent value="skills" className="w-full md:w-1/4">
            <Accordion type="multiple">
              {skills.map((array, index) => (
                <AccordionItem
                  key={index}
                  value={arrays[index]}
                  className="max-w-full p-3"
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
        className="my-4 max-w-2/3 md:max-w-1/3"
        style={{ backgroundColor: "var(--foreground)" }}
      />
      <h1 className="pt-10">WHAT I AM UP TO</h1>
      <div className="pt-10 flex flex-row flex-wrap md:max-w-1/2 max-w-full justify-center gap-3">
        <div className="flex flex-col text-center">
          <Card className="border-none shadow-none">
            <CardContent>
              <h1>PROFESSIONAL</h1>
              <p>
                I am currently interning for my university, building a website
                to host educational content available to all. This work involves
                designing and developing all aspects of the site, from the Figma
                designs to the CMS schema and implementation. Although I am
                still working in this position, I can already atest to the large
                growth and experience I&apos;ve gained. This ranges from
                learning to better manage large responsibilities and workloads
                to expanding my knowledge in full-stack tools and frameworks.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col text-center">
          <Card className="border-none shadow-none">
            <CardContent>
              <h1>ACADEMICS</h1>
              <p>
                I am entering my fourth and final year of a bachelors in
                Computer Science with a focus on Distributed Systems. Through my
                classes, coursework, projects, and extracurriculars, I have
                built myself a strong foundation in the field of software
                engineering. This includes work in parallel programming,
                distributed systems, networking, and cybersecurity. Along with
                this goes my work outside the classroom, such as in my position
                as Head Website Manager for the YU Observer, an independent
                school news publication, where my department works to manage and
                update the publication&apos;s website.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col text-center">
          <Card className="border-none shadow-none">
            <CardContent>
              <h1>PERSONAL</h1>
              <p>
                I am currently enjoying my summer! Between my weekdays working,
                I have found time on weekends to hang out with friends, visit
                family - in Israel, Florida, and North Carolina, and tour New
                York City! When I&apos;m not studying or working, you can find
                me spending time reading, listening to music, or bouldering -
                sometimes all three at once. If you&apos;re interested, here are
                a couple books I&apos;ve recently read that I recommend: Words
                of Radiance (Brandon Sanderson), Fahrenheit 451 (Ray Bradbury),
                and The Hitchhiker&apos;s Guide to the Galaxy (Douglas Adams)
                Here are some albums as well, if you are looking for
                recommendations: Only God Was Above Us (Vampire Weekend), Tears
                of Denial (Car Seat Headrest), The New Abnormal (The Strokes)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
