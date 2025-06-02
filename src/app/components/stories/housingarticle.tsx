'use client';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import Image from 'next/image';
// import { useState } from 'react';

const authors = [
  {
    name: 'Suleman Odionlai',
    title: 'System Administrator',
    image: '/articleimg.png',
  },
  {
    name: 'Suleman Odionlai',
    title: 'System Administrator',
    image: '/articleimg.png',
  },
  {
    name: 'Suleman Odionlai',
    title: 'System Administrator',
    image: '/articleimg.png',
  },
];

const tags = [
  'Digital Transformation',
  'Nigerian Startup',
  'SME Growth',
  'Business Digitalization',
  'Mobile Technology',
  'Digital Literacy',
  'Infrastructure Development',
  'Tech Adoption',
  'Entrepreneurship',
  'Small Business Innovation',
];

const HousingArticleSection = () => {

  useEffect(() => {
      AOS.init();
    }, []);
  // const [formData, setFormData] = useState({
  //   fullName: '',
  //   companyName: '',
  //   businessEmail: '',
  //   phoneNumber: '',
  //   consent: false,
  // });

  return (
    <div className="bg-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-16 py-10 flex flex-col lg:flex-row gap-10 text-black" data-aos="zoom-in"
              data-aos-duration="1000">
      {/* LEFT SIDEBAR */}
      <aside className="lg:w-1/4 w-full space-y-8" >
        {/* Audio */}
        <div className="">
          <p className="text-xs text-[#3E3E3E] font-md">Listen to this article</p>
          <div className="bg-gray-200 h-8 rounded-md flex items-center justify-center text-sm text-gray-400">
            [Audio Player]
          </div>
        </div>

        {/* Authors */}
        <div>
          <p className='text-xs text-[#3E3E3E] font-semibold uppercase mb-2'>Authors</p>
          <div className="space-y-4 border-b boder-black">
            {authors.map((author, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Image
                  src={author.image}
                  alt={author.name}
                  width={40}
                  height={40}
                  className=""
                />
                <div>
                  <p className="font-medium text-xs">{author.name}</p>
                  <p className="text-xs text-[#8F8F8F]">{author.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className='border-b border-black pb-6'>
          <p className="text-xs text-[#3E3E3E] font-semibold uppercase mb-4">Tags</p>
          <ul className="text-xs text-[#8F8F8F] list-disc list-inside space-y-1">
            {tags.map((tag, idx) => (
              <li key={idx}>{tag}</li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="bg-white text-black  space-y-2 pt-8  w-full md:w-[230px]">
        <div className='bg-gray-100 mb-1 p-2'>
          <p className="text-sm font-semibold text-[#3E3E3E]">Ready to talk?</p>
          <p className="text-xs text-[#707070]">
            I want to talk to your specialist in the field of
            <span className="text-[#707070] underline">Digital Transformation</span>.
          </p>
          </div>
          <form className="space-y-3 text-sm">
            <div className='bg-[#F0F0F0] mb-1 p-2'>
              <label className='text-xs text-[#3E3E3E]'>FULL NAME</label>
                <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>
            
            <div className='bg-gray-100 mb-1 p-2'>
              <label className='text-xs text-[#3E3E3E]'>COMPANY/BUSINESS NAME</label>
            <input
              type="text"
              placeholder="Enter your name here"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>

            <div className='bg-gray-100 mb-1 p-2'>
              <label className='text-xs text-[#3E3E3E]'>BUSINESS EMAIL</label>
                            <input
              type="email"
              placeholder="Enter your email here"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>

            <div className='bg-gray-100 mb-1 p-2'>
              <label className='text-xs text-[#3E3E3E]'>PHONE NUMBER</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>
            
            <div className='bg-gray-100 mb-1 p-2'>
                <label className="flex items-start gap-2 text-xs">
              <input type="checkbox" className="mt-1 text-[#707070]" />
              I would like to receive exciting communication regarding Techspecialist services.
            </label>
            </div>
            

            <div className=''>
                            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded font-normal"
            >
              Contact Me
            </button>
            </div>

          </form>
        </div>
      </aside>

      {/* RIGHT MAIN ARTICLE */}
      <article className="lg:w-3/4 w-full" >
        <p className="leading-relaxed mb-6 text-justify text-md text-[#3E3E3E]" >
          {/* Paste your full article content here */}
          For decades, Nigerias housing sector has grappled with a silent but systemic crisis: the absence of reliable, centralized data. While the nations housing deficit continued to grow now estimated at over 25 million units, the ability to diagnose, plan, and respond effectively remained painfully limited. Government agencies lacked the insights to formulate evidence-based policies. Financial institutions were unable to de-risk housing investments confidently. Real estate developers operated in the dark. And for millions of Nigerians, the dream of affordable housing remained out of reach, obscured by data blind spots.
        As Nigerias population rapidly urbanizes with projections exceeding 295 million by 2050 this information gap was more than a bureaucratic inconvenience. It was a bottleneck threatening inclusive growth, investor confidence, and housing affordability nationwide.





        </p>

        <h2 className="text-md font-bold mb-1 text-[#3E3E3E]">
          NMRCs Vision: Bridging the Data Divide
        </h2>
        <p className="leading-relaxed mb-6 text-justify text-md text-[#3E3E3E]">
          NMRCs Vision: Bridging the Data Divide
            At the center of this challenge stood the Nigeria Mortgage Refinance Company (NMRC), a key institution tasked with enhancing mortgage liquidity and promoting affordable housing finance in Nigeria. NMRC knew that without structured, credible data, its mandate would remain limited in impact. Housing finance could not flourish in opacity. The policies meant to guide investment couldnt take root without real-world visibility.
            Rather than resign to the constraints, NMRC took bold action. It envisioned a national housing intelligence platform, a place where policymakers, lenders, developers, and citizens could turn data into action, risk into opportunity, and planning into progress.
            Co-Creating the Housing Market Information Portal (HMIP)
        </p>

        <h2 className="text-md font-bold text-[#3E3E3E] mb-1">
          NMRCs leadership spearheaded a multi-stakeholder collaboration...
        </h2>
        <ul className='leading-relaxed mb-6 text-justify text-md text-[#3E3E3E]'>
          <li>•	Techspecialist Consulting Limited (TCL) - the digital transformation partner</li>  
           <li>•	Federal Ministry of Works and Housing</li> 
            <li>•	National Bureau of Statistics</li>
            <li>•	Central Bank of Nigeria</li>
            <li>•	Other housing-sector stakeholders and data custodians</li>
            Together, this coalition co-created the Housing Market Information Portal (HMIP) a landmark digital infrastructure that aggregates, harmonizes, and visualizes data across the housing ecosystem.
            Unlike traditional data portals, HMIP is dynamic, interactive, and decision-oriented, offering:
        <li>•	Real-time dashboards and visual insights on housing trends</li>
            <li>•	Market intelligence segmented by geography, affordability levels, and building types</li>
            <li>•	A unified platform for government, private sector, and development institutions to access accurate data</li>
</ul>

        <h2 className="text-md font-bold text-[#3E3E3E] mb-1">
          The Role of Techspecialist Consulting Limited
        </h2>
        <p className="leading-relaxed mb-6 text-justify text-md text-[#3E3E3E]">From concept to execution, Techspecialist Consulting Limited (TCL) played a pivotal role as the digital execution partner. With a deep understanding of national development needs and technical expertise in enterprise platforms, TCL translated NMRCs vision into a robust and scalable solution.</p>

        <h2 className="text-md font-bold text-[#3E3E3E] mb-1">TCL delivered:</h2>
        <ul className="list-disc list-inside leading-relaxed mb-6 text-justify text-md text-[#3E3E3E]">
          <li>	An agile data architecture capable of integrating multiple datasets</li>
        <li>	User-centric interface design for policy, investment, and planning audiences</li>
        <li>	A secure, accessible platform hosted and managed in line with global standards
Most importantly, TCL brought to the table a deep commitment to co-creation, working side by side with NMRCs technical and strategic teams to ensure that the solution wasnt just functional but transformational.</li>
        </ul>

        <h2 className="text-md font-bold text-[#3E3E3E] mb-1">
          From Insight to Impact: Real Stories, Real Results
        </h2>
        <p className="leading-relaxed mb-6 text-justify text-md text-[#3E3E3E]">Since its launch, the HMIP has redefined how housing-related decisions are made in Nigeria. For the first time, stakeholders across the board have access to a single source of truth on housing data. Its impact is already tangible:</p>
          
          <ul className='leading-relaxed mb-6 text-justify text-md text-[#3E3E3E]'>
<li>•	Financial institutions are using HMIP insights to evaluate mortgage financing opportunities with greater confidence.</li>
<li>•	Government agencies now have the tools to develop location-specific housing policies grounded in evidence.</li>
<li>•	Developers are identifying demand clusters and aligning supply accordingly.</li>
<li>•	Urban planners are incorporating real-time affordability indices into project design.
One NMRC executive captured it best:</li>
</ul>
<p className='leading-relaxed mb-6 text-justify text-md text-[#3E3E3E]'>“We have moved from asking questions in the dark to making decisions in the light.”
Looking Ahead: Building a Housing Future Backed by Intelligence
The Housing Market Information Portal is more than a digital dashboard, it is a strategic instrument for national development. It proves that when public institutions like NMRC combine vision with innovation and collaborate across sectors, real change happens.
At Techspecialist Consulting Limited, we are proud to have walked this journey with NMRC and its partners. Our shared success in building HMIP exemplifies whats possible when data, technology, and purpose align.
</p>
    
      </article>
    </div>
  );
};

export default HousingArticleSection;
