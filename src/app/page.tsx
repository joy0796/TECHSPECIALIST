
import HeroWrapper from "./components/herowrapper";
import DigitalTransformationSection from "./components/digitalTransformation";
import ImpactStories from "./components/impactStories";
import Hero360Value from "./components/hero360value";
import RecentFindings from "./components/recentFindings";
import Empowerbusinesses from "./components/empowerbusinesses";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <HeroWrapper/>
      <DigitalTransformationSection/>
      <ImpactStories/>
      <Hero360Value/>
      <RecentFindings/>
      <Empowerbusinesses/>
      <Footer/>
    </>
  );
}
