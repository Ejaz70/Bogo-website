// import { useState } from "react";
// import { Plus, Camera } from "lucide-react";

// export default function Customers() {
//   const [profileImg, setProfileImg] = useState(
//     "https://i.pravatar.cc/150?img=10"
//   );

//   return (
//     <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
//       {/* Profile Upload */}
//       <div className="flex flex-col items-center mb-8">
//         <div className="relative">
//           <img
//             src={profileImg}
//             alt="Profile"
//             className="w-28 h-28 rounded-full object-cover border-2 border-gray-600"
//           />
//           <button className="absolute bottom-0 right-0 bg-green-500 p-2 rounded-full">
//             <Camera size={16} className="text-white" />
//           </button>
//         </div>
//         <p className="mt-2 text-sm text-gray-400">Photo Profile</p>
//       </div>

//       {/* Form */}
//       <form className="w-full max-w-3xl space-y-6">
//         <h2 className="text-lg font-medium">employee</h2>

//         {/* Row 1 */}
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="text"
//             placeholder="Nickname"
//             className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
//           />
//           <input
//             type="text"
//             placeholder="Gender"
//             className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
//           />
//         </div>

//         {/* Row 2 */}
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="text"
//             placeholder="First Name"
//             className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
//           />
//         </div>

//         {/* Row 3 */}
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="email"
//             placeholder="Email"
//             className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
//           />
//         </div>

//         {/* Row 4 - Biographical */}
//         <textarea
//           placeholder="Biographical"
//           rows="3"
//           className="w-full bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
//         ></textarea>

//         {/* Row 5 */}
//         <div className="grid grid-cols-3 gap-4">
//           <input
//             type="text"
//             placeholder="page view"
//             className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
//           />
//           <input
//             type="text"
//             placeholder="enclose"
//             className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
//           />
//           <input
//             type="text"
//             placeholder="Role"
//             className="bg-black border border-gray-700 rounded-2xl px-4 py-3 focus:outline-none"
//           />
//         </div>

//         {/* Add new page */}
//         <div>
//           <p className="mb-2">Add new page</p>
//           <button
//             type="button"
//             className="bg-green-600 p-2 rounded-full flex items-center justify-center"
//           >
//             <Plus size={18} className="text-white" />
//           </button>
//         </div>

//         {/* Submit */}
//         <div className="flex justify-end">
//           <button
//             type="submit"
//             className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full text-black font-medium"
//           >
//             add employee
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


import { useState } from "react";
import {
  Plus,
  Ban,
  Trash2,
  Edit,
  Gift,
  User,
  Mail,
  Phone,
} from "lucide-react";

export default function Customers() {
  const friends = Array(6).fill({
    name: "sara kiki",
    img: "https://i.pravatar.cc/60?img=11",
  });

  const logs = [
    {
      hotel: "Hotel Ibis",
      offer: "offer name",
      date: "22/08/2023",
      xp: "2000 XP",
    },
    {
      hotel: "Hotel Ibis",
      offer: "offer name",
      date: "22/09/2023",
      xp: "1000 XP",
    },
    {
      hotel: "Hotel Ibis",
      offer: "offer name",
      date: "15/10/2023",
      xp: "500 XP",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-72 bg-[#1c1c1c] p-6 flex flex-col items-center">
        <img
          src="https://i.pravatar.cc/120?img=5"
          alt="Customer"
          className="w-28 h-28 rounded-full mb-3"
        />
        <h2 className="text-lg font-medium">Customer name</h2>
        <p className="text-sm text-gray-400">id: 567485467</p>

        {/* Status */}
        <div className="bg-orange-500 text-white px-4 py-2 rounded-xl my-4 text-sm">
          Banned person <br /> 30 days
        </div>

        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg mb-6">
          Action
        </button>

        {/* Info List */}
        <div className="w-full text-sm space-y-3">
          <p>🎂 19-12-1989</p>
          <p>👤 miticoo</p>
          <p>✉️ email@gmail.com</p>
          <p>📞 0984454544</p>
          <p>Joined on <br /> 12/10/2023 15:08:05 PM</p>
          <p>Last login <br /> 12/10/2023 15:08:05 PM</p>
          <p>Subscription number: 05</p>
          <p>The gift sent: 02</p>
          <p>The gift received: 01</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button className="bg-gray-700 px-4 py-2 rounded-md">Send</button>
          <button className="bg-gray-700 px-4 py-2 rounded-md">Hatch</button>
          <button className="bg-gray-700 px-4 py-2 rounded-md">Ticket</button>
          <button className="bg-gray-700 px-4 py-2 rounded-md">XP point</button>
          <button className="bg-gray-700 px-4 py-2 rounded-md">Item</button>
          <button className="bg-red-600 px-4 py-2 rounded-md">Ban</button>
          <button className="bg-gray-700 px-4 py-2 rounded-md flex items-center gap-1">
            <Trash2 size={16} /> Delete
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded-md flex items-center gap-1">
            <Edit size={16} /> Modify
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Consumption */}
          <div className="bg-[#1e1e1e] rounded-xl p-4">
            <h3 className="text-sm text-gray-400">Consumption</h3>
            <div className="mt-2">
              <p className="text-lg">30</p>
              <p className="text-gray-500 text-xs">Restaurant / Hotel</p>
            </div>
          </div>

          {/* Subscription */}
          <div className="bg-[#1e1e1e] rounded-xl p-4">
            <h3 className="text-sm text-gray-400">Subscription</h3>
            <p className="text-lg mt-2">16 D - 3 H - 53 M</p>
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-md text-xs">
              premium
            </span>
          </div>

          {/* XP Point */}
          <div className="bg-[#1e1e1e] rounded-xl p-4">
            <h3 className="text-sm text-gray-400">XP point</h3>
            <p className="text-lg mt-2">2000 XP</p>
            <span className="bg-green-600 px-2 py-1 rounded-md text-xs">
              earned offers
            </span>
            <p className="text-xs text-gray-400">Hotel name</p>
          </div>
        </div>

        {/* Policy & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#1e1e1e] rounded-xl p-4 text-red-400">
            🚨 Violating the policy requires a ban
            <p className="mt-2">02</p>
          </div>
          <div className="bg-[#1e1e1e] rounded-xl p-4 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-green-600 p-3 rounded-lg">Saving cost 100</div>
            <div className="bg-gray-700 p-3 rounded-lg">Order 50</div>
            <div className="bg-gray-700 p-3 rounded-lg">Offers 20</div>
            <div className="bg-gray-700 p-3 rounded-lg">Group order 20</div>
          </div>
        </div>

        {/* Friends List */}
        <div className="bg-[#1e1e1e] rounded-xl p-4 mb-6">
          <h3 className="text-sm text-gray-400 mb-3">Friends</h3>
          <div className="flex gap-3 overflow-x-auto">
            {friends.map((f, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-xs text-gray-400"
              >
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-12 h-12 rounded-full"
                />
                <p>{f.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#1e1e1e] rounded-xl p-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-gray-400">
              <tr>
                <th className="py-2 px-4">Hotel</th>
                <th className="py-2 px-4">Offer</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">XP</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, i) => (
                <tr key={i} className="border-t border-gray-700">
                  <td className="py-2 px-4">{log.hotel}</td>
                  <td className="py-2 px-4">{log.offer}</td>
                  <td className="py-2 px-4">{log.date}</td>
                  <td className="py-2 px-4">{log.xp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
