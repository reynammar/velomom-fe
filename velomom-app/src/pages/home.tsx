import AboutSection from "../components/organisms/Home/AboutSection";
import HeroSection from "../components/organisms/Home/HeroSection";
import MainNavbar from "../components/organisms/MainNavbar";
import VeloCareSection from "../components/organisms/Home/VelocareSection";
import Footer from "../components/organisms/Footer";
import ContentSection from "../components/organisms/Home/ContentSection";
import VeloventSection from "../components/organisms/Home/VeloventSection";
import Review from "../components/organisms/Home/ReviewSection";

const HomePage = () => {
    return (
    <div className="flex items-center justify-center w-full bg-white font-lexend flex-wrap">
      <MainNavbar />
      <HeroSection />
      <AboutSection />
      <VeloCareSection />
      <ContentSection />
      <VeloventSection/>
      <Review/>
      <Footer />
    </div>
    );
}


export default HomePage