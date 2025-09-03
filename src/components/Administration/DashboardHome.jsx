import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Download, MoreHorizontal, MessageCircle, Phone, Hand, Edit3, BarChart3, Code, TrendingUp, TrendingDown } from "lucide-react";

const DashboardHome = () => {
  // Sample data for the chart
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

  const [hoveredCountry, setHoveredCountry] = useState(null);
  
  const salesData = [
    { rank: 1, country: 'United States', customers: '12.8K', flag: '🇺🇸', color: 'bg-blue-500' },
    { rank: 2, country: 'China', customers: '5.3K', flag: '🇨🇳', color: 'bg-red-500' },
    { rank: 3, country: 'Turkey', customers: '2.7K', flag: '🇹🇷', color: 'bg-red-600' },
    { rank: 4, country: 'Brazil', customers: '1.0K', flag: '🇧🇷', color: 'bg-yellow-500' }
  ];

  const customers = [
    { name: 'Seth Daniels', username: '@sethdaniels', avatar: '👤' },
    { name: 'Myrtle Perkins', username: '@myrtleperkins', avatar: '🦄' },
    { name: 'Dominic Baker', username: '@dominicbaker', avatar: '📞' },
    { name: 'Ollie Baldwin', username: '@olliebaldwin', avatar: '👤' }
  ];

  const transactions = [
    { id: '#10023', type: 'payment', amount: '+$650.00', status: 'Completed', time: 'Today 10:30 AM', icon: '✅' },
    { id: '#10024', type: 'refund', amount: '-$250.00', status: 'Completed', time: 'Today 10:30 AM', icon: '↩️' },
    { id: '#10025', type: 'failed', amount: '+$128.00', status: 'Declined', time: 'Today 10:30 AM', icon: '❌' }
  ];

  // SVG Circle component for progress rings
  const CircularProgress = ({ percentage, color, size = 80 }) => {
    const radius = (size - 8) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            className="text-gray-700"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={color}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out',
            }}
          />
        </svg>
      </div>
    );
  };

  // World Map component
  const WorldMap = () => (
    <svg viewBox="0 0 800 400" className="w-full h-full">
      {/* Background */}
      <rect width="800" height="400" fill="transparent" />
      
      {/* North America - United States */}
      <g className="cursor-pointer transition-all duration-200 hover:opacity-80">
        <path
          d="M150 80 L280 85 L285 120 L290 140 L275 160 L250 155 L220 165 L190 170 L160 150 L140 120 Z"
          fill="#3b82f6"
          className="drop-shadow-lg"
        />
        <text x="215" y="125" fill="white" fontSize="12" textAnchor="middle" className="font-medium">
          United States
        </text>
      </g>

      {/* South America - Brazil */}
      <g className="cursor-pointer transition-all duration-200 hover:opacity-80">
        <path
          d="M220 220 L280 225 L290 260 L285 290 L270 310 L250 315 L230 310 L215 285 L210 250 Z"
          fill="#eab308"
          className="drop-shadow-lg"
        />
      </g>

      {/* Asia - China */}
      <g className="cursor-pointer transition-all duration-200 hover:opacity-80">
        <path
          d="M550 90 L620 95 L635 110 L630 140 L615 155 L590 160 L565 150 L545 125 L540 105 Z"
          fill="#ef4444"
          className="drop-shadow-lg"
        />
      </g>

      {/* Europe/Asia - Turkey */}
      <g className="cursor-pointer transition-all duration-200 hover:opacity-80">
        <path
          d="M480 110 L520 115 L525 130 L515 140 L490 145 L470 135 L465 120 Z"
          fill="#dc2626"
          className="drop-shadow-lg"
        />
      </g>

      {/* Additional continents for visual completeness */}
      {/* Africa */}
      <path
        d="M420 160 L480 165 L485 200 L490 240 L480 280 L460 300 L440 305 L420 295 L405 270 L400 230 L405 190 Z"
        fill="#374151"
        className="opacity-60"
      />

      {/* Europe */}
      <path
        d="M380 80 L440 85 L445 105 L440 125 L420 130 L395 125 L375 110 L370 95 Z"
        fill="#374151"
        className="opacity-60"
      />

      {/* Australia */}
      <path
        d="M620 280 L670 285 L675 305 L665 315 L640 310 L615 300 Z"
        fill="#374151"
        className="opacity-60"
      />

      {/* Additional Asian countries */}
      <path
        d="M580 160 L620 165 L625 185 L615 200 L590 195 L575 180 Z"
        fill="#374151"
        className="opacity-60"
      />

      {/* Greenland area for visual balance */}
      <g className="cursor-pointer transition-all duration-200 hover:opacity-80">
        <path
          d="M680 40 L720 45 L725 70 L715 85 L690 80 L675 65 Z"
          fill="#10b981"
          className="drop-shadow-lg"
        />
      </g>
    </svg>
  );

  const CustomerCard = ({ customer, showActions = true }) => (
    <div className="flex items-center justify-between p-3 hover:bg-gray-800 rounded-lg transition-colors">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-lg">
          {customer.avatar}
        </div>
        <div>
          <div className="text-white font-medium text-sm">{customer.name}</div>
          <div className="text-gray-400 text-xs">{customer.username}</div>
        </div>
      </div>
      {showActions && (
        <div className="flex items-center space-x-2">
          <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
            <MessageCircle className="w-4 h-4 text-gray-400" />
          </button>
          <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
            <Phone className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      )}
    </div>
  );

  const TransactionRow = ({ transaction }) => (
    <div className="flex items-center justify-between p-3 hover:bg-gray-800 rounded-lg transition-colors">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 flex items-center justify-center">
          <span className="text-lg">{transaction.icon}</span>
        </div>
        <div>
          <div className="text-white text-sm font-medium">
            {transaction.type === 'payment' && `Payment from ${transaction.id}`}
            {transaction.type === 'refund' && `Process refund to ${transaction.id}`}
            {transaction.type === 'failed' && `Payment failed from ${transaction.id}`}
          </div>
          <div className="text-gray-400 text-xs">{transaction.time}</div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <div className={`font-semibold text-sm ${
            transaction.type === 'refund' ? 'text-white' : 'text-white'
          }`}>
            {transaction.amount}
          </div>
        </div>
        <div className={`px-2 py-1 rounded text-xs font-medium ${
          transaction.status === 'Completed' 
            ? 'bg-green-900 text-green-400' 
            : 'bg-red-900 text-red-400'
        }`}>
          {transaction.status}
        </div>
      </div>
    </div>
  );

  const SectionHeader = ({ title, showMore = true }) => (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-white font-semibold text-lg">{title}</h2>
      {showMore && (
        <button className="text-gray-400 hover:text-white transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      )}
    </div>
  );

  const AnalyticsDashboard = () => (
    <div className="bg-gray-900 p-4 rounded-xl mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 md:gap-6">
        
        {/* Usage Rate of Offers */}
        <div className="xl:col-span-1 bg-gray-800 rounded-xl p-4 md:p-6 flex flex-col items-center space-y-3">
          <CircularProgress percentage={75} color="text-green-500" size={60} />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">75%</div>
            <div className="text-gray-400 text-sm">Usage rate of offers</div>
          </div>
        </div>

        {/* Usage Rate of Loyalty */}
        <div className="xl:col-span-1 bg-gray-800 rounded-xl p-4 md:p-6 flex flex-col items-center space-y-3">
          <CircularProgress percentage={50} color="text-purple-500" size={60} />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">50%</div>
            <div className="text-gray-400 text-sm">Usage rate of loyalty</div>
          </div>
        </div>

        {/* Growth Metrics */}
        <div className="xl:col-span-1 bg-gray-800 rounded-xl p-4 md:p-6 flex flex-col justify-center space-y-4">
          <div className="flex items-center space-x-2 text-green-400">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">20.15%</span>
          </div>
          <div className="flex items-center space-x-2 text-red-400">
            <TrendingDown className="w-4 h-4" />
            <span className="text-sm font-medium">20.15%</span>
          </div>
        </div>

        {/* New Downloads with Chart */}
        <div className="xl:col-span-4 bg-gray-800 rounded-xl p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {/* Downloads Info */}
            <div className="lg:col-span-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-white">$21.2K</div>
                <div className="text-gray-400 text-sm">new downloads</div>
              </div>
              <div className="flex items-center space-x-1 text-green-400 text-sm mt-4">
                <TrendingUp className="w-4 h-4" />
                <span>195.23%</span>
              </div>
            </div>
            
            {/* World Map */}
            <div className="lg:col-span-2">
              <div className="w-full h-48 md:h-64 lg:h-full relative bg-gray-700 rounded-lg overflow-hidden">
                <WorldMap />
                
                {/* Animated dots for sales locations */}
                <div className="absolute inset-0">
                  {/* United States */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full"></div>
                  
                  {/* China */}
                  <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  
                  {/* Brazil */}
                  <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75" style={{animationDelay: '2s'}}></div>
                  <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                  
                  {/* Turkey */}
                  <div className="absolute top-1/4 left-1/2 w-1.5 h-1.5 bg-red-600 rounded-full animate-ping opacity-75" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-red-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#222222] text-gray-100 min-h-screen p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm ">Show:</span>
          <div className="bg-[#222222] px-2 py-1 rounded text-sm ">
            <select
              name="section"
              className="bg-[#222222] focus:outline-none text-white"
            >
              <option>This Year</option>
              <option>Last Year</option>
              <option>Last 3 Years</option>
            </select>
          </div>
        </div>
        <button className="bg-[#171717] hover:bg-blue-700 px-4 py-2 rounded flex items-center gap-2 text-sm transition-colors w-full sm:w-auto justify-center">
          <Download size={16} />
          Generate Report
        </button>
      </div>

      {/* Analytics Overview */}
      <div className="mb-8">
        <div className="bg-[#222222] p-4 sm:p-6 rounded-lg">
          <h2 className="text-lg font-medium mb-6">Analytics Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Sales Card */}
            <div className="bg-[#171717] p-4 sm:p-6 rounded-lg">
              <div className="text-gray-400 text-sm mb-2">SALES</div>
              <div className="text-2xl md:text-3xl font-bold mb-1">
                $21.2K
              </div>
              <div className="text-gray-500 text-xs mb-3">
                ($19.2K last year)
              </div>
              <div className="flex items-center text-green-400 text-sm">
                <span className="mr-1">↗</span>
                <span>10.25 %</span>
              </div>
            </div>

            {/* Purchase Card */}
            <div className="bg-[#171717] p-4 sm:p-6 rounded-lg">
              <div className="text-gray-400 text-sm mb-2">PURCHASE</div>
              <div className="text-2xl md:text-3xl font-bold mb-1">
                $16.0K
              </div>
              <div className="text-gray-500 text-xs mb-3">
                ($20.1K last year)
              </div>
              <div className="flex items-center text-red-400 text-sm">
                <span className="mr-1">↘</span>
                <span>20.15 %</span>
              </div>
            </div>

            {/* Return Card */}
            <div className="bg-[#171717] p-4 sm:p-6 rounded-lg">
              <div className="text-gray-400 text-sm mb-2">RETURN</div>
              <div className="text-2xl md:text-3xl font-bold mb-1">
                $259.0
              </div>
              <div className="text-gray-500 text-xs mb-3">
                ($300.5 last year)
              </div>
              <div className="flex items-center text-green-400 text-sm">
                <span className="mr-1">↗</span>
                <span>15.20 %</span>
              </div>
            </div>

            {/* Marketing Card */}
            <div className="bg-[#171717] p-4 sm:p-6 rounded-lg">
              <div className="text-gray-400 text-sm mb-2">MARKETING</div>
              <div className="text-2xl md:text-3xl font-bold mb-1">
                $13.1K
              </div>
              <div className="text-gray-500 text-xs mb-3">
                ($10.5K last year)
              </div>
              <div className="flex items-center text-green-400 text-sm">
                <span className="mr-1">↗</span>
                <span>32.84 %</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Figures Chart */}
      <div className="bg-gray-800 p-4 sm:p-6 rounded-lg relative mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 ">
          <h3 className="text-lg font-medium">Sales Figures</h3>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-400">Net amount</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-400">Paid amount</span>
            </div>
          </div>
        </div>

        {/* Chart Container */}
        <div className="h-60 sm:h-72 md:h-80 mb-6">
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
                stroke="#3B82F6"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: "#3B82F6" }}
              />
              <Line
                type="monotone"
                dataKey="paidAmount"
                stroke="#10B981"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: "#10B981" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Month indicator */}
        <div className="absolute top-1/2 right-4 md:right-20 transform -translate-y-1/2 text-right hidden lg:block">
          <div className="text-gray-400 text-xs">July</div>
          <div className="text-white font-medium">26K</div>
        </div>
      </div>

      {/* Analytics Dashboard */}
      <AnalyticsDashboard />

      {/* Customer and Transaction Sections */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        {/* New Customers */}
        <div className="bg-gray-800 rounded-xl p-6">
          <SectionHeader title="New Customers" />
          <div className="space-y-2">
            {customers.map((customer, index) => (
              <CustomerCard key={index} customer={customer} />
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-gray-400 hover:text-white text-sm transition-colors">
            View more Customers
          </button>
        </div>

        {/* Transaction History */}
        <div className="bg-gray-800 rounded-xl p-6">
          <SectionHeader title="Transaction History" />
          <div className="space-y-2">
            {transactions.map((transaction, index) => (
              <TransactionRow key={index} transaction={transaction} />
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-gray-400 hover:text-white text-sm transition-colors">
            View All transactions
          </button>
        </div>
      </div>
       
       
      
    </div>
  );
};

export default DashboardHome;


// Still not complete this page 