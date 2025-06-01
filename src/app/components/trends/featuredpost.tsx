"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const featuredPost = {
  title: "Digital Transformation in Nigeria SMEs: Barriers, Breakthrough, and Blueprints.",
  category: "Public Sector",
  date: "May 5th, 2025",
  image: "/digitalimage.png", 
};

const recommendedPosts = new Array(6).fill({
  title: "Rewriting the Rules: How One NGO Gained Control Over Its Data",
  category: "Public Sector",
});

const FeaturedPostsSection = () => {
  useEffect(() => {
        AOS.init();
      }, []);
  return (
    <section className="bg-white text-black px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[40px] font-[600] font-sans text-center mb-6 text-[#3E3E3E]">Featured Posts</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left (Featured Post) */}
          <div className="lg:col-span-2" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div className="w-full h-auto overflow-hidden rounded-lg">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full object-cover rounded-lg"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-[40px] font-[600] font-sans text-[#3E3E3E]">
                {featuredPost.title}
              </h3>
              <div className="text-[23px] font-[500] font-sans text-[#3E3E3E] mt-2">
                <div>{featuredPost.category}</div>
                <div className="font-[600] text-18px font-sans">{featuredPost.date}</div>
              </div>
            </div>
          </div>

          {/* Right (Recommended Posts) */}
          <div className="border-t border-gray-700 pt-4 lg:pt-0 lg:pl-6 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <h4 className="text-[24px] font-[600] font-sans mb-4 text-[#3E3E3E] mt-2">Recommended Posts</h4>
            <ul className="space-y-4">
              {recommendedPosts.map((post, index) => (
                <li key={index} className="border-b border-black pb-2">
                  <p className="text-[19px] font-[600] font-sans text-[#3E3E3E] ">{post.title}</p>
                  <span className="text-[16px] text-[#707070] font-[600] font-sans">{post.category}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPostsSection;
