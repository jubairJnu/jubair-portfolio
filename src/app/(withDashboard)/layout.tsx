import DashNav from "@/DashboardInfo/DashNav";
import Navbar from "@/component/Navbar";
import { ReactNode } from "react";

const DashBoardlayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <DashNav />
      <div className="min-h-screen">{children}</div>
     
    </>
  );
};

export default DashBoardlayout;