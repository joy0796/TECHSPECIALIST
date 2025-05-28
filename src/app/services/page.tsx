import Image from "next/image";
import Breadcrumb from "../components/stories/breadcrumb";
import AboutserviceWrapper from "../components/services/aboutservicewrapper";
import ValueMethodologySection from "../components/services/valuemethod";
import FocusSectorsSection from "../components/services/focussector";
import ServiceOfferingsSection from "../components/services/serviceoffering";
import ReadyToTalk from "../components/stories/readyToTalk";
import Footer from "../components/footer";


const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Our services", href: "/service" },
  
];

export default function Services() {
  return (
    <>
        <AboutserviceWrapper/>
        <Breadcrumb items={breadcrumbItems} />
        <ValueMethodologySection/>
        <FocusSectorsSection/>
        <ServiceOfferingsSection/>
        <ReadyToTalk/>
        <Footer/>

    </>
  );
}