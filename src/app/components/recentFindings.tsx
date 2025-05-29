'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

type Finding = {
  title: string;
  category: string;
  type: string;
  image: string;
  link: string;
  
};

type Props = {
  heading?: string;
  bgColor?: string;
  showButton?: boolean;
  headingColor?: string;
  padding?: string; 
  // default to true
};

const findings: Finding[] = [
  {
    title: 'Digital Transformation in Nigerian SMEs: Barriers, Breakthroughs, and Blueprints.',
    category: 'Digital Transformation',
    type: 'Case Study',
    image: '/recentfindingimg.png',
    link: '/casestudy1',
  },
  {
    title: 'Solving Nigeria’s Housing Challenge Starts with One Thing: Data',
    category: 'Public Sector',
    type: 'Impact Story',
    image: '/recentfindingimg.png',
    link: '/casestudy3',
  },
  {
    title: "Cross-Sectoral Collaboration: AI Partnerships Driving Nigeria's Digital Economy",
    category: 'Artificial Intelligence',
    type: 'Case Study',
    image: '/recentfindingimg.png',
    link: '/casestudy2',
  },
];

export default function RecentFindings({ heading = 'Our most recent findings', bgColor = '#ffffff', showButton = true,  headingColor = '#3E3E3E', padding = 'py-16 px-4'}: Props) {
  useEffect(() => {
            AOS.init();
          }, []);

  return (
    <section 
      className={`text-black ${padding ?? 'py-16 px-4'}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-10"
        style={{ color: headingColor }}
        >
          {heading}
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:px-14 items-stretch">
          {findings.map((item, idx) => (
            <Link key={item.link} href={item.link} className='h-full'>
            <div
              key={idx}
              className="bg-white pb-4 rounded-md shadow-xl overflow-hidden text-black flex flex-col h-full"
              data-aos="zoom-in"
              
     
            >
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-2  flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-sm mb-2 text-[#3E3E3E]">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{item.category}</p>
                </div>
                <p className="text-xs font-semibold  text-[#3E3E3E]">{item.type}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>


        {showButton && (
        <div className="text-center mt-10">
          <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 transition-colors">
            See all findings
          </button>
        </div>
        )}
      </div>
    </section>
  );
}
