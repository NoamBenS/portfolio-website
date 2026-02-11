"use client";

import { contacts, projects, skills } from "@/lib";

import Image from "next/image";
import { useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const arrays = ["LANGUAGES", "FRAMEWORKS", "APPS AND PROGRAMS"];
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>(
    projects.reduce(
      (acc, project, index) => {
        if (project.image) acc[`project-${index}`] = true;
        return acc;
      },
      { headshot: true } as Record<string, boolean>,
    ),
  );

  const handleImageLoad = (key: string) => {
    setLoadingImages((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <div className="flex flex-col items-center text-center pt-15 w-full">
      <Popover>
        <PopoverTrigger className="hover:underline">CONTACT</PopoverTrigger>
        <PopoverContent
          className="flex flex-row max-w-fit gap-x-2"
          style={{ backgroundColor: "var(--background)" }}
        >
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className="hover:underline"
            >
              {contact.label}
            </a>
          ))}
        </PopoverContent>
      </Popover>
      <Card className="w-2/3 lg:w-1/2 mx-auto border-none shadow-none rounded-none bg-background">
        <CardContent>
          <Carousel>
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  {project.image && (
                    <div className="mb-4 relative">
                      {loadingImages[`project-${index}`] && (
                        <Skeleton className="w-full h-48 max-w-[400px] mx-auto mb-4" />
                      )}
                      <Image
                        src={project.image}
                        alt={project.label}
                        width={600}
                        height={400}
                        className="w-full h-auto max-w-[400px] mx-auto rounded-lg"
                        onLoad={() => handleImageLoad(`project-${index}`)}
                        style={{
                          display: loadingImages[`project-${index}`]
                            ? "none"
                            : "block",
                        }}
                      />
                    </div>
                  )}
                  <h3 className="font-bold mb-2 text-lg md:text-xl">
                    {project.label}
                  </h3>
                  <p className="mb-4 text-sm md:text-base px-2 md:px-0">
                    {project.text}
                  </p>
                  <a
                    href={project.link}
                    className="hover:underline text-sm md:text-base"
                  >
                    - GitHub -
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>
      <Card className="w-2/3 lg:w-1/2 mx-auto border-none shadow-none rounded-none bg-background">
        <CardContent>
          <Accordion type="multiple">
            {skills.map((array, index) => (
              <AccordionItem
                key={index}
                value={arrays[index]}
                className="w-full p-3"
              >
                <AccordionTrigger>{arrays[index]}</AccordionTrigger>
                <AccordionContent className="flex flex-row flex-wrap justify-center">
                  {array.map((item, index) => (
                    <Badge key={index}>{item}</Badge>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
      <div className="w-3/4 md:max-w-2/3 lg:max-w-1/2 mx-auto px-6 pt-4">
        <div className="relative">
          {loadingImages.headshot && (
            <Skeleton className="w-full h-48 max-w-[350px] mx-auto mb-4" />
          )}
          <Image
            src="/images/headshot.jpg"
            priority
            width={350}
            height={200}
            alt="rock-climbing"
            className="h-auto w-auto mx-auto"
            onLoad={() => handleImageLoad("headshot")}
            style={{
              display: loadingImages.headshot ? "none" : "block",
            }}
          />
        </div>
        <div className="mx-auto p-3 text-center">
            Hey! I&apos;m Noam, a Dean&apos;s List Computer Science student at
            Yeshiva University.
            <br />
            <br />
            While in school, I have worked hard to grow and develop my skill set
            and knowledge in the field, including projects such as this website,
            a rhythm game I built with my friends, and a mock of AWS Lambda for
            distributed compute.
        </div>
      </div>
    </div>
  );
}
