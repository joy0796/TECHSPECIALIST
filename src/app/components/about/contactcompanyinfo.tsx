'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function ContactWithCompanyInfo() {
  useEffect(() => {
        AOS.init();
      }, []);

  return (
    <section className="bg-white text-black px-4 py-8 border-b border-gray-400">
      <div className="  flex flex-col md:flex-row justify-between gap-8 px-2 md:px-8" data-aos="fade-up"
     data-aos-duration="1000">
        {/* Left - Contact Form */}
        <div className="bg-white text-black p-4  space-y-1 pt-14 border-t border-gray-300 w-full md:w-[1000px]">
        <div className='bg-[#F0F0F0] py-2 px-6'>
          <p className="text-[22px] font-[600] text-[#3E3E3E] font-sans">Ready to talk?</p>
          <p className="text-[18px] text-[#707070] font-[400] font-sans">
            I want to talk to your specialist in the field of
            <span className="text-[#707070] underline">Digital Transformation</span>.
          </p>
          </div>
          <form className=" text-sm border-b border-gray-100">
            <div className='bg-[#F0F0F0] py-2 px-6 mb-1'>
              <label className='text-[10px] text-[#3E3E3E] font-600 font-sans'>FULL NAME</label>
                <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>
            
            <div className='bg-[#F0F0F0] px-6 mb-1 py-2'>
              <label className='text-[10px] text-[#3E3E3E] font-600 font-sans'>COMPANY/BUSINESS NAME</label>
            <input
              type="text"
              placeholder="Enter your name here"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>

            <div className='bg-[#F0F0F0] px-6 mb-1 py-2'>
              <label className='text-[10px] text-[#3E3E3E] font-600 font-sans'>BUSINESS EMAIL</label>
                            <input
              type="email"
              placeholder="Enter your email here"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>

            <div className='bg-[#F0F0F0] px-6 mb-1 py-2'>
              <label className='text-[10px] text-[#3E3E3E] font-600 font-sans'>PHONE NUMBER</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>
            
            <div className='bg-[#F0F0F0] py-4 px-6'>
                <label className="flex items-center gap-2 text-xs mb-4">
              <input type="checkbox" className="mt-1 text-[#707070]" />
              Id like to receive exciting communication regarding Techspecialist services.
            </label>

            <div className=''>
                            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded font-semibold"
            >
              Contact Me
            </button>
            </div>
            </div>
            

            

          </form>
        </div>
        {/* Right - Company Info */}
        <div className="text-[#3E3E3E] space-y-6 text-[19px] font-[400] leading-relaxed text-justify font-Poppins">
          <p>
            Techspecialist Consulting Limited (TCL) stands as Nigerias premier digital transformation enabler,
            delivering innovative technology solutions that drive measurable business value.
          </p>
          <p>
            Founded in 2008, we have strategically evolved from a traditional IT service provider into a comprehensive
            digital transformation partner - guiding organizations through their digital journeys with expertise,
            precision, and purpose.
          </p>
          <p>
            As a proud member of the MSwitch Group - a dynamic ecosystem that includes Techspecialist Consulting,
            Mswitch Media, and the TIIDELab Initiative - we are part of a broader mission to empower organizations and
            elevate creators through digital innovation, creative expression, and smart business support. This alignment
            enhances our capabilities and offers our clients access to a wider network of specialized expertise.
          </p>
          <p>
            With our headquarters in Abuja and a growing national footprint, TCL supports Nigerian businesses,
            government agencies, and international organizations in navigating todays digital landscape. We simplify
            complex technologies, accelerate transformation initiatives, and deliver consistent, measurable outcomes
            that align with each clients strategic objectives.
          </p>
          <p>
            Our distinctive approach integrates three specialized service domains into a seamless ecosystem - enabling
            us to address the full spectrum of digital challenges facing modern organizations. This holistic methodology
            empowers our clients to achieve operational excellence, build lasting resilience, and secure sustainable
            growth in an era defined by technological disruption and opportunity.
          </p>
          <p>At TCL, we do not just implement technology - we create impact.</p>
        </div>
      </div>
    </section>
  );
}
