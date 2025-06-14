'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';

const SubscribeSection = () => {
useEffect(() => {
      AOS.init();
    }, []);

  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
  };

  return (
    <section className="w-full bg-white py-16 px-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center" >
        {/* Left: Text + Form */}
        <div data-aos="zoom-in"
              data-aos-duration="1000">
          <p className="text-[40px] md:text-[75px] font-[600] font-custom mb-6 text-[#3B73E3] mt-12 leading-[100%]">Subscribe <span className="text-[#3E3E3E]"> to our Insights</span>
          </p>
          <p className="text-[#3E3E3E] font-[900] mb-4 text-[23px] font-sans md:text-justify">
            Stay ahead with the latest thinking in AI, cybersecurity, and digital transformation. Simply sign up with your email address and confirm your subscription via the email we will send you. You will start receiving curated insights and updates directly from the experts at Techspecialist Consulting Limited.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email address here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <div className="flex items-start gap-2">
              <input
                id="consent"
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="consent" className="text-[16px] text-gray-700 text-justify font-[400] font-custom leading-[100%]">
                I would like to receive marketing communications regarding Techspecialist Consulting Limited service offerings. I understand that I can unsubscribe at any time.
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#3B73E3] text-white text-[23px] text-sm px-12 py-4 rounded-md transition duration-300 font-[500] font-custom"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Right: Image */}
        <div className="hidden md:flex justify-center" data-aos="zoom-in"
              data-aos-duration="1000">
          <Image
            src="/messageimg.png"
            alt="Message Illustration"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>

        <Link href="/contact">
        <div className="fixed bottom-4 right-4 sm:bottom-36 sm:right-20 w-10 h-10 bg-orange-600 rounded-full flex justify-center items-center z-50">
          <Image
            src="/Vector.png"
            alt="Orange Icon"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      </Link>
    </section>
  );
};

export default SubscribeSection;
