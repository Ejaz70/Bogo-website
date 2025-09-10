import React, { useMemo, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { Search, ArrowUpDown } from "lucide-react"; // swap to PNGs if you prefer
import boy from "../../assets/boys.png";
import boys from "../../assets/boy.png";

/* ================== Chart Data ================== */
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
  if (st.includes("free trial")) return "free trial";
  if (st.includes("free")) return "FREE";
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

/* ================== Primitives ================== */
const Card = ({ children, style, className = "" }) => (
  <div className={`rounded-[10px] overflow-hidden ${className}`} style={style}>
    {children}
  </div>
);

/* ================== Top Cards ================== */
function CardSection() {
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

  return (
    <div className="w-full mb-6">
      <div className="flex gap-3">
        <Card style={{ width: 440, height: 147, background: "#8BC255" }}>
          <div className="h-full w-full flex">
            <div className="p-4 flex-1 flex flex-col">
              <div className="text-white text-[28px] leading-none font-semibold">15K</div>
              <div className="text-white/90 text-sm mt-2">All Customers</div>
            </div>
            <div className="h-full grid place-items-end p-2" style={{ width: 180 }}>
              <img src={boy} alt="customers" className="h-full object-contain" />
            </div>
          </div>
        </Card>

        <Card style={{ width: 234, height: 144, background: "#212121" }}>
          <div className="p-3 h-full relative">
            <div className="text-white/80 text-sm mb-1">Customer</div>
            <div className="relative" style={{ height: 100 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={genderData} cx="50%" cy="50%" innerRadius={28} outerRadius={44} dataKey="value" stroke="none">
                    {genderData.map((s, idx) => (
                      <Cell key={idx} fill={s.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute right-2 bottom-8 text-[10px] text-white/80 space-y-1">
                {genderData.map((g) => (
                  <div key={g.name} className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full" style={{ background: g.color }} />
                    <span>{g.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

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

        <Card style={{ width: 231, height: 143, background: "#212121" }}>
          <div className="p-3 h-full">
            <div className="text-white/85 text-sm mb-1">Verified account</div>
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

      <div className="flex gap-3 mt-3">
        <Card style={{ width: 440, height: 146, background: "#212121" }}>
          <div className="h-full w-full flex">
            <div className="p-4 flex-1 flex flex-col">
              <div className="text-white text-2xl leading-none">10</div>
              <div className="text-white/80 text-sm mt-1">Verified Customers</div>
            </div>
            <div className="h-full grid place-items-end p-2" style={{ width: 160 }}>
              <img src={boys} alt="verified" className="h-full object-contain" />
            </div>
          </div>
        </Card>

        <Card style={{ width: 440, height: 146, background: "#212121" }}>
          <div className="p-3 h-full">
            <div className="text-white/85 text-sm mb-2">Customers by age</div>
            <div className="grid grid-cols-4 gap-3 items-end" style={{ height: 110 }}>
              {[{c:"#ef4444",l:"18-"},{c:"#7C3AED",l:"20-24"},{c:"#F59E0B",l:"25-29"},{c:"#8B5CF6",l:"40+"}].map((meta, i) => (
                <div key={i} className="flex flex-col items-center justify-end">
                  <div className="w-8 rounded-md" style={{ height: `${[90,60,40,25][i]}px`, background: meta.c }} />
                  <div className="text-[10px] text-white/60 mt-1">{meta.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card style={{ width: 233, height: 146, background: "#212121", paddingTop: 6.18, paddingRight: 11.34, paddingBottom: 6.18, paddingLeft: 11.34 }}>
          <div className="text-white/85 text-sm">Right Now</div>
          <div className="mt-1 text-white text-3xl font-semibold leading-none">289</div>
          <div className="text-[10px] text-white/55 -mt-1 mb-2">active users</div>
          <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden flex">
            <div className="h-full" style={{ width: `43%`, background: "#F97316" }} />
            <div className="h-full" style={{ width: `57%`, background: "#22C55E" }} />
          </div>
          <div className="flex justify-between text-[10px] text-white/70 mt-1">
            <span>43% New Visitor</span>
            <span>57% Returning Visitor</span>
          </div>
        </Card>

        <Card style={{ width: 231, height: 146, background: "#212121", paddingTop: 6.18, paddingRight: 11.34, paddingBottom: 6.18, paddingLeft: 11.34 }}>
          <div className="text-white/85 text-sm mb-1">Spent Chart</div>
          <div style={{ height: 100 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={spentChartData} cx="50%" cy="50%" innerRadius={28} outerRadius={44} dataKey="value" labelLine={false} stroke="none">
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
function FiltersRow({ status, setStatus, account, setAccount, searchQuery, setSearchQuery }) {
  return (
    <div className="mb-4 flex w-full items-center justify-between gap-3">
      <div className="relative w-[260px]">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2 pl-10 text-sm placeholder:text-white/40 focus:outline-none"
          aria-label="Search customers"
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
      </div>
      <div className="flex items-center gap-3 text-sm">
        <select className="w-[160px] rounded-md border border-white/10 bg-[#1A1A1A] px-3 py-2" value={account} onChange={(e) => setAccount(e.target.value)} aria-label="Filter by account type">
          <option>All</option>
          <option>FREE</option>
          <option>PREMIUM</option>
          <option>free trial</option>
        </select>
        <select className="w-[140px] rounded-md border border-white/10 bg-[#1A1A1A] px-3 py-2" value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Filter by status">
          <option>All</option>
          <option>Not verified</option>
          <option>verified</option>
          <option>Banned</option>
        </select>
        <button className="rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2" onClick={() => alert("Export CSV coming soon")}>csv</button>
        <button className="rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2" onClick={() => alert("Export PDF coming soon")}>pdf</button>
        <button className="rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2" onClick={() => alert("Export Excel coming soon")}>excel</button>
        <button className="rounded-full bg-yellow-500 px-5 py-2 font-semibold text-white hover:bg-yellow-400">+ New Merchant</button>
      </div>
    </div>
  );
}

/* ================== Right Drawer: Customer Detail ================== */
function CustomerDetailPanel({ customer, onClose }) {
  if (!customer) return null;
  const Field = ({label, value}) => (
    <div className="flex items-center justify-between px-4 py-3 rounded-md bg-[#151515] border border-white/5">
      <span className="text-[11px] text-white/70">{label}</span>
      <span className="text-[12px] text-white/90">{value}</span>
    </div>
  );

  const Accordion = ({ title, children }) => {
    const [open, setOpen] = useState(true);
    return (
      <div className="rounded-[14px] bg-[#2a2a2a]">
        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-white/90 text-[14px]">
            <span className="inline-block h-2 w-2 rounded-full bg-white/40" />
            {title}
          </div>
          <span className={`transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
        </button>
        {open && <div className="px-4 pb-4 text-[12px] text-white/80">{children}</div>}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-[900px] max-w-[95vw] bg-[#0f0f0f] shadow-2xl border-l border-white/10 overflow-y-auto">
        <div className="flex">
          <aside className="w-[280px] bg-[#1a1a1a] border-r border-white/10 p-4 space-y-3">
            <div className="flex flex-col items-center text-center">
              <img src={customer.avatar} alt={customer.fullName} className="h-20 w-20 rounded-full object-cover" />
              <div className="mt-2 text-[15px] font-medium">{customer.fullName}</div>
              <div className="text-[11px] text-white/60">{customer.phone}</div>
            </div>
            <div className="flex items-center justify-between bg-[#ff6a3d] text-white text-[12px] px-3 py-1 rounded-full">
              <span>Banned person</span>
              <span className="bg-black/20 px-2 py-0.5 rounded-full">30 days</span>
            </div>
            <button className="w-full bg-[#ff6a3d] text-black/90 rounded-md px-3 py-2 text-[12px] font-semibold">Action ▾</button>
            <div className="space-y-2">
              <Field label="Joined On" value={customer.joinedOn} />
              <Field label="last login" value={"12/7/2023 13:08 PM"} />
              <Field label="Subscription number" value={"06"} />
              <Field label="male" value={"male"} />
              <Field label="The gift sent" value={"01"} />
              <Field label="The gift received" value={"04"} />
            </div>
          </aside>

          <main className="flex-1 p-6 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-white/90 text-[18px]">Moderation</div>
              <button onClick={onClose} className="text-white/70 hover:text-white">✕</button>
            </div>

            <div className="space-y-3">
              <Accordion title="Action">
                <div className="grid gap-2">
                  <label className="text-[12px]">Choose an action</label>
                  <select className="bg-[#1a1a1a] border border-white/10 rounded-md px-3 py-2 text-[12px]">
                    <option>Ban</option>
                    <option>Warn</option>
                    <option>Remove ban</option>
                  </select>
                </div>
              </Accordion>

              <Accordion title="Duration">
                <div className="grid grid-cols-3 gap-2">
                  {['24 hours','7 days','30 days'].map((d)=> (
                    <button key={d} className="bg-[#1a1a1a] border border-white/10 rounded-md px-3 py-2 text-[12px] hover:border-white/20">{d}</button>
                  ))}
                </div>
              </Accordion>

              <Accordion title="Scope (Where the ban applies)">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[12px]"><input type="checkbox"/> App</label>
                  <label className="flex items-center gap-2 text-[12px]"><input type="checkbox"/> Website</label>
                  <label className="flex items-center gap-2 text-[12px]"><input type="checkbox"/> Support chat</label>
                </div>
              </Accordion>

              <Accordion title="Reason (Optional but important for records)">
                <textarea rows={4} placeholder="Write reason..." className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-3 py-2 text-[12px]" />
              </Accordion>
            </div>

            <div className="flex gap-25 pt-4">
              <button className="px-6 py-4 rounded-full bg-[#2b2b2b] text-white/90">Review Later</button>
              <button className="px-6 py-4 rounded-full bg-[#22C55E] text-black font-semibold">Reject Ban</button>
              <button className="px-6 py-4 rounded-full bg-[#FF5A2A] text-white font-semibold">Active</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ================== Table ================== */
function CustomersTable({ rows, onOpen }) {
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
    <div className="rounded-xl border border-white/5 w-full overflow-x-auto">
      <div className={`${COLS} min-w-[1000px] bg-[#141414] px-2.5 py-4`}>
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
        <div key={i} className={`${COLS} min-w-[1000px] items-center border-t border-white/10 bg-[#0F0F0F]`}>
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
          <div className="h-12 grid place-items-end pr-2">
            <button
              type="button"
              onClick={() => onOpen(row)}
              className="grid h-8 w-[58px] place-items-center rounded-full bg-white text-black shadow-sm"
              aria-label="Open row"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ================== Page ================== */
export default function MerchantsCustomerScreen() {
  const [status, setStatus] = useState("All");
  const [account, setAccount] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const allRows = useMemo(() => makeCustomers(), []);

  const filteredRows = allRows.filter((row) => {
    const statusOk = status === "All" ? true : normalizeStatus(row.status) === status;
    const accNorm = normalizeAccount(row.account);
    const accountOk = account === "All" ? true : accNorm === account;
    const q = searchQuery.trim().toLowerCase();
    const searchOk = !q
      ? true
      : [row.fullName, row.email, row.phone].some((f) => String(f).toLowerCase().includes(q));
    return statusOk && accountOk && searchOk;
  });

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="mx-auto w-full max-w-[1109px] px-0 py-4 sm:py-6 relative">
        <CardSection />
        <FiltersRow
          status={status}
          setStatus={setStatus}
          account={account}
          setAccount={setAccount}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <CustomersTable rows={filteredRows} onOpen={(row) => setSelected(row)} />
      </div>

      <CustomerDetailPanel customer={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
