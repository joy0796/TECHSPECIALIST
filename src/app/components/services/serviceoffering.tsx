"use client";
import Link from "next/link";
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


type ServiceCard = {
  title: string;
  description: string;
  link?: string;
};

const services: ServiceCard[] = [
  {
    title: "Digital Transformation",
    description:
      "We expertly guide organizations through comprehensive digital transformation initiatives that strategically align technology investments with business objectives to generate meaningful returns:",
      link: '/itass',
  },
  {
    title: "IT Support as a Service (ITaaS)",
    description:
      "We provide reliable, responsive IT infrastructure management and support services to maintain operational continuity:",
      link: '/itass',
  },
  {
    title: "Digital Upskilling as a Service (DUaaS)",
    description:
      "We help organizations and individuals build the digital competencies needed for successful technology adoption:",
      link: '/itass',
  },
];

const ServiceOfferingsSection = () => {
   useEffect(() => {
          AOS.init();
        }, []);
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[30px] text-[40px] font-[600] text-center text-[#3E3E3E] mb-6 font-sans">
          Our Service Offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <Link key={index} href={service.link!}>
      <div
        className="flex flex-col h-full bg-gray-50 px-6 py-6 rounded-lg border border-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300"
        data-aos="fade-up"
     data-aos-duration="1000"
      >
        <div className="w-14 h-14 bg-blue-500 rounded-md mb-12 mt-6" />
        <h3 className="text-[40px] font-[600] text-[#3E3E3E] mb-4 font-custom leading-[100%] mt-4">
          {service.title}
        </h3>
        <p className="text-[#979595] text-[19px] font-[500] font-custom mb-4">
          {service.description}
        </p>
      </div>
    </Link>
  ))}
</div>

      </div>
    </section>
  );
};

export default ServiceOfferingsSection;
