import React from "react";

const LiveChat = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-4 text-white font-sans">
      {/* Subscription and Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        {/* Subscription */}
        <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg p-4 md:w-auto w-full">
          <div>
            <p className="text-lg font-semibold">Subscription</p>
            <p className="text-sm text-gray-400">6 months | till 5th sep 2023</p>
          </div>
          <div className="ml-auto mt-2 md:mt-0 bg-gray-700 rounded-md px-4 py-2 text-lg font-mono tracking-wide">
            16 D : 3 H : 33 M
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-2 rounded-full font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
            Ban
          </button>
          <button className="bg-red-700 hover:bg-red-800 transition px-6 py-2 rounded-full font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            Delete
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 transition px-6 py-2 rounded-full font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round"d="M11 17h2m-1-6v6m-7 4v-2a2 2 0 012-2h2a2 2 0 012 2v2m7-4v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2"/></svg>
            Modify
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
        {/* Loyalty */}
        <div className="bg-yellow-400 rounded-lg p-4 flex flex-col justify-between min-w-[120px]">
          <div>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <span className="font-semibold text-white">Loyalty</span>
            </div>
            <p className="text-3xl font-bold mt-2 text-white">150</p>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-blue-500 rounded-lg p-4 flex flex-col justify-between min-w-[120px]">
          <div>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 8h2a2 2 0 012 2v4a2 2 0 01-2 2h-2m-6 0h6m-6-4h6M15 12h-2a2 2 0 00-2 2v2"/></svg>
              <span className="font-semibold text-white">Reviews</span>
            </div>
            <p className="text-3xl font-bold mt-2 text-white">01</p>
          </div>
        </div>

        {/* Reservation */}
        <div className="bg-purple-700 rounded-lg p-4 flex flex-col justify-between min-w-[120px]">
          <div>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3v18l7-3 7 3V3H5z"/></svg>
              <span className="font-semibold text-white">Reservation</span>
            </div>
            <p className="text-3xl font-bold mt-2 text-white">20</p>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-orange-400 rounded-lg p-4 flex flex-col justify-between min-w-[120px]">
          <div>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v10H4z"/></svg>
              <span className="font-semibold text-white">Total orders</span>
            </div>
            <p className="text-3xl font-bold mt-2 text-white">150</p>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-green-400 rounded-lg p-4 flex flex-col justify-between min-w-[120px]">
          <div>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
              <span className="font-semibold text-white">Revenue</span>
            </div>
            <p className="text-3xl font-bold mt-2 text-white">5600 DA</p>
          </div>
          <p className="text-white text-sm mt-1">+ 10%</p>
          <div className="w-full mt-2 h-8">
            {/* Graph line can be added here later if needed */}
            <svg className="w-full h-full" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="0,10 20,4 40,8 60,2 80,10 100,6" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Total Views */}
      <div className="bg-gray-800 rounded-lg p-6 mb-6 flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg">Total views</h3>
          <p className="text-4xl font-bold">12,75K</p>
        </div>
        <div className="mt-4 md:mt-0 p-2 rounded bg-gray-700 w-28 text-center font-medium text-blue-400">45%</div>
        <p className="mt-2 md:mt-0 text-gray-400 font-semibold md:ml-6">
          Growth in reviews on this year
        </p>
      </div>

      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Panel */}
        <div className="flex flex-col gap-6 lg:w-1/3 bg-gray-800 rounded-lg p-5">
          {/* Status */}
          <div>
            <span className="bg-green-600 text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide">Active</span>
          </div>
          {/* Logo */}
          <div className="flex flex-col items-center bg-gray-700 rounded-lg p-6">
            <div className="text-5xl font-extrabold text-indigo-400 tracking-widest">LO</div>
            <div className="text-5xl font-extrabold text-indigo-300 tracking-widest">GO</div>
            <p className="text-center mt-1 text-gray-400 italic">Store name</p>
            <p className="text-center text-gray-600 text-sm">company</p>
          </div>

          {/* QR Code Box */}
          <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=4557"
              alt="QR code"
              className="w-24 h-24 mb-3"
            />
            <div className="bg-gray-900 rounded-md px-4 py-2 w-full text-center font-semibold text-lg tracking-widest">
              code 4557
            </div>
          </div>

          {/* Info Section */}
          <div className="text-gray-300 text-sm space-y-1">
            <p><strong>info</strong></p>
            <ul className="list-disc ml-5">
              <li>azri abdessar</li>
              <li>bibi hotel</li>
              <li>azri@gmail.com</li>
              <li>05555555555</li>
            </ul>
          </div>

          {/* Average Rating */}
          <div>
            <p className="text-gray-300 font-semibold">Average Rating</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-yellow-400 font-bold">4.0</span>
              <div className="flex text-yellow-400">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${i < 4 ? "fill-current" : "fill-current text-yellow-300"}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.572-.955L10 0l2.938 5.955 6.572.955-4.755 4.635 1.123 6.545z" />
                    </svg>
                  ))}
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-1 italic">Average rating on this year</p>
          </div>

          {/* Information */}
          <div className="text-gray-400 text-sm leading-relaxed">
            <p><strong>Information</strong></p>
            <p>
              Black Panther (attached forever will Tell about the Wonderful places above and beyond the Nur Oaza lift in the middle of the sad atmosphere they felt.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:w-2/3 bg-gray-800 rounded-lg p-6 flex flex-col gap-6">
          {/* NFC Reader and Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3 bg-gray-700 rounded-full px-4 py-2">
              <label htmlFor="nfc-toggle" className="text-sm font-semibold select-none">NFC Reader</label>
              <input
                type="checkbox"
                id="nfc-toggle"
                className="toggle toggle-primary cursor-pointer h-6 w-12 rounded-full bg-gray-500 checked:bg-green-400 relative"
                style={{ WebkitAppearance: "none" }}
              />
            </div>

            <div className="flex gap-3 flex-wrap justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-full font-semibold transition">
                Test NFC
              </button>
              <button className="bg-orange-600 hover:bg-orange-700 px-5 py-2 rounded-full font-semibold transition">
                Disable NFC
              </button>
            </div>
          </div>

          {/* QR Code Display */}
          <div className="bg-gray-900 rounded-lg p-6 flex flex-col items-center justify-center">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=4557"
              alt="Large QR Code"
              className="w-48 h-48 sm:w-56 sm:h-56"
            />
          </div>

          {/* Print and Generate Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-full font-semibold transition">Print QR</button>
            <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-full font-semibold transition">Generate New</button>
          </div>

          {/* Code Input & Edit */}
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <input
              type="text"
              readOnly
              value="4557"
              className="bg-gray-700 rounded-full px-6 py-3 text-center font-bold text-xl tracking-widest w-48 sm:w-auto"
            />
            <button className="bg-orange-600 hover:bg-orange-700 p-3 rounded-full font-semibold transition" aria-label="Edit code">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M16.5 4.5a2.121 2.121 0 113 3L7 20H4v-3L16.5 4.5z" />
              </svg>
            </button>
          </div>

          {/* NFC and Download buttons */}
          <div className="flex justify-center gap-4 flex-wrap mt-4">
            <button className="bg-purple-600 hover:bg-purple-700 px-7 py-3 rounded-full font-semibold transition">Download QR</button>
            <button className="bg-yellow-500 hover:bg-yellow-600 px-7 py-3 rounded-full font-semibold transition">Write NFC</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
