import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import comLogo from "../../assets/com.png";
import { Search } from "lucide-react";
import aImg from "../../assets/a.png";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// CDN TopoJSON
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ==== small-card images ====
import imgCard1 from "../../assets/d.png";
import imgCard2 from "../../assets/f.png";
import imgCard3 from "../../assets/b.png";
import imgCard4 from "../../assets/c.png";

/* ================= COLORS ================= */
const VERIFIED_COLORS = { banned: "#ef4444", verified: "#22c55e", notVerified: "#7c3aed" };
const SPENT_COLORS = {
  restaurants: "#22c55e",
  hotels: "#ef4444",
  beauty: "#60a5fa",
  entertainment: "#f59e0b",
  sport: "#8b5cf6",
  coupon: "#9ca3af",
};

/* ================= HELPERS ================= */
const BASE_LEFT = 270; // figma offset
const n = (x) => x;

/* ================= PRIMITIVES ================= */
const Card = ({ children, style, className = "" }) => (
  <div className={`absolute border border-white/4 shadow-sm overflow-hidden ${className}`} style={style}>
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

/* ================= TOP (PIXEL-LOCKED) CARDS ================= */
function BestSaler() {
  return (
    <Card
      style={{
        width: n(128),
        top: n(-21),
        height: n(185),
        left: n(243 - BASE_LEFT),
        borderRadius: n(5),
        opacity: 1,
        background: "#FFC02D",
      }}
    >
      <div className="p-3 h-full flex flex-col items-center justify-between text-black">
        <div className="mt-1 h-14 w-14 rounded-full bg-white grid place-items-center shadow overflow-hidden">
          <img src={aImg} alt="Best seller" className="h-10 w-10 object-contain" />
        </div>
        <div className="text-xs font-semibold">Best saler</div>
        <button className="mb-1 h-8 w-8 rounded-full bg-[#FFFFFF80] flex items-center justify-center">
          <span className="text-black text-sm">{">"}</span>
        </button>
      </div>
    </Card>
  );
}

function TopLocation() {
  const [selected, setSelected] = React.useState(new Set());
  const toggle = (id) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <Card
      style={{
        width: n(266),
        height: n(185),
        top: n(-21),
        left: n(380 - BASE_LEFT),
        borderRadius: n(5),
        opacity: 1,
        background: "#292929",
      }}
      className="relative"
    >
      <div className="p-3 h-full">
        <div className="text-sm font-semibold text-white/90">Top location</div>

        <div className="mt-2 relative h-[120px] rounded-md bg-[#101010] overflow-hidden">
          <div className="absolute inset-0">
            <ComposableMap projection="geoMercator" projectionConfig={{ scale: 80 }} style={{ width: "100%", height: "100%" }}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const id = geo.id || geo.properties.ISO_A3 || geo.rsmKey;
                    const isSel = selected.has(id);
                    return (
                      <Geography
                        key={id}
                        geography={geo}
                        onClick={() => toggle(id)}
                        style={{
                          default: { fill: isSel ? "#93c5fd" : "#0a0a0a", stroke: "#22c3ff", strokeWidth: 0.6, outline: "none" },
                          hover:   { fill: isSel ? "#93c5fd" : "#1a1a1a", stroke: "#22c3ff", strokeWidth: 0.6, outline: "none", cursor: "pointer" },
                          pressed: { fill: "#93c5fd", stroke: "#22c3ff", strokeWidth: 0.6, outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>
      </div>
    </Card>
  );
}

function VerifiedAccount() {
  const data = [
    { name: "verified", value: 70, color: VERIFIED_COLORS.verified },
    { name: "Banned", value: 20, color: VERIFIED_COLORS.banned },
    { name: "Not verified", value: 10, color: VERIFIED_COLORS.notVerified },
  ];

  const PointerLabels = (props) => {
    const { cx, cy, midAngle, outerRadius, index, percent } = props || {};
    if (cx == null || cy == null || outerRadius == null || midAngle == null) return null;
    const RAD = Math.PI / 180;

    const r0 = outerRadius;
    const r1 = outerRadius + 12;

    const x0 = cx + r0 * Math.cos(-midAngle * RAD);
    const y0 = cy + r0 * Math.sin(-midAngle * RAD);
    const x1 = cx + r1 * Math.cos(-midAngle * RAD);
    const y1 = cy + r1 * Math.sin(-midAngle * RAD);

    const isRight = Math.cos(-midAngle * RAD) >= 0;
    const x2 = x1 + (isRight ? 16 : -16);
    const y2 = y1;

    const item = data[index];
    if (!item) return null;

    if (item.name === "verified" || item.name === "Not verified") {
      const text = item.name === "verified" ? "90 verified" : `${Math.round((percent || 0) * 100)}% Not verified`;
      const anchor = isRight ? "start" : "end";
      return (
        <g>
          <circle cx={x0} cy={y0} r={3.2} fill="#fff" fillOpacity={0.9} />
          <polyline points={`${x0},${y0} ${x1},${y1} ${x2},${y2}`} stroke="#d1d5db" strokeWidth={1} fill="none" />
          <text x={x2 + (isRight ? 4 : -4)} y={y2 - 2} textAnchor={anchor} fontSize={11} fill="#ffffff">
            {text}
          </text>
        </g>
      );
    }
    return null;
  };

  return (
    <Card
      style={{
        width: n(266),
        height: n(186),
        top: n(-21),
        left: n(652 - BASE_LEFT),
        borderRadius: n(5),
        opacity: 1,
        background: "#292929",
      }}
    >
      <div className="p-3 h-full">
        <div className="text-sm font-semibold text-white/90">verified account</div>

        <div className="relative mx-auto mt-2 w-full h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={34}
                outerRadius={54}
                paddingAngle={4}
                cornerRadius={9}
                dataKey="value"
                stroke="none"
                labelLine={false}
                label={PointerLabels}
              >
                {data.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}

                <Label
                  position="center"
                  content={({ viewBox }) => {
                    const { cx, cy } = viewBox || {};
                    if (cx == null || cy == null) return null;
                    return (
                      <g>
                        <text x={cx} y={cy - 2} textAnchor="middle" className="fill-white" style={{ fontSize: 14, fontWeight: 800 }}>
                          1500
                        </text>
                        <text x={cx} y={cy + 12} textAnchor="middle" className="fill-white/70" style={{ fontSize: 9 }}>
                          account
                        </text>
                      </g>
                    );
                  }}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}

function SpantChart() {
  const data = [
    { name: "restaurants", value: 20, color: SPENT_COLORS.restaurants },
    { name: "hotels", value: 10, color: SPENT_COLORS.hotels },
    { name: "beauty", value: 15, color: SPENT_COLORS.beauty },
    { name: "entertainment", value: 15, color: SPENT_COLORS.entertainment },
    { name: "sport", value: 30, color: SPENT_COLORS.sport },
    { name: "coupon", value: 10, color: SPENT_COLORS.coupon },
  ];

  const RAD = Math.PI / 180;
  const renderLabel = ({ cx, cy, midAngle, outerRadius, percent }) => {
    const r = outerRadius + 8;
    const sx = cx + r * Math.cos(-midAngle * RAD);
    const sy = cy + r * Math.sin(-midAngle * RAD);
    const mx = cx + (r + 11) * Math.cos(-midAngle * RAD);
    const my = cy + (r + 12) * Math.sin(-midAngle * RAD);
    const ex = mx + (Math.cos(-midAngle * RAD) >= 0 ? 14 : -14);
    const ey = my;

    const textAnchor = Math.cos(-midAngle * RAD) >= 0 ? "start" : "end";
    const pct = `${Math.round(percent * 100)}%`;

    return (
      <g>
        <circle cx={sx} cy={sy} r={3} fill="#ffffff" opacity={0.9} />
        <path d={`M${sx},${sy} L${mx},${my} L${ex},${ey}`} stroke="#ffffff" fill="none" opacity={0.65} />
        <text x={ex + (textAnchor === "start" ? 4 : -4)} y={ey} dy="0.35em" fill="#ffffff" fontSize="12" textAnchor={textAnchor}>
          {pct}
        </text>
      </g>
    );
  };

  return (
    <Card
      style={{
        width: n(271.96209716796875),
        height: n(310),
        top: n(-21),
        left: n(926 - BASE_LEFT),
        borderRadius: n(5.68),
        opacity: 1,
        background: "#292929",
      }}
    >
      <div className="p-1 h-full">
        <div className="text-x font-bold text-white">Spant Chart</div>

        <div className="relative mx-auto mt-1 w-full h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ left: -33, right: 2 }}>
              <Pie data={[{ value: 100 }]} dataKey="value" cx="58%" cy="52%" outerRadius={54} stroke="none" fill="#1f1f1f" />
              <Pie
                data={data}
                cx="58%"
                cy="52%"
                innerRadius={48}
                outerRadius={78}
                paddingAngle={0}
                cornerRadius={3}
                dataKey="value"
                stroke="none"
                label={renderLabel}
                labelLine={false}
              >
                {data.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-[11px] text-gray-300">
          {data.map((item) => (
            <span key={item.name} className="flex items-center gap-1 capitalize">
              <span className="inline-block w-3 h-3 rounded-[3px]" style={{ backgroundColor: item.color }} />
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}

function StatisticSliders() {
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
    <Card
      style={{
        width: n(163),
        height: n(310),
        top: n(-21),
        left: n(1206 - BASE_LEFT),
        borderRadius: n(5),
        opacity: 1,
        background: "#292929",
      }}
    >
      <div className="p-4 h-full">
        <div className="text-x font-bold text-white">Statistic</div>
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

/* ================= SMALL CARDS ROW (ONE LINE) ================= */
/** Wrapper ko absolute rakha hai, aur andr flex row — equal gap + single line */
const SMALL_ROW_TOP = 175;                         // aapka hi top
const SMALL_ROW_LEFT = 270 - BASE_LEFT - 23;       // aapke OFFSET=23 ke hisaab se
const SMALL_GAP = 6;                                // equal gap

function SmallCardItem({ title, count, img, width, bg }) {
  return (
    <div
      className="relative border border-white/4 shadow-sm overflow-hidden"
      style={{
        width,
        height: n(104),
        borderRadius: n(5.01),
        background: bg,
      }}
    >
      <img
        src={img}
        alt=""
        className="absolute left-2 top-2 h-12 w-auto object-contain select-none pointer-events-none"
        draggable={false}
      />
      <div className="absolute top-2 right-3 text-white text-xl font-bold leading-none">{count}</div>
      <div className="absolute bottom-2 right-3 text-[11px] text-white/90">{title}</div>
    </div>
  );
}

function SmallCardsRow() {
  const items = [
    { title: "All merchants",      count: "1500", img: imgCard1, width: 168, bg: "#292929" },
    { title: "Banned merchants",   count: "10",   img: imgCard2, width: 162, bg: "#8BC255" }, // only #2 green
    { title: "Verified merchants", count: "1400", img: imgCard3, width: 162, bg: "#292929" },
    { title: "Active merchants",   count: "1200", img: imgCard4, width: 163, bg: "#292929" },
  ];

  return (
    <div
      className="absolute"
      style={{
        top: n(SMALL_ROW_TOP),
        left: n(SMALL_ROW_LEFT),
      }}
    >
      <div className="flex" style={{ gap: `${SMALL_GAP}px` }}>
        {items.map((it, i) => (
          <SmallCardItem key={i} {...it} />
        ))}
      </div>
    </div>
  );
}

/* ================= TABLE ================= */
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
        <div className="truncate text-[11px] font-medium leading-5" title={row.name}>
          {row.name}
        </div>
        <div className="text-[9.5px] text-white/55 truncate" title={row.email}>
          {row.email}
        </div>
        <div className="text-[9.5px] text-white/55 truncate" title={row.number}>
          {row.number}
        </div>
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
            const renderStatus =
              st.includes("not") ? "Not verified" : st === "verified" ? "verified" : st === "banned" ? "Banned" : row.status || "—";
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

/* ================= PAGE ================= */
function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="mx-auto w-full max-w-[1200px] p-4 sm:p-6">
        {/* HERO canvas */}
        <div className="relative w-full mb-2" style={{ height: 420 }}>
          {/* 5 Big cards */}
          <BestSaler />
          <TopLocation />
          <VerifiedAccount />
          <SpantChart />
          <StatisticSliders />

          {/* Small cards: always one line, equal gap */}
          <SmallCardsRow />
        </div>

        {/* Filters */}
        <div className="mb-2 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between whitespace-nowrap">
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
              <option>verified</option>
              <option>Banned</option>
            </select>
            <button className="rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2 text-sm">scv</button>
            <button className="rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2 text-sm">pdf</button>
            <button className="rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2 text-sm">excle</button>
            <button className="rounded-full bg-yellow-500 px-6 py-2 text-sm font-semibold text-black hover:bg-yellow-400">
              + New merchants
            </button>
          </div>
        </div>

        {/* Table */}
        <MerchantsTable />
      </div>
    </div>
  );
}

export default Dashboard;
