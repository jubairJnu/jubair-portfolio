import Image from "next/image";
import img1 from "@/assest/icons8-html-5.svg";
import img2 from "@/assest/css-4.svg";
import img3 from "@/assest/javascript-2.svg";
import img4 from "@/assest/typescript.svg";
import img5 from "@/assest/nextjs-icon.svg";
import img6 from "@/assest/react-1-logo-svgrepo-com.svg";
import img7 from "@/assest/redux.svg";
import img8 from "@/assest/bootstrap-5-1.svg";
import img9 from "@/assest/tailwind-css-2.svg";
import img10 from "@/assest/material-ui-1.svg";
import img11 from "@/assest/ant-design-svgrepo-com.svg";
import img12 from "@/assest/shadcn.png";
import img13 from "@/assest/firebase-1.svg";
import img14 from "@/assest/react-router.svg";
import img15 from "@/assest/t query.png";
import img16 from "@/assest/next auth.png";

const FrontendSkils = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
  <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
    <p className="absolute top-1 left-2 bg-green-600 py-1 px-2 rounded-lg font-bold">Expert</p>
    <Image
      src={img1}
      alt="HTML5"
      width={80}
      height={80}
      className="mx-auto"
    />
    <h1 className="mt-3 font-bold text-xl">HTML</h1>
  </div>
  <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
    <p className="absolute top-1 left-2 bg-green-600 py-1 px-2 rounded-lg font-bold">Expert</p>
    <Image src={img2} alt="CSS" width={80} height={80} className="mx-auto mt-3" />
    <h1 className="mt-3 font-bold text-xl">CSS</h1>
  </div>
  <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
    <p className="absolute top-1 left-2 bg-blue-600 py-1 px-2 rounded-lg font-bold">Intermediate</p>
    <Image src={img3} alt="JavaScript" width={70} height={70} className="mx-auto bg-yellow-500  rounded p-1 mt-3" />
    <h1 className="mt-3 font-bold text-xl">JavaScript</h1>
  </div>
  <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
    <p className="absolute top-1 left-2 bg-blue-600 py-1 px-2 rounded-lg font-bold">Intermediate</p>
    <Image src={img4} alt="TypeScript" width={60} height={60} className="mx-auto mt-3" />
    <h1 className="mt-3 font-bold text-xl">TypeScript</h1>
  </div>
  <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
    <p className="absolute top-1 left-2 bg-green-600 py-1 px-2 rounded-lg font-bold">Expert</p>
    <Image src={img5} alt="Next.js" width={80} height={80} className="mx-auto" />
    <h1 className="mt-3 font-bold text-xl">Next js</h1>
  </div>
  <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
    <p className="absolute top-1 left-2 bg-green-600 py-1 px-2 rounded-lg font-bold">Expert</p>
    <Image src={img6} alt="React" width={80} height={80} className="mx-auto" />
    <h1 className="mt-3 font-bold text-xl">React js</h1>
  </div>
  <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
  <p className="absolute top-1 left-2 bg-blue-600 py-1 px-2 rounded-lg font-bold">Intermediate</p>
    <Image src={img7} alt="Redux" width={80} height={80} className="mx-auto mt-3" />
    <h1 className="mt-3 font-bold text-xl">Redux</h1>
  </div>
  <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
    <p className="absolute top-1 left-2 bg-green-600 py-1 px-2 rounded-lg font-bold">Expert</p>
    <Image src={img8} alt="Bootstrap" width={80} height={80} className="mx-auto" />
    <h1 className="mt-3 font-bold text-xl">Bootstrap</h1>
  </div>
  <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
    <p className="absolute top-1 left-2 bg-green-600 py-1 px-2 rounded-lg font-bold">Expert</p>
    <Image src={img9} alt="Tailwind CSS" width={80} height={80} className="mx-auto" />
    <h1 className="mt-3 font-bold text-xl">Tailwind CSS</h1>
  </div>
  <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
  <p className="absolute top-1 left-2 bg-blue-600 py-1 px-2 rounded-lg font-bold">Intermediate</p>
    <Image src={img10} alt="Material UI" width={80} height={80} className="mx-auto mt-3" />
    <h1 className="mt-3 font-bold text-xl">Material UI</h1>
  </div>
  <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
  <p className="absolute top-1 left-2 bg-blue-600 py-1 px-2 rounded-lg font-bold">Intermediate</p>
    <Image src={img11} alt="Ant Design" width={80} height={80} className="mx-auto" />
    <h1 className="mt-3 font-bold text-xl">Ant Design</h1>
  </div>
  <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
    <p className="absolute top-1 left-2 bg-green-600 py-1 px-2 rounded-lg font-bold">Expert</p>
    <Image src={img12} alt="Shadcn" width={80} height={80} className="mx-auto" />
    <h1 className="mt-3 font-bold text-xl">Shadcn</h1>
  </div>
  <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
    <p className="absolute top-1 left-2 bg-green-600 py-1 px-2 rounded-lg font-bold">Expert</p>
    <Image src={img13} alt="Firebase" width={60} height={60} className="mx-auto" />
    <h1 className="mt-3 font-bold text-xl">Firebase</h1>
  </div>
  <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
    <p className="absolute top-1 left-2 bg-green-600 py-1 px-2 rounded-lg font-bold">Expert</p>
    <Image src={img14} alt="React Router" width={80} height={80} className="mx-auto mt-4" />
    <h1 className="mt-3 font-bold text-xl">React Router</h1>
  </div>
  <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
    <p className="absolute top-1 left-2 bg-green-600 py-1 px-2 rounded-lg font-bold">Expert</p>
    <Image src={img15} alt="Tanstack" width={80} height={80} className="mx-auto mt-4" />
    <h1 className="mt-3 font-bold text-xl">Tanstack Query</h1>
  </div>
  <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
    <p className="absolute top-1 left-2 bg-blue-600 py-1 px-2 rounded-lg font-bold">Intermediate</p>
    <Image src={img16} alt="Tanstack" width={80} height={80} className="mx-auto mt-4" />
    <h1 className="mt-3 font-bold text-xl">Next Auth</h1>
  </div>
</div>

  );
};

export default FrontendSkils;
