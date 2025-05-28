import Image from "next/image";
import Breadcrumb from "../components/stories/breadcrumb";
import ItaasWrapper from "../components/itaas/itaaswrapper";
import ReadyToTalk from "../components/stories/readyToTalk";
import ContactSection from "../components/itaas/itaascontact";
import Footer from "../components/footer";
import ItaasSection from "../components/itaas/itaassector";


const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Impact Stories", href: "/stories" },
  { label: "Public Sector", href: "/stories/public-sector" },
];

export default function Itaas() {
  return (
    <>
        <ItaasWrapper/>
        <Breadcrumb items={breadcrumbItems} />
        <ContactSection/>
        <ItaasSection/>
        <ReadyToTalk/>
        <Footer/>

    </>
  );
}