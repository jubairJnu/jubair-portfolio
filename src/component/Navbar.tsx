"use client";

import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";
import logo from "@/assest/Vector.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // handle open change

  const handleOpenChange = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#090e1a] ">
      <div className=" flex justify-between items-start py-4 w-full max-w-[1200px] mx-auto  text-slate-100 relative  px-10 ">
        <div>
          <Image src={logo} alt="Logo" height={50} width={50} />
        </div>
        {/* 2nd div */}

        {/* text  */}
        <div
          className={`z[999]  ${
            isOpen
              ? "visible mt-5  text-white w-full bg-black bg-opacity-35 backdrop-blur-sm absolute top-14 right-0 "
              : "invisible"
          }  md:visible  `}
        >
          <div className="flex flex-col md:flex-row  font-semibold ps-4 gap-3">
            <h3 className="cursor-pointer hover:text-sky-500 transition duration-300 hover:delay-100  ">
              Home{" "}
            </h3>
            <h3 className="cursor-pointer hover:text-sky-500 transition duration-300 hover:delay-75  ">
              Skills{" "}
            </h3>
            <h3 className="cursor-pointer hover:text-sky-500 transition duration-300 hover:delay-75  ">
              Projects{" "}
            </h3>
            <h3 className="cursor-pointer hover:text-sky-500 transition duration-300 hover:delay-75  ">
              Service
            </h3>
          </div>
        </div>

        {/* icon */}
        <div className="inline-block md:hidden">
          {isOpen ? (
            <span onClick={handleOpenChange} className="text-[19px]">
              <CgCloseO />
            </span>
          ) : (
            <span onClick={handleOpenChange}>
              <FaBars />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
