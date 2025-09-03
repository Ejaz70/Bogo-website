import { useState } from "react";
import { Search, Trash2 } from "lucide-react";

const employees = [
  {
    name: "Nur Khan",
    email: "nurkhan@gmail.com",
    role: "manager",
    page: "all page",
    report: 30,
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Kate Lau",
    email: "katelau@gmail.com",
    role: "seo manager",
    page: "seo",
    report: 20,
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Marías Fernanda Suárez",
    email: "mariafernanda@gmail.com",
    role: "message",
    page: "live chat",
    report: 0,
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Aishwarya Kumar",
    email: "ashmit@gmail.com",
    role: "problem solving",
    page: "Contact",
    report: 0,
    img: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Guan Ram",
    email: "gram@gmail.com",
    role: "add notification",
    page: "Notification",
    report: 2,
    img: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Jabari Mostafa",
    email: "mostjabri@gmail.com",
    role: "problem solving",
    page: "Report",
    report: 1,
    img: "https://i.pravatar.cc/100?img=6",
  },
  {
    name: "Taswir Sinaga",
    email: "tsw@gmail.com",
    role: "merchants manager",
    page: "merchants",
    report: 5,
    img: "https://i.pravatar.cc/100?img=7",
  },
  {
    name: "Deep Mehta",
    email: "mehtdeep@gmail.com",
    role: "customers manager",
    page: "Customers",
    report: 20,
    img: "https://i.pravatar.cc/100?img=8",
  },
];

export default function RoleManagement() {
  const [data, setData] = useState(employees);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-6">
        {/* Search */}
        <div className="relative w-72">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#1e1e1e] rounded-full pl-10 pr-4 py-2 text-sm text-gray-300 focus:outline-none"
          />
        </div>

        {/* Export Buttons */}
        <div className="flex items-center gap-4">
          <button className="uppercase text-gray-300">scv</button>
          <button className="uppercase text-gray-300">pdf</button>
          <button className="uppercase text-gray-300">excle</button>
          <button className="bg-yellow-400 text-black font-medium px-4 py-2 rounded-full">
            + New employee
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#1e1e1e] text-gray-400 uppercase text-sm">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Role</th>
              <th className="py-3 px-6">Page</th>
              <th className="py-3 px-6">Report</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((emp, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-800 hover:bg-[#1e1e1e]"
              >
                {/* Name + email */}
                <td className="py-4 px-6 flex items-center gap-3">
                  <img
                    src={emp.img}
                    alt={emp.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{emp.name}</p>
                    <p className="text-xs text-gray-400">{emp.email}</p>
                  </div>
                </td>

                {/* Role */}
                <td className="py-4 px-6">{emp.role}</td>

                {/* Page */}
                <td className="py-4 px-6">{emp.page}</td>

                {/* Report */}
                <td className="py-4 px-6 font-semibold">{String(emp.report).padStart(2, "0")}</td>

                {/* Action */}
                <td className="py-4 px-6">
                  <button className="bg-orange-500 hover:bg-orange-600 p-2 rounded-lg">
                    <Trash2 size={18} className="text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
