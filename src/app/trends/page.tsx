// import Image from "next/image";
import TrendsWrapper from "../components/trends/abouttrendswrapper";
import Breadcrumb from "../components/stories/breadcrumb";
import FeaturedPostsSection from "../components/trends/featuredpost";
import RecentFindings from "../components/recentFindings";
import ImpactStories from "../components/impactStories";
import Footer from "../components/footer";





const breadcrumbItems = [
  { label: "HOME", href: "/" },
  { label: "TRENDS & INSIGHTS", href: "/trends" },
  
];

export default function Stories3() {
  return (
    <>
        <TrendsWrapper/>
        <Breadcrumb items={breadcrumbItems} />
        <FeaturedPostsSection/>
        <RecentFindings heading="Top Posts"/>
        <ImpactStories/>
        <RecentFindings 
        bgColor="#3B7EEE"
        showButton={false}
        headingColor="#ffffff"
        padding="py-8 px-4"
        />
        <Footer/>
    </>
  );
}