import Image from "next/image";
import projectimg from "@/assest/project.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-[#0c1222] to-[#000003] rounded-lg text-white shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] ">
      <Image src={projectimg} alt="project" className="p-3" />
      <div className="flex justify-between items-center px-2">
        <h1 className="mt-5 text-xl font-bold">Services</h1>
        <span className="mt-5 text-2xl font-bold">

        <HiOutlineArrowNarrowRight />
        </span>
      </div>
    </div>
  );
};

export default Services;
