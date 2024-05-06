import Image from "next/image";
import img1 from "@/assest/aws-svgrepo-com.svg";
import img2 from "@/assest/heroku-1.svg";
import img3 from "@/assest/vercel-fill-svgrepo-com.svg";
import img4 from "@/assest/netlify-svgrepo-com.svg";

const DevOps = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
      <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
        <p className="absolute top-1 left-2 bg-blue-600 py-1 px-2 rounded-lg font-bold">
          Intermediate
        </p>
        <Image
          src={img1}
          alt="HTML5"
          width={80}
          height={80}
          className="mx-auto bg-slate-950 p-3 rounded-full"
        />
        <h1 className="mt-3 font-bold text-xl">AWS</h1>
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
          className="mx-auto bg-white p-2 rounded mt-3"
        />
        <h1 className="mt-3 font-bold text-xl">Vercel</h1>
      </div>
      <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
        <p className="absolute top-1 left-2 bg-blue-600 py-1 px-2 rounded-lg font-bold">
          Intermediate
        </p>
        <Image
          src={img2}
          alt="HTML5"
          width={80}
          height={80}
          className="mx-auto bg-white p-3 rounded mt-4"
        />
        <h1 className="mt-3 font-bold text-xl">Heroku</h1>
      </div>

      <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
        <p className="absolute top-1 left-2 bg-green-600 py-1 px-2 rounded-lg font-bold">
          Expert
        </p>
        <Image
          src={img4}
          alt="HTML5"
          width={80}
          height={80}
          className="mx-auto l"
        />
        <h1 className="mt-3 font-bold text-xl">Netlify</h1>
      </div>
    </div>
  );
};

export default DevOps;
