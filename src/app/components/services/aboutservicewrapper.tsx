import Navbar from "../navbar";
import ServicesSection from "./aboutservice";
import Image from "next/image";
import Link from "next/link";
const AboutserviceWrapper = () => {
  return (
    <>
    <div className="relative w-full h-[100vh] ">
    <div
      className="absolute inset-0 bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/servicesimg.png')",
        
    //   backgroundSize: 'cover',
        // zIndex: 0

       }}
    ></div>

        
    <div className="relative z-10 text-white">
       <Navbar 
    
/>

      <ServicesSection/>
      </div>
        <Link href="/contact">
        <div className="fixed bottom-4 right-4 sm:bottom-36 sm:right-24 w-12 h-12 bg-orange-600 rounded-full flex justify-center items-center z-50">
          <Image
            src="/Vector.png"
            alt="Orange Icon"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>
      </Link>
    </div>
    </>
  );
};

export default AboutserviceWrapper
