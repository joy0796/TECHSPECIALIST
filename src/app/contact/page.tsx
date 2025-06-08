// import Image from "next/image";
import Navbar from "../components/navbar";
import ContactSection from "../components/contact/contactinfo";
import JoinUsSection from "../components/contact/joinus";
import Footer from "../components/footer";

export default function Services() {
  return (
    <>
        <Navbar textColor="white" />
        <ContactSection/>
        <JoinUsSection/>
        <Footer/>
    </>
  );
}