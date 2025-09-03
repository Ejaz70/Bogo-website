import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

export default function Product() {
  // Chart data
  const pieData = [
    { name: "Accepted", value: 1500, color: "#22c55e" },
    { name: "Pending", value: 10, color: "#f97316" },
    { name: "Banned", value: 90, color: "#ef4444" },
  ];

  const donutData = [
    { name: "restaurants", value: 25, color: "#f97316" },
    { name: "hotels", value: 30, color: "#22c55e" },
    { name: "beauty", value: 20, color: "#3b82f6" },
    { name: "sports", value: 15, color: "#a855f7" },
    { name: "entertainment", value: 10, color: "#eab308" },
  ];

  const tableData = [
    {
      name: "Hotel Ibis",
      category: "Hotels",
      price: "2000 $",
      tags: ["travel", "hotels"],
      status: "verified",
      date: "12/7/2023 18:05:06 PM",
    },
    {
      name: "Foodlink",
      category: "restaurants",
      price: "2000 $",
      tags: ["food"],
      status: "Banned",
      date: "12/7/2023 18:05:06 PM",
    },
    {
      name: "Ice french",
      category: "hotels",
      price: "2000 $",
      tags: ["travel"],
      status: "Not verified",
      date: "12/7/2023 18:05:06 PM",
    },
    {
      name: "Pizza mega",
      category: "hotels",
      price: "2000 $",
      tags: ["food", "travel"],
      status: "verified",
      date: "12/7/2023 18:05:06 PM",
    },
    {
      name: "Burger King",
      category: "COUPON",
      price: "2000 $",
      tags: ["food"],
      status: "verified",
      date: "12/7/2023 18:05:06 PM",
    },
    {
      name: "Boo plan",
      category: "hotels",
      price: "2000 $",
      tags: ["travel"],
      status: "Not verified",
      date: "12/7/2023 18:05:06 PM",
    },
    {
      name: "Piscine aquao",
      category: "entertainment",
      price: "2000 $",
      tags: ["fun"],
      status: "Not verified",
      date: "12/7/2023 18:05:06 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Top Stats Section */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {/* Accepted */}
        <div className="bg-[#1e1e1e] p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-green-500 font-semibold text-xl">1500</p>
            <p>Accepted Product</p>
          </div>
          <span className="text-3xl">✅</span>
        </div>

        {/* Pending */}
        <div className="bg-[#1e1e1e] p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-orange-500 font-semibold text-xl">10</p>
            <p>Pending Product</p>
          </div>
          <span className="text-3xl">⏳</span>
        </div>

        {/* Verified Pie */}
        <div className="bg-[#1e1e1e] p-4 rounded-xl col-span-1">
          <h3 className="mb-3">Verified product</h3>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-center mt-2">1500 total</p>
        </div>

        {/* Donut chart */}
        <div className="bg-[#1e1e1e] p-4 rounded-xl">
          <h3 className="mb-3">Spent Chart</h3>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={donutData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                paddingAngle={5}
                dataKey="value"
              >
                {donutData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Statistics (sliders) */}
      <div className="bg-[#1e1e1e] p-4 rounded-xl mb-6">
        <h3 className="mb-4">Statistic</h3>
        {["beauty", "sport", "hotels", "coupons"].map((stat, i) => (
          <div key={i} className="mb-4">
            <label className="block mb-1">{stat}</label>
            <input
              type="range"
              min="0"
              max="500"
              className="w-full accent-green-500"
            />
          </div>
        ))}
      </div>

      {/* Search & New Offer */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#1e1e1e] px-4 py-2 rounded-lg w-1/3 outline-none"
        />
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold">
          + New Offer
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#1e1e1e] p-4 rounded-xl">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-3">Logo</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Tags</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-700 hover:bg-[#2a2a2a]"
              >
                <td className="p-3">
                  <div className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-lg">
                    <span className="text-white font-bold">L</span>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td className="flex gap-2">
                  {item.tags.map((t, i) => (
                    <span
                      key={i}
                      className="bg-purple-600 text-xs px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      item.status === "verified"
                        ? "bg-green-600"
                        : item.status === "Banned"
                        ? "bg-red-600"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>{item.date}</td>
                <td className="flex gap-2">
                  <button className="bg-green-500 px-2 py-1 rounded">✏️</button>
                  <button className="bg-red-500 px-2 py-1 rounded">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
