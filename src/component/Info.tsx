import Image from "next/image";

import photo from "@/assest/jubair.jpg";

const Info = () => {
  return (
    <div className=" w-full shadow-[5px_1px_10px_1px_rgba(0,0,0,0.3)] bg-[#0c1222] rounded-xl flex flex-col md:flex-row justify-between gap-10 lg:gap-72  p-5">
      {/* image div */}
      <div className="flex-1  max-w-[270px] mx-auto">
        <Image
          className="rounded-md"
          src={photo}
          height={280}
          width={270}
          alt="Me"
        />
        <h1 className="mt-2 text-xl font-semibold text-center">
          Jubair Abdullah
        </h1>
      </div>

      {/* about */}
      <div className="flex-1">
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          earum labore. Velit aut nesciunt, expedita, ex quaerat nisi tempore
          alias unde quisquam corrupti blanditiis facere. Eveniet sed sapiente
          praesentium quidem.
        </h1>
      </div>
    </div>
  );
};

export default Info;
