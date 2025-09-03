import React, { useState } from "react";
import { FaMale, FaFemale, FaChild, FaCalendarAlt } from "react-icons/fa";

export default function OfferManagement() {
  const [selectedGender, setSelectedGender] = useState({
    men: false,
    women: true,
    children: true,
  });
  const [isLimited, setIsLimited] = useState(true);
  const [isPreBooking, setIsPreBooking] = useState(false);

  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-6">
      <div className="bg-[#1e1e1e] text-white w-full max-w-5xl rounded-2xl p-6 grid grid-cols-2 gap-6 shadow-lg">
        {/* Top Section */}
        <div className="col-span-2 flex items-center gap-4 bg-[#111] p-4 rounded-xl">
          <img
            src="https://picsum.photos/100"
            alt="preview"
            className="w-24 h-20 rounded-lg object-cover"
          />
          <input
            type="text"
            placeholder="write description"
            className="w-full p-3 rounded-lg bg-[#2a2a2a] outline-none text-gray-300"
          />
        </div>

        {/* Left Column */}
        <div className="space-y-4">
          {/* Category */}
          <div className="bg-[#2a2a2a] p-4 rounded-xl">
            <label className="block mb-2">Category</label>
            <select className="w-full p-3 rounded-lg bg-[#1e1e1e] text-gray-300">
              <option>Select Category</option>
            </select>
          </div>

          {/* Offer Name */}
          <div className="bg-[#2a2a2a] p-4 rounded-xl">
            <label className="block mb-2">Offer name</label>
            <select className="w-full p-3 rounded-lg bg-[#1e1e1e] text-gray-300">
              <option>Select Offer</option>
            </select>
          </div>

          {/* Price */}
          <div className="bg-[#2a2a2a] p-4 rounded-xl">
            <label className="block mb-2">Price</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="00.00"
                className="w-full p-3 rounded-lg bg-[#1e1e1e] text-gray-300"
              />
              <span className="text-gray-400">DA</span>
            </div>
          </div>

          {/* Alone Option */}
          <div className="bg-[#2a2a2a] p-4 rounded-xl">
            <p className="mb-3">
              If the customer is alone, will he benefit from the offer now?
            </p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="alone" className="w-4 h-4" />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="alone" className="w-4 h-4" defaultChecked />
                No
              </label>
            </div>
          </div>

          {/* Duration */}
          <div className="bg-[#2a2a2a] p-4 rounded-xl">
            <label className="block mb-2">Duration</label>
            <select className="w-full p-3 rounded-lg bg-[#1e1e1e] text-gray-300">
              <option>Month</option>
              <option>Week</option>
              <option>Day</option>
            </select>
          </div>

          {/* Pre Booking */}
          <div className="bg-[#2a2a2a] p-4 rounded-xl flex justify-between items-center">
            <span>Pre booking required</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isPreBooking}
                onChange={() => setIsPreBooking(!isPreBooking)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-checked:bg-green-500 rounded-full peer transition"></div>
            </label>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Men */}
          <div
            onClick={() =>
              setSelectedGender({ ...selectedGender, men: !selectedGender.men })
            }
            className={`p-4 flex items-center justify-between rounded-xl cursor-pointer ${
              selectedGender.men ? "bg-green-600" : "bg-[#2a2a2a]"
            }`}
          >
            <div className="flex items-center gap-2">
              <FaMale /> For men
            </div>
            {selectedGender.men && <span>✔</span>}
          </div>

          {/* Women */}
          <div
            onClick={() =>
              setSelectedGender({ ...selectedGender, women: !selectedGender.women })
            }
            className={`p-4 flex items-center justify-between rounded-xl cursor-pointer ${
              selectedGender.women ? "bg-green-600" : "bg-[#2a2a2a]"
            }`}
          >
            <div className="flex items-center gap-2">
              <FaFemale /> For women
            </div>
            {selectedGender.women && <span>✔</span>}
          </div>

          {/* Children */}
          <div
            onClick={() =>
              setSelectedGender({
                ...selectedGender,
                children: !selectedGender.children,
              })
            }
            className={`p-4 flex items-center justify-between rounded-xl cursor-pointer ${
              selectedGender.children ? "bg-green-600" : "bg-[#2a2a2a]"
            }`}
          >
            <div className="flex items-center gap-2">
              <FaChild /> For children
            </div>
            {selectedGender.children && <span>✔</span>}
          </div>

          {/* Limited Time Offer */}
          <div className="bg-[#2a2a2a] p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaCalendarAlt /> Limited-time offer
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isLimited}
                onChange={() => setIsLimited(!isLimited)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-checked:bg-green-500 rounded-full peer transition"></div>
            </label>
          </div>

          {/* Calendar */}
          <div className="bg-[#2a2a2a] p-4 rounded-xl">
            <p className="mb-3">January 2023</p>
            <div className="grid grid-cols-7 gap-2 text-center">
              {[..."SMTWTFS"].map((d, i) => (
                <span key={i} className="text-gray-400">
                  {d}
                </span>
              ))}
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <div
                  key={day}
                  className={`p-2 rounded-lg ${
                    day === 12 ? "bg-green-600" : "hover:bg-[#1e1e1e]"
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* Time Picker */}
          <div className="bg-[#2a2a2a] p-4 rounded-xl flex gap-2 justify-between">
            <select className="bg-[#1e1e1e] p-2 rounded-lg">
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i}>{String(i + 1).padStart(2, "0")}</option>
              ))}
            </select>
            <select className="bg-[#1e1e1e] p-2 rounded-lg">
              {["00", "15", "30", "45"].map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
            <select className="bg-[#1e1e1e] p-2 rounded-lg">
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
