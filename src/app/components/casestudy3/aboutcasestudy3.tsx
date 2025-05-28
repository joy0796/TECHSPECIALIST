'use client';

import Image from 'next/image';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default function Section2() {
  return (
    <section className="w-full bg-white pI-4 md:pl-6 py-0 md:py-0 border-b border-red-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Text and Icons */}
        <div>
          <p className="text-xs font-semibold text-[#3E3E3E] uppercase mb-2">
            Digital Infrastructure
          </p>
          <h1 className="text-3xl font-bold text-[#3E3E3E] leading-snug mb-4">
            Bridging Budget and innovation: Sustainable IT management for Nigeria Digital Future
          </h1>
          <p className="text-sm text-[#979595] mb-2">
            By Suleman Olalomi, Danielle Udochi, Victoria Ubi
          </p>
          <p className="text-sm text-[#979595] mb-6">5 min read.</p>

          {/* Icons */}
          <div className="flex items-center gap-2 text-[#979595]">
            <PrintIcon className="cursor-pointer hover:text-black" />
            <ShareIcon className="cursor-pointer hover:text-black" />
            <BookmarkBorderIcon className="cursor-pointer hover:text-black" />
          </div>
        </div>

        {/* Right - Image */}
        <div className="w-full h-64 md:h-[100vh] -scale-x-100 relative rounded-lg overflow-hidden shadow-md">
          <Image
            src="/caseimg.png"
            alt="Digital Transformation"
            fill
            className="object-cover"
          />
        </div>
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
    </section>
  );
}