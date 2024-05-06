import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RealProjects from "./RealProjects";
import DemoProjects from "../DemoProjects";

const Projects = () => {
  return (
    <div className="py-10">
      <Tabs defaultValue="real">
        <TabsList className="grid w-full grid-cols-2 bg-[#051030] text-orange-500 shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] ">
          <TabsTrigger value="real">Real Projects</TabsTrigger>
          <TabsTrigger value="demo">Demo Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="real">
          <RealProjects />
        </TabsContent>
        <TabsContent value="demo">
          <DemoProjects />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;
