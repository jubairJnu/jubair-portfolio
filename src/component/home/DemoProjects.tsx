import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import eventImg from "@/assest/event.png";
import donationImg from "@/assest/donation.png";
import foodImg from "@/assest/food.png";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

const DemoProjects = () => {
  return (
    <div>
      {/* 1 */}
      <div className="mt-10">
        <Card className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5  items-center px-2">
            <div className="grid col-span-2">
              <CardHeader>
                <h1 className="text-3xl font-bold ">
                  E-Commerce |{" "}
                  <span className="text-slate-400 text-[25px]">MERN Stack</span>
                </h1>
                <CardDescription className="text-slate-200"></CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  <li className="text-lg">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Flash Sale Product with Countdown
                  </li>
                  <li className="text-slate-200 text-lg">
                    <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    Most Popular Product
                  </li>
                  <li className="text-slate-200 text-lg">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Food Category
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex gap-5">
                <Link href="https://baby-food-client.vercel.app/">
                  <FaLink />
                </Link>
                <Link href="https://github.com/jubairJnu/baby-food-client">
                  <FaGithub />
                </Link>
              </CardFooter>
            </div>
            <div className="rounded-xl">
              <Image
                src={foodImg}
                alt="event"
                className="rounded-xl ms-2 md:ms-0 py-2 shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] "
              />
            </div>
          </div>
        </Card>
      </div>
      {/* 2 */}
      <div className="mt-10">
        <Card className="bg-gradient-to-r from-[#9c0212] to-[#301847] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5  items-center px-2">
            <div className="grid col-span-2">
              <CardHeader>
                <h1 className="text-3xl font-bold ">
                  Event Mangement |{" "}
                  <span className="text-slate-400 text-[25px]">MERN Stack</span>
                </h1>
                <CardDescription className="text-slate-200"></CardDescription>
              </CardHeader>

              <CardContent>
                <ul>
                  <li className="text-xl">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Our Services & Pricing
                  </li>
                  <li className="text-slate-200 text-xl">
                    <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    Event Gallery & Testimonial
                  </li>
                  <li className="text-slate-200 text-xl">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Event Items & Recent Event
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex gap-5">
                <Link href="https://event-360-e4459.web.app/">
                  {" "}
                  <FaLink />
                </Link>
                <Link href="#">
                  <FaGithub />
                </Link>
              </CardFooter>
            </div>
            <div className="rounded-xl">
              <Image
                src={eventImg}
                alt="event"
                className="rounded-xl ms-2 md:ms-0 py-2 shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] "
              />
            </div>
          </div>
        </Card>
      </div>
      {/* 3 */}
      <div className="mt-10">
        <Card className="bg-gradient-to-r from-[#007991] to-[#96C93D] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5  items-center px-2">
            <div className="grid col-span-2">
              <CardHeader>
                <h1 className="text-3xl font-bold ">
                  Donation |{" "}
                  <span className="text-slate-400 text-[25px]">MERN Stack</span>
                </h1>
                <CardDescription className="text-slate-200"></CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  <li className="text-xl">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Making Donation and see leaderboard
                  </li>
                  <li className="text-slate-200 text-xl">
                    <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    Creating testimonial and see statics data
                  </li>
                  <li className="text-slate-200 text-xl">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Dynamic theme switcher and crud cloths
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex gap-5">
                <Link href="https://donation-client-b5969.web.app/">
                  <FaLink />
                </Link>
                <Link href="https://github.com/jubairJnu/donation-client">
                  <FaGithub />
                </Link>
              </CardFooter>
            </div>
            <div className="rounded-xl">
              <Image
                src={donationImg}
                alt="event"
                className="rounded-xl ms-2 md:ms-0 py-2 shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] "
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DemoProjects;
