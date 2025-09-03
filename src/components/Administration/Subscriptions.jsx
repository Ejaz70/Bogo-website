import React from "react";

export default function Subscriptions() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-2xl mb-10">
        <p className="text-blue-400 font-medium">Flexible Pricing</p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          Choose the right fit for your business
        </h1>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button className="px-5 py-2 rounded-full bg-green-500 text-black font-medium">
          Regular
        </button>
        <button className="px-5 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700">
          Student
        </button>
        <button className="px-5 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700">
          Company
        </button>
        <button className="px-5 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700">
          Free trial
        </button>
        <button className="px-5 py-2 rounded-full bg-orange-600 text-white flex items-center gap-2">
          <span>☀️</span> Doctor
        </button>
        <button className="px-5 py-2 rounded-full bg-yellow-500 text-black font-semibold">
          Add category
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Normal Plan */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col">
          <h2 className="text-lg font-light tracking-widest mb-2">normal</h2>
          <p className="text-sm text-gray-400">Regular</p>
          <p className="text-3xl font-bold mt-4">
            $29
            <span className="text-lg font-normal text-gray-400">.99</span>
            <span className="text-sm font-normal text-gray-400"> per month</span>
          </p>

          <ul className="mt-6 space-y-2 text-gray-300">
            <li>✔ Number of individuals: One</li>
            <li>✔ Number of offers: Unlimited</li>
            <li>✔ Number of days: 30 days</li>
          </ul>

          <button className="mt-auto bg-gradient-to-r from-purple-600 to-purple-500 text-white w-full py-3 rounded-xl font-medium hover:opacity-90 transition">
            Subscription management
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col relative">
          <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
            POPULAR
          </span>
          <h2 className="text-lg font-semibold tracking-widest mb-2">ENTERPRICE</h2>
          <p className="text-sm text-gray-400">Regular</p>
          <p className="text-3xl font-bold mt-4">
            $150
            <span className="text-lg font-normal text-gray-400">.99</span>
            <span className="text-sm font-normal text-gray-400"> per 6 month</span>
          </p>

          <ul className="mt-6 space-y-2 text-gray-300">
            <li>✔ Number of individuals: One</li>
            <li>✔ Number of offers: Unlimited</li>
            <li>✔ Number of days: 6</li>
          </ul>

          <button className="mt-auto bg-gradient-to-r from-purple-600 to-purple-500 text-white w-full py-3 rounded-xl font-medium hover:opacity-90 transition">
            Subscription management
          </button>
        </div>

        {/* Excellent Plan */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col">
          <h2 className="text-lg font-light tracking-widest mb-2">excellent</h2>
          <p className="text-sm text-gray-400">Regular</p>
          <p className="text-3xl font-bold mt-4">
            $250
            <span className="text-lg font-normal text-gray-400">.99</span>
            <span className="text-sm font-normal text-gray-400"> per 12 month</span>
          </p>

          <ul className="mt-6 space-y-2 text-gray-300">
            <li>✔ Number of individuals: One</li>
            <li>✔ Number of offers: Unlimited</li>
            <li>✔ Number of days: 7 days a week</li>
          </ul>

          <button className="mt-auto bg-gradient-to-r from-purple-600 to-purple-500 text-white w-full py-3 rounded-xl font-medium hover:opacity-90 transition">
            Subscription management
          </button>
        </div>
      </div>
    </div>
  );
}
