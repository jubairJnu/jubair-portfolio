import Image from "next/image";
import img1 from "@/assest/nodejs-icon.svg";
import img2 from "@/assest/express-109.svg";
import img3 from "@/assest/mongodb-icon-1.svg";
import img4 from "@/assest/postgresql-logo-svgrepo-com.svg";

const BackendSkills = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
      <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
        <p className="absolute top-1 left-2 bg-green-600 py-1 px-2 rounded-lg font-bold">
          Expert
        </p>
        <Image
          src={img1}
          alt="HTML5"
          width={80}
          height={80}
          className="mx-auto"
        />
        <h1 className="mt-3 font-bold text-xl">Node js</h1>
      </div>
      <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
        <p className="absolute top-1 left-2 bg-green-600 py-1 px-2 rounded-lg font-bold">
          Expert
        </p>
        <Image
          src={img2}
          alt="HTML5"
          width={120}
          height={80}
          className="mx-auto bg-white p-3 mt-4 rounded"
        />
        <h1 className="mt-3 font-bold text-xl">Express js</h1>
      </div>
      <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
        <p className="absolute top-1 left-2 bg-green-600 py-1 px-2 rounded-lg font-bold">
          Expert
        </p>
        <Image
          src={img3}
          alt="HTML5"
          width={80}
          height={80}
          className="mx-auto"
        />
        <h1 className="mt-3 font-bold text-xl">Mongodb</h1>
      </div>
      <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
        <p className="absolute top-1 left-2 bg-red-500 py-1 px-2 rounded-lg font-bold">
          Basic
        </p>
        <Image
          src={img4}
          alt="HTML5"
          width={80}
          height={80}
          className="mx-auto"
        />
        <h1 className="mt-3 font-bold text-xl">Postgresql</h1>
      </div>
    </div>
  );
};

export default BackendSkills;
