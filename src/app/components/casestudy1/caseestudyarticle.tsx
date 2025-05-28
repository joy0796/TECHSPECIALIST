'use client';

import Image from 'next/image';
import { useState } from 'react';

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

const CaseArticleSection1 = () => {
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
            I want to talk to your specialist in the field of{' '}
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
              I’d like to receive exciting communication regarding Techspecialist services.
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
      <article className="lg:w-3/4 w-full text-xs">
        <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">
          
          Why are some Nigerian small businesses scaling fast with tech while others are still stuck in analogue routines?
          In a country where over 96% of businesses are SMEs, the need for digital transformation isn’t just important it’s existential. Yet, while some Nigerian SMEs are harnessing the power of technology to access new markets and scale efficiently, many others struggle with outdated processes, lack of infrastructure, and fear of the unknown.
          </p>

          <h1 className="text-sm font-bold mb-1 text-[#3E3E3E]">Why Digital Transformation Matters for Nigerian SMEs</h1>

          <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Let’s start with the big picture.
      SMEs contribute over 48% to Nigeria’s GDP and account for more than 80% of employment. Yet many still run their operations manually from inventory and payroll to marketing and customer service. In a world where agility and efficiency are powered by technology, this digital lag is not just inefficient it’s a threat to business survival.
      Digital transformation isn’t just about adopting tools. It’s about rethinking processes, people, and platforms to unlock efficiency, resilience, and growth.</p>

        
        <h1 className="text-sm font-bold mb-1 text-[#3E3E3E]">Top Barriers to SME Digital Transformation in Nigeria</h1>
        <div className="w-full md:w-1/2 h-64 md:mx-auto relative rounded-lg overflow-hidden shadow-md my-6">
                  <Image
                    src="/image18.png"
                    alt="Digital Transformation"
                    fill
                    className="object-cover"
                  />
                </div>


                <h1 className="text-sm font-bold mb-1 text-[#3E3E3E]">Despite the promise of tech, many Nigerian SMEs face similar roadblocks:</h1>
                <ol>
                  <li>1. Cost of Technology</li>
                  <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Cloud subscriptions, software licenses, and devices often feel out of reach for small businesses with tight budgets.</p>

                  <li>2. Limited Digital Skills</li>
                  <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Most SME owners and staff are not formally trained in tech. This creates a fear of adoption and misuse of digital tools.</p>

                  <li>3. Poor Infrastructure</li>
                  <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Erratic power supply, unstable internet connectivity, and inconsistent logistics systems make digitization a challenge.</p>

                  <li>4. Low Trust in Digital Payments</li>
                  <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Many SMEs remain cash-heavy due to concerns around fraud, delays, or unfamiliarity with fintech systems.</p>

                  <li>5. Change Resistance</li>
                  <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">There’s often cultural inertia “we’ve always done it this way” which limits openness to change, especially in family-run or legacy businesses.</p>
                </ol>

                <h1 className="text-sm font-bold mb-1 text-[#3E3E3E]">Breakthroughs: Where Nigerian SMEs Are Winning with Digital</h1>
                <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Thankfully, the narrative isn’t all gloomy. There are pockets of success stories of SMEs that embraced tech and thrived.</p>

                <h1 className="text-sm font-bold mb-1 text-[#3E3E3E]">E-commerce Integration</h1>
                <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Retailers in Lagos and Abuja are using platforms like Shopify, Flutterwave Store, and WhatsApp Business to digitize sales and customer service.</p>

                <h1 className="text-sm font-bold mb-1 text-[#3E3E3E]">Fintech for Finance</h1>
                <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Digital lending platforms and accounting software like Kippa and Paystack for Business help SMEs better manage cash flow, issue invoices, and track payments.</p>

                <h1 className="text-sm font-bold mb-1 text-[#3E3E3E]">Remote Work and Virtual Teams</h1>
                <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Some forward-thinking SMEs are tapping into remote workers and virtual assistants via tools like Trello, Zoom, and Slack cutting costs while boosting productivity.</p>

                <h1 className="text-sm font-bold mb-1 text-[#3E3E3E]">Social Media as a Growth Engine</h1>
                <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Instagram and TikTok aren’t just for dance videos many Nigerian fashion, beauty, and food brands have scaled nationally through social media marketing and influencer partnerships.</p>

                <h1 className="text-sm font-bold mb-1 text-[#3E3E3E]">Cybersecurity Awareness</h1>
                <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Thanks to awareness programs by players like Techspecialist, some SMEs are learning the basics of digital safety protecting customer data and building online credibility.</p>

                <h1 className="text-sm font-bold mb-1 text-[#3E3E3E]">Blueprints: How to Digitally Transform Nigerian SMEs</h1>


                <div className="w-full md:w-1/2 h-64 md:mx-auto relative rounded-lg overflow-hidden shadow-md my-6">
                  <Image
                    src="/image18.png"
                    alt="Digital Transformation"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Now, how do we go from isolated breakthroughs to mass adoption? Here are actionable blueprints that can guide the way:</p>

                <ol>
                  <li className="text-sm font-bold mb-1 text-[#3E3E3E]">1. Start Small, Grow Smart</li>
                  <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Begin with affordable, scalable tools—like free CRM systems, cloud-based accounting apps, or e-payment gateways.</p>

                  <li className="text-sm font-bold mb-1 text-[#3E3E3E]">2. Upskill the Workforce</li>
                  <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Invest in digital literacy host internal workshops or partner with training platforms that teach staff how to use essential tools.</p>

                  <li className="text-sm font-bold mb-1 text-[#3E3E3E]">3. Leverage Government and NGO Support</li>
                  <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Tap into public and private sector programs offering grants, free software, or training for SMEs (e.g., SMEDAN, NITDA digital skills initiatives).</p>

                  <li className="text-sm font-bold mb-1 text-[#3E3E3E]">4. Partner with IT Consultants</li>
                  <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">Collaborating with firms like Techspecialist Consulting ensures SMEs don’t waste resources on the wrong tools or make costly tech mistakes.</p>

                  <li className="text-sm font-bold mb-1 text-[#3E3E3E]">5. Digitize Customer Engagement</li>
                  <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">From WhatsApp chatbots to automated emails, SMEs can improve customer experience and boost sales through digital communication.</p>
                </ol>


                <h1 className="text-sm font-bold mb-1 text-[#3E3E3E]">How Techspecialist Consulting Supports SME Digital Transformation</h1>
                <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">As a technology partner committed to empowering businesses, Techspecialist Consulting is at the forefront of enabling SME success in Nigeria through:</p>

                <ul>
                  <li className="text-sm font-bold mb-1 text-[#3E3E3E]">•	Tailored IT Solutions: We help SMEs adopt tools that are fit-for-purpose, affordable, and scalable.</li>
                  <li className="text-sm font-bold mb-1 text-[#3E3E3E]">•	Cloud and Infrastructure Setup: From Google Workspace to secure cloud storage, we set up reliable systems.</li>
                  <li className="text-sm font-bold mb-1 text-[#3E3E3E]">•	Training & Capacity Building: We organize SME-focused tech training sessions both virtually and onsite.</li>
                  <li className="text-sm font-bold mb-1 text-[#3E3E3E]">•	Digital Transformation Strategy: We don’t just install tech we help you design a roadmap for real transformation.</li>
                  <li className="text-sm font-bold mb-1 text-[#3E3E3E]">•	Cybersecurity Protection: We offer affordable cybersecurity services to help protect SME data and digital assets.
Whether you're a one-person bakery or a growing logistics startup, Techspecialist offers tools, support, and strategy to help your business compete in the digital age.
</li>
                </ul>


            <h1 className="text-sm font-bold mb-1 text-[#3E3E3E]">The Road Ahead: A Digitally Empowered SME Nation</h1>
            <p className="leading-loose mb-2 text-justify text-xs text-[#3E3E3E]">The digital economy doesn’t belong to multinationals alone. In fact, Nigeria’s biggest opportunity lies in digitally transforming its SMEs making them faster, safer, smarter, and more customer-focused.
But no one can do it alone.
Government must provide infrastructure. Fintechs must simplify access. IT consultants must guide the journey. And SME founders must lead with openness and courage.
With collaboration, commitment, and strategy, we can create an SME ecosystem that doesn’t just survive but thrives in the digital economy.</p>
      </article>
    </div>
  );
};

export default CaseArticleSection1;
