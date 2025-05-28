// components/DigitalTransformationSection.tsx
import Image from "next/image";

const DigitalTransformationSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center md:gap-10 items-center bg-white text-white px-6 py-16">
      {/* Left Section */}
      <div className="w-1/2 md:w-[450px] w-full space-y-6">
        <h1 className="text-lg md:text-2xl font-semibold leading-tight text-[#3E3E3E]">
          Begin your <span className="text-orange-500">digital transformation</span> journey here
        </h1>
        <p className="text-[#3E3E3E] text-xs">
          Let us help you begin your digital transformation journey with this free assessment
        </p>
        <div>
          <p className="text-sm font-bold mb-2 text-black">
            1. What is your sector? <span className="text-xs font-normal text-gray-400 ml-2">Step 1 of 3</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 md:gap-16 mt-6">
            <button className="border border-gray-400 px-4 py-2 rounded-lg  transition text-black text-xs whitespace-nowrap">
              Public Sector
            </button>
            <button className="border border-gray-400 px-4 py-2  rounded-lg transition text-black text-xs whitespace-nowrap">
              Non Profit
            </button>
            <button className="border border-gray-400 px-4 py-2 rounded-lg transition text-black text-xs whitespace-nowrap">
              Private Sector
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-[400px] w-full mt-10 lg:mt-0 flex justify-center">
        <Image
          src="/digitalimg.png"
          alt="Digital Transformation"
          width={300}
          height={200}
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default DigitalTransformationSection;
