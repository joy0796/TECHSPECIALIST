'use client';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


import { Bookmark, Share, InsertLink, } from '@mui/icons-material'


export default function EconomicGrowth() {
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
      <div className="absolute top-14 left-5 sm:left-10 bg-gradient-to-r from-black/80 via-black/60 to-transparent text-white max-w-xl p-4 md:mt-14 rounded-md shadow-lg border-l-4 border-[#F06322]" data-aos="fade-up"
     data-aos-duration="1000">
        <p className="text-xs font-lg uppercase text-gray-300 mb-2 pt-2">Public Sector</p>
        <h2 className="text-[45px] font-[600] font-sans leading-snug mb-4">
          Young Nigerians will drive Ai for economic growth
        </h2>

        
        <div className="flex gap-4 mt-4 text-white/80">
          <InsertLink className="cursor-pointer hover:text-white transition" />
          <Share className="cursor-pointer hover:text-white transition" />
          <Bookmark className="cursor-pointer hover:text-white transition" />
        </div>
      </div>
      

    </section>
  );
}
