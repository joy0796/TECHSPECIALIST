import Navbar from "../navbar";
import Aboutus from "./aboutus";
import Image from "next/image";
import Link from "next/link";

const AboutusWrapper = () => {
  return (
    <>
    <div className="relative w-full h-[92vh] overflow-hidden pt-16">
    <div
      className="absolute inset-0 bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/aboutimg.png')",
        
    //   backgroundSize: 'cover',
        // zIndex: 0

       }}
    />

        
    <div className="relative z-10 text-white">
             <Navbar textColor="white" />
      <Aboutus/>
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

export default AboutusWrapper
