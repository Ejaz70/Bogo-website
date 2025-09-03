import React, { useState } from "react";
import { Check, X } from "lucide-react";

export default function Orders() {
  const [selectedGender, setSelectedGender] = useState(["women", "children"]);

  const toggleGender = (gender) => {
    if (selectedGender.includes(gender)) {
      setSelectedGender(selectedGender.filter((g) => g !== gender));
    } else {
      setSelectedGender([...selectedGender, gender]);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      {/* Top Action Buttons */}
      <div className="flex justify-end w-full max-w-5xl gap-4 mb-6">
        <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition">
          Reject
        </button>
        <button className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition">
          Accept
        </button>
      </div>

      {/* Offer Card */}
      <div className="bg-neutral-900 rounded-2xl p-6 w-full max-w-5xl shadow-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <img
            src="https://via.placeholder.com/100"
            alt="Offer"
            className="rounded-xl w-24 h-24 object-cover"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">Offer Name</h2>
            <p className="text-gray-400">Category Name</p>
            <p className="mt-2 text-gray-300">
              A modern haircut that makes you look great with many features
              inside the store
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Offer Name */}
          <div>
            <label className="block text-gray-400 mb-2">Offer Name</label>
            <input
              type="text"
              placeholder="Offer name"
              className="w-full bg-neutral-800 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-400 mb-2">Category</label>
            <input
              type="text"
              value="Hair Cut"
              className="w-full bg-neutral-800 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-400 mb-2">Price</label>
            <div className="flex items-center bg-neutral-800 rounded-lg p-3">
              <input
                type="number"
                defaultValue="10900"
                className="bg-transparent w-full text-white focus:outline-none"
              />
              <span className="ml-2 text-gray-400">DA</span>
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-gray-400 mb-2">Duration</label>
            <select className="w-full bg-neutral-800 rounded-lg p-3 text-white focus:outline-none">
              <option>Bring a Buddy, Visit Twice</option>
            </select>
          </div>

          {/* Pre-booking required */}
          <div>
            <label className="block text-gray-400 mb-2">
              Pre-booking required
            </label>
            <select className="w-full bg-neutral-800 rounded-lg p-3 text-white focus:outline-none">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* Another Pre-booking */}
          <div>
            <label className="block text-gray-400 mb-2">
              Pre-booking required
            </label>
            <select className="w-full bg-neutral-800 rounded-lg p-3 text-white focus:outline-none">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        {/* Gender Selection */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8">
          {[
            { id: "men", label: "For men", img: "https://i.pravatar.cc/100?img=5" },
            { id: "women", label: "For women", img: "https://i.pravatar.cc/100?img=2" },
            { id: "children", label: "For children", img: "https://i.pravatar.cc/100?img=1" },
          ].map((gender) => (
            <div
              key={gender.id}
              className={`flex flex-col items-center cursor-pointer p-4 rounded-2xl ${
                selectedGender.includes(gender.id)
                  ? "bg-neutral-800 ring-2 ring-green-500"
                  : "bg-neutral-800"
              }`}
              onClick={() => toggleGender(gender.id)}
            >
              <img
                src={gender.img}
                alt={gender.label}
                className="w-16 h-16 rounded-full"
              />
              <p className="mt-2 text-gray-300">{gender.label}</p>
              {selectedGender.includes(gender.id) && (
                <Check className="text-green-400 mt-1" size={20} />
              )}
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-green-500 text-black px-10 py-3 rounded-full font-semibold hover:bg-green-400 transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
