// app/components/ContactSection.tsx
"use client";

// import { useState } from "react";

const ContactSection = () => {
  // const [topic, setTopic] = useState("Digital Transformation");

  return (

      <section className="bg-white text-black px-4 py-12 ">
      <div className="  flex flex-col md:flex-row justify-between gap-8 px-2 md:px-8" data-aos="fade-up"
     data-aos-duration="1000">
        {/* Left - Contact Form */}
        <div className="bg-white text-black p-4  space-y-1 pt-14 border-t border-gray-300 w-full md:w-[1000px]">
        <div className='bg-[#F0F0F0] py-4 px-6'>
          <p className="text-[22px] font-[600] text-[#3E3E3E] font-custom mb-1">Ready to talk?</p>
          <p className="text-[18px] text-[#707070] font-[400] font-custom leading-[100%]">
            I want to talk to your specialist in the field of
            <span className="text-[#707070] underline"> Digital Transformation</span>.
          </p>
          </div>
          <form className=" text-sm border-b border-gray-100">
            <div className='bg-[#F0F0F0] py-2 px-6 mb-1'>
              <label className='text-[10px] text-[#3E3E3E] font-600 font-custom'>FULL NAME</label>
                <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>
            
            <div className='bg-[#F0F0F0] px-6 mb-1 py-2'>
              <label className='text-[10px] text-[#3E3E3E] font-600 font-custom'>COMPANY/BUSINESS NAME</label>
            <input
              type="text"
              placeholder="Enter your name here"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>

            <div className='bg-[#F0F0F0] px-6 mb-1 py-2'>
              <label className='text-[10px] text-[#3E3E3E] font-600 font-custom'>BUSINESS EMAIL</label>
                            <input
              type="email"
              placeholder="Enter your email here"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>

            <div className='bg-[#F0F0F0] px-6 mb-1 py-2'>
              <label className='text-[10px] text-[#3E3E3E] font-600 font-custom'>PHONE NUMBER</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 p-2 rounded bg-[#F0F0F0] text-xs"
            />
            </div>
            
            <div className='bg-[#F0F0F0] py-4 px-6 text-[#3E3E3E]'>
                <label className="flex items-center gap-2 text-xs mb-4">
              <input type="checkbox" className="mt-1 text-[#707070] font-custom" />
              Id like to receive exciting communication regarding Techspecialist services.
            </label>

            <div className=''>
                            <button
              type="submit"
              className="w-full bg-[#ED5D25] text-white py-2 rounded font-[600] font-custom text-[8px] md:text-[11px]"
            >
              Contact Me
            </button>
            </div>
            </div>
            

            

          </form>
        </div>
        {/* Right - Company Info */}
        <div className="text-[#3E3E3E] space-y-6 text-[19px] font-[400] leading-[177%] text-justify font-Poppins">
          <p className="text-md mb-4 text-justify">
          Modern businesses require more than just functional IT systems—they need resilient, responsive, and future-ready technology environments that keep operations running smoothly.  At Techspecialist Consulting Limited (TCL), we deliver dependable IT Support as a Service (ITaaS) that ensures your infrastructure performs at its best—every hour, every day. </p>

        <p className="text-md mb-6 text-justify">
          We help organizations across sectors manage the complexity of todays IT landscape with tailored support services designed to reduce downtime, enhance system reliability, and strengthen cybersecurity—all while aligning with your strategic objectives.
        </p>

        <h3 className="font-semibold mb-4">Why Choose TCL?</h3>

        {/* KPIs */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-center">Target Impact</h4>
          <div className="flex flex-col sm:flex-row gap-6 mb-6 justify-center">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-[#3E3E3E]">99.9%</p>
              <p className="text-md font-medium">System Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-[#3E3E3E]">95%</p>
              <p className="text-md font-medium">SLA Compliance</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-[#3E3E3E]">24/7</p>
              <p className="text-md font-medium">Monitoring</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-md mb-4">
          <span className="font-semibold">Trusted Expertise:</span> With over 15 years of experience enabling digital transformation, our team brings proven methodologies, sector-specific knowledge, and a commitment to excellence in every engagement.
        </p>
        <p className="text-md mb-4">
          <span className="font-semibold">Scalable & Customizable:</span>Whether you are a growing SME or a large enterprise, our ITaaS offering scales with your needs—adapting to new challenges, user demands, and technology shifts.
        </p>
        <p className="text-md">
          <span className="font-semibold">One Partner, Total Support:</span> We act as an extension of your team, offering end-to-end IT support that covers infrastructure, user support, security, and strategic advisory—all under one roof.
        </p>
        </div>
      </div>
    </section>





























  );
};

export default ContactSection;
