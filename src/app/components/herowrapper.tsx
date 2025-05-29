import Navbar from "./navbar";
import HeroSection from "./heropage";
import Image from "next/image";

const HeroWrapper = () => {
  return (
    <>
    <div className="relative w-full h-auto">
    <div
      className="absolute inset-0 -scale-x-100  bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/heroimage.jpg')",
        backgroundPosition: 'center top 0px',
      backgroundSize: 'cover',
        // zIndex: 0

       }}
    />

        
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      </div>

      <div className="absolute bottom-4 right-4 sm:bottom-36 sm:right-24 w-8 h-8 bg-orange-600 rounded-full flex justify-center ">
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

export default HeroWrapper;
