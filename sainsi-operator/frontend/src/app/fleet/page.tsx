'use client';

import { Plus, Settings2, MoreHorizontal, CheckCircle2 } from 'lucide-react';

export default function FleetManagement() {
  const fleet = [
    { id: 1, name: 'Mercedes Sprinter', type: 'Luxury Van', capacity: 12, status: 'available', price: 450 },
    { id: 2, name: 'Toyota Land Cruiser', type: 'SUV', capacity: 6, status: 'booked', price: 300 },
    { id: 3, name: 'Ford Transit', type: 'Van', capacity: 15, status: 'maintenance', price: 250 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Fleet Management</h1>
          <p className="text-gray-400">Manage your vehicles, pricing, and availability.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors">
            <Settings2 className="h-4 w-4" />
            Settings
          </button>
          <button className="flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20">
            <Plus className="h-4 w-4" />
            Add Vehicle
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur overflow-hidden">
        <table className="w-full text-left text-sm text-gray-400">
          <thead className="bg-black/40 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4 font-medium">Vehicle</th>
              <th className="px-6 py-4 font-medium">Type</th>
              <th className="px-6 py-4 font-medium">Capacity</th>
              <th className="px-6 py-4 font-medium">Daily Rate</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {fleet.map((vehicle) => (
              <tr key={vehicle.id} className="hover:bg-gray-800/20 transition-colors">
                <td className="px-6 py-4 font-medium text-white">{vehicle.name}</td>
                <td className="px-6 py-4">{vehicle.type}</td>
                <td className="px-6 py-4">{vehicle.capacity} pax</td>
                <td className="px-6 py-4">${vehicle.price}</td>
                <td className="px-6 py-4">
                  {vehicle.status === 'available' && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Available
                    </span>
                  )}
                  {vehicle.status === 'booked' && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400 border border-blue-500/20">
                      Booked
                    </span>
                  )}
                  {vehicle.status === 'maintenance' && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-2.5 py-1 text-xs font-medium text-yellow-400 border border-yellow-500/20">
                      <Settings2 className="h-3.5 w-3.5" />
                      Maintenance
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1.5 text-gray-500 hover:text-white hover:bg-gray-800 rounded-md transition-colors">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
