'use client';

import { ShieldAlert, Hospital, Wifi, Car } from 'lucide-react';

export function SafetyIntelligence() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-3xl p-8 backdrop-blur">
        <div className="text-emerald-400 mb-2 font-semibold tracking-wider uppercase text-sm">Overall Safety</div>
        <div className="text-5xl font-bold text-white mb-4">92<span className="text-2xl text-gray-500">/100</span></div>
        <p className="text-gray-300">Very safe for tourists. Low crime rate. Exercise normal precautions in crowded areas.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <Hospital className="h-6 w-6 text-blue-400 mb-3" />
          <h4 className="font-medium text-white mb-1">Healthcare</h4>
          <p className="text-sm text-gray-400">Excellent international clinics available.</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <Car className="h-6 w-6 text-yellow-400 mb-3" />
          <h4 className="font-medium text-white mb-1">Roads</h4>
          <p className="text-sm text-gray-400">Heavy traffic. Scooters require caution.</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
          <Wifi className="h-6 w-6 text-indigo-400 mb-3" />
          <h4 className="font-medium text-white mb-1">Connectivity</h4>
          <p className="text-sm text-gray-400">4G widely available. Good Wi-Fi.</p>
        </div>
        <div className="bg-red-950/30 border border-red-500/20 rounded-2xl p-5">
          <ShieldAlert className="h-6 w-6 text-red-400 mb-3" />
          <h4 className="font-medium text-white mb-1">Alerts</h4>
          <p className="text-sm text-gray-400">Monkey forest: Secure loose items.</p>
        </div>
      </div>
    </div>
  );
}
