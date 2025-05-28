'use client';

import Image from 'next/image';
import { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
  };

  return (
    <section className="w-full px-4 md:px-6 py-6 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text + Form */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="text-[#3B73E3]">Subscribe</span> to our<br />Insights
          </h2>
          <p className="text-gray-800 font-semibold mb-8 text-justify">
            Stay ahead with the latest thinking in AI, cybersecurity, and digital transformation. Simply sign up with your email address and confirm your subscription via the email we’ll send you. You’ll start receiving curated insights and updates directly from the experts at Techspecialist Consulting Limited.
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
              <label htmlFor="consent" className="text-sm text-gray-700 text-justify">
                I would like to receive marketing communications regarding Techspecialist Consulting Limited service offerings. I understand that I can unsubscribe at any time.
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#3B73E3] text-white font-sm text-sm px-8 py-3 rounded-md transition duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Right: Image */}
        <div className="hidden md:flex justify-center">
          <Image
            src="/messageimg.png"
            alt="Message Illustration"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-8 h-8 bg-orange-600 rounded-full flex justify-center ">
              <Image
                src="/Vector.png"
                alt="Orange Icon"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
    </section>
  );
};

export default SubscribeSection;
