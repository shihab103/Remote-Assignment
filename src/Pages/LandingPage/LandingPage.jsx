import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-[#1b0026] text-white flex flex-col items-center overflow-x-hidden">
      {/* Hero Section */}
      <div className="pt-20 pb-32 text-center max-w-3xl px-4">
        <div className="text-sm tracking-widest bg-white/10 px-4 py-1 rounded-full inline-block mb-4">
          BUILT FOR YOU
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Built for Creators.<br /> Powered for Profit
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Create and sell courses, consulting services, and communities – with Zero
          marketing cost and a built‑in sales network.
        </p>

        {/* Email + Button */}
        <div className="flex flex-col md:flex-row justify-center gap-3">
          <input
            className="px-4 py-3 rounded-full w-72 text-black"
            placeholder="Enter Your Email Here"
          />
          <button className="px-6 py-3 rounded-full bg-[#b34bff] hover:bg-[#9d35eb] transition font-semibold">
            Start for Free
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-2">
          By proceeding you agree to our Platform Terms & Privacy Notice
        </p>
      </div>

      {/* Stats Section */}
      <div className="w-full max-w-5xl bg-white/10 border border-white/20 rounded-2xl p-10 mb-20 backdrop-blur-xl">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-medium">Sell from day one – even with zero audience</h2>
          <button className="px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition text-sm">
            Open calculator
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold">21,500+</p>
            <p className="text-gray-300 mt-1 text-sm">Co‑sellers in network</p>
          </div>

          <div>
            <p className="text-3xl font-bold">86</p>
            <p className="text-gray-300 mt-1 text-sm">Expected buyers / month</p>
          </div>

          <div>
            <p className="text-3xl font-bold">US$774</p>
            <p className="text-gray-300 mt-1 text-sm">Est. MRR at US$9/mo</p>
          </div>

          <div>
            <p className="text-3xl font-bold">US$300</p>
            <p className="text-gray-300 mt-1 text-sm">Earn w/o a product</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl text-center pb-20 px-4">
        <p className="text-gray-300 text-sm bg-white/10 p-4 rounded-xl">
          Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and convert
          clients inside the platform so you can sell from day one.
        </p>
      </div>
    </div>
  );
}
