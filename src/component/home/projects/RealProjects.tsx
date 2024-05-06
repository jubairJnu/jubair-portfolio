import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import soeImg from "@/assest/soe.png";
import dreamImg from "@/assest/d4h.png";
import artImg from "@/assest/artugrul.png";
import Link from "next/link";

const RealProjects = () => {
  return (
    <div>
      {/* 1 */}

      <div className="mt-10">
        <Card className="bg-gradient-to-r from-[#8a026f] to-[#333399] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5  items-center px-2">
            <div className="grid col-span-2">
              <CardHeader>
                <h1 className="text-3xl font-bold ">
                  LMS |{" "}
                  <span className="text-slate-400 text-[25px]">MERN Stack</span>
                </h1>
                <CardDescription className="text-slate-200"></CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  <li className="text-lg">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Buy Course and generate automatic roll number
                  </li>
                  <li className="text-slate-200 text-lg">
                    <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    Student Dashboard to join live class and exam
                  </li>
                  <li className="text-slate-200 text-lg">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Download automatic generated invoice
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="https://www.bdsoe.com/">See More..</Link>
              </CardFooter>
            </div>
            <div className="rounded-xl">
              <Image
                src={soeImg}
                alt="soe"
                className="rounded-xl ms-2 md:ms-0 py-2 shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] "
              />
            </div>
          </div>
        </Card>
      </div>
      {/* 2 */}

      <div className="my-10">
        <Card className="bg-gradient-to-r from-[#174a5e] to-[#333399] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5  items-center px-2">
            <div className="grid col-span-2">
              <CardHeader>
                <h1 className="text-3xl font-bold ">
                  Hospital Management |{" "}
                  <span className="text-slate-400 text-[25px]">MERN Stack</span>
                </h1>
                <CardDescription className="text-slate-200"></CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  <li className="text-lg">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Booking Doctor
                  </li>
                  <li className="text-slate-200 text-lg">
                    <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    Paitent invoice making and print{" "}
                  </li>
                  <li className="text-slate-200 text-lg">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Calculating income and expenditure
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="https://www.dreamfourhospital.com/">
                  See More..
                </Link>
              </CardFooter>
            </div>
            <div className="rounded-xl">
              <Image
                src={dreamImg}
                alt="soe"
                className="rounded-xl ms-2 md:ms-0 py-2 shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] "
              />
            </div>
          </div>
        </Card>
      </div>
      {/* 3 */}

      <div>
        <Card className="bg-gradient-to-r from-[#111111] to-[#006663] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5  items-center px-2">
            <div className="grid col-span-2">
              <CardHeader>
                <h1 className="text-3xl font-bold ">
                  E-commerce |{" "}
                  <span className="text-slate-400 text-[25px]">MERN Stack</span>
                </h1>
                <CardDescription className="text-slate-200"></CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  <li className="text-lg">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Categories product
                  </li>
                  <li className="text-slate-200 text-lg">
                    <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    Manage Product
                  </li>
                  <li className="text-slate-200 text-lg">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Buy and chat
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="https://www.artugrulshop.com/">See More..</Link>
              </CardFooter>
            </div>
            <div className="rounded-xl">
              <Image
                src={artImg}
                alt="soe"
                className="rounded-xl ms-2 md:ms-0 py-2 shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] "
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RealProjects;
