import Navbar from "../navbar";
import Team from "./aboutteam";
import Image from "next/image";
import Link from "next/link";

const TeamWrapper = () => {
  return (
    <>
    <div className="relative w-full h-[92vh] overflow-hidden pt-16">
    <div
      className="absolute inset-0  bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/teamimg.png')",
        backgroundPosition: 'center top 0px',
      backgroundSize: 'cover',
        // zIndex: 0

       }}
    />

        
    <div className="relative z-10">
       <Navbar textColor="white" />
      <Team/>
      </div>
       

       <Link href="/contact">
        <div className="fixed bottom-4 right-4 sm:bottom-36 sm:right-20 w-10 h-10 bg-orange-600 rounded-full flex justify-center items-center z-50">
          <Image
            src="/Vector.png"
            alt="Orange Icon"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      </Link>
    </div>
    </>
  );
};

export default TeamWrapper;
