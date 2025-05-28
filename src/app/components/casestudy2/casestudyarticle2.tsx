'use client';

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

const CaseArticleSection2 = () => {
  // const [formData, setFormData] = useState({
  //   fullName: '',
  //   companyName: '',
  //   businessEmail: '',
  //   phoneNumber: '',
  //   consent: false,
  // });

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-16 py-10 flex flex-col lg:flex-row gap-10 text-black">
      {/* LEFT SIDEBAR */}
      
      <aside className="lg:w-1/4 w-full space-y-8">
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
            

            <div>
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
      <article className="lg:w-3/4 w-full">
        <p className="leading-loose mb-4 text-justify text-xs text-[#3E3E3E]">
          What happens when innovation is no longer confined to one sector? When government, startups, academia, and big tech join forces not just to test ideas but to co-create solutions that change lives?
This is beginning to be the new frontier of Nigerias digital economy, where artificial intelligence (AI) is no longer the stuff of Silicon Valley dreams but a real driver of growth across agriculture, healthcare, fintech, education, and governance. And at the heart of this transformation lies one powerful ingredient: cross-sectoral collaboration.
          </p>

          <h1 className="text-sm font-bold mb-2 text-[#3E3E3E]">AI Is No Longer the Future It is Here and Now in Nigeria</h1>

          <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">In the last five years, Nigeria has seen a dramatic uptick in AI-driven innovations. From chatbots helping SMEs deliver faster customer support to machine learning models used to detect fraudulent transactions, AI is quietly reshaping how we live, work, and do business.
A 2023 report by PwC Nigeria estimated that AI could contribute up to $15.7 trillion to the global economy by 2030, with Africa capturing nearly $1.2 trillion and Nigeria poised to lead that charge if the right partnerships are formed.</p>


<h1 className="text-sm font-bold mb-1 text-[#3E3E3E]">Sectors already feeling AIs impact include:</h1>
            <p className="leading-loose mb-1 text-justify text-xs text-[#3E3E3E] font-semibold">•	Healthcare: <span className="leading-loose mb-2 text-justify font-normal text-[#3E3E3E]">AI-powered diagnostic tools are helping clinics in rural areas improve early disease detection.</span></p>
            <p className="leading-loose mb-1 text-justify text-xs text-[#3E3E3E] font-semibold">•	Fintech: <span className="leading-loose mb-2 text-justify font-normal text-[#3E3E3E]" >Fraud detection systems using machine learning have cut down cybercrime risks.</span></p>
            <p className="leading-loose mb-1 text-justify text-xs text-[#3E3E3E] font-semibold">•	Agriculture:<span className="leading-loose mb-2 text-justify font-normal text-[#3E3E3E]">AI solutions like yield prediction and smart irrigation are supporting farmers with better decision-making.</span> </p>
            <p className="leading-loose mb- text-justify text-xs text-[#3E3E3E] font-semibold">•	Public Sector: <span className="leading-loose mb-2 text-justify font-normal text-[#3E3E3E]">Predictive analytics is helping government agencies improve citizen services and infrastructure planning.</span></p>


        
        
        <div className="w-full h-64 md:w-1/2 md:mx-auto relative rounded-lg overflow-hidden shadow-md py-6">
                  <Image
                    src="/image 20.png"
                    alt="Digital Transformation"
                    fill
                    className="object-cover"
                  />
                </div>


            <h1 className="text-sm font-bold mb-1 text-[#3E3E3E] mt-6">What Cross-Sectoral Collaboration Really Means</h1>
            <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Let us simplify this: cross-sectoral collaboration is about different stakeholders private sector innovators, public institutions, startups, NGOs, and universitiesworking together to solve problems using their combined expertise and resources.</p>

<p className="leading-loose mb-1 text-justify text-xs text-[#3E3E3E] font-semibold">Think of it like a relay race:</p>

<p className="leading-loose mb-1 text-justify text-xs text-[#3E3E3E]">•	A startup might bring an innovative AI solution.</p>
<p className="leading-loose mb-1 text-justify text-xs text-[#3E3E3E]">•	A university provides the research validation.</p>
<p className="leading-loose mb-1 text-justify text-xs text-[#3E3E3E]">•	The government supports with policy and scale.</p>
<p className="leading-loose mb-6 text-justify text-xs text-[#3E3E3E]">•	And a firm like Techspecialist Consulting provides the infrastructure and integration expertise to make it all work seamlessly.
When these players operate in silos, innovation slows. But when they collaborate, progress accelerates.</p>
<p className="text-sm font-bold mb-1 text-[#3E3E3E]">Challenges Slowing Collaboration <span className='font-normal'>(And How We Can Overcome Them)</span></p>
<p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Of course, Nigerias AI revolution is not without its challenges:</p>
<p className="text-xs font-bold mb-1 text-[#3E3E3E]">•	Talent Gaps:<span className='font-normal'> There is a shortage of AI-trained professionals. Universities are only beginning to catch up.</span></p>
<p className="text-xs font-bold mb-1 text-[#3E3E3E]">•	Regulatory Uncertainty:<span className='font-normal'> AI frameworks are still evolving, making policy alignment tricky.</span></p>
<p className="text-xs font-bold mb-1 text-[#3E3E3E]">•	Funding Barriers:<span className='font-normal'> Many startups struggle to find partners or investors willing to bet on unproven AI models.</span></p>
<p className="text-xs font-bold mb-1 text-[#3E3E3E]">•	Fragmented Efforts:<span className='font-normal'> Without a central collaboration platform, many initiatives operate in isolation.</span></p>
<p className="leading-loose mb-1 text-justify text-xs text-[#3E3E3E]">But there is hope and a big opportunity. What Nigeria needs is a robust ecosystem where partners trust, communicate, and innovate together.</p>
<p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">At Techspecialist Consulting, we believe in building bridges between industries, between problems and solutions, and between Nigerias current reality and its digital future.
Here is how we are helping power AI collaboration:</p>
<p className="text-xs font-bold mb-1 text-[#3E3E3E]">•	Strategic Advisory: <span className='font-normal'>Helping government and corporate clients develop AI-driven digital strategies that are scalable and impactful.</span></p>
<p className="text-xs font-bold mb-1 text-[#3E3E3E]">•	Solution Development: <span className='font-normal'>Partnering with startups and academia to co-create AI applications tailored to local needs.</span></p>
<p className="text-xs font-bold mb-1 text-[#3E3E3E]">•	Capacity Building: <span className='font-normal'>Organizing training and talent development programs to close the AI skills gap.</span></p>
<p className="text-xs font-bold mb-1 text-[#3E3E3E]">•	Infrastructure Support: <span className='font-normal'>Offering cloud, data, and cybersecurity platforms that power reliable and secure AI solutions.</span></p>
<p className="leading-relaxed mb-2 text-justify text-xs text-[#3E3E3E]">By enabling cross-sectoral synergy, Techspecialist does not just deploy tech we create transformative partnerships that move the needle for Nigerias digital economy.</p>

        <div className="w-full h-64 md:w-1/2 md:mx-auto relative rounded-lg overflow-hidden shadow-md my-6">
                  <Image
                    src="/image 21.png"
                    alt="Digital Transformation"
                    fill
                    className="object-cover"
                  />
                </div>


            <p className="text-xs font-bold mb-1 text-[#3E3E3E]">The Future: Nigeria Can Lead Africas AI Revolution.</p>
<p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Imagine an AI-powered Nigeria where farmers use real-time data to boost harvests, hospitals run predictive care models, and small businesses use smart assistants to scale faster than ever.
This vision is within reach but only if we collaborate across boundaries.</p>
            <p className="text-xs font-bold mb-1 text-[#3E3E3E]">What is next?</p>
            <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">•	More public-private partnerships</p>
            <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">•	National AI development frameworks</p>
            <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">•	Ecosystem hubs for cross-sector innovation</p>
            <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">•	Leadership from firms like Techspecialist Consulting</p>


      </article>
    </div>
  );
};

export default CaseArticleSection2;
