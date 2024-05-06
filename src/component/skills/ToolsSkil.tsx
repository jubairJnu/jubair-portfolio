import Image from 'next/image';
import img1 from '@/assest/figma-icon.svg';
import img2 from '@/assest/postman.svg';
import img3 from '@/assest/visual-studio-code-logo-svgrepo-com.svg';
import img4 from '@/assest/github-142-svgrepo-com.svg';

const ToolsSkil = () => {
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
      <h1 className="mt-3 font-bold text-xl">Figma</h1>
    </div>
    <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
      <p className="absolute top-1 left-2 bg-blue-600 py-1 px-2 rounded-lg font-bold">Intermediate</p>
      <Image
        src={img2}
        alt="HTML5"
        width={80}
        height={80}
        className="mx-auto  "
      />
      <h1 className="mt-3 font-bold text-xl">Postman</h1>
    </div>
    <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
      <p className="absolute top-1 left-2 bg-green-600 py-1 px-2 rounded-lg font-bold">Expert</p>
      <Image
        src={img3}
        alt="HTML5"
        width={60}
        height={60}
        className="mx-auto mt-4"
      />
      <h1 className="mt-3 font-bold text-xl">VS Code</h1>
    </div>
    <div className="bg-gradient-to-r from-[#333333] to-[#000000] text-center py-8 rounded-lg relative">
      <p className="absolute top-1 left-2 bg-green-600 py-1 px-2 rounded-lg font-bold">Expert</p>
      <Image
        src={img4}
        alt="HTML5"
        width={80}
        height={80}
        className="mx-auto bg-white p-3 rounded"
      />
      <h1 className="mt-3 font-bold text-xl">Github</h1>
    </div>
      
    </div>
  );
};

export default ToolsSkil;