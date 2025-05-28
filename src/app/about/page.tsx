import Image from "next/image";
import AboutusWrapper from "../components/about/aboutuswrapper";
import Breadcrumb from "../components/stories/breadcrumb";
import ContactWithCompanyInfo from "../components/about/contactcompanyinfo";
import OurJourney from "../components/about/journey";
import ExperienceImpact from "../components/about/experinceimpact";
import VisionMissionValues from "../components/about/visionmission";
import ChairmanMessage from "../components/about/chairmanmessage";
import ValueGrid from "../components/about/valuegrid";
import ReadyToTalk from "../components/stories/readyToTalk";
import Footer from "../components/footer";



const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Impact Stories", href: "/stories" },
  { label: "Public Sector", href: "/stories/public-sector" },
];

export default function About() {
  return (
    <>
        <AboutusWrapper/>
        <Breadcrumb items={breadcrumbItems} />
        <ContactWithCompanyInfo/>
        <OurJourney/>
        <ExperienceImpact/>
        <VisionMissionValues/>
        <ChairmanMessage/>
        <ValueGrid/>
        <ReadyToTalk/>
        <Footer/>
    </>
  );
}