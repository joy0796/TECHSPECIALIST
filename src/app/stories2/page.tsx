import Image from "next/image";
import GrowthWrapper from "../components/stories2/growthwrapper";
import Breadcrumb from "../components/stories/breadcrumb";
import HousingArticleSection2 from "../components/stories2/housingarticle2";
import RecentFindings from "../components/recentFindings";
import Footer from "../components/footer";




const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Impact Stories", href: "/stories" },
  { label: "Public Sector", href: "/stories/public-sector" },
];

export default function Stories2() {
  return (
    <>
        <GrowthWrapper/>
        <Breadcrumb items={breadcrumbItems} />
        <HousingArticleSection2/>
        <RecentFindings heading="Related Stories"/>
        <Footer/>
    </>
  );
}