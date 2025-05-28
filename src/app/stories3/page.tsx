// import Image from "next/image";
import MandateWrapper from "../components/stories3/mandatewrapper";
import Breadcrumb from "../components/stories/breadcrumb";
import HousingArticleSection3 from "../components/stories3/housingarticle3";
import RecentFindings from "../components/recentFindings";
import ReadyToTalk from "../components/stories/readyToTalk";
import Footer from "../components/footer";




const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Impact Stories", href: "/stories" },
  { label: "Public Sector", href: "/stories/public-sector" },
];

export default function Stories3() {
  return (
    <>
        <MandateWrapper/>
        <Breadcrumb items={breadcrumbItems} />
        <HousingArticleSection3/>
        <RecentFindings heading="Related Stories"/>
        <ReadyToTalk/>
        <Footer/>
    </>
  );
}