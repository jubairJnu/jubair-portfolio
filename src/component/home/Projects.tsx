import Image from "next/image";
import projectimg from "@/assest/project.png";

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-[#0c1222] to-[#000003] rounded-lg text-white shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] ">
      <Image src={projectimg} alt="project" className="p-3"  />
      <h1 className="mt-5 text-xl font-bold">Projects</h1>
    </div>
  );
};

export default Projects;
