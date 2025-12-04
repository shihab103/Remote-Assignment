import img1 from "../../assets/EssentialToolsImage/1.png";
import img2 from "../../assets/EssentialToolsImage/2.png";
import img3 from "../../assets/EssentialToolsImage/3.png";
import img4 from "../../assets/EssentialToolsImage/4.png";
import img5 from "../../assets/EssentialToolsImage/5.png";
import img6 from "../../assets/EssentialToolsImage/6.png";
import img7 from "../../assets/EssentialToolsImage/7.png";
import img8 from "../../assets/EssentialToolsImage/8.png";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function EssentialTools() {
  const cards = [
    {
      id: 1,
      title: "Payments",
      description:
        "Responsibly sourced and eco-friendly fabrics for a better tomorrow.",
      imageUrl: img1,
    },
    {
      id: 2,
      title: "Analytics",
      description: "Understand your growth with smart, built-in analytics.",
      imageUrl: img2,
    },
    {
      id: 3,
      title: "Newsletters",
      description: "Build your audience with engaging, branded newsletter.",
      imageUrl: img3,
    },
    {
      id: 4,
      title: "Pages",
      description:
        "Showcase your expertise with a personal profile that sells for you.",
      imageUrl: img4,
    },
    {
      id: 5,
      title: "Contact",
      description:
        "Organize your contacts and turn them into your most valuable asset.",
      imageUrl: img5,
    },
    {
      id: 6,
      title: "Emails",
      description:
        "Showcase your expertise with a personal profile that sells for you.",
      imageUrl: img6,
    },
    {
      id: 7,
      title: "Co-sell network",
      description:
        "Collaborate with others to sell more without ad spend or extra effort.",
      imageUrl: img7,
    },
    {
      id: 8,
      title: "Enterprise plan",
      description:
        "Full white-label platform hosted on a dedicated, auto-scaling server. Includes branding freedom, private content protection, and 24/7 service availability.",
      imageUrl: img8,
    },
  ];

  return (
    <section className="w-full bg-[#1e1e1e] ">
      <div className="max-w-[1440px] bg-[#f8f1e3] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-10">
          <p>Essential Tools</p>
          <h1 className="font-bold text-2xl">Essential Tools Zero Distractions</h1>
          <p>
            Create diverse products on the platform and leverage our powerful
            tools to drive sales within and beyond GrowHubs.
          </p>
        </div>
        <div className="grid grid-cols-1 pb-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const isLastCard = card.id === 8;

            return (
              <div
                key={card.id}
                className={`
                  p-8 rounded-2xl shadow-xl h-full flex flex-col justify-between
                  ${
                    isLastCard
                      ? "md:col-span-2 lg:col-span-2 bg-gradient-to-r from-[#4d5d69] to-[#97686a] text-white"
                      : "bg-white"
                  }
                `}
              >
                <div>
                  <div className="flex justify-between items-center">
                    <h2
                      className={`text-2xl font-extrabold mb-3 ${
                        isLastCard
                          ? "bg-gradient-to-r from-[#ffd900] via-white/60 to-[#ffd900] bg-clip-text text-transparent"
                          : ""
                      }`}
                    >
                      {card.title}
                    </h2>

                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-12 h-12 object-contain mb-4"
                    />
                  </div>

                  <p
                    className={`text-base opacity-80 mb-6 ${
                      isLastCard ? "opacity-90" : ""
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                <a
                  href="#"
                  className={`flex items-center font-semibold ${
                    isLastCard
                      ? "text-yellow-300 hover:text-yellow-400"
                      : "text-[#cd9d41] hover:text-purple-700"
                  }`}
                >
                  Learn more
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
