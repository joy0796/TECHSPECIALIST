// import Image from "next/image";
import TeamWrapper from "../components/team/aboutteamwrapper";
import Breadcrumb from "../components/stories/breadcrumb";
import TeamSection from "../components/team/meettheteam";
import JoinUs from "../components/team/jointeam";
import Footer from "../components/footer";





const breadcrumbItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "OUR TEAM", href: "/team" },
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