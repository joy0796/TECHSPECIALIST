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

const HousingArticleSection2 = () => {
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
      <article className="lg:w-3/4 w-full space-y-6 text-[19px] font-[400] font-Poppins" data-aos="zoom-in"
              data-aos-duration="1000">
        <p className="text-[#3E3E3E] leading-relaxed text-justify">
          
          The West/South-South Director for Young Professionals for Tinubu, Victor Benjamin, believes young Nigerians would drive the projected $15bn addition to the economy from artificial intelligence.</p>

        <p className="text-[#3E3E3E] leading-relaxed text-justify">According to a statement made available to The PUNCH on Sunday, Benjamin said the key to ensuring this value to the economy becomes a reality is to equip youths with the right skills.</p>
        
        <p className="text-[#3E3E3E] leading-relaxed text-justify">Back in October, a study by Public First, a research agency specialising in economic, social, and opinion research, indicated that artificial intelligence could add about $15bn to the Nigerian economy by 2030.</p>
        

        <p className="text-[#3E3E3E] leading-relaxed text-justify">In the fresh statement, Benjamin said, “One of the biggest misconceptions about AI is that it will eliminate jobs. But the reality is AI will create more jobs than it replaces—the key is ensuring that people are equipped with the right skills. We are already seeing AI create new industries in financial services, digital health, precision agriculture, and even the creative economy. In banking, AI is automating fraud detection and improving financial inclusion. In agriculture, AI is predicting weather patterns, optimising irrigation, and increasing crop yields. In film, music, and content creation, AI-powered tools are making Nigerian creatives more competitive on a global scale. These are not hypothetical examples. These are real applications happening today, and they are expanding, not shrinking, job opportunities. The key is to train young Nigerians to be at the centre of these industries, and that is exactly what programmes like 3MTT and the AI and Blockchain Training Initiative are designed to do.</p>

        <p className="text-[#3E3E3E] leading-relaxed text-justify">He continued, “These are not hypothetical examples. These are real applications happening today, and they are expanding, not shrinking, job opportunities. The key is to train young Nigerians to be at the centre of these industries, and that is exactly what programmes like 3MTT and the AI and Blockchain Training Initiative are designed to do.”</p>
        





        

        
      </article>
    </div>
  );
};

export default HousingArticleSection2;
