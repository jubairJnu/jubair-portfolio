import Info from "@/component/Info";
import HomeFeature from "@/component/home/HomeFeature";

const Homepage = () => {
  return (
    <div className="bg-[#090e1a]">
      <div className=" min-h-screen text-white w-full max-w-7xl mx-auto px-5">
       
        <Info />
        <HomeFeature/>
      </div>
    </div>
  );
};

export default Homepage;
