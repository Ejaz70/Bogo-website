import React, { useMemo, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { Search, ArrowUpDown } from "lucide-react";
import boy from "../../assets/boys.png"; // top-left card image
import boys from "../../assets/boy.png";
/* ================== Chart Data ================== */
const verifiedAccountData = [
  { name: "verified", value: 90, color: "#7C3AED" },
  { name: "Banned", value: 0, color: "#10b981" },
  { name: "Not verified", value: 10, color: "#F59E0B" },
];

const spentChartData = [
  { name: "restaurants", value: 30, color: "#7C3AED" },
  { name: "hotels", value: 10, color: "#22C55E" },
  { name: "beauty", value: 15, color: "#F59E0B" },
  { name: "entertainment", value: 10, color: "#06B6D4" },
  { name: "sport", value: 15, color: "#8B5CF6" },
  { name: "coupon", value: 20, color: "#F97316" },
];

/* ================== Helpers ================== */
const normalizeStatus = (s) => {
  const st = String(s || "").trim().toLowerCase();
  if (st.includes("not")) return "Not verified";
  if (st === "verified") return "verified";
  if (st === "banned") return "Banned";
  return s || "—";
};

const normalizeAccount = (s) => {
  const st = String(s || "").trim().toLowerCase();
  if (st.includes("premium")) return "PREMIUM";
  if (st.includes("free")) return "FREE";
  if (st.includes("trial")) return "free trial";
  return s;
};

/* ================== Demo Data (customers) ================== */
function makeCustomers() {
  const first = {
    fullName: "Nur Khan",
    email: "nurkhan@mail.com",
    phone: "0987654321",
    avatar: "https://i.pravatar.cc/100?img=1",
    xp: "2000 XP",
    offers: "25",
    booking: "25",
    loyalty: "25",
    groupOrder: "25",
    account: "PREMIUM",
    offences: "O1",
    joinedOn: "12/7/2023 1:58:05 PM",
    status: "verified",
  };

  const items = Array.from({ length: 24 }).map((_, i) => {
    const n = i + 2;
    return {
      fullName: [
        "Kate Lau",
        "Marías Fernanda Suárez",
        "Aishwarya Kumar",
        "Moiz Ahmed",
        "Fatima Noor",
        "Adeel Khan",
        "Anna Paul",
        "David Kim",
      ][i % 8],
      email: `user${n}@gmail.com`,
      phone: `0${(987654321 + i).toString().slice(0, 10)}`,
      avatar: `https://i.pravatar.cc/100?img=${(i % 70) + 1}`,
      xp: `${[150, 200, 250, 50, 100][i % 5]} XP`,
      offers: `${20 + (i % 15)}`,
      booking: `${(i % 10) + 1}`,
      loyalty: `${(i % 10) + 1}`,
      groupOrder: `${(i % 10) + 1}`,
      account: ["FREE", "free trial", "PREMIUM"][i % 3],
      offences: ["O0", "O1", "O3"][i % 3],
      joinedOn: `12/${(i % 7) + 1}/2023 1:58:05 PM`,
      status: ["verified", "Banned", "Not verified"][i % 3],
    };
  });
  return [first, ...items];
}

/* ================== Card Primitive ================== */
const Card = ({ children, style, className = "" }) => (
  <div className={`rounded-[10px] overflow-hidden ${className}`} style={style}>
    {children}
  </div>
);

/* ================== Card Section (4 + 4 cards) ================== */
function CardSection() {
  // datasets
  const genderData = [
    { name: "men", value: 63, color: "#7C3AED" },
    { name: "women", value: 37, color: "#F97316" },
  ];
  const accountDonut = [
    { name: "premium", value: 900, color: "#22C55E" },
    { name: "free", value: 600, color: "#F59E0B" },
  ];
  const verifiedDonut = [
    { name: "verified", value: 900, color: "#22C55E" },
    { name: "Not verified", value: 600, color: "#F59E0B" },
  ];
  const ageBars = [
    { bucket: "18-", v: 90 },
    { bucket: "20-24", v: 60 },
    { bucket: "25-29", v: 40 },
    { bucket: "40+", v: 25 },
  ];
  const rightNow = { active: 289, newPct: 43, returnPct: 57 };

  return (
    <div className="w-full mb-6">
      {/* ===== Row 1 ===== */}
      <div className="flex gap-3">
        {/* 1: All Customers (green) */}
        <Card style={{ width: 440, height: 147, background: "#8BC255" }}>
          <div className="h-full w-full flex">
            <div className="p-4 flex-1 flex flex-col">
              <div className="text-white text-[28px] leading-none font-semibold">15K</div>
              <div className="text-white/90 text-sm mt-2">All Customers</div>
            </div>
            <div className="h-full grid place-items-end p-2" style={{ width: 180 }}>
              {/* replace path with your asset */}
              <img src={boy} alt="customers" className="h-full object-contain" />
            </div>
          </div>
        </Card>

        {/* 2: customer (gender donut) */}
        <Card style={{ width: 234, height: 144, background: "#212121" }}>
          <div className="p-3 h-full">
            <div className="text-white/80 text-sm mb-1">customer</div>
            <div className="relative" style={{ height: 100 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={genderData} cx="50%" cy="50%" innerRadius={28} outerRadius={44} paddingAngle={3} dataKey="value" stroke="none">
                    {genderData.map((e, i) => (
                      <Cell key={i} fill={e.color} />
                    ))}
                    <Label content={() => (
                      <g>
                        <text x={0} y={0} transform="translate(58,45)" textAnchor="middle" dominantBaseline="central">
                          <tspan fill="#fff" fontWeight="700" fontSize="14">63%</tspan>
                          <tspan x="58" dy="14" fill="#9ca3af" fontSize="9">men</tspan>
                        </text>
                      </g>
                    )} />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute right-2 top-2 text-[10px] text-white/70">37% women</div>
            </div>
            <div className="mt-1 text-[10px] text-white/70">• men • women</div>
          </div>
        </Card>

        {/* 3: Account donut */}
        <Card style={{ width: 232, height: 144, background: "#212121" }}>
          <div className="p-3 h-full">
            <div className="flex items-center justify-between mb-1">
              <div className="text-white/85 text-sm">Account</div>
              <div className="text-[10px] text-white/60">Yearly ▾</div>
            </div>
            <div className="relative" style={{ height: 100 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={accountDonut} cx="50%" cy="50%" innerRadius={28} outerRadius={44} dataKey="value" stroke="none">
                    {accountDonut.map((e, i) => (
                      <Cell key={i} fill={e.color} />
                    ))}
                    <Label content={() => (
                      <g>
                        <text x={0} y={0} transform="translate(58,45)" textAnchor="middle" dominantBaseline="central">
                          <tspan fill="#fff" fontWeight="700" fontSize="14">1500</tspan>
                          <tspan x="58" dy="14" fill="#9ca3af" fontSize="9">count</tspan>
                        </text>
                      </g>
                    )} />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-1 text-[10px] text-white/70">• premium • free</div>
          </div>
        </Card>

        {/* 4: verified account donut */}
        <Card style={{ width: 231, height: 143, background: "#212121" }}>
          <div className="p-3 h-full">
            <div className="text-white/85 text-sm mb-1">virified account</div>
            <div style={{ height: 100 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={verifiedDonut} cx="50%" cy="50%" innerRadius={28} outerRadius={44} dataKey="value" stroke="none">
                    {verifiedDonut.map((e, i) => (
                      <Cell key={i} fill={e.color} />
                    ))}
                    <Label content={() => (
                      <g>
                        <text x={0} y={0} transform="translate(58,45)" textAnchor="middle" dominantBaseline="central">
                          <tspan fill="#fff" fontWeight="700" fontSize="14">1500</tspan>
                          <tspan x="58" dy="14" fill="#9ca3af" fontSize="9">total</tspan>
                        </text>
                      </g>
                    )} />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-1 text-[10px] text-white/70">• verified • Not verified</div>
          </div>
        </Card>
      </div>

      {/* ===== Row 2 ===== */}
      <div className="flex gap-3 mt-3">
        {/* 1: verified customers tile */}
        <Card style={{ width: 440, height: 146, background: "#212121" }}>
          <div className="h-full w-full flex">
            <div className="p-4 flex-1 flex flex-col">
              <div className="text-white text-2xl leading-none">10</div>
              <div className="text-white/80 text-sm mt-1">verified Customers</div>
            </div>
            <div className="h-full grid place-items-end p-2" style={{ width: 160 }}>
              <img src={boys} alt="verified" className="h-full object-contain" />
            </div>
          </div>
        </Card>

        {/* 2: Customers by age */}
        <Card style={{ width: 440, height: 146, background: "#212121" }}>
          <div className="p-3 h-full">
            <div className="text-white/85 text-sm mb-2">Customers by age</div>
            <div className="grid grid-cols-4 gap-3 items-end" style={{ height: 110 }}>
              {ageBars.map((b, i) => (
                <div key={i} className="flex flex-col items-center justify-end">
                  <div className="w-8 rounded-md" style={{ height: `${b.v}px`, background: ["#ef4444","#7C3AED","#F59E0B","#8B5CF6"][i] }} />
                  <div className="text-[10px] text-white/60 mt-1">{b.bucket}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* 3: Right Now */}
        <Card style={{ width: 233, height: 146, background: "#212121", paddingTop: 6.18, paddingRight: 11.34, paddingBottom: 6.18, paddingLeft: 11.34 }}>
          <div className="text-white/85 text-sm">Right Now</div>
          <div className="mt-1 text-white text-3xl font-semibold leading-none">{rightNow.active}</div>
          <div className="text-[10px] text-white/55 -mt-1 mb-2">active users</div>
          <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden flex">
            <div className="h-full" style={{ width: `${rightNow.newPct}%`, background: "#F97316" }} />
            <div className="h-full" style={{ width: `${rightNow.returnPct}%`, background: "#22C55E" }} />
          </div>
          <div className="flex justify-between text-[10px] text-white/70 mt-1">
            <span>{rightNow.newPct}% New Visitor</span>
            <span>{rightNow.returnPct}% Returning Visitor</span>
          </div>
        </Card>

        {/* 4: Spent Chart */}
        <Card style={{ width: 231, height: 146, background: "#212121", paddingTop: 6.18, paddingRight: 11.34, paddingBottom: 6.18, paddingLeft: 11.34 }}>
          <div className="text-white/85 text-sm mb-1">Spant Chart</div>
          <div style={{ height: 100 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={spentChartData} cx="50%" cy="50%" innerRadius={28} outerRadius={44} dataKey="value" labelLine={false}>
                  {spentChartData.map((e, i) => (
                    <Cell key={i} fill={e.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ================== Filters Row ================== */
function FiltersRow({ status, setStatus, account, setAccount }) {
  return (
    <div className="mb-4 flex w-full items-center justify-between gap-3">
      <div className="relative w-[260px]">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2 pl-10 text-sm placeholder:text-white/40 focus:outline-none"
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
      </div>
      <div className="flex items-center gap-3 text-sm">
        {/* ACCOUNT filter */}
        <select className="w-[160px] rounded-md border border-white/10 bg-[#1A1A1A] px-3 py-2" value={account} onChange={(e) => setAccount(e.target.value)}>
          <option>All</option>
          <option>FREE</option>
          <option>PREMIUM</option>
        </select>
        {/* Status filter */}
        <select className="w-[140px] rounded-md border border-white/10 bg-[#1A1A1A] px-3 py-2" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>All</option>
          <option>Not verified</option>
          <option>verified</option>
          <option>Banned</option>
        </select>
        <button className="rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2">csv</button>
        <button className="rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2">pdf</button>
        <button className="rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2">excel</button>
        <button className="rounded-full bg-yellow-500 px-5 py-2 font-semibold text-white hover:bg-yellow-400">+ New Merchant</button>
      </div>
    </div>
  );
}

/* ================== Table ================== */
function CustomersTable({ rows }) {
  const ArrowBtn = () => (
    <button type="button" className="grid h-8 w-[58px] place-items-center rounded-full bg-white text-black shadow-sm" aria-label="Open row">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );

  const SortHeader = ({ label }) => (
    <div className="flex flex-col items-start leading-tight">
      <ArrowUpDown className="h-3.5 w-3.5 text-sky-300 -mb-0.5" />
      <div className="text-[10px] uppercase text-white/45">{label}</div>
    </div>
  );

  const COLS = "grid grid-cols-[220px_70px_70px_70px_70px_86px_110px_80px_160px_90px_84px]";

  const NameCell = ({ row }) => (
    <div className="flex items-center gap-2 px-2 min-w-0 h-full bg-[#1a1a1a]">
      <img
        src={row.avatar || `https://i.pravatar.cc/100?img=12`}
        alt={row.fullName}
        className="h-10 w-10 flex-shrink-0 rounded-lg object-cover"
        onError={(e) => {
          e.currentTarget.src = `https://i.pravatar.cc/100?img=64`;
        }}
      />
      <div className="min-w-0">
        <div className="truncate text-[11px] font-medium leading-5" title={row.fullName}>{row.fullName}</div>
        <div className="text-[9.5px] text-white/55 truncate" title={row.email}>{row.email}</div>
        <div className="text-[9.5px] text-white/55 truncate" title={row.phone}>{row.phone}</div>
      </div>
    </div>
  );

  return (
    <div className="rounded-xl border border-white/5 w-full">
      <div className={`${COLS} bg-[#141414] px-2.5 py-4`}>
        <SortHeader label="FULL NAME" />
        <SortHeader label="xp" />
        <SortHeader label="offers" />
        <SortHeader label="BOOKING" />
        <SortHeader label="Loyalty" />
        <SortHeader label="Group order" />
        <SortHeader label="ACCOUNT" />
        <SortHeader label="offences" />
        <SortHeader label="Joined On" />
        <SortHeader label="Status" />
        <SortHeader label="Action" />
      </div>

      {rows.map((row, i) => (
        <div key={i} className={`${COLS} items-center border-t border-white/10 bg-[#0F0F0F]`}>
          <NameCell row={row} />
          <div className="h-12 grid place-items-center text-[11px] text-white/60">{row.xp}</div>
          <div className="h-12 grid place-items-center text-[11px] text-white/60 bg-[#1a1a1a]">{row.offers}</div>
          <div className="h-12 grid place-items-center text-[11px] text-white/60">{row.booking}</div>
          <div className="h-12 grid place-items-center text-[11px] text-white/60 bg-[#1a1a1a]">{row.loyalty}</div>
          <div className="h-12 grid place-items-center text-[11px] text-white/60">{row.groupOrder}</div>
          <div className="h-12 grid place-items-center text-[11px] text-white/60 bg-[#1a1a1a]">{row.account}</div>
          <div className="h-12 grid place-items-center text-[11px] text-white/60">{row.offences}</div>
          <div className="h-12 grid place-items-center text-[9.5px] text-white/55 text-center px-2 break-words" title={row.joinedOn}>{row.joinedOn}</div>
          <div className="h-12 grid place-items-center text-[11px] bg-[#1a1a1a]"><span className="text-white/70">{normalizeStatus(row.status)}</span></div>
          <div className="h-12 grid place-items-end pr-2"><ArrowBtn /></div>
        </div>
      ))}
    </div>
  );
}

/* ================== Page ================== */
export default function MerchantsCustomerScreen() {
  const [status, setStatus] = useState("All");
  const [account, setAccount] = useState("All");
  const allRows = useMemo(() => makeCustomers(), []);

  const filteredRows = allRows.filter((row) => {
    const statusOk = status === "All" ? true : normalizeStatus(row.status) === status;
    const accNorm = normalizeAccount(row.account);
    const accountOk = account === "All" ? true : accNorm === account;
    return statusOk && accountOk;
  });

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1180px] px-0 py-4 sm:py-6 relative">
        <CardSection />
        <FiltersRow status={status} setStatus={setStatus} account={account} setAccount={setAccount} />
        <CustomersTable rows={filteredRows} />
      </div>
    </div>
  );
}
