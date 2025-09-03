import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Trash2 } from "lucide-react";

const Dashboard = () => {
  const verifiedAccountData = [
    { name: 'Verified', value: 70, color: '#8b5cf6' },
    { name: 'Banned', value: 20, color: '#10b981' },
    { name: 'Not verified', value: 10, color: '#ef4444' }
  ];

  const spentChartData = [
    { name: 'Restaurants', value: 30, color: '#8b5cf6' },
    { name: 'Hotels', value: 20, color: '#06b6d4' },
    { name: 'Beauty', value: 15, color: '#f59e0b' },
    { name: 'Entertainment', value: 15, color: '#10b981' },
    { name: 'Sport', value: 10, color: '#ef4444' },
    { name: 'Coupon', value: 10, color: '#f97316' }
  ];

  const tableData = [
    { 
      name: 'Hotel ibis', 
      email: 'hotelibis@gmail.com',
      number: '+92 300 1234567',
      category: 'hotels', 
      type: 'hotel', 
      offers: '100', 
      bookings: '25', 
      loyalty: '25', 
      views: '32k',
      likes: '300',
      profits: '2000 $',
      joinedOn: '12/7/2023 1:50:05 PM',
      status: 'verified'
    },
    { 
      name: 'foodkite', 
      email: 'foodkite@gmail.com',
      number: '+92 300 9876543',
      category: 'restaurants', 
      type: 'fast food', 
      offers: '00', 
      bookings: '00', 
      loyalty: '00', 
      views: '32k',
      likes: '300',
      profits: '2000 $',
      joinedOn: '12/7/2023 1:50:05 PM',
      status: 'Banned'
    },
    { 
      name: 'ice french', 
      email: 'icefrench@gmail.com',
      number: '+92 333 2223344',
      category: 'restaurants', 
      type: 'restaurant', 
      offers: '350', 
      bookings: '33', 
      loyalty: '33', 
      views: '32k',
      likes: '100',
      profits: '2000 $',
      joinedOn: '12/7/2023 1:50:05 PM',
      status: 'Not verified'
    },
    { 
      name: 'pizza megia', 
      email: 'pizzamegia@gmail.com',
      number: '+92 301 4567890',
      category: 'restaurants', 
      type: 'pizza', 
      offers: '100', 
      bookings: '100', 
      loyalty: '100', 
      views: '32k',
      likes: '00',
      profits: '2000 $',
      joinedOn: '12/7/2023 1:50:05 PM',
      status: 'verified'
    },
    { 
      name: 'burger king', 
      email: 'burgerking@gmail.com',
      number: '+92 321 1112233',
      category: 'restaurants', 
      type: 'fast food', 
      offers: '5', 
      bookings: '40', 
      loyalty: '50', 
      views: '32k',
      likes: '2k',
      profits: '2000 $',
      joinedOn: '12/7/2023 1:50:05 PM',
      status: 'verified'
    },
    { 
      name: 'koo pint', 
      email: 'koopint@gmail.com',
      number: '+92 302 9876543',
      category: 'entertainment', 
      type: 'Family Games', 
      offers: '25', 
      bookings: '2', 
      loyalty: '2', 
      views: '32k',
      likes: '800',
      profits: '2000 $',
      joinedOn: '12/7/2023 1:50:05 PM',
      status: 'not verified'
    }
  ];

  const stats = [
    { label: 'entertainment', value: '39', color: 'bg-purple-500' },
    { label: 'spa', value: '100', color: 'bg-cyan-500' },
    { label: 'beauty', value: '100', color: 'bg-yellow-500' },
    { label: 'sport', value: '300', color: 'bg-green-500' },
    { label: 'beauty', value: '200', color: 'bg-red-500' },
    { label: 'hotels', value: '300', color: 'bg-orange-500' },
    { label: 'coupon', value: '400', color: 'bg-pink-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Top Cards Grid */}
      {/* ... (same as before, unchanged) ... */}

      {/* Search and Filters */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pl-10 w-64"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">🔍</div>
          </div>
        </div>
        <div className="flex space-x-3">
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2">
            <option>category</option>
          </select>
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2">
            <option>Status</option>
          </select>
          <button className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2">SCV</button>
          <button className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2">pdf</button>
          <button className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2">excle</button>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg">
            New merchants
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300">Company NAME</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300">category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300">type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300">Offers</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300">BOOKING</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300">Loyalty</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300">Views</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300">like</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300">Profits</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300">Joined On</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">
                          {row.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        {/* Company name white */}
                        <div className="font-medium text-white">{row.name}</div>
                        {/* Email and number gray */}
                        <div className="text-xs text-gray-400">{row.email}</div>
                        <div className="text-xs text-gray-400">{row.number}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-300">{row.category}</td>
                  <td className="px-4 py-4 text-sm text-gray-300">{row.type}</td>
                  <td className="px-4 py-4 text-sm text-gray-300">{row.offers}</td>
                  <td className="px-4 py-4 text-sm text-gray-300">{row.bookings}</td>
                  <td className="px-4 py-4 text-sm text-gray-300">{row.loyalty}</td>
                  <td className="px-4 py-4">
                    <span className="px-2 py-1 bg-purple-600 text-xs rounded text-white">{row.views}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="px-2 py-1 bg-orange-500 text-xs rounded text-white">{row.likes}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div>
                      <div className="text-sm text-white font-medium">{row.profits}</div>
                      <div className="text-xs text-gray-500">8 cards</div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-xs text-gray-400">{row.joinedOn}</td>
                  <td className="px-4 py-4">
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      row.status === 'verified' 
                        ? 'bg-green-100 text-green-800' 
                        : row.status === 'Banned'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500">
                        <span className="text-white text-xs">👁</span>
                      </button>
                      <button className="bg-orange-500 hover:bg-orange-600 p-2 rounded-lg">
                        <Trash2 size={14} className="text-white" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
