import Image from "next/image";
import Navbar from "../components/navbar";
import ContactSection from "../components/contact/contactinfo";
import JoinUsSection from "../components/contact/joinus";
import Footer from "../components/footer";

export default function Services() {
  return (
    <>
        <Navbar bgColor="#3B7EEE" textColor="text-white" logoSrc="/logo2.png" />
        <ContactSection/>
        <JoinUsSection/>
        <Footer/>
    </>
  );
}