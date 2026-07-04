'use client';

import { Mountain, ThermometerSun, Languages, Coins, CalendarDays, ShieldCheck, Accessibility, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const facts = [
  { icon: Mountain, label: "Elevation", value: "200m - 600m" },
  { icon: ThermometerSun, label: "Climate", value: "Tropical (26-30°C)" },
  { icon: Languages, label: "Language", value: "Indonesian, English" },
  { icon: Coins, label: "Currency", value: "IDR (Rp)" },
  { icon: CalendarDays, label: "Best Season", value: "April to October" },
  { icon: ShieldCheck, label: "Safety Score", value: "92/100" },
  { icon: Accessibility, label: "Accessibility", value: "Moderate" },
  { icon: Clock, label: "Avg. Stay", value: "5-7 Days" },
];

export function QuickFacts() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {facts.map((fact, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-gray-800/50 transition"
        >
          <div className="h-10 w-10 bg-indigo-500/10 rounded-full flex items-center justify-center mb-3">
            <fact.icon className="h-5 w-5 text-indigo-400" />
          </div>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">{fact.label}</p>
          <p className="text-sm font-medium text-white">{fact.value}</p>
        </motion.div>
      ))}
    </div>
  );
}
