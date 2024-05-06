import Image from "next/image";

import photo from "@/assest/jubair.jpg";
import { Button } from "@/components/ui/button";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";

const Info = () => {
  return (
    <div className=" w-full shadow-[5px_1px_5px_1px_rgba(0,0,0,0.3)] bg-[#0c1222] rounded-xl flex flex-col md:flex-row justify-between gap-10 lg:gap-72  p-5">
      {/* image div */}
      <div className="flex-1  max-w-[270px] mx-auto text-center">
        <Image
          className="rounded-md"
          src={photo}
          height={280}
          width={270}
          alt="Me"
        />
        <h1 className="my-2 text-xl font-semibold ">Abdullah Al Jubair</h1>
        <div className="flex justify-between items-center">
          <span className="text-[27px] text-sky-500">
            {" "}
            <FaFacebook />{" "}
          </span>
          <span className="text-[36px] text-sky-500">
            {" "}
            <TiSocialLinkedinCircular />{" "}
          </span>
          <span className="text-[26px] text-sky-500">
            {" "}
            <VscGithub />{" "}
          </span>
        </div>
      </div>

      {/* about */}

      <div className=" flex-1 shadow-[5px_1px_10px_10px_rgba(0,0,0,0.3)] pb-5  flex flex-col px-5 justify-between">
        <div>
          <h1 className="text-[30px] font-bold py-5">ABOUT ME</h1>
          <p className="leading-loose text-justify ">
            I am a Full Stack Developer (MERN Stack). I have 2 years of
            experience with the full stack technologies. I am avilaible to work
            full-time remotely and on-site. I can make the modern websites or
            the single page web application.
          </p>

          <p className="mt-8">
            You can <span className="text-orange-500">order</span> me to make
            your desired website with latest and modern technologies.
          </p>
        </div>

        <a
          href="https://drive.google.com/uc?export=download&id=1vYQn5BrLdZYZQykVHEEYQJOJ7shUc-h2"
          download="jubair-resume.pdf"
        >
          <Button className="w-full md:max-w-40 "> Download Resume</Button>
        </a>
      </div>
    </div>
  );
};

export default Info;
