'use client';

import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function AISummary() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative rounded-3xl bg-gradient-to-b from-indigo-950/40 to-gray-900/40 border border-indigo-500/20 p-8 backdrop-blur-xl overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
          <Sparkles className="h-4 w-4 text-indigo-400" />
        </div>
        <h2 className="text-xl font-semibold text-white">AI Destination Insight</h2>
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-gray-300 leading-relaxed font-light">
          Nestled among lush rice terraces and dense rainforests, Ubud is the cultural heart of Bali.
          It&apos;s a sanctuary for spiritual seekers, artists, and nature lovers. You should visit if you&apos;re looking for
          yoga retreats, traditional Balinese crafts, and serene landscapes away from the coastal party scenes.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed font-light mt-4">
          A budget of <span className="text-white font-medium">$50-100 per day</span> is typical for a comfortable stay.
          Don&apos;t miss the Campuhan Ridge Walk at sunrise, and remember to dress modestly when visiting the ancient temples.
        </p>
      </div>

      {/* Simulated Typing Effect Cursor */}
      <motion.div
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="w-2 h-5 bg-indigo-400 inline-block align-middle ml-1 mt-1"
      />
    </motion.div>
  );
}
