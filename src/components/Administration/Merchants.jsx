import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";
import { MoreHorizontal, MessageCircle, Phone, Ban } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

/* ===================== Demo Data ===================== */
const chartData = [
  { month: "Jan", netAmount: 600, paidAmount: 550 },
  { month: "Feb", netAmount: 650, paidAmount: 620 },
  { month: "Mar", netAmount: 700, paidAmount: 680 },
  { month: "Apr", netAmount: 750, paidAmount: 720 },
  { month: "May", netAmount: 800, paidAmount: 770 },
  { month: "Jun", netAmount: 780, paidAmount: 750 },
  { month: "Jul", netAmount: 820, paidAmount: 800 },
  { month: "Aug", netAmount: 600, paidAmount: 580 },
  { month: "Sep", netAmount: 500, paidAmount: 480 },
  { month: "Oct", netAmount: 450, paidAmount: 430 },
  { month: "Nov", netAmount: 500, paidAmount: 470 },
  { month: "Dec", netAmount: 550, paidAmount: 520 },
];

const customers = [
  { name: "Seth Daniels", username: "@sethdaniels", avatar: "👤" },
  { name: "Myrtle Perkins", username: "@myrtleperkins", avatar: "🦄" },
  { name: "Dominic Baker", username: "@dominicbaker", avatar: "📞" },
  { name: "Ollie Baldwin", username: "@olliebaldwin", avatar: "👤" },
];

const newMerchants = [
  { name: "Hotel Ibis", username: "Hotels", avatar: "🏨" },
  { name: "Foodkite", username: "Restaurants", avatar: "🍔" },
  { name: "Ice French", username: "Desserts", avatar: "🍨" },
  { name: "Pizza Megia", username: "Restaurants", avatar: "🍕" },
];

const transactions = [
  {
    id: "#10023",
    type: "payment",
    amount: "+$650.00",
    status: "Completed",
    time: "Today, 10:30 AM",
  },
  {
    id: "#10024",
    type: "refund",
    amount: "-$250.00",
    status: "Completed",
    time: "Today, 10:30 AM",
  },
  {
    id: "#10025",
    type: "failed",
    amount: "+$128.00",
    status: "Declined",
    time: "Today, 10:30 AM",
  },
];

/* ===================== Small circular ring ===================== */
const Ring = ({ percent = 75, color = "#22c55e" }) => {
  const size = 60;
  const stroke = 6;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (percent / 100) * c;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="-rotate-90"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="#2f2f2f"
        strokeWidth={stroke}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke={color}
        strokeWidth={stroke}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${c - dash}`}
      />
    </svg>
  );
};

/* ===================== Rows ===================== */
const PersonRow = ({ item }) => (
  <div className="flex items-center justify-between py-3">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-white/10 grid place-items-center text-lg border border-white/10">
        {item.avatar}
      </div>
      <div>
        <div className="text-white text-sm font-medium">{item.name}</div>
        <div className="text-white/50 text-xs">{item.username}</div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <button className="h-8 w-8 rounded-full grid place-items-center bg-white/5 border border-white/10 text-white/70 hover:text-white">
        <MessageCircle className="h-4 w-4" />
      </button>
      <button className="h-8 w-8 rounded-full grid place-items-center bg-white/5 border border-white/10 text-white/70 hover:text-white">
        <Phone className="h-4 w-4" />
      </button>
      <button className="h-8 w-8 rounded-full grid place-items-center bg-white/5 border border-white/10 text-white/70 hover:text-white">
        <Ban className="h-4 w-4" />
      </button>
    </div>
  </div>
);

const PaymentRow = ({ tx }) => {
  const tone =
    tx.type === "payment" ? "green" : tx.type === "refund" ? "amber" : "red";
  const colorMap = {
    green: { bg: "bg-emerald-500/15", dot: "bg-emerald-400" },
    amber: { bg: "bg-amber-500/15", dot: "bg-amber-400" },
    red: { bg: "bg-rose-500/15", dot: "bg-rose-400" },
  }[tone];

  const title =
    tx.type === "payment"
      ? "Payment from"
      : tx.type === "refund"
      ? "Process refund to"
      : "Payment failed from";

  return (
    <div className="grid grid-cols-[1fr_auto_auto] items-center py-3">
      <div className="flex items-start gap-3 pr-3">
        <span
          className={`h-6 w-6 rounded-full ${colorMap.bg} grid place-items-center`}
        >
          <span className={`h-2.5 w-2.5 rounded-full ${colorMap.dot}`} />
        </span>
        <div>
          <div className="text-white text-sm">
            {title}{" "}
            <a href="#" className="text-sky-400 hover:underline">
              {tx.id}
            </a>
          </div>
          <div className="text-xs text-white/50">{tx.time}</div>
        </div>
      </div>
      <div className="text-right font-semibold text-white text-sm px-3">
        {tx.amount}
      </div>
      <div className="px-3">
        <span
          className={`inline-flex items-center rounded-md px-3 py-1 text-xs font-medium ${
            tx.status === "Completed"
              ? "bg-emerald-900 text-emerald-300"
              : "bg-rose-900 text-rose-300"
          }`}
        >
          {tx.status}
        </span>
      </div>
    </div>
  );
};

/* ===================== Sales Locations (react-simple-maps) ===================== */
const SalesLocations = () => {
  const GEO_URL =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  const highlights = {
    "United States of America": {
      color: "#2563eb",
      total: "12.8K",
      flag: "🇺🇸",
    },
    China: { color: "#10b981", total: "5.3K", flag: "🇨🇳" },
    Turkey: { color: "#6d28d9", total: "2.7K", flag: "🇹🇷" },
    Brazil: { color: "#f59e0b", total: "1.0K", flag: "🇧🇷" },
  };

  const list = [
    { rank: 1, key: "United States of America" },
    { rank: 2, key: "China" },
    { rank: 3, key: "Turkey" },
    { rank: 4, key: "Brazil" },
  ];

  const [activeKey, setActiveKey] = React.useState("United States of America");

  // label positions (lng, lat)
  const centers = {
    "United States of America": [-98, 39],
    China: [104, 35],
    Turkey: [35, 39],
    Brazil: [-53, -10],
  };

  return (
    <div className="bg-[#1e1e1e] rounded-2xl p-5 mt-6">
      <div className="text-white/80 text-sm mb-3">Sales Locations</div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left list */}
        <div className="lg:pr-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-5 lg:pb-0">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-3xl font-semibold text-white">21.2K</div>
              <div className="text-sm text-white/60 -mt-1">Our customers</div>
            </div>
            <div className="text-emerald-400 text-sm font-medium">
              ↑ 105.23 %
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {list.map(({ rank, key }) => {
              const item = highlights[key];
              return (
                <button
                  key={key}
                  onMouseEnter={() => setActiveKey(key)}
                  className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 transition rounded-xl px-3 py-2 text-left"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#2e2e2e] grid place-items-center text-xs text-white/80">
                      {rank}.
                    </div>
                    <span className="text-lg leading-none">{item.flag}</span>
                    <span className="text-white text-sm font-medium">
                      {key.replace(" of America", "")}
                    </span>
                  </div>
                  <span
                    className="text-[12px] text-white/90 px-3 py-1 rounded-full"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.total}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Map */}
        <div className="lg:col-span-2 lg:pl-6 pt-5 lg:pt-0">
          <div className="rounded-xl overflow-hidden bg-[#2a2a2a]">
            <ComposableMap
              projectionConfig={{ scale: 145 }}
              style={{ width: "100%", height: 360 }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const name = geo.properties.name;
                    const isHi = Boolean(highlights[name]);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => isHi && setActiveKey(name)}
                        style={{
                          default: {
                            fill: isHi ? highlights[name].color : "#3a3a3a",
                            outline: "none",
                            stroke: "#111827",
                            strokeWidth: 0.5,
                            opacity: isHi ? 1 : 0.55,
                          },
                          hover: {
                            fill: isHi ? highlights[name].color : "#4b4b4b",
                            outline: "none",
                          },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* active country label bubble */}
              {activeKey && centers[activeKey] && (
                <Annotation subject={centers[activeKey]} dx={0} dy={-25}>
                  <g transform="translate(-55,-28)">
                    <rect
                      width="110"
                      height="28"
                      rx="10"
                      ry="10"
                      fill="#111827"
                      opacity="0.95"
                    />
                    <text
                      x="55"
                      y="18"
                      fontSize="12"
                      textAnchor="middle"
                      fill="#fff"
                    >
                      {activeKey.replace(" of America", "")}
                    </text>
                  </g>
                </Annotation>
              )}
            </ComposableMap>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ===================== Page ===================== */
export default function DashboardHome() {
  return (
    <div className="bg-[#222222] text-gray-100 min-h-screen px-3 md:px-4">
      <div className="mx-auto w-full max-w-[1100px] py-4">
        {/* Analytics Overview */}
        <div className="bg-[#222222] p-4 sm:p-6 rounded-lg mb-6">
          <h2 className="text-sm text-white/80 mb-4">Analytics Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#171717] p-4 sm:p-5 rounded-2xl">
              <div className="text-gray-400 text-[11px] tracking-widest">
                SALES
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mt-1">
                $21.2K
              </div>
              <div className="text-xs text-gray-500 mt-1">
                ($19.2K last year)
              </div>
              <div className="text-green-400 text-sm mt-3">↑ 105.23 %</div>
            </div>
            <div className="bg-[#171717] p-4 sm:p-5 rounded-2xl">
              <div className="text-gray-400 text-[11px] tracking-widest">
                PURCHASE
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mt-1">
                $16.0K
              </div>
              <div className="text-xs text-gray-500 mt-1">
                ($20.1K last year)
              </div>
              <div className="text-red-400 text-sm mt-3">↓ 20.15 %</div>
            </div>
            <div className="bg-[#171717] p-4 sm:p-5 rounded-2xl">
              <div className="text-gray-400 text-[11px] tracking-widest">
                RETURN
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mt-1">
                $259.0
              </div>
              <div className="text-xs text-gray-500 mt-1">
                ($300.5 last year)
              </div>
              <div className="text-green-400 text-sm mt-3">↑ 15.20 %</div>
            </div>
            <div className="bg-[#171717] p-4 sm:p-5 rounded-2xl">
              <div className="text-gray-400 text-[11px] tracking-widest">
                MARKETING
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mt-1">
                $13.1K
              </div>
              <div className="text-xs text-gray-500 mt-1">
                ($10.5K last year)
              </div>
              <div className="text-green-400 text-sm mt-3">↑ 32.84 %</div>
            </div>
          </div>
        </div>

        {/* Sales Figures */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Sales Figures</h3>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 rounded-full px-3 py-1.5 bg-[#2a2a2a] text-xs text-white/80 hover:bg-[#333]">
                <span className="h-2.5 w-2.5 rounded-full bg-purple-500"></span>
                free account
              </button>
              <button className="flex items-center gap-2 rounded-full px-3 py-1.5 bg-[#2a2a2a] text-xs text-white/80 hover:bg-[#333]">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                Paid account
              </button>
            </div>
          </div>
          <div className="h-60 sm:h-72 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9CA3AF" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9CA3AF" }}
                  domain={[0, 1000]}
                  ticks={[0, 200, 400, 600, 800, 1000]}
                />
                <Line
                  type="monotone"
                  dataKey="netAmount"
                  stroke="#7c6cff"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="paidAmount"
                  stroke="#10B981"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Usage + Downloads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#1e1e1e] rounded-2xl p-5 md:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Ring percent={75} color="#22c55e" />
                <div>
                  <div className="text-white text-xl font-semibold">75%</div>
                  <div className="text-gray-400 text-sm">
                    Usage rate of offers
                  </div>
                </div>
              </div>
              <div className="text-green-400 text-sm font-medium">
                ↑ 20.15 %
              </div>
            </div>
            <div className="my-4 h-px bg-white/5" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Ring percent={50} color="#8b5cf6" />
                <div>
                  <div className="text-white text-xl font-semibold">50%</div>
                  <div className="text-gray-400 text-sm">
                    Usage rate of loyalty
                  </div>
                </div>
              </div>
              <div className="text-red-400 text-sm font-medium">↓ 20.15 %</div>
            </div>
          </div>

          <div className="bg-[#1e1e1e] rounded-2xl p-5 md:p-6">
            <div className="h-36 sm:h-44">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { v: 5 },
                    { v: 8 },
                    { v: 6 },
                    { v: 10 },
                    { v: 13 },
                    { v: 12 },
                    { v: 7 },
                  ]}
                >
                  <XAxis hide />
                  <YAxis hide domain={[0, 15]} />
                  <Line
                    type="monotone"
                    dataKey="v"
                    stroke="#7c6cff"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <div className="text-white text-lg font-semibold">$21.2K</div>
                <div className="text-gray-400 text-sm">new downloads</div>
              </div>
              <div className="text-green-400 text-sm font-medium">
                ↑ 105.23 %
              </div>
            </div>
          </div>
        </div>

        {/* Top row: New Customers + Transaction History */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#1e1e1e] rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="text-white font-semibold">New Customers</div>
              <button className="text-white/60 hover:text-white">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            <div className="divide-y divide-white/5">
              {customers.map((c, i) => (
                <PersonRow key={i} item={c} />
              ))}
            </div>
            <button className="mt-4 w-full h-9 rounded-full bg-white/5 text-gray-300 text-sm">
              View more Customers
            </button>
          </div>

          <div className="bg-[#1e1e1e] rounded-2xl p-5">
            <div className="text-white font-semibold mb-3">
              Transaction History
            </div>
            <div className="rounded-lg bg-[#2a2a2a] px-4 py-2 text-[11px] uppercase tracking-wider text-white/70 grid grid-cols-[1fr_auto_auto]">
              <div>Payment Number</div>
              <div className="text-right">Amount</div>
              <div className="text-right">Status</div>
            </div>
            <div className="mt-2 divide-y divide-white/5">
              {transactions.map((tx) => (
                <PaymentRow key={tx.id} tx={tx} />
              ))}
            </div>
            <div className="mt-2 h-9 rounded-full bg-white/5" />
            <button className="mt-3 w-full h-9 rounded-full bg-white/5 text-gray-300 text-sm">
              View All transactions
            </button>
          </div>
        </div>

        {/* Bottom row: New merchants + Transaction History */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#1e1e1e] rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="text-white font-semibold">New merchants</div>
              <button className="text-white/60 hover:text-white">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            <div className="divide-y divide-white/5">
              {newMerchants.map((m, i) => (
                <PersonRow key={i} item={m} />
              ))}
            </div>
            <button className="mt-4 w-full h-9 rounded-full bg-white/5 text-gray-300 text-sm">
              View more Customers
            </button>
          </div>

          <div className="bg-[#1e1e1e] rounded-2xl p-5">
            <div className="text-white font-semibold mb-3">
              Transaction History
            </div>
            <div className="rounded-lg bg-[#2a2a2a] px-4 py-2 text-[11px] uppercase tracking-wider text-white/70 grid grid-cols-[1fr_auto_auto]">
              <div>Payment Number</div>
              <div className="text-right">Amount</div>
              <div className="text-right">Status</div>
            </div>
            <div className="mt-2 divide-y divide-white/5">
              {transactions.map((tx) => (
                <PaymentRow key={tx.id} tx={tx} />
              ))}
            </div>
            <div className="mt-2 h-9 rounded-full bg-white/5" />
            <button className="mt-3 w-full h-9 rounded-full bg-white/5 text-gray-300 text-sm">
              View All transactions
            </button>
          </div>
        </div>

        {/* Sales Locations (exact world map) */}
        <SalesLocations />
      </div>
    </div>
  );
}
