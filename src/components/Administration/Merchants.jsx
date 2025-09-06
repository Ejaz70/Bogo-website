import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import comLogo from "../../assets/com.png"; // fallback logo for images
import { Search } from "lucide-react";

/* =========================================================
   COLORS
========================================================= */
const VERIFIED_COLORS = {
  banned: "#ef4444",
  verified: "#22c55e",
  notVerified: "#7c3aed",
};
const SPENT_COLORS = {
  restaurants: "#22c55e",
  hotels: "#ef4444",
  beauty: "#60a5fa",
  entertainment: "#f59e0b",
  sport: "#8b5cf6",
  coupon: "#9ca3af",
};

/* =========================================================
   PRIMITIVES
========================================================= */
const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-white/5 bg-[#1b1b1b] shadow-sm ${className}`}>
    {children}
  </div>
);

const LegendDot = ({ color, label }) => (
  <span className="flex items-center gap-2 text-[11px]">
    <span className="h-2 w-2 rounded-sm" style={{ background: color }} /> {label}
  </span>
);

const SearchField = () => (
  <div className="relative w-full sm:w-72">
    <input
      type="text"
      placeholder="Search"
      className="w-full rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2 pl-10 text-sm placeholder:text-white/40 focus:outline-none"
    />
    <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
  </div>
);

const PctLabel = ({ children, side = "left", x = "0%", y = "0%" }) => {
  const isLeft = side === "left";
  return (
    <div className="absolute text-white text-sm" style={{ [isLeft ? "left" : "right"]: x, top: y }}>
      <div className="relative">
        {isLeft ? (
          <>
            <span className="absolute -right-[28px] top-[10px] block h-px w-[26px] bg-white/70" />
            <span className="absolute -right-[34px] top-[8px] block h-2 w-2 rounded-full bg-white" />
          </>
        ) : (
          <>
            <span className="absolute -left-[28px] top-[10px] block h-px w-[26px] bg-white/70" />
            <span className="absolute -left-[34px] top-[8px] block h-2 w-2 rounded-full bg-white" />
          </>
        )}
        {children}
      </div>
    </div>
  );
};

const Callout = ({ side = "right", style, children }) => {
  const isLeft = side === "left";
  return (
    <div className="pointer-events-none absolute text-white/90 text-xs" style={style}>
      <div className="relative">
        {children}
        {isLeft ? (
          <>
            <span className="absolute -right-[52px] top-[8px] block h-px w-[48px] bg-white/70" />
            <span className="absolute -right-[58px] top-[5px] block h-2 w-2 rounded-full bg-white" />
          </>
        ) : (
          <>
            <span className="absolute -left-[52px] top-[8px] block h-px w-[48px] bg-white/70" />
            <span className="absolute -left-[58px] top-[5px] block h-2 w-2 rounded-full bg-white" />
          </>
        )}
      </div>
    </div>
  );
};

/* Small stat card with optional image INSIDE */
const SmallStatCard = ({ title, value, delta, icon, imgSrc, className = "" }) => (
  <div className={`rounded-xl bg-[#101010] border border-white/5 p-3 flex items-center gap-3 ${className}`}>
    {imgSrc ? (
      <img src={imgSrc} alt="mini" className="h-9 w-9 rounded-lg object-cover" />
    ) : (
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-white/90 text-sm">{icon ?? "★"}</div>
    )}
    <div className="flex-1">
      <div className="text-[11px] text-white/70 leading-none">{title}</div>
      <div className="mt-1 flex items-center gap-2">
        <span className="text-white font-semibold text-sm">{value}</span>
        {delta != null && (
          <span className={`text-[10px] ${delta >= 0 ? "text-emerald-400" : "text-red-400"}`}>
            {delta >= 0 ? "+" : ""}{delta}%
          </span>
        )}
      </div>
    </div>
  </div>
);

/* =========================================================
   TOP STRIP WIDGETS — equalized heights
========================================================= */
function BestSaler({ className = "" }) {
  return (
    <Card className={className}>
      <div className="p-4 h-full grid grid-rows-[auto_1fr_auto]">
        <div className="text-sm font-semibold text-white/90">Best saler</div>
        <div className="mt-2 grid place-items-center">
          <div className="h-20 w-20 rounded-full bg-yellow-400/90 grid place-items-center text-black text-xl font-bold shadow">🦸‍♂️</div>
        </div>
        <button className="mt-4 inline-flex items-center justify-between rounded-xl bg-[#F5C242] px-4 py-2 font-semibold text-black">
          <span>Best saler</span>
          <span className="ml-3 grid h-6 w-6 place-items-center rounded-full bg-white/90">▶</span>
        </button>
      </div>
    </Card>
  );
}

function TopLocation({ className = "" }) {
  return (
    <Card className={className}>
      <div className="p-4">
        <div className="text-sm font-semibold text-white/90">Top location</div>
        <div className="mt-2 relative h-[180px] rounded-xl bg-[#101010] overflow-hidden">
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_30%,#2a2a2a_0%,transparent_30%),radial-gradient(circle_at_80%_60%,#2a2a2a_0%,transparent_30%)]" />
          <span className="absolute left-[22%] top-[38%] h-3 w-3 rounded-full bg-yellow-400 shadow" />
          <span className="absolute left-[66%] top-[60%] h-3 w-3 rounded-full bg-emerald-400 shadow" />
        </div>
      </div>
    </Card>
  );
}

function VerifiedAccount({ className = "" }) {
  const data = [
    { name: "virified", value: 70, color: VERIFIED_COLORS.verified },
    { name: "Banned", value: 20, color: VERIFIED_COLORS.banned },
    { name: "Not verified", value: 10, color: VERIFIED_COLORS.notVerified },
  ];
  return (
    <Card className={className}>
      <div className="p-4 h-full">
        <div className="text-sm font-semibold text-white/90">virified account</div>
        <div className="relative mx-auto mt-3 w-full h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={44}
                outerRadius={80}
                paddingAngle={4}
                cornerRadius={12}
                dataKey="value"
                stroke="none"
              >
                {data.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}
                <Label
                  position="center"
                  content={({ viewBox }) => {
                    const { cx, cy } = viewBox || {};
                    return (
                      <g>
                        <text x={cx} y={(cy || 0) - 4} textAnchor="middle" className="fill-white" style={{ fontSize: 20, fontWeight: 800 }}>1500</text>
                        <text x={cx} y={(cy || 0) + 16} textAnchor="middle" className="fill-white/70" style={{ fontSize: 11 }}>accounts</text>
                      </g>
                    );
                  }}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* callouts */}
          <Callout side="right" style={{ right: "2%", top: "12%" }}>
            <b>10%</b> <span className="text-white/70">Not verified</span>
          </Callout>
          <Callout side="left" style={{ left: "2%", bottom: "16%" }}>
            <b>90</b> <span className="text-white/70">virified</span>
          </Callout>

          {/* legend */}
          <div className="absolute bottom-2 right-3 flex flex-col gap-1 text-[11px] text-white/85">
            <LegendDot color={VERIFIED_COLORS.banned} label="Banned" />
            <LegendDot color={VERIFIED_COLORS.verified} label="virified" />
            <LegendDot color={VERIFIED_COLORS.notVerified} label="Not verified" />
          </div>
        </div>
      </div>
    </Card>
  );
}

function SpantChart({ className = "" }) {
  const data = [
    { name: "restaurants", value: 20, color: SPENT_COLORS.restaurants },
    { name: "hotels", value: 10, color: SPENT_COLORS.hotels },
    { name: "beauty", value: 15, color: SPENT_COLORS.beauty },
    { name: "entertainment", value: 15, color: SPENT_COLORS.entertainment },
    { name: "sport", value: 30, color: SPENT_COLORS.sport },
    { name: "coupon", value: 10, color: SPENT_COLORS.coupon },
  ];
  return (
    <Card className={className}>
      <div className="py-4">
        <div className="text-sm font-semibold text-white/90">Spant Chart</div>
        {/* Equal height container to match VerifiedAccount */}
        <div className="relative mx-auto mt-3 w-full h-[330px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={56}
                outerRadius={86}
                paddingAngle={6}
                cornerRadius={12}
                dataKey="value"
                stroke="none"
              >
                {data.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}
              </Pie>
              {/* inner ring */}
              <Pie
                data={[{ value: 100 }]}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={48}
                dataKey="value"
                fill="#0f0f0f"
                stroke="#1a1a1a"
                strokeWidth={2}
                isAnimationActive={false}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* labels */}
          <PctLabel side="left" x="12%" y="6%">20%</PctLabel>
          <PctLabel side="right" x="12%" y="8%">10%</PctLabel>
          <PctLabel side="right" x="3%" y="42%">15%</PctLabel>
          <PctLabel side="right" x="10%" y="84%">30%</PctLabel>
          <PctLabel side="left" x="12%" y="80%">15%</PctLabel>
          <PctLabel side="left" x="3%" y="44%">10%</PctLabel>

          {/* legend */}
          <div className="absolute bottom-2 left-3 flex flex-wrap items-center gap-x-2 gap-y-2 text-[11px] text-white/90">
            <LegendDot color={SPENT_COLORS.restaurants} label="restaurants" />
            <LegendDot color={SPENT_COLORS.hotels} label="hotels" />
            <LegendDot color={SPENT_COLORS.beauty} label="beauty" />
            <LegendDot color={SPENT_COLORS.entertainment} label="entertainment" />
            <LegendDot color={SPENT_COLORS.sport} label="sport" />
            <LegendDot color={SPENT_COLORS.coupon} label="coupon" />
          </div>
        </div>
      </div>
    </Card>
  );
}

function StatisticSliders({ className = "" }) {
  const rows = [
    { label: "entertainment", v: 20, color: "#8b5cf6" },
    { label: "spa", v: 100, color: "#60a5fa" },
    { label: "beauty", v: 100, color: "#f59e0b" },
    { label: "sport", v: 260, color: "#ef4444" },
    { label: "beauty", v: 200, color: "#22c55e" },
    { label: "hotels", v: 300, color: "#22c55e" },
    { label: "coupon", v: 600, color: "#9ca3af" },
  ];
  return (
    <Card className={className}>
      <div className="p-4 h-full">
        <div className="text-sm font-semibold text-white/90">Statistic</div>
        <div className="mt-3 space-y-3">
          {rows.map((s, i) => (
            <div key={i}>
              <div className="mb-1 flex items-center justify-between text-xs text-white/70">
                <span>{s.label}</span>
                <span>{s.v}</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-1.5 rounded-full" style={{ width: `${Math.min((s.v / 600) * 100, 100)}%`, background: s.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

/* =========================================================
   TABLE DATA
========================================================= */
const tableData = [
  {
    name: "Hotel ibis",
    email: "hotelibis@gmail.com",
    number: "+92 300 1234567",
    logo: comLogo,
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

/* =========================================================
   TABLE
========================================================= */
function MerchantsTable() {
  const ArrowBtn = () => (
    <button type="button" className="grid h-8 w-12 place-items-center rounded-full bg-white text-black shadow-sm" aria-label="Open row">
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
      <div className="overflow-x-auto md:overflow-x-hidden">
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
            const renderStatus = st.includes("not")
              ? "Not verified"
              : st === "verified"
              ? "verified"
              : st === "banned"
              ? "Banned"
              : row.status || "—";
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
                <div className="h-12 grid place-items-center text-[9.5px] text-white/55 text-center px-2 break-words" title={row.joinedOn}>
                  {row.joinedOn}
                </div>
                <div className="h-12 grid place-items-center text-[11px] bg-[#1a1a1a]">
                  <span className="text-white/60">{renderStatus}</span>
                </div>
                <div className="h-12 grid place-items-center">
                  <ArrowBtn />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */
function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="mx-auto w-full max-w-[1200px] p-4 sm:p-6">
        {/* ==================== TOP STRIP (exact order like screenshot) ==================== */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-12">
          {/* unified height for all 5 cards */}
          <div className="xl:col-span-2 h-[230px]"><BestSaler className="h-full" /></div>
          <div className="xl:col-span-4 h-[230px]"><TopLocation className="h-full" /></div>
          <div className="xl:col-span-2 h-[230px]"><VerifiedAccount className="h-full" /></div>
          {/* add a little gap under the last two cards */}
          <div className="xl:col-span-2 h-[230px] mb-6"><SpantChart className="h-full" /></div>
          <div className="xl:col-span-2 h-[230px] mb-6"><StatisticSliders className="h-full" /></div>
        </div>

        {/* ==================== MINI CARDS ==================== */}
        {/* Place directly UNDER the first three cards area (2+4+2 = 8 cols) */}
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-12">
          <div className="xl:col-span-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {/* Green All merchants */}
            <div className="sm:col-span-2">
              <div className="rounded-2xl border border-white/5 bg-[#3CB371] text-black p-4 relative overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-black/10 grid place-items-center text-xl">🛒</div>
                  <div>
                    <div className="text-xs font-semibold opacity-90">All merchants</div>
                    <div className="text-2xl font-extrabold leading-tight">1500</div>
                  </div>
                </div>
                <img src={comLogo} alt="decor" className="absolute right-3 bottom-3 h-10 w-10 opacity-70 rounded-lg object-cover" />
              </div>
            </div>
            <SmallStatCard title="banned merchants" value="10" delta={-2} imgSrc={comLogo} />
            <SmallStatCard title="verified merchants" value="1400" delta={6} imgSrc={comLogo} />
            <SmallStatCard title="Active merchants" value="—" delta={4} imgSrc={comLogo} />
          </div>
          {/* keep remaining 4 columns empty to sit under the last two tall cards */}
        </div>

        {/* FILTERS */}
        <div className="mb-4 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between whitespace-nowrap">
          <SearchField />
          <div className="flex flex-wrap items-center gap-3">
            <select className="w-40 rounded-md border border-white/10 bg-[#1A1A1A] px-4 py-2 text-sm">
              <option>ACCOUNT</option>
              <option>Active Merchant</option>
              <option>Expired Merchant</option>
              <option>Disconnected Merchant</option>
            </select>
            <select className="w-32 rounded-md border border-white/10 bg-[#1A1A1A] px-4 py-2 text-sm">
              <option>All</option>
              <option>Not verified</option>
              <option>virified</option>
              <option>Banned</option>
            </select>
            <button className="rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2 text-sm">scv</button>
            <button className="rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2 text-sm">pdf</button>
            <button className="rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2 text-sm">excle</button>
            <button className="rounded-full bg-yellow-500 px-6 py-2 text-sm font-semibold text-black hover:bg-yellow-400">+ New merchants</button>
          </div>
        </div>

        <MerchantsTable />
      </div>
    </div>
  );
}

export default Dashboard;
