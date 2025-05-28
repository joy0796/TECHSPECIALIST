// import Image from "next/image";
import HousingWrapper from "../components/stories/housingwrapper";
import Breadcrumb from "../components/stories/breadcrumb";
import HousingArticleSection from "../components/stories/housingarticle";
import RecentFindings from "../components/recentFindings";
import ReadyToTalk from "../components/stories/readyToTalk";
import Footer from "../components/footer";


const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Impact Stories", href: "/stories" },
  { label: "Public Sector", href: "/stories/public-sector" },
];

export default function Stories() {
  return (
    <>
        <HousingWrapper/>
        <Breadcrumb items={breadcrumbItems} />
        <HousingArticleSection/>
        <RecentFindings heading="Related Stories"/>
        <ReadyToTalk/>
        <Footer/>
    </>
  );
}