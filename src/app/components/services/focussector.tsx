"use client";
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

type Sector = {
  title: string;
  description: string;
  image: string;
  imageLeft?: boolean;
};

const sectors: Sector[] = [
  {
    title: "Public Sector: Powering Governance for Digital Citizens",
    description:
      "TCL empowers government institutions to meet rising expectations for efficient, transparent, and citizen-focused services by transforming outdated systems into modern digital ecosystems. With deep expertise in public sector regulations and advanced technologies, we guide agencies through end-to-end digital transformation—enhancing service delivery while ensuring continuity. Our specialized offerings include e-Government - aligned consulting, integrated citizen service platforms, secure document and workflow automation, managed IT services built around government compliance standards, and digital skills development programs for the public sector workforce.",
    image: "/sector1.png", 
  },
  {
    title: "Developmental Sector: Catalysing Development Through Technology",
    description:
      "TCL supports developmental organizations—NGOs, foundations, and international agencies—in navigating complex environments with technology solutions that enhance program effectiveness, transparency, and reach. Aware of the sectors accountability demands and limited resources, we deliver cost-efficient digital tools that extend impact without adding administrative overhead. Our tailored services include sustainable IT managed services aligned with NGO funding models, AI-powered analytics for impact and resource optimization, monitoring and evaluation platforms, mobile-first field data collection tools, and beneficiary management systems for streamlined impact reporting.",
    image: "/sector2.png", 
    imageLeft: true,
  },
  {
    title: "Private Sector: Driving Commercial Innovation & Competitiveness",
    description:
      "TCL partners with innovative private sector organizations to drive business transformation, helping them stay competitive by reimagining business models, enhancing customer experiences, and optimizing operations through strategic digital technologies. Our solutions focus on delivering measurable outcomes such as increased revenue, cost efficiency, and market advantage. We offer industry-tailored digital transformation consulting, end-to-end digital workforce management, customer engagement platforms, intelligent automation for operational excellence, and AI-powered business intelligence with predictive analytics to support sustained growth and leadership in a rapidly evolving market.",
    image: "/sector3.png", 
  },
];

const FocusSectorsSection = () => {
useEffect(() => {
        AOS.init();
      }, []);

  return (
    <section className="bg-white text-black py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Our Focus Sectors</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8 md:mb-10 text-sm md:text-lg">
          At Techspecialist Consulting Limited, we have developed specialized expertise across three vital sectors of the Nigerian economy. Our tailored approaches address the unique digital transformation challenges and opportunities in each sector, delivering measurable impact and sustainable digital evolution.
        </p>

        <div className="space-y-16">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                sector.imageLeft ? "md:flex-row-reverse" : ""
              } gap-8 items-center`}
            >
              <div className=" w-full md:w-1/2" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-[300px] object-cover shadow-md"
                />
              </div>
              <div className="md:w-2/3 w-full" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {sector.title}
                </h3>
                <p className="text-gray-900 text-sm md:text-md leading-relaxed text-justify">{sector.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusSectorsSection;
