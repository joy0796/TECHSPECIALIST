'use client';
'use client';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';

// import Image from 'next/image';
// import { Bookmark, Share, InsertLink, } from '@mui/icons-material';
// import AddIcon from '@mui/icons-material/Add';


export default function HousingFeature() {
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
      <div className="absolute top-10 left-5 sm:left-10 bg-gradient-to-r from-black/60 via-black/70 to-transparent text-white max-w-3xl p-6 backdrop-blur-lg md:mt-14  shadow-lg border-l-8 border-[#F06322] mt-16 " data-aos="fade-up"
     data-aos-duration="1000">
        <p className="text-[16px] font-[900] uppercase text-gray-300 mb-2 font-sans mt-4">Public Sector</p>
        <h2 className="text-[45px] font-[600] font-custom leading-[100%] mb-4">
          Redefining Housing Development in Nigeria Through Data - The Housing Market Information Portal (HMIP)
        </h2>

        {/* Icons */}
        <div className="flex gap-2 mt-4 text-white/80 mb-4">
                          <Image
                        src="/stories1.png"
                        alt="Techspecialist Logo"
                        width={30}
                        height={30}
                      />

                      <Image
                      src="/stories3.png"
                      alt="Techspecialist Logo"
                      width={30}
                      height={30}
                    />

                        <Image
                      src="/stories2.png"
                      alt="Techspecialist Logo"
                      width={30}
                      height={30}
                    />
        </div>
      </div>
      

    </section>
  );
}
