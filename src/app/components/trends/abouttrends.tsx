'use client';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";






export default function AboutTrends() {
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

      {/* Content Box */}
      <div className="absolute top-16 left-5 sm:left-10 bg-gradient-to-r from-black/30 via-black/90 to-transparent text-white max-w-3xl px-6 py-14 md:mt-24 shadow-lg border-l-8 border-[#F06322] backdrop-blur-lg" data-aos="fade-up"
     data-aos-duration="1000">
        <p className="text-[40px] md:text-[50px] font-[600]  font-custom text-gray-300 mb-2 mt-10">Trends & Insights</p>
        <h2 className="text-[23px] font-[900] font-sans leading-snug mb-4">
          Unique insights, expert-driven intelligence and visibility thinking for leaders aiming to accomplish the remarkable.
        </h2>

        {/* Icons */}
        {/* <div className="flex gap-2 mt-4 text-white/80">
          <InsertLink className="cursor-pointer hover:text-white transition" />
          <Share className="cursor-pointer hover:text-white transition" />
          <Bookmark className="cursor-pointer hover:text-white transition" />
        </div> */}
      </div>
      

    </section>
  );
}
