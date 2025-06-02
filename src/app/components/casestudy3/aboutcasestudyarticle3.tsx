'use client';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';


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

const CaseArticleSection3 = () => {
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
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-16 py-10 flex flex-col lg:flex-row gap-10 text-black bg-white" data-aos="fade-up"
     data-aos-duration="3000">
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
      <article className="lg:w-3/4 w-full text-[20px]  font-Poppins space-y-4" >
        <p className=" font-[900] mb-2 text-[#3E3E3E]">
          
          The Budget-Transformation Paradox
          </p>
          <p className="leading-relaxed mb-2 text-justify text-[#3E3E3E]">Nigerias public sector stands at a crossroads: citizens demand modern, efficient digital services, yet government IT budgets are tight. In fact, analysts note Nigeria Federal Ministry of Communications, Innovation and Digital Economy got only ₦28.8 bn (less than 1%) of the 2024 budget, with nearly 70% of that devoted to salaries. This leaves little room for new projects, even as programs like the 3 Million Technical Talent (3MTT) Initiative and a national Broadband Alliance seek to build Nigeria tech workforce and infrastructure. At the same time, Nigerias ICT and telecom sectors are booming. With 220+ million people (70% under age 35) and nearly 219 million mobile subscribers, technology now drives significant growth. The challenge is clear: how can government IT managers deliver on ambitious digital goals without breaking the bank? The answer is sustainable IT management applying cost-efficient, scalable, and “green” practices so that every naira spent maximizes value.</p>
          <p className=" font-bold mb-2 text-[#3E3E3E]">Why Digital Transformation Matters in Nigeria</p>
          <p className="leading-relaxed mb-2 text-justify text-md text-[#3E3E3E]">Digital transformation is a strategic imperative for Nigerias government and enterprises. A strong digital economy reduces corruption, improves service delivery, and diversifies growth beyond oil. In practice, this means e-governance portals, cashless payments, online licensing, and data-driven planning. Nigerias National Digital Economy Policy (2020-2030) outlines eight pillars (e.g. digital literacy, infrastructure, regulation) to harness technology across society. The benefits are already visible:</p>
          <p className="text-md font-bold mb-2 text-[#3E3E3E]">•	Economic impact: <span className='font-normal'>The ICT sector contributed roughly 20% of GDP growth in Q2 2024, even as oil prices fluctuated. Nigeria is Africas largest mobile market, with about 163 million internet users (43.5% broadband penetration). Telecommunication alone was the third-largest GDP contributor in mid-2024.</span></p>
          <p className="text-md font-bold mb-2 text-[#3E3E3E]">•	Workforce and innovation:<span className='font-normal'>Nigeria has a very youthful population (70% under 35). Training programs from global tech companies and government initiatives aim to upskill millions. This expanding talent pool fuels local tech startups and makes digital services more feasible.</span></p>
          <p className="text-md font-bold mb-2 text-[#3E3E3E]">•	Service delivery: <span className='font-normal'>Digital tools can streamline everything from tax collection to healthcare. For example, online tax systems and e-payments increase revenue efficiency, while e-health and e-learning platforms extend services into remote areas. Government leaders see tech not as optional but as essential to improving public sector performance.</span></p>
          <p className="leading-loose mb-2 text-justify text-md text-[#3E3E3E]">In short, Nigerias future prosperity is tied to digital progress. This makes smart IT management not just a technical concern, but a national priority.
</p>


        
        <div className="w-full h-64 md:w-1/2 mx-auto my-6 relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/image 22.png"
                    alt="Digital Transformation"
                    fill
                    className="object-cover"
                  />
                </div>

            <p className="text-md font-bold mb-2 text-[#3E3E3E]">Common Budgetary and Resource Constraints
Despite the clear need, public sector IT projects in Nigeria face chronic constraints. In addition to limited budgets, agencies contend with:</p>
            <p className="text-md font-bold mb-2 text-[#3E3E3E]">•	Scarce funding: <span className='font-normal'>As noted, ICT funding is a tiny slice of the national budget. For instance, the 2024 appropriation for the communications ministry is estimated at just ₦28.8 bn, whereas comparable ministries get hundreds of billions. Even within that small budget, over two-thirds goes to personnel, leaving only 28% for capital projects. In short, governments often have to do more with much less.</span> </p>
            <p className="text-md font-bold mb-2 text-[#3E3E3E]">•	Unstable power and infrastructure: <span className='font-normal'>Reliable electricity is a major hurdle. Less than half of Nigerias population has consistent grid power. Many government offices and data centers run on diesel generators, which are expensive and polluting. In Lagos alone, generator emissions equal those of hundreds of thousands of cars each year. Bandwidth can also be spotty, especially outside cities. These gaps inflate both the cost and complexity of IT operations.</span></p>
            <p className="text-md font-bold mb-2 text-[#3E3E3E]">•	Procurement and bureaucracy: <span className='font-normal'>Cumbersome processes can delay projects. Agencies must often wait months for funds to be released after budget approval, slowing down IT rollouts. Complex regulations can stall vendor procurement. Even when funds exist, delays in procurement or bureaucracy can push projects over budget.</span></p>
            <p className="text-md font-bold mb-2 text-[#3E3E3E]">•	Skill gaps and legacy systems: <span className='font-normal'>Many ministries have outdated hardware and a shortage of trained IT staff. Historically only about a third of government agencies had fully integrated digital tools. Furthermore, inter-agency coordination is weak: agencies run separate systems that do not always talk to each other, duplicating costs. These challenges mean that simply demanding new projects is futile. Instead, ICT managers need to work within reality: tight budgets, limited power, and slow processes. The good news is that these constraints also drive creativity. By adopting sustainable IT management principles, agencies can stretch resources further.</span>
</p>
            <p className="text-md font-bold mb-2 text-[#3E3E3E]">
              Principles of Sustainable IT Management
            </p>

        <div className="w-full h-64 md:w-1/2 mx-auto my-6 relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/image 23.png"
                    alt="Digital Transformation"
                    fill
                    className="object-cover"
                  />
                </div>


           <p className="leading-relaxed mb-2 text-justify text-md text-[#3E3E3E]">“Sustainable IT” (or “Green IT”) refers to practices that minimize cost and environmental impact while maximizing performance. Key principles include cost efficiency, scalability, and environmental responsibility. In practical terms for Nigeria, this means:</p>
           <p className="text-md font-bold mb-1 text-[#3E3E3E]">•	Cloud-first and virtualization: <span className='font-normal'>Instead of buying and maintaining many physical servers, agencies can use cloud services (SaaS/PaaS/IaaS) to pay only for what they need. Cloud providers achieve high utilization and economies of scale. Adopting a cloud-first approach enables agencies to shift capital expenditures into predictable operating costs. This model can dramatically cut costs and energy use. Traditional IT spends 75% of its budget on legacy maintenance, something that public cloud can largely avoid.</span></p>
           <p className="text-md font-bold mb-1 text-[#3E3E3E]">•	Scalability and modular design: <span className='font-normal'>Projects should start small and grow. By breaking initiatives into phases (pilot → expand → optimize), agencies can test what works and control costs. For instance, rather than digitizing all health facilities at once, a state might first roll out an e-health pilot in one district, measure benefits, and then scale. This iterative approach avoids one-time capital shocks and allows lessons to be built in. It also lets budgets be spread over multiple fiscal years.</span></p>
           <p className="text-md font-bold mb-1 text-[#3E3E3E]">•	Green technology:<span className='font-normal'>Energy efficiency and sustainability must be front of mind. Wherever possible, agencies should procure energy-efficient equipment. Data centers can be placed in cooler locations or use free-air cooling to reduce HVAC costs. Nigerias private sector is already innovating here: some data center operators plan to use solar power and recycled water for cooling. On an agency level, offices can deploy solar panels or microgrids to cut diesel usage. And donot forget e-waste - establish programs to recycle old PCs and replace them with longer-life or cloud-backed thin clients.</span> </p>
           <p className="text-md font-bold mb-1 text-[#3E3E3E]">•	Cost control and procurement: <span className='font-normal'>Sustainable IT means spending strategically. Governments should leverage open standards and open-source software where feasible to avoid costly licenses. Bundling contracts (e.g. common data center or network services for multiple agencies) can save money. Also, consider public-private partnerships: telecom firms or donors may co-fund infrastructure that benefit both government and communities. Negotiating volume discounts for cloud or hardware procurement is another tactic.</span></p>
           <p className="text-md font-bold mb-1 text-[#3E3E3E]">•	Capacity building: <span className='font-normal'>Invest in people. No technology can deliver value if there isnot skilled staff to manage it. Sustainable programs include ongoing training budgets, maybe using online courses or partnerships with tech academies. Nigerias government already runs initiatives to upskill youth, these can be extended to public servants. A strong cadre of IT-trained personnel will maintain systems better, reducing costly downtime and emergency fixes.
In summary, sustainable IT management blends smart budgeting with forward-looking tech choices. The right mix (cloud, efficiency, and renewables) yields a more resilient, scalable IT landscape</span></p>

      </article>
    </div>
  );
};

export default CaseArticleSection3;
