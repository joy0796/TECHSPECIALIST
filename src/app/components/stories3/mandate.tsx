'use client';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

// import Image from 'next/image';
import { Bookmark, Share, InsertLink, } from '@mui/icons-material';
// import AddIcon from '@mui/icons-material/Add';


export default function Mandate() {
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
      <div className="absolute top-10 left-5 sm:left-10 bg-gradient-to-r from-black/60 via-black/70 to-transparent text-white max-w-xl px-2 py-6 md:mt-14 rounded-md shadow-lg border-l-4 border-[#F06322]" data-aos="fade-up"
     data-aos-duration="1000">
        <p className="text-xs font-lg uppercase text-gray-300 mb-1 mt-6">Public Sector</p>
        <h2 className="text-2xl font-bold leading-snug mb-4">
          Understanding the mandate: Reform, Transparency and Public Value
        </h2>

        {/* Icons */}
        <div className="flex gap-4 mt-4 text-white/80">
          <InsertLink className="cursor-pointer hover:text-white transition" />
          <Share className="cursor-pointer hover:text-white transition" />
          <Bookmark className="cursor-pointer hover:text-white transition" />
        </div>
      </div>
      

    </section>
  );
}
