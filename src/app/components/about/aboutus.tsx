'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




export default function Aboutus() {
  useEffect(() => {
      AOS.init();
    }, []);
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      {/* Background Image */}
      {/* <Image
        src="/housingfeatureimg" 
        fill
        className="object-cover"
        priority
      />

      
      <div className="absolute inset-0 bg-black/30" /> */}
      {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div> */}

      {/* Content Box */}
      <div className="absolute top-10 left-5 sm:left-10 bg-gradient-to-r from-black/80 via-black/60 to-transparent text-white max-w-3xl p-6 mt-14  shadow-lg border-l-8 border-[#F06322] py-10 backdrop-blur-lg" data-aos="fade-up"
     data-aos-duration="1000">
        <p className="text-[40px] md:text-[52px] font-[600] text-[#FFFFFF] mb-2 mt-10 font-custom">About Us</p>
        <h2 className="text-[19px] md:text-[20px] font-[900] leading-snug mb-6 font-sans">
          Where innovation meets impacts, we bridge users, technology and businesses with bespoke IT services.Our end-to-end solutions empower organisations to work smarter, grow faster and align IT with strategic goals-turning ambitions into measureable success.
        </h2>

        {/* Icons */}
        {/* <div className="flex gap-4 mt-4 text-white/80">
          <InsertLink className="cursor-pointer hover:text-white transition" />
          <Share className="cursor-pointer hover:text-white transition" />
          <Bookmark className="cursor-pointer hover:text-white transition" />
        </div> */}
      </div>
      

    </section>
  );
}
