'use client';

import { CloudRain, Sun, Wind } from 'lucide-react';

export function Weather() {
  return (
    <div className="bg-gradient-to-br from-blue-900/40 to-gray-900 border border-blue-500/20 rounded-3xl p-6 h-full backdrop-blur-xl">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Sun className="text-yellow-400" /> Current Weather
      </h3>

      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-6xl font-light text-white">28°C</p>
          <p className="text-blue-300 mt-2">Partly Cloudy</p>
        </div>
        <div className="text-right space-y-2 text-sm text-gray-300">
          <p className="flex items-center justify-end gap-2"><CloudRain className="h-4 w-4 text-blue-400" /> 20% Chance</p>
          <p className="flex items-center justify-end gap-2"><Wind className="h-4 w-4 text-gray-400" /> 12 km/h</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {['Mon', 'Tue', 'Wed', 'Thu'].map((day) => (
          <div key={day} className="text-center bg-black/40 rounded-xl p-3 border border-white/5">
            <p className="text-xs text-gray-400 mb-2">{day}</p>
            <Sun className="h-5 w-5 text-yellow-400 mx-auto mb-2" />
            <p className="font-medium">29°</p>
          </div>
        ))}
      </div>
    </div>
  );
}
