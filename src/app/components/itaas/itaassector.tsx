"use client";

type Sector = {
  title: string;
  description: string;
  image: string;
  imageLeft?: boolean;
};

const sectors: Sector[] = [
  {
    title: " IT Infrastructure & Cloud Compute Deployment",
    description:
      "We design and implement robust infrastructure solutions—on-premise, hybrid, or cloud-based—to support scalability, business agility, and seamless performance. From servers to networking, storage, and cloud compute, we architect modern environments tailored to your operational needs.",
    image: "/sector1.png", 
  },
  {
    title: " Managed IT Support Services",
    description:
      "Our experienced support teams provide round-the-clock IT assistance through 24/7 monitoring, proactive maintenance, and fast-response issue resolution. Whether you are facing unexpected technical disruptions or planning a system upgrade, we are there every step of the way.",
    image: "/sector2.png", 
    imageLeft: true,
  },
  {
    title: " Information Security Management",
    description:
      "In an era of growing cyber threats, we embed security into every layer of your IT environment. Our services include implementation of security controls, real-time threat monitoring, vulnerability management, compliance support, and incident response planning to safeguard your critical assets.",
    image: "/sector3.png", 
  },
];

const ItaasSection = () => {
  return (
    <section className="bg-white text-black py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4 text-[#3E3E3E]">What we offer</h2>
        

        <div className="space-y-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                sector.imageLeft ? "md:flex-row-reverse" : ""
              } gap-8 items-center`}
            >
              <div className="md:w-[450px] w-full">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-auto  object-cover shadow-md"
                />
              </div>
              <div className="md:w-3/2 w-full">
                <h3 className="text-md font-semibold text-[#3E3E3E] mb-4">
                  {sector.title}
                </h3>
                <p className="text-[#666666] text-xs text-justify">{sector.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItaasSection;
