import React, { useEffect, useState } from "react";
import img1 from "/video.png";
import img2 from "/pp.png";

const testimonials = [
  {
    id: 1,
    name: "Iva Ryan",
    role: "Marketing manager at Adobe",
    avatar: img2,
    video: img1,
    tags: ["Content Creator", "Youtuber", "Growth Expert"],
    review:
      "I recently had the opportunity to use the platform, and I must say, the feature that allows you to set your own commission is a game changer!",
    earned: "$2M",
    earnedText: "EARNED IN HELENUIL",
  },
  {
    id: 2,
    name: "Marcus Lee",
    role: "Brand Specialist at Google",
    avatar: img2,
    video: img1,
    tags: ["Influencer", "Brand Builder"],
    review:
      "This platform boosted my revenue instantly. Amazing experience overall!",
    earned: "$1.4M",
    earnedText: "EARNED IN HELENUIL",
  },
  {
    id: 3,
    name: "Sophia Karim",
    role: "Content Director at Meta",
    avatar: img2,
    video: img1,
    tags: ["Coach", "Video Creator"],
    review:
      "Super smooth experience! Highly recommended for creators who want serious growth.",
    earned: "$900K",
    earnedText: "EARNED IN HELENUIL",
  },
];

const StarRating = () => (
  <div className="flex space-x-1">
    {Array(4)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 fill-yellow-400"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.32 6.91 1.01-5 4.88 1.18 6.88L12 18.23l-6.18 3.25 1.18-6.88-5-4.88 6.91-1.01L12 2z" />
        </svg>
      ))}

    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor="#facc15" />
          <stop offset="50%" stopColor="#d1d5db" />
        </linearGradient>
      </defs>
      <path
        fill="url(#half)"
        d="M12 2l3.09 6.32 6.91 1.01-5 4.88 1.18 6.88L12 18.23l-6.18 3.25 1.18-6.88-5-4.88 6.91-1.01L12 2z"
      />
    </svg>
  </div>
);

const TestimonialCard = ({ data, position }) => {
  const positionStyle = {
    left: "-translate-x-32 scale-90 opacity-60 z-10",
    center: "scale-100 opacity-100 z-20",
    right: "translate-x-32 scale-90 opacity-60 z-10",
  };

  return (
    <div
      className={`absolute bg-white w-[90%] md:w-[60%] rounded-2xl shadow-2xl p-6 transition-all duration-700 ease-in-out ${positionStyle[position]}`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Video */}
        <div className="relative w-full md:w-1/2">
          <img src={data.video} alt="" className="rounded-xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-white/80 w-14 h-14 flex justify-center items-center shadow-xl">
              <svg
                className="w-8 h-8 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <img src={data.avatar} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-bold text-lg">{data.name}</p>
                <p className="text-sm text-gray-500">{data.role}</p>
              </div>
            </div>
            <StarRating />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {data.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-4 text-gray-700">{data.review}</p>

          <div className="mt-6 border-t pt-4">
            <p className="text-4xl font-extrabold text-fuchsia-700">
              {data.earned}
            </p>
            <p className="text-xs tracking-wider text-gray-500 uppercase">
              {data.earnedText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialSection() {
  const [index, setIndex] = useState(1); // Center card initially

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // 3 seconds scroll

    return () => clearInterval(interval);
  }, []);

  const getPosition = (i) => {
    if (i === index) return "center";
    if (i === (index + 1) % 3) return "right";
    return "left";
  };

  return (
    <section
      className="min-h-screen w-full p-10 flex flex-col items-center"
      style={{
        background: "linear-gradient(#2c031c, #5b6773)",
      }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-sm bg-fuchsia-700 px-4 py-1.5 rounded-full uppercase font-semibold text-white">
          Testimonials
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4">
          Trusted by Creators <br /> & Proven by Results.
        </h1>

        <p className="text-gray-300 mt-4">
          See how others grow with Growhubs — real stories, real success.
        </p>
      </div>

      {/* Cards */}
      <div className="relative w-full flex justify-center h-[520px] overflow-visible">
        {testimonials.map((item, i) => (
          <TestimonialCard key={item.id} data={item} position={getPosition(i)} />
        ))}
      </div>
    </section>
  );
}
