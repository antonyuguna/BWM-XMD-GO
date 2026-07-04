'use client';

import { motion } from 'framer-motion';

const images = [
  { src: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80", alt: "Temple", style: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80", alt: "Rice Terrace", style: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80", alt: "Culture", style: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&q=80", alt: "Nature", style: "col-span-1 row-span-1" },
];

export function ImageGallery() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[600px]">
      {images.map((img, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 0.98 }}
          className={`relative rounded-2xl overflow-hidden cursor-pointer ${img.style}`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-300" />
        </motion.div>
      ))}
    </div>
  );
}
