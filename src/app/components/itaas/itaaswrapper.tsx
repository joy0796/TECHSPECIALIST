import Navbar from "../navbar";
import Itaas from "./aboutitaas";
import Image from "next/image";

const ItaasWrapper = () => {
  return (
    <>
    <div className="relative w-full h-[95vh] overflow-hidden">
    <div
      className="absolute inset-0 -scale-x-100  bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/itaasimg.png')",
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
      <Itaas/>
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

export default ItaasWrapper;
