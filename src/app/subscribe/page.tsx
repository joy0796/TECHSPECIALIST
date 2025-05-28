import Image from "next/image";
import Navbar from "../components/navbar";
import SubscribeSection from "../components/subscribe/subscribe";
import Footer from "../components/footer";


export default function Stories3() {
  return (
    <>
    <Navbar bgColor="#3B7EEE" textColor="text-white" logoSrc="/logo2.png" />
    <SubscribeSection/>
    <Footer/>
    </>
  );
}