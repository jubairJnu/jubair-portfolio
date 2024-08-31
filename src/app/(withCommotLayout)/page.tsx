import Info from "@/component/Info";
import HomeFeature from "@/component/home/HomeFeature";
import Projects from "@/component/home/projects/Projects";

const Homepage = () => {
  return (
    <div className="bg-[#090e1a]">
      <div className="  text-white w-full max-w-7xl mx-auto px-5">
        <Info />
        <HomeFeature />
        <Projects />
      </div>
    </div>
  );
};

export default Homepage;
