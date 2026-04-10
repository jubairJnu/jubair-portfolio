import {About} from "@/components/home/About";
import {FeaturedProjects} from "@/components/home/FeatureProject";
import {HeroSection} from "@/components/home/HeroSection";
import {Metrics} from "@/components/home/Metrics";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Metrics />
      <FeaturedProjects />
    </div>
  );
};

export default HomePage;
