import React, { useMemo, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Search, Filter, Edit2, Trash2, Eye } from "lucide-react";

/* ======= DEMO DATA ======= */
const topSmall = [
  { title: "Total ads sales", value: "$198,221" },
  { title: "Homepage Ad", value: "$198,221" },
  { title: "Top Category Ad", value: "$198,221" },
];

const bottomSmall = [
  { title: "Keywords Ad", value: "$198,221" },
  { title: "Suggested offers", value: "$198,221" },
  { title: "Inside Offers", value: "$198,221" },
];

const spentData = [
  { name: "Homepage Ad", value: 30, color: "#7C3AED" },
  { name: "Top Category Ad", value: 20, color: "#10b981" },
  { name: "Keywords Ad", value: 15, color: "#F59E0B" },
  { name: "Inside Offers", value: 20, color: "#3B82F6" },
  { name: "Suggested Offers", value: 15, color: "#ef4444" },
];

const ads = [
  {
    id: 1,
    company: "Hotel Ibis",
    email: "nur.khan@mail.com",
    phone: "0987654321",
    adType: "Homepage Ad",
    duration: "FROM 12/12/2023 TO 12/12/2023",
    region: "Region",
    target: "All the clients",
    price: "100$",
    status: "Active",
  },
  {
    id: 2,
    company: "Hotel Ibis",
    email: "nur.khan@mail.com",
    phone: "0987654321",
    adType: "Homepage Ad",
    duration: "FROM 12/12/2023 TO 12/12/2023",
    region: "Region",
    target: "All the clients",
    price: "100$",
    status: "Completed",
  },
  {
    id: 3,
    company: "Hotel Ibis",
    email: "nur.khan@mail.com",
    phone: "0987654321",
    adType: "Inside Offers",
    duration: "FROM 12/12/2023 TO 12/12/2023",
    region: "Region",
    target: "All the clients",
    price: "100$",
    status: "Pending",
  },
];

/* ======= COMPONENT ======= */
export default function AdsManagement() {
  const [search, setSearch] = useState("");

  const filteredAds = useMemo(() => {
    return ads.filter(
      (a) =>
        a.company.toLowerCase().includes(search.toLowerCase()) ||
        a.adType.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen w-full bg-[#0f0f0f] text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-5 space-y-6">
        {/* ====== CARDS ====== */}
        <div className="space-y-2">{/* tighter vertical spacing */}
          {/* Row 1 */}
          <div className="flex gap-3">
            {/* 3 small cards */}
            {topSmall.map((c, i) => (
              <SmallCard key={i} title={c.title} value={c.value} />
            ))}

            {/* Pending widget (232x276) */}
            <div
              className="rounded-[6px] border border-white/10 flex flex-col items-center justify-center"
              style={{ width: 232, height: 276, background: "#292929" }}
            >
              <div className="text-orange-500 text-lg font-bold">Pending Ads</div>
              <button className="mt-4 h-14 w-28 rounded-full bg-[#ff7a2c] text-black font-bold">
                30
              </button>
            </div>

            {/* Spent chart (323x276) */}
            <div
              className="rounded-[6px] border border-white/10 p-3"
              style={{ width: 323, height: 276, background: "#292929" }}
            >
              <div className="text-sm mb-1">Spent Chart</div>
              <div style={{ width: "100%", height: 220 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={spentData} dataKey="value" cx="50%" cy="50%" outerRadius={86}>
                      {spentData.map((e, i) => (
                        <Cell key={i} fill={e.color} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Row 2 (just under first three, pulled slightly upward) */}
          <div className="flex gap-3 -mt-36">{/* small negative margin to reduce gap */}
            {bottomSmall.map((c, i) => (
              <SmallCard key={i} title={c.title} value={c.value} />
            ))}
          </div>
        </div>

        {/* ===== FILTERS ===== */}
        <div className="flex items-center gap-3 mt-3">
          {/* smaller search width */}
          <div className="w-[300px]">
            <div className="h-11 rounded-full bg-[#151515] border border-white/10 flex items-center px-3">
              <Search size={16} className="opacity-60 mr-2" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="bg-transparent outline-none text-sm w-full placeholder:text-white/40"
              />
            </div>
          </div>
          <select className="h-11 rounded-md bg-[#151515] border border-white/10 px-3 text-sm">
            <option>Target</option>
          </select>
          <select className="h-11 rounded-md bg-[#151515] border border-white/10 px-3 text-sm">
            <option>Ads type</option>
          </select>
          <select className="h-11 rounded-md bg-[#151515] border border-white/10 px-3 text-sm">
            <option>Region</option>
          </select>
          <select className="h-11 rounded-md bg-[#151515] border border-white/10 px-3 text-sm">
            <option>Status</option>
          </select>
          <button className="h-11 w-11 rounded-full bg-[#6d4aff] grid place-items-center">
            <Filter size={16} />
          </button>
        </div>

        {/* ===== TABLE ===== */}
        <div className="rounded-lg bg-[#1a1a1a] border border-white/10 overflow-hidden">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-[#0f0f0f] text-white/70">
                <Th>company</Th>
                <Th>ads type</Th>
                <Th>Duration</Th>
                <Th>Region</Th>
                <Th>target</Th>
                <Th>Price</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredAds.map((a) => (
                <tr key={a.id} className="hover:bg-white/5">
                  {/* company → #212121 */}
                  <Td className="bg-[#212121]">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-[#333] rounded-full grid place-items-center text-xs font-bold">
                        Logo
                      </div>
                      <div>
                        <div className="font-semibold">{a.company}</div>
                        <div className="text-[11px] opacity-70">{a.email}</div>
                        <div className="text-[11px] opacity-50">{a.phone}</div>
                      </div>
                    </div>
                  </Td>

                  {/* ads type → #181818 */}
                  <Td className="bg-[#181818]">{a.adType}</Td>

                  {/* Duration → #212121 */}
                  <Td className="bg-[#212121]">{a.duration}</Td>

                  {/* Region → #181818 */}
                  <Td className="bg-[#181818]">{a.region}</Td>

                  {/* target → #212121 */}
                  <Td className="bg-[#212121]">{a.target}</Td>

                  {/* Price → #181818 */}
                  <Td className="bg-[#181818]">{a.price}</Td>

                  {/* Status → #212121 */}
                  <Td className="bg-[#212121]">{a.status}</Td>

                  {/* Action → #181818 */}
                  <Td className="bg-[#181818]">
                    <div className="flex items-center gap-2">
                      <IconBtn tone="green">
                        <Eye size={14} />
                      </IconBtn>
                      <IconBtn tone="blue">
                        <Edit2 size={14} />
                      </IconBtn>
                      <IconBtn tone="red">
                        <Trash2 size={14} />
                      </IconBtn>
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ======= SMALL HELPERS ======= */
function SmallCard({ title, value }) {
  return (
    <div
      className="rounded-[3.64px] border border-white/10 p-3"
      style={{
        width: 193.5688934326172,
        height: 134.62498474121094,
        background: "#292929",
      }}
    >
      <div className="text-xs opacity-70">{title}</div>
      <div className="text-lg font-bold mt-2">{value}</div>
    </div>
  );
}

const Th = ({ children }) => (
  <th className="text-left px-4 py-3 whitespace-nowrap font-semibold">
    {children}
  </th>
);

const Td = ({ children, className = "" }) => (
  <td className={`px-4 py-3 align-top whitespace-nowrap text-white ${className}`}>
    {children}
  </td>
);

function IconBtn({ tone = "blue", children }) {
  const map = {
    green: "bg-green-600/20 text-green-400",
    blue: "bg-blue-600/20 text-blue-400",
    red: "bg-red-600/20 text-red-400",
  };
  return (
    <button className={`h-8 w-8 grid place-items-center rounded ${map[tone]}`}>
      {children}
    </button>
  );
}
