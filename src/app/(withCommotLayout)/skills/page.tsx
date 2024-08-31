import Image from "next/image";
import React from "react";
import bgimg from "@/assest/bg-brush.png";
import FrontendSkils from "@/component/skills/FrontendSkils";
import BackendSkills from "@/component/skills/BackendSkills";
import ToolsSkil from "@/component/skills/ToolsSkil";
import DevOps from "@/component/skills/DevOps";

const Skillspage = () => {
  return (
    <div className="bg-[#0c1222]  text-slate-100">
      <div className="w-full max-w-7xl mx-auto px-5 pt-5">
        {/*  naming */}
        <div>
          <h1 className="text-4xl text-center font-bold relative z-[999]">
            My Skills
          </h1>

          <Image
            src={bgimg}
            alt="bg"
            width={180}
            height={80}
            className="absolute  top-16 mx-auto left-0 right-0 z-0"
          />
        </div>

        {/*  skils list */}

        <div className="mt-10 pb-10">
          {/* frontend */}

          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              Frontend Technologies
            </h1>
            <FrontendSkils />
          </div>

          {/* backend */}
          <div className="mt-20">
            <h1 className="text-2xl font-bold tracking-wide">
              Backend Technologies
            </h1>
            <BackendSkills />
          </div>
          <div className="mt-20">
            <h1 className="text-2xl font-bold tracking-wide">DevOps</h1>
            <DevOps />
          </div>
          <div className="mt-20">
            <h1 className="text-2xl font-bold tracking-wide">
              Skills Of Tools
            </h1>
            <ToolsSkil />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillspage;
