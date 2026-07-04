'use client';

import { Calendar, Users, ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function BookingSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-2xl backdrop-blur-xl"
    >
      <div className="flex justify-between items-end mb-6">
        <div>
          <p className="text-sm text-gray-400 mb-1">Starting from</p>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-white">$45</span>
            <span className="text-gray-400">/person</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-700 rounded-xl overflow-hidden divide-y divide-gray-700">
          <div className="p-3 flex items-center gap-3 hover:bg-gray-800 cursor-pointer transition">
            <Calendar className="text-indigo-400 h-5 w-5" />
            <div className="flex-1">
              <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Date</p>
              <p className="text-sm text-white">Select a date</p>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
          <div className="p-3 flex items-center gap-3 hover:bg-gray-800 cursor-pointer transition">
            <Users className="text-indigo-400 h-5 w-5" />
            <div className="flex-1">
              <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Guests</p>
              <p className="text-sm text-white">2 Adults</p>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>

      <button className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition text-lg mb-4 shadow-lg shadow-indigo-500/20">
        Check Availability
      </button>

      <div className="flex justify-center items-center gap-2 text-sm text-gray-400">
        <CheckCircle2 className="h-4 w-4 text-emerald-400" /> No payment required yet
      </div>
    </motion.div>
  );
}
