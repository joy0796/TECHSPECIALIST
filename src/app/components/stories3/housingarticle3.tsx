'use client';
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

const HousingArticleSection3 = () => {
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
    <div className="bg-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-16 py-10 flex flex-col lg:flex-row gap-10 text-black">
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
                      <ul className="text-[14px] md:text-[16px] text-[#8F8F8F] list-disc list-inside space-y-1 font-[500] font-sans">
                        {tags.map((tag, idx) => (
                          <li key={idx}>{tag}</li>
                        ))}
                      </ul>
                    </div>
            
                    {/* Form */}
                    <div className="bg-white text-black pt-8  w-full md:w-[230px]">
                    <div className='bg-gray-100 mb-1 py-2 px-6'>
                      <p className="text-[19px] md:text-[22px] font-[600] text-[#3E3E3E] font-sans">Ready to talk?</p>
                      <p className="text-[16px] font-[400] font-sans text-[#707070]">
                        I want to talk to your specialist in the field of
                        <span className="text-[#707070] underline">Digital Transformation</span>.
                      </p>
                      </div>
                      <form className="space-y-1">
                        <div className='bg-[#F0F0F0] mb-1 py-2 px-6'>
                          <label className='text-[8px] md:text-[10px] font-[600] font-sans text-[#3E3E3E]'>FULL NAME</label>
                            <input
                          type="text"
                          placeholder="Enter your name"
                          className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
                        />
                        </div>
                        
                        <div className='bg-gray-100 mb-1 p-2 px-6'>
                          <label className='text-[8px] md:text-[10px] font-[600] font-sans text-[#3E3E3E]'>COMPANY/BUSINESS NAME</label>
                        <input
                          type="text"
                          placeholder="Enter your name here"
                          className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
                        />
                        </div>
            
                        <div className='bg-gray-100 mb-1 p-2 px-6'>
                          <label className='text-[8px] md:text-[10px] font-[600] font-sans text-[#3E3E3E]'>BUSINESS EMAIL</label>
                                        <input
                          type="email"
                          placeholder="Enter your email here"
                          className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
                        />
                        </div>
            
                        <div className='bg-gray-100 mb-1 py-2 px-6'>
                          <label className='text-[8px] md:text-[10px] font-[600] font-sans text-[#3E3E3E]'>PHONE NUMBER</label>
                        <input
                          type="tel"
                          placeholder="Enter your phone number"
                          className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
                        />
                        </div>
                        
                        <div className='bg-gray-100 mb-1 py-2 px-4'>
                            <label className="flex items-start gap-2 text-xs">
                          <input type="checkbox" className="mt-1 text-[#707070] text-[8px] md:text-[10px] font-[400] font-sans" />
                          I would like to receive exciting communication regarding Techspecialist services.
                        </label>
                        </div>
                        
            
                        <div className=''>
                                        <button
                          type="submit"
                          className="w-full bg-orange-600 text-white py-2 rounded font-[600] font-sans text-[10px] md:text-[11px]"
                        >
                          Contact Me
                        </button>
                        </div>
            
                      </form>
                    </div>
                  </aside>
            
      {/* RIGHT MAIN ARTICLE */}
      <article className="lg:w-3/4 w-full text-[19px] font-[400] font-Poppins" data-aos="zoom-in"
              data-aos-duration="1000">
        <p className="text-[#3E3E3E] leading-relaxed mb-4 text-justify text-[19px] font-[400] font-Poppins">
          In a country of over 200 million people, one of the least talked about but most pressing challenges in the housing sector is the lack of credible, centralized housing data.</p>

<p className="text-[#3E3E3E] leading-relaxed mb-4 text-justify text-[19px] font-[400] font-Poppins">This gap doesnt just affect developers or policymakers. It affects everyone from financial institutions trying to de-risk housing finance, to families seeking affordable homes, to government agencies crafting policies that reflect reality. With fragmented, inconsistent, and inaccessible housing data, progress is simply guesswork.</p>

<p className="text-[#3E3E3E] leading-relaxed mb-8 text-justify text-[19px] font-[400] font-Poppins">To fix the housing challenge, we must first fix the data problem.
Thats the mission behind the Housing Market Information Portal (HMIP) a national data platform co-created with leading institutions like Nigeria Mortgage Refinance Company Plc, Central Bank of Nigeria, National Bureau of Statistics Nigeria, National Population Commission, FEDERAL MORTGAGE BANK OF NIGERIA (FMBN) Real Estate Developers Association of Nigeria (REDAN) and other agencies.</p>


<p className="text-[#3E3E3E] leading-relaxed mb-2 text-justify text-[19px] font-[400] font-Poppins">What HMIP Does: HMIP is not just a data repository. Its a housing intelligence system that: </p>
<ul className="text-[#3E3E3E] leading-relaxed mb-6 text-justify text-[19px] font-[400] font-Poppins">
    <li>* Aggregates and unifies datasets from credible national sources</li>
 <li>• Visualizes housing trends, affordability, and supply-demand gaps</li>
 <li>• Supports data-driven policy and financing decisions</li>
 <li>• Equips stakeholders with clarity to act and invest smartly</li>
 </ul>

<p className="text-[#3E3E3E]  leading-relaxed mb-4 text-justify text-[19px] font-[400] font-Poppins">With Nigeria facing an estimated housing deficit of about 25.55 million units and the urban population projected to surpass 295 million by 2050, the need for timely, accurate housing data has never been greater.</p>

<p className="text-[#3E3E3E] leading-relaxed mb-6 text-justify text-[19px] font-[400] font-Poppins">So far, HMIP has integrated key datasets, built interactive dashboards, and laid the groundwork for real-time market analysis, bringing a new level of transparency and shared insight to the housing ecosystem.</p>

<p className="text-[#3E3E3E] leading-relaxed mb-6 text-justify text-[19px] font-[400] font-Poppins">The Bigger Picture HMIP is more than a platform, its a collaborative step toward building a future where:</p> 
<ul className="text-[#3E3E3E] text-md leading-relaxed mb-6 text-justify">
    <li>* Policy is powered by insight</li>
 <li>• Investment is backed by visibility</li>
 <li>• And every Nigerian has a better shot at decent, affordable housing
Because when data works, housing works.</li>
</ul>





        

        
      </article>
    </div>
  );
};

export default HousingArticleSection3;
