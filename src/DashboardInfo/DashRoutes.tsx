import Link from "next/link";

const DashRoutes = () => {
  return (
    <div className="flex justify-center items-center mx-auto  shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)]  ">
      <div className="p-2 font-bold text-white rounded-md">
        <Link href="/">Home</Link>
      </div>
      <div className="p-2 font-bold text-white rounded-md">
        <Link href="/dashboard/project">Projects</Link>
      </div>
      <div className="p-2 font-bold text-white rounded-md">
        <Link href="/dashboard/project">Blogs</Link>
      </div>
      <div className="p-2 font-bold text-white rounded-md">
        <Link href="/dashboard/project">Skills</Link>
      </div>
      <div className="p-2 font-bold text-white rounded-md">
        <Link href="/dashboard/project">Experience</Link>
      </div>
    </div>
  );
};

export default DashRoutes;
