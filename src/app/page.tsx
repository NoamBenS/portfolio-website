import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="pt-15 text-center">
        <Popover>
          <PopoverTrigger className="hover:underline">CONTACT</PopoverTrigger>
          <PopoverContent style={{backgroundColor: 'var(--background)'}}>

          </PopoverContent>
        </Popover>
        <Tabs defaultValue="experience" className="w-1/2 pt-10">
          <TabsList className="gap-4">
            <TabsTrigger value="experience">EXPERIENCE</TabsTrigger>
            <TabsTrigger value="projects">PROJECTS</TabsTrigger>
            {/* <Separator orientation = "vertical" style={{backgroundColor: 'var(--foreground)'}}/> */}
            <TabsTrigger value="skills">SKILLS</TabsTrigger>
          </TabsList>
          <TabsContent value="experience">experience.</TabsContent>
          <TabsContent value="projects">projects.</TabsContent>
          <TabsContent value="skills">skills.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
