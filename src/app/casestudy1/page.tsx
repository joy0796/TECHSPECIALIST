
import Navbar from "../components/navbar";
import Breadcrumb from "../components/stories/breadcrumb";
import DigitalFindingSection from "../components/casestudy1/aboutcasestudy";
import CaseArticleSection1 from "../components/casestudy1/caseestudyarticle";
import ClientSuccessStories from "../components/casestudy1/clientsuccess";
import RecentFindings from "../components/recentFindings";
import ReadyToTalk from "../components/stories/readyToTalk";
import Footer from "../components/footer";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/stories" },
  { label: "Digital Transformation", href: "/stories/public-sector" },
];

export default function About() {
  return (
    <>
        <Navbar bgColor="#3B7EEE" textColor="text-white" logoSrc="/logo2.png" />
        <DigitalFindingSection/>
        <Breadcrumb items={breadcrumbItems} />
        <CaseArticleSection1/>
        <ClientSuccessStories/>
        <RecentFindings heading="Related Stories"/>
        <ReadyToTalk/>
        <Footer/>
        
    </>
  );
}