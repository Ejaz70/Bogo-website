import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import comLogo from "../../assets/com.png"; // fallback logo

// --------------------- Demo data ---------------------
const verifiedAccountData = [
  { name: "Verified", value: 70, color: "#8b5cf6" },
  { name: "Banned", value: 20, color: "#10b981" },
  { name: "Not verified", value: 10, color: "#ef4444" },
];

const spentChartData = [
  { name: "Restaurants", value: 30, color: "#8b5cf6" },
  { name: "Hotels", value: 20, color: "#06b6d4" },
  { name: "Beauty", value: 15, color: "#f59e0b" },
  { name: "Entertainment", value: 15, color: "#10b981" },
  { name: "Sport", value: 10, color: "#ef4444" },
  { name: "Coupon", value: 10, color: "#f97316" },
];

// --------------------- Table Data (25 companies) ---------------------
const tableData = [
  {
    name: "Hotel ibis",
    email: "hotelibis@gmail.com",
    number: "+92 300 1234567",
    logo: "/assets/logos/hotel-ibis.png",
    category: "hotels",
    type: "hotel",
    offers: "100",
    bookings: "25",
    loyalty: "25",
    views: "32k",
    likes: "300",
    profits: "2000 $",
    joinedOn: "12/7/2023 1:50:05 PM",
    status: "verified",
  },
  // --- 24 more demo companies ---
  ...Array.from({ length: 24 }).map((_, i) => ({
    name: `Company ${i + 2}`,
    email: `company${i + 2}@demo.com`,
    number: `+92 30${i} 123456${i}`,
    logo: comLogo,
    category: i % 2 === 0 ? "restaurants" : "entertainment",
    type: i % 2 === 0 ? "fast food" : "games",
    offers: `${(i + 1) * 10}`,
    bookings: `${(i + 1) * 5}`,
    loyalty: `${(i + 2) * 3}`,
    views: `${10 * (i + 1)}k`,
    likes: `${100 * (i + 1)}`,
    profits: `${1000 + i * 50} $`,
    joinedOn: "12/7/2023 1:50:05 PM",
    status: i % 3 === 0 ? "verified" : i % 3 === 1 ? "Banned" : "Not verified",
  })),
];

// --------------------- Small helpers ---------------------
const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl border border-white/5 bg-[#141414] ${className}`}>{children}</div>
);

// --------------------- Main Screen ---------------------
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="mx-auto w-full max-w-[1100px] p-4 sm:p-6">
        {/* ===== Filters in one line ===== */}
        <div className="mb-4 flex w-full items-center justify-between gap-3 whitespace-nowrap">
          <div className="relative w-72">
            <input type="text" placeholder="Search" className="w-full rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2 pl-10 text-sm placeholder:text-white/40 focus:outline-none" />
            <div className="absolute left-3 top-2.5 text-white/50">🔍</div>
          </div>
          <div className="flex flex-nowrap items-center gap-3">
            <select className="w-40 rounded-md border border-white/10 bg-[#1A1A1A] px-4 py-2 text-sm">
              <option>ACCOUNT</option>
              <option>Active Merchant</option>
              <option>Expired Merchant</option>
              <option>Disconnected Merchant</option>
            </select>
            <select className="w-32 rounded-md border border-white/10 bg-[#1A1A1A] px-4 py-2 text-sm">
              <option>All</option>
              <option>Not verified</option>
              <option>verified</option>
              <option>Banned</option>
            </select>
            <button className="rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2 text-sm">scv</button>
            <button className="rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2 text-sm">pdf</button>
            <button className="rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2 text-sm">excle</button>
            <button className="rounded-full bg-yellow-500 px-6 py-2 text-sm font-semibold text-black hover:bg-yellow-400">+ New merchants</button>
          </div>
        </div>

        {/* ===== Table ===== */}
        <MerchantsTable />
      </div>
    </div>
  );
}

// --------------------- Table ---------------------
function MerchantsTable() {
  const ArrowBtn = () => (
    <button type="button" className="grid h-8 w-12 place-items-center rounded-full bg-white text-black shadow-sm">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );

  const SortableHeader = ({ label }) => (
    <div className="flex flex-col items-start leading-tight">
      <div className="text-[11px] -mb-0.5 text-white/60">↕</div>
      <div className="text-[10px] uppercase text-white/45">{label}</div>
    </div>
  );

  const COLS = "grid grid-cols-[220px_70px_70px_50px_50px_50px_90px_90px_95px_135px_60px_60px]";

  const BrandCell = ({ row }) => (
    <div className="flex items-center gap-2 px-2 min-w-0 h-full bg-[#1a1a1a]">
      <img src={row.logo || comLogo} alt="logo" className="h-8 w-8 flex-shrink-0 rounded-lg object-cover" />
      <div className="min-w-0">
        <div className="truncate text-[11px] font-medium leading-5" title={row.name}>{row.name}</div>
        <div className="text-[9.5px] text-white/55 truncate" title={row.email}>{row.email}</div>
        <div className="text-[9.5px] text-white/55 truncate" title={row.number}>{row.number}</div>
      </div>
    </div>
  );

  return (
    <div className="rounded-xl border border-white/5 w-full">
      <div className="overflow-x-hidden">
        <div className="hidden md:block">
          <div className={`${COLS} bg-[#141414] px-2.5 py-2`}>
            <div className="text-[10px] uppercase tracking-wide text-white/45">Company NAME</div>
            <SortableHeader label="category" />
            <SortableHeader label="type" />
            <SortableHeader label="offers" />
            <SortableHeader label="booking" />
            <SortableHeader label="loyalty" />
            <SortableHeader label="views" />
            <SortableHeader label="like" />
            <SortableHeader label="profits" />
            <SortableHeader label="joined on" />
            <div className="text-[10px] uppercase tracking-wide text-white/45 grid place-items-start">Status</div>
            <div className="text-[10px] uppercase tracking-wide text-white/45 grid place-items-end pr-1">Action</div>
          </div>

          {tableData.map((row, i) => {
            const st = String(row.status || "").trim().toLowerCase();
            const renderStatus = st.includes("not") ? "Not verified" : st === "verified" ? "verified" : st === "banned" ? "Banned" : row.status || "—";
            return (
              <div key={i} className={`${COLS} items-center border-t border-white/10 bg-[#0F0F0F]`}>
                <BrandCell row={row} />
                <div className="h-12 grid place-items-center text-[11px] text-white/60">{row.category}</div>
                <div className="h-12 grid place-items-center text-[11px] text-white/60 bg-[#1a1a1a]">{row.type}</div>
                <div className="h-12 grid place-items-center text-[11px] text-white/60">{row.offers}</div>
                <div className="h-12 grid place-items-center text-[11px] text-white/60 bg-[#1a1a1a]">{row.bookings}</div>
                <div className="h-12 grid place-items-center text-[11px] text-white/60">{row.loyalty}</div>
                <div className="h-12 flex items-center gap-2 bg-[#1a1a1a] px-2">
                  <span className="grid h-7 w-7 place-items-center rounded-full text-[10px] text-white/40">{row.views}</span>
                  <div className="h-1 w-full rounded-full bg-white/10">
                    <div className="h-1 rounded-full bg-[#7C3AED]" style={{ width: "70%" }} />
                  </div>
                </div>
                <div className="h-12 flex items-center gap-2 px-2">
                  <span className="grid h-7 w-7 place-items-center rounded-full text-[10px] text-white/40">{row.likes}</span>
                  <div className="h-1 w-full rounded-full bg-white/10">
                    <div className="h-1 rounded-full bg-[#F97316]" style={{ width: "60%" }} />
                  </div>
                </div>
                <div className="h-12 bg-[#1a1a1a] px-2 py-1.5 flex flex-col items-start justify-center leading-tight">
                  <span className="text-[11px]">{row.profits}</span>
                  <span className="text-[9.5px] text-emerald-400">↗ 3.7%</span>
                </div>
                <div className="h-12 grid place-items-center text-[9.5px] text-white/55 text-center px-2 break-words">{row.joinedOn}</div>
                <div className="h-12 grid place-items-center text-[11px] bg-[#1a1a1a]">
                  <span className="text-white/60">{renderStatus}</span>
                </div>
                <div className="h-12 grid place-items-center"><ArrowBtn /></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
