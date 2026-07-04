'use client';

import { Star, Clock, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: "Sacred Monkey Forest Guided Tour",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&q=80",
    price: 45,
    duration: "3 hours",
    rating: 4.8,
    reviews: 1240,
    operator: "Bali Local Guides"
  },
  {
    id: 2,
    title: "Tegallalang Rice Terrace Sunrise Trek",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
    price: 65,
    duration: "5 hours",
    rating: 4.9,
    reviews: 850,
    operator: "Adventure Bali"
  },
  {
    id: 3,
    title: "Traditional Balinese Cooking Class",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80",
    price: 55,
    duration: "4 hours",
    rating: 4.7,
    reviews: 432,
    operator: "Chef Wayan"
  }
];

export function ExperiencesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden group hover:border-indigo-500/50 transition"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <button className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur rounded-full text-white hover:bg-black/60 transition">
              <Heart className="h-4 w-4" />
            </button>
          </div>

          <div className="p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg leading-tight line-clamp-2 pr-4">{exp.title}</h3>
              <span className="font-bold text-lg text-indigo-400">${exp.price}</span>
            </div>

            <p className="text-sm text-gray-400 mb-4">by {exp.operator}</p>

            <div className="flex items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span>{exp.rating} ({exp.reviews})</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-gray-400" />
                <span>{exp.duration}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
