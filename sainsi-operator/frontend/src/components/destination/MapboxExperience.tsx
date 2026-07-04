'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Ensure you replace this with a valid token in a real environment
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUxMjM0NTY3ODkwIn0.example';

export function MapboxExperience() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // initialize map only once

    // Mock location for Ubud
    const lng = 115.269;
    const lat = -8.5069;

    try {
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11', // SAINSI dark theme map
        center: [lng, lat],
        zoom: 13,
        pitch: 45,
        });

        // Add mock marker
        new mapboxgl.Marker({ color: '#6366f1' })
        .setLngLat([lng, lat])
        .addTo(map.current);
    } catch (e) {
        console.warn("Mapbox failed to load. Likely missing valid token in development.", e);
    }
  }, []);

  return (
    <div className="h-[500px] w-full rounded-3xl overflow-hidden border border-gray-800 relative">
      <div ref={mapContainer} className="absolute inset-0 w-full h-full" />
      {/* Fallback overlay if mapbox token isn't provided */}
      {!process.env.NEXT_PUBLIC_MAPBOX_TOKEN && (
        <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center backdrop-blur-sm z-10">
            <p className="text-gray-400">Mapbox Token Required for Interactive Map</p>
        </div>
      )}

      {/* Map Controls Overlay */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        <button className="bg-black/80 backdrop-blur border border-gray-700 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800">
          Hotels
        </button>
        <button className="bg-black/80 backdrop-blur border border-gray-700 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800">
          Experiences
        </button>
      </div>
    </div>
  );
}
