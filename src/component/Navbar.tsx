"use client";

import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";
import logo from "@/assest/Vector.png";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // handle open change

  const handleOpenChange = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#090e1a] ">
      <div className="w-full max-w-[1280px] mx-auto ">
        <header>
          <div className=" h-6 flex  flex-row justify-between items-center  gap-3 py-10 pt-6   mx-auto px-3 text-slate-100  ">
            <div>
              <Link href="/">
                <Image src={logo} alt="Logo" height={30} width={30} />
              </Link>
            </div>
            {/* 2nd div */}

            {/* text  */}
            <div
              className={`z[999]  ${
                isOpen
                  ? "visible  text-white  bg-gradient-to-t from-[#000000] to-[#130F40] w-64 backdrop-blur-sm absolute top-5 right-3  h-60 p-4 mt-14  "
                  : "invisible  "
              }  md:visible  `}
            >
              <div className="flex flex-col md:flex-row  font-semibold space-x-4 gap-5  ">
                <h3 className="cursor-pointer hover:text-sky-500 transition duration-300 hover:delay-100 border-b border-dashed pb-2 md:border-none ms-4">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                </h3>
                <h3 className="cursor-pointer hover:text-sky-500 transition duration-300 hover:delay-100 border-b border-dashed pb-2 md:border-none ">
                  <Link href="/skills" onClick={() => setIsOpen(false)}>
                    Skills{" "}
                  </Link>
                </h3>
                <h3 className="cursor-pointer hover:text-sky-500 transition duration-300 hover:delay-100 border-b border-dashed pb-2 md:border-none ">
                  <Link href="/projects" onClick={() => setIsOpen(false)}>
                    Projects{" "}
                  </Link>
                </h3>
                <h3 className="cursor-pointer hover:text-sky-500 transition duration-300 hover:delay-100 border-b border-dashed pb-2 md:border-none ">
                  <Link href="/services" onClick={() => setIsOpen(false)}>
                    Service
                  </Link>
                </h3>
              </div>
            </div>

            {/* icon */}
            <div className="inline-block md:hidden">
              {isOpen ? (
                <span
                  onClick={handleOpenChange}
                  className="text-[19px] text-red-500"
                >
                  <CgCloseO />
                </span>
              ) : (
                <span onClick={handleOpenChange}>
                  <FaBars />
                </span>
              )}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
