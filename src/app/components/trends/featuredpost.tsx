"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const featuredPost = {
  title: "Young Nigerians will drive AI for economic growth",
  category: "Public Sector",
  date: "May 5th, 2025",
  image: "/aiimg.png", 
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
    <section className="bg-white text-black px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-bold text-center mb-6 text-[#3E3E3E]">Featured Posts</h2>

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
              <h3 className="text-2xl font-bold text-[#3E3E3E]">
                {featuredPost.title}
              </h3>
              <div className="text-xs text-[#3E3E3E] mt-2">
                <div>{featuredPost.category}</div>
                <div className="font-semibold">{featuredPost.date}</div>
              </div>
            </div>
          </div>

          {/* Right (Recommended Posts) */}
          <div className="border-t border-gray-700 pt-4 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-6 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <h4 className="text-lg font-semibold mb-4">Recommended Posts</h4>
            <ul className="space-y-4">
              {recommendedPosts.map((post, index) => (
                <li key={index} className="border-b border-black pb-2">
                  <p className="text-md font-medium text-black">{post.title}</p>
                  <span className="text-sm text-gray-800">{post.category}</span>
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
