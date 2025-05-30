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
    <section className="bg-white text-black py-10 md:w-[95%] mx-auto">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center" data-aos="flip-up" data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
        <div className="w-full lg:w-[60%] h-auto">
          <Image
            src="/imactimg1.png" 
            alt="Speaker"
            width={400}
            height={1000}
            className="rounded-md w-full object-cover"
          />
        </div>
        <div className="w-full space-y-2" data-aos="flip-down" data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
          <h2 className="text-2xl md:text-[40px] font-[600] text-black font-custom pb-4" >
            Our Impact stories
          </h2>
          <p className="text-[#666666] text-[19px] font-poppins pb-4">
            Over a wide range of sectors, here is how we have been able to make an impact.
          </p>
          <div className="space-y-6 flex flex-col">
            {stories.map((story) => (
              <Link key={story.id} href={story.link}>
              <div key={story.id} className="flex gap-8 items-center">
                <div className="min-w-[100px] h-[100px] relative">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[16px] text-[#979595]  mt-2 mb-2 font-[sans]">{story.sector}</p>
                  <p className="text-[23px] font-custom text-[#3E3E3E] font-[600]">{story.title}</p>
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
