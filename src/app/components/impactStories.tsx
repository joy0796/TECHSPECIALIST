'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";

interface Story {
  id: number;
  image: string;
  sector: string;
  title: string;
  link: string;
}

const stories: Story[] = [
  {
    id: 1,
    image: '/impactimg2.png', 
    sector: 'Public Sector',
    title:
      'Redefining Housing Development In Nigeria Through Data - The Housing Market Information Portal (HMIP)',
      link: '/stories',
  },
  {
    id: 2,
    image: '/impactimg3.png',
    sector: 'Public Sector',
    title: 'Young Nigerians will drive AI for economic growth',
    link: '/stories2',
  },
  {
    id: 3,
    image: '/impactimg4.png',
    sector: 'Public Sector',
    title:
      'Understanding the Mandate: Reform, Transparency, and Public Value',
      link: '/stories3',
  },
];

export default function ImpactStories() {
   useEffect(() => {
          AOS.init();
        }, []);

  return (
    <section className="bg-white text-black py-10 md:w-[95%] mx-auto px-4 md:px-[10]" data-aos="zoom-in"
              data-aos-duration="1000">
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-start" >
        <div className="w-full lg:w-[60%] h-[400px] md:h-[553px] relative" >
          <Image
            src="/imactimg1.png" 
            alt="Speaker"
            fill
            className=" w-full object-cover"
          />
        </div>
        <div className="px-2 w-full space-y-2" >
          <h2 className="text-2xl md:text-[40px] font-[600] text-[#3E3E3E] font-custom pb-4" >
            Our Impact stories
          </h2>
          <p className="text-[#666666] text-[19px] font-poppins pb-4 font-[400]">
            Over a wide range of sectors, here is how we have been able to make an impact.
          </p>
          <div className="space-y-6 flex flex-col">
            {stories.map((story) => (
              <Link key={story.id} href={story.link}>
              <div key={story.id} className="flex gap-4 md:gap-8 items-center">
                <div className="min-w-[100px] h-[100px] md:min-w-[135px] md:h-[132px] relative">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[16px] text-[#979595]  mt-2 mb-2 font-sans font-[500]">{story.sector}</p>
                  <p className="text-[18px] md:text-[23px] font-custom text-[#3E3E3E] font-[600] leading-[130%]">{story.title}</p>
                </div>
              </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
            <div className="text-center mt-10">
            <Link href="/stories">
          <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-4 transition-colors font-semibold">
            See all stories
          </button>
          </Link>
        </div>
    </section>
  );
}
