import Navbar from "../navbar";
import EconomicGrowth from "./economicgrowth";
import Image from "next/image";

const GrowthWrapper = () => {
  return (
    <>
    <div className="relative w-full h-[98vh] overflow-hidden pt-16">
    <div
      className="absolute inset-0 bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/aiimg.png')",
        
    //   backgroundSize: 'cover',
        // zIndex: 0

       }}
    />

        
    <div className="relative z-10 text-white">
      <Navbar textColor="white" />
      <EconomicGrowth/>
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

export default GrowthWrapper
