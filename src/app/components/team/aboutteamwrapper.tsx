import Navbar from "../navbar";
import Team from "./aboutteam";
import Image from "next/image";

const TeamWrapper = () => {
  return (
    <>
    <div className="relative w-full h-auto overflow-hidden">
    <div
      className="absolute inset-0  bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/teamimg.png')",
        backgroundPosition: 'center top 0px',
      backgroundSize: 'cover',
        // zIndex: 0

       }}
    />

        
    <div className="relative z-10">
       <Navbar 
      textColor="text-white"
      borderColor="border-b border-white"
      logoSrc="/logo2.png"
      />
      <Team/>
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

export default TeamWrapper;
