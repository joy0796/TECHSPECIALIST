'use client';

import Image from 'next/image';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

export default function OurJourney() {
  return (
    <section className="bg-white text-black py-6 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl text-[#3E3E3E] font-semibold mb-4">Our Journey</h2>
        <p className="text-[#3E3E3E] text-xs max-w-3xl mx-auto mb-4 leading-relaxed">
          Since 2008, TCL has built a reputation for excellence in delivering secure, reliable information
          technology services to diverse organizations across Nigeria. With over a decade of experience, we've 
          continually evolved to meet the demands of a rapidly changing technology landscape. <br />
          Watch our story unfold—how we have grown, adapted, and led innovation in IT across Nigeria.
        </p>

        <div className="relative w-full max-w-2xl mx-auto">
          <Image
            src="/journeyimg.png" 
            alt="Handshake"
            width={800}
            height={400}
            className="w-full h-auto rounded"
          />
          <button
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play video"
          >
            <div className="bg-white rounded-full p-4 shadow-lg">
              <PlayCircleFilledIcon style={{ fontSize: 64, color: 'red' }} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
