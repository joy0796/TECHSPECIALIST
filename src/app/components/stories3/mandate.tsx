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
      <div className="absolute top-10 left-5 sm:left-10 bg-gradient-to-r from-black/60 via-black/70 to-transparent text-white max-w-2xl px-4 py-6 md:mt-14 shadow-lg border-l-4 border-[#F06322]" data-aos="fade-up"
     data-aos-duration="1000">
        <p className="text-[14px] md:text-[16px] font-[900] font-sans uppercase text-gray-300 mb-6 mt-8">Public Sector</p>
        <h2 className="text-[45px] font-[600] font-custom leading-[100%] mb-4">
          Understanding the mandate: Reform, Transparency and Public Value
        </h2>

        {/* Icons */}
        <div className="flex gap-4 mt-4 text-white/80 mb-6">
          <InsertLink className="cursor-pointer hover:text-white transition border rounded-full" />
          <Share className="cursor-pointer hover:text-white transition border rounded-full" />
          <Bookmark className="cursor-pointer hover:text-white transition border rounded-full" />
        </div>
      </div>
      

    </section>
  );
}
