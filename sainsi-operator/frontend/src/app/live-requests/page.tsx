'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { Radio, MapPin, Users, DollarSign, Clock, Check, X } from 'lucide-react';
// import { io } from 'socket.io-client';

export default function LiveRequests() {
  const { activeRequests, addRequest } = useStore();

  useEffect(() => {
    // Mock connecting to socket and receiving a request

    const mockRequest = {
      id: Math.random().toString(36).substr(2, 9),
      destination: "Ubud, Bali Tour",
      budget: 350,
      groupSize: 4,
      expiresAt: new Date(Date.now() + 5 * 60000), // 5 mins from now
    };

    if (activeRequests.length === 0) {
      addRequest(mockRequest);
    }
  }, [activeRequests.length, addRequest]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            Live Dispatch <Radio className="h-5 w-5 text-red-500 animate-pulse" />
          </h1>
          <p className="text-gray-400">Real-time tourist requests matching your fleet capabilities.</p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
          Online & Receiving
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {activeRequests.length === 0 ? (
          <div className="col-span-full py-12 text-center border border-dashed border-gray-800 rounded-xl bg-gray-900/20">
            <Radio className="h-8 w-8 text-gray-600 mx-auto mb-3" />
            <p className="text-gray-400">Waiting for new requests...</p>
          </div>
        ) : (
          activeRequests.map((request) => (
            <div key={request.id} className="rounded-xl border border-indigo-500/30 bg-gray-900/80 p-5 shadow-lg shadow-indigo-500/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-indigo-400 font-medium">
                  <MapPin className="h-4 w-4" /> {request.destination}
                </div>
                <div className="flex items-center gap-1 text-red-400 text-sm font-medium bg-red-500/10 px-2 py-1 rounded-md">
                  <Clock className="h-3 w-3" /> 04:59
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/50 rounded-lg p-3 border border-gray-800">
                  <p className="text-xs text-gray-500 mb-1 flex items-center gap-1"><DollarSign className="h-3 w-3"/> Budget</p>
                  <p className="text-lg font-semibold text-white">${request.budget}</p>
                </div>
                <div className="bg-black/50 rounded-lg p-3 border border-gray-800">
                  <p className="text-xs text-gray-500 mb-1 flex items-center gap-1"><Users className="h-3 w-3"/> Group</p>
                  <p className="text-lg font-semibold text-white">{request.groupSize} Pax</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Check className="h-4 w-4" /> Accept
                </button>
                <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 border border-gray-700">
                  <X className="h-4 w-4" /> Pass
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
