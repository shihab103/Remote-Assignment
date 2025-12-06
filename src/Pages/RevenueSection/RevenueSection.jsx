export default function RevenueSection() {
  return (
    <div className="w-full bg-white text-black py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-500 tracking-wide mb-6">
          TRUSTED BY +10,000 CONSULTANTS & ORGANISATIONS
        </p>

        {/* Trusted Logos Placeholder */}
        <div className="flex flex-wrap justify-center gap-6 opacity-60 mb-16">
          <div className="h-6 w-24 bg-gray-300 rounded" />
          <div className="h-6 w-24 bg-gray-300 rounded" />
          <div className="h-6 w-24 bg-gray-300 rounded" />
          <div className="h-6 w-24 bg-gray-300 rounded" />
          <div className="h-6 w-24 bg-gray-300 rounded" />
        </div>

        {/* Main Card */}
        <div className="bg-[#f7ecff] border border-[#e3caff] rounded-3xl p-10 shadow-xl">
          <div className="text-sm bg-[#d78bff]/20 text-[#7a1dad] px-4 py-1 rounded-full inline-block mb-4 font-medium">
            DIVERSIFY REVENUE STREAM
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Maximise earnings with <br /> limitless revenue streams.
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Create and sell courses, consulting services, and communities – with Zero
            marketing cost and a built-in sales network.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Courses",
              "Communities",
              "Coaching & Consulting",
              "Merchandise",
              "Podcasts",
              "Events",
              "Brokerage",
            ].map((item) => (
              <button
                key={item}
                className={`px-5 py-2 rounded-full text-sm font-medium border ${
                  item === "Courses"
                    ? "bg-[#7a1dad] text-white border-[#7a1dad]"
                    : "border-gray-300 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Content Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Courses</h3>
              <p className="text-gray-600 mb-6">
                Turn your knowledge into structured, sellable products. Build
                evergreen, drip, academic, or challenge-based courses with
                automation, communities & engagement.
              </p>
              <button className="px-6 py-3 rounded-full bg-[#7a1dad] text-white hover:bg-[#66179a] transition">
                Learn More
              </button>
            </div>

            <div className="relative w-full h-72 bg-gray-300 rounded-3xl overflow-hidden">
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-xl">
                <p className="font-medium text-sm">Lady Desktop Mentorship MRE</p>
                <p className="text-sm text-blue-600 font-semibold">
                  Subscribe for $15.95/mo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
