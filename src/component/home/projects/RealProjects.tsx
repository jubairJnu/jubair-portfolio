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

const RealProjects = () => {
  return (
    <div>
      {/* 1 */}

      <div>
        <Card className="bg-gradient-to-r from-[#8a026f] to-[#333399] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between items-center">
            <div className="grid col-span-2">
              <CardHeader>
                <h1 className="text-3xl font-bold ">
                  LMS | <span className="text-slate-400">MERN Stack</span>
                </h1>
                <CardDescription className="text-slate-200"></CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </div>
            <div className="rounded-md ">
              <Image src={soeImg} alt="soe" className="rounded-3xl p-2 shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] " />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RealProjects;
