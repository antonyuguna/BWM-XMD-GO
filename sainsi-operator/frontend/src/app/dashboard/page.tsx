'use client';

import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import { DollarSign, Radio, Car, Star, TrendingUp, CheckCircle, Clock } from 'lucide-react';

const data = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 2000 },
  { name: 'Thu', revenue: 2780 },
  { name: 'Fri', revenue: 1890 },
  { name: 'Sat', revenue: 2390 },
  { name: 'Sun', revenue: 3490 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here is your business overview.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Widget 1 */}
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 shadow-sm backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Today&apos;s Earnings</p>
              <h2 className="mt-2 text-3xl font-bold text-white">$1,245.00</h2>
            </div>
            <div className="rounded-full bg-indigo-500/20 p-3 text-indigo-400">
              <DollarSign className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-emerald-400">
            <TrendingUp className="mr-1 h-4 w-4" />
            <span>+12.5% from yesterday</span>
          </div>
        </div>

        {/* Widget 2 */}
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 shadow-sm backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Active Requests</p>
              <h2 className="mt-2 text-3xl font-bold text-white">4</h2>
            </div>
            <div className="rounded-full bg-red-500/20 p-3 text-red-400">
              <Radio className="h-6 w-6 animate-pulse" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-400">
            <Clock className="mr-1 h-4 w-4" />
            <span>2 expiring soon</span>
          </div>
        </div>

        {/* Widget 3 */}
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 shadow-sm backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Fleet Availability</p>
              <h2 className="mt-2 text-3xl font-bold text-white">8/12</h2>
            </div>
            <div className="rounded-full bg-blue-500/20 p-3 text-blue-400">
              <Car className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-blue-400">
            <span>4 vehicles in use</span>
          </div>
        </div>

        {/* Widget 4 */}
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 shadow-sm backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Average Rating</p>
              <h2 className="mt-2 text-3xl font-bold text-white">4.9</h2>
            </div>
            <div className="rounded-full bg-yellow-500/20 p-3 text-yellow-400">
              <Star className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-400">
            <span>Based on 142 reviews</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 shadow-sm backdrop-blur">
          <h3 className="text-lg font-medium text-white mb-4">Revenue Trend</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151' }} />
                <Area type="monotone" dataKey="revenue" stroke="#6366f1" fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 shadow-sm backdrop-blur">
          <h3 className="text-lg font-medium text-white mb-4">Upcoming Trips</h3>
          <div className="space-y-4">
             {/* Mock Upcoming Trips List */}
             {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-black/40 border border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <Car className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Luxury Van - City Tour</p>
                      <p className="text-sm text-gray-400">Tomorrow at 9:00 AM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-white">$250</p>
                    <p className="text-xs text-emerald-400 flex items-center gap-1 justify-end mt-1">
                      <CheckCircle className="h-3 w-3" /> Confirmed
                    </p>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
