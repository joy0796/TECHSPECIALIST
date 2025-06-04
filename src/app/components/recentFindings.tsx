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
    image: '/digitalimage.png',
    link: '/casestudy1',
  },
  {
    title: 'Solving Nigerias Housing Challenge Starts with One Thing: Data',
    category: 'Public Sector',
    type: 'Impact Story',
    image: '/caseimg.png',
    link: '/casestudy3',
  },
  {
    title: "Cross-Sectoral Collaboration: AI Partnerships Driving Nigeria's Digital Economy",
    category: 'Artificial Intelligence',
    type: 'Case Study',
    image: '/blackguy.png',
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
        <h2 className="text-center text-[40px] font-[600] font-custom mb-10"
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
              data-aos-duration="1000"
              
     
            >
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-2  flex-1 flex flex-col justify-between mt-1">
                <div>
                  <h3 className="font-[600] font-custom text-[19px] mb-2 text-[#3E3E3E] leading-[100%]">{item.title}</h3>
                  {/* <p className="text-[16px] text-gray-600 mb-1">{item.category}</p> */}
                </div>
                <p className="text-[16px] font-poppins font-[400] text-[#3E3E3E] mb-2">{item.category}</p> 
                <p className="text-[13px] font-[600]  text-[#3E3E3E] font-custom">{item.type}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>


        {showButton && (
        <div className="text-center mt-10">
          <button className="border border-[#ED5D25] text-[#ED5D25] hover:bg-[#ED5D25] hover:text-white px-6 py-4 transition-colors text-[19px] font-[500] font-sans">
            See all findings
          </button>
        </div>
        )}
      </div>
    </section>
  );
}
