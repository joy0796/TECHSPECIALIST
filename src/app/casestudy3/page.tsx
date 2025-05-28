import Image from "next/image";
import Navbar from "../components/navbar";
import Section2 from "../components/casestudy3/aboutcasestudy3";
import Breadcrumb from "../components/stories/breadcrumb";
import CaseArticleSection3 from "../components/casestudy3/aboutcasestudyarticle3";
import ClientSuccessStories from "../components/casestudy1/clientsuccess";
import RecentFindings from "../components/recentFindings";
import ReadyToTalk from "../components/stories/readyToTalk";
import Footer from "../components/footer";
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/stories" },
  { label: "Digital infrastructure", href: "/stories/public-sector" },
];

export default function About() {
  return (
    <>
        <Navbar bgColor="#3B7EEE" textColor="text-white" logoSrc="/logo2.png" />
        <Section2/>
        <Breadcrumb items={breadcrumbItems} />
        <CaseArticleSection3/>
        <ClientSuccessStories/>
        <RecentFindings heading="Related Stories"/>
        <ReadyToTalk/>
        <Footer/>
        
    </>
  );
}