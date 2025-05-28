import Navbar from "../navbar";
import Aboutus from "./aboutus";
import Image from "next/image";

const AboutusWrapper = () => {
  return (
    <>
    <div className="relative w-full h-[100vh] overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/aboutimg.png')",
        
    //   backgroundSize: 'cover',
        // zIndex: 0

       }}
    />

        
    <div className="relative z-10 text-white">
             <Navbar 
      textColor="text-black md:text-white"
    borderColor="border-b border-black md:border-white"
    logoSrc="/logo2.png"
/>
      <Aboutus/>
      </div>
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-8 h-8 bg-orange-600 rounded-full flex justify-center ">
              <Image
                src="/Vector.png"
                alt="Orange Icon"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
    </div>
    </>
  );
};

export default AboutusWrapper
