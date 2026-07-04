'use client';

import { ShieldCheck, MessageCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const operators = [
  {
    id: 1,
    name: "Bali Local Guides",
    rating: 4.9,
    reviews: 2100,
    experience: "15 years",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    languages: ["English", "Indonesian"],
  },
  {
    id: 2,
    name: "Adventure Bali",
    rating: 4.8,
    reviews: 1450,
    experience: "8 years",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    languages: ["English", "French"],
  }
];

export function VerifiedOperators() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {operators.map((op, i) => (
        <motion.div
          key={op.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-start gap-4 p-5 rounded-2xl border border-gray-800 bg-gray-900/50 hover:bg-gray-800 transition"
        >
          <img src={op.avatar} alt={op.name} className="w-16 h-16 rounded-full object-cover" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg text-white">{op.name}</h3>
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
              <span className="flex items-center gap-1"><Star className="h-4 w-4 text-yellow-400" /> {op.rating}</span>
              <span>•</span>
              <span>{op.experience} exp</span>
            </div>
            <div className="flex gap-2">
              <button className="text-sm bg-indigo-600 hover:bg-indigo-700 px-4 py-1.5 rounded-lg text-white font-medium transition">
                View Fleet
              </button>
              <button className="text-sm bg-gray-800 hover:bg-gray-700 px-4 py-1.5 rounded-lg text-white font-medium transition flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> Message
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
