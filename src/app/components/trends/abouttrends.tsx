'use client';

import Image from 'next/image';
import { Bookmark, Share, InsertLink, } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';


export default function AboutTrends() {
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
      <div className="absolute top-10 left-5 sm:left-10 bg-gradient-to-r from-black/80 via-black/90 to-transparent text-white max-w-xl p-6 md:mt-14 rounded-md shadow-lg border-l-4 border-[#F06322]">
        <p className="text-md font-semibold text-gray-300 mb-2 mt-10">Trends $ Insights</p>
        <h2 className="text-xs font-bold leading-snug mb-4">
          Unique insights, expert-driven intelligence and visibility thinking for leaders aiming to accomplish the remarkable.
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
