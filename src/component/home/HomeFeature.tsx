import Image from "next/image";
import nextimg from "@/assest/nextjs-icon.svg";
import nodeimg from "@/assest/nodejs-icon.svg";
import reactimg from "@/assest/react-1-logo-svgrepo-com.svg";
import reduximg from "@/assest/redux.svg";
import figmaimg from "@/assest/figma-icon.svg";
import firebaseimg from "@/assest/firebase-1.svg";
import blogimg from "@/assest/blogs.svg";
import Projects from "./Services";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

const HomeFeature = () => {
  return (
    <div className="mt-7 pb-7">
      {/* main grid  */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
        {/* skills */}
        <div className="grid md:col-span-2  bg-gradient-to-r from-[#0c1222] to-[#000003] rounded-lg text-white shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] ">
          {/* image */}
          <div className="grid grid-cols-3 gap-3 justify-items-center items-center px-16 py-5 gap-y-10">
            <Image
              src={nextimg}
              alt="skills"
              width={100}
              height={80}
              className="bg-black p-3 rounded-2xl w-14"
            />
            <Image
              src={nodeimg}
              alt="skills"
              width={50}
              height={50}
              className="bg-black p-3 rounded-2xl w-14"
            />
            <Image
              src={reactimg}
              alt="skills"
              width={50}
              height={50}
              className="bg-black p-3 rounded-2xl w-14"
            />
            <Image
              src={reduximg}
              alt="skills"
              width={50}
              height={50}
              className="bg-black p-3 rounded-2xl w-14"
            />
            <Image
              src={figmaimg}
              alt="skills"
              width={50}
              height={50}
              className="bg-black p-3 rounded-2xl w-14"
            />
            <Image
              src={firebaseimg}
              alt="skills"
              width={50}
              height={50}
              className="bg-black p-3 rounded-2xl w-14"
            />
          </div>
          <div className="flex justify-between items-center px-3">
            <h1 className="text-xl font-bold">Skills</h1>
            <Link href="/skills">
            <span className="mt-3 text-2xl font-bold opacity-50 hover:opacity-100 transition-all duration-100 delay-75 cursor-pointer ">
              <HiOutlineArrowNarrowRight />
            </span>
            </Link>
          </div>
        </div>
        {/* projects */}
        <Projects />
        {/* blogs */}
        <div className="bg-gradient-to-r from-[#0c1222] to-[#000003] rounded-lg text-white shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] ">
          <Image src={blogimg} alt="blog" className="p-3" />
          <div className="flex justify-between px-2  items-center">
            <h1 className="mt-5 text-xl font-bold">Blogs</h1>
            <span className="mt-5 text-2xl font-bold opacity-50 hover:opacity-100 transition-all duration-100 delay-75">
              <HiOutlineArrowNarrowRight />
            </span>
          </div>
        </div>
      </div>
      {/* main div close */}
    </div>
  );
};

export default HomeFeature;
