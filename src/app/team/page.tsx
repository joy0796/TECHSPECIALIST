// import Image from "next/image";
import TeamWrapper from "../components/team/aboutteamwrapper";
import Breadcrumb from "../components/stories/breadcrumb";
import TeamSection from "../components/team/meettheteam";
import JoinUs from "../components/team/jointeam";
import Footer from "../components/footer";





const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Impact Stories", href: "/stories" },
  { label: "Public Sector", href: "/stories/public-sector" },
];

export default function Stories3() {
  return (
    <>
        <TeamWrapper/>
        <Breadcrumb items={breadcrumbItems} />
        <TeamSection/>
        <JoinUs/>
        <Footer/>
    </>
  );
}