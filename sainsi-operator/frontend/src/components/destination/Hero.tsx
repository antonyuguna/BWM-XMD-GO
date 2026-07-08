'use client';

import { motion } from 'framer-motion';
import { Heart, Share2, Star, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image/Video with Parallax effect via CSS or Framer */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2538&auto=format&fit=crop"
          alt="Bali Destination"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </motion.div>

      <div className="relative z-10 h-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 text-indigo-400 mb-4 text-sm font-semibold tracking-widest uppercase">
            <MapPin className="h-4 w-4" /> Indonesia
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6">Ubud, Bali</h1>

          <div className="flex items-center gap-6 mb-8 text-lg">
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="font-medium">4.92</span>
              <span className="text-gray-300 text-sm">(12.4k reviews)</span>
            </div>

            <div className="flex gap-3">
              <button aria-label="Save to favorites" className="p-3 bg-black/30 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                <Heart className="h-5 w-5" />
              </button>
              <button aria-label="Share destination" className="p-3 bg-black/30 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Explore Destination
            </button>
            <button className="bg-indigo-600/90 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-500 transition border border-indigo-400/30">
              Book Experience
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
