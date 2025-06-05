
// 'use client'
// import Link from 'next/link'
// import { useEffect } from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";

// // import Image from 'next/image'

// export default function ServicesSection() {
//   useEffect(() => {
//       AOS.init();
//     }, []);
//   return (
//     <section className="relative w-full text-white overflow-hidden">

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 pt-28 md:pt-40 " data-aos="fade-up"
//      data-aos-duration="1000">
//         <h2 className="text-[35px] md:text-[57px] font-[600] mb-4 font-sans">Our Services</h2>
//         <p className="text-[19px] md:text-[23px] font-[600] max-w-3xl md:leading-normal font-Roboto">
//           Our service portfolio has evolved into a sophisticated integrated ecosystem where three core service domains interconnect through strategic pathways. This architecture enables us to deliver truly comprehensive solutions that address every aspect of our clients&apos; digital transformation journey.
//         </p>
//         <div className="mt-6">
//           <Link href="/team">
//           <button className="px-6 py-3 border border-white rounded-md transition text-[16px] font-500 font-inter">
//             Talk with the Team
//           </button>
//           </Link>
//         </div>
//         {/* <p>hello</p> */}
//         <div className="hidden md:flex bg-black/50 text-white rounded-xl shadow-lg px-6 py-6 flex-col md:flex-row gap-8 justify-between items-center w-full font-[500] whitespace-nowrap font-Roboto mt-[11rem]">
//           <p className='text-2xl'>Digital Transformation</p>
//           <p className='text-2xl'>IT Support as a Service (ITaaS)</p>
//           <p className='text-2xl'>Digital Upskilling as a Service (DUaaS)</p>
//         </div>
//       </div>


//     </section>
//   )
// }


'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <section className="relative w-full text-white overflow-hidden min-h-[80vh] md:min-h-[90vh]">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-28 md:pt-40 pb-[25rem] md:pb-[16.8rem] relative z-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-[35px] md:text-[57px] font-[600] mb-4 font-custom">Our Services</h2>
        <p className="text-[19px] md:text-[23px] font-[600] max-w-3xl md:leading-normal font-sans">
          Our service portfolio has evolved into a sophisticated integrated ecosystem where three core service domains interconnect through strategic pathways. This architecture enables us to deliver truly comprehensive solutions that address every aspect of our clients&apos; digital transformation journey.
        </p>
        <div className="mt-6">
          <Link href="/team">
            <button className="px-6 py-3 border border-white rounded-lg transition text-[16px] font-500 font-inter">
              Talk with the Team
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Bar - positioned absolutely at the bottom of the section */}
      <div 
        className="absolute bottom-0 left-0 w-full"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="bg-black/50 text-white rounded-t-2xl shadow-lg px-8 py-8 flex flex-col md:flex-row gap-4 md:gap-8 justify-between items-center w-full font-[500] whitespace-nowrap font-sans">
            <p className='text-lg md:text-2xl text-center md:text-left'>Digital Transformation</p>
            <p className='text-lg md:text-2xl text-center md:text-left'>IT Support as a Service (ITaaS)</p>
            <p className='text-lg md:text-2xl text-center md:text-left'>Digital Upskilling as a Service (DUaaS)</p>
          </div>
        </div>
      </div>
    </section>
  )
}