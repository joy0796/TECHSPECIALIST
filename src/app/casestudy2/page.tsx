
import Navbar from "../components/navbar";
import Breadcrumb from "../components/stories/breadcrumb";
import Section from "../components/casestudy2/aboutcasestudy2";
import CaseArticleSection2 from "../components/casestudy2/casestudyarticle2";
import ClientSuccessStories from "../components/casestudy1/clientsuccess";
import RecentFindings from "../components/recentFindings";
import ReadyToTalk from "../components/stories/readyToTalk";
import Footer from "../components/footer";
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/stories" },
  { label: "Artificial intelligence", href: "/stories/public-sector" },
];

export default function About() {
  return (
    <>
        <Navbar  />
        <Section/>
        <Breadcrumb items={breadcrumbItems} />
        <CaseArticleSection2/>
        <ClientSuccessStories/>
        <RecentFindings heading="Related Stories"/>
        <ReadyToTalk/>
        <Footer/>
        
    </>
  );
}