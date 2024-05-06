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
                  LMS |{" "}
                  <span className="text-slate-400 text-[25px]">MERN Stack</span>
                </h1>
                <CardDescription className="text-slate-200"></CardDescription>
              </CardHeader>
              <CardContent>
                <p>School Management</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
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
                  LMS |{" "}
                  <span className="text-slate-400 text-[25px]">MERN Stack</span>
                </h1>
                <CardDescription className="text-slate-200"></CardDescription>
              </CardHeader>
              <CardContent>
                <p>School Management</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
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
                  LMS |{" "}
                  <span className="text-slate-400 text-[25px]">MERN Stack</span>
                </h1>
                <CardDescription className="text-slate-200"></CardDescription>
              </CardHeader>
              <CardContent>
                <p>School Management</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
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
