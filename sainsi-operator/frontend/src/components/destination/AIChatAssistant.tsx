'use client';

import { useState } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-indigo-600 text-white rounded-full shadow-2xl hover:bg-indigo-500 transition-transform hover:scale-105 z-50 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        aria-label="Open AI chat assistant"
      >
        <Sparkles className="h-6 w-6" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[380px] h-[500px] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            <div className="p-4 bg-gray-800 border-b border-gray-700 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-indigo-400" aria-hidden="true" />
                <h3 className="font-semibold text-white">SAINSI Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-md p-0.5"
                aria-label="Close AI chat assistant"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-black/50">
              <div className="bg-indigo-950/40 border border-indigo-500/20 text-gray-200 p-3 rounded-2xl rounded-tl-sm text-sm inline-block max-w-[85%]">
                Hi! I&apos;m your SAINSI travel assistant. I know everything about this destination. What would you like to know?
              </div>
            </div>

            <div className="p-3 bg-gray-800 border-t border-gray-700">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  aria-label="Message"
                  className="w-full bg-black border border-gray-700 rounded-full py-2.5 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800"
                />
                <button
                  className="absolute right-2 top-2 p-1 text-indigo-400 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
