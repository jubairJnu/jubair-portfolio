import {About} from "@/components/home/About";
import {BlogPreview} from "@/components/home/BlogPreview";
import {ContactCTA} from "@/components/home/ContactCTA";
import {FeaturedProjects} from "@/components/home/FeatureProject";
import {HeroSection} from "@/components/home/HeroSection";
import {Metrics} from "@/components/home/Metrics";
import {OtherProjects} from "@/components/home/OtherProjects";
import {Products} from "@/components/home/Products";
import {Skills} from "@/components/home/Skills";
import {Timeline} from "@/components/home/Timeline";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Metrics />
      <FeaturedProjects />
      <OtherProjects />
      <Products />
      <Timeline />
      <Skills />
      <BlogPreview />
      <ContactCTA />
    </div>
  );
};

export default HomePage;
