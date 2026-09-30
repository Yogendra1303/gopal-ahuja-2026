"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { motion, AnimatePresence } from 'motion/react';

// Fix for default marker icons in Leaflet with Next.js
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const customSelectedIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

type MarketData = {
  id: string;
  name: string;
  emirate: string;
  bua: string;
  yield: string;
  growth: string;
  lat: number;
  lng: number;
  description: string;
};

const marketData: MarketData[] = [
  { id: 'palm', name: 'Palm Jumeirah', emirate: 'Dubai, UAE', bua: 'AED 8,070', yield: '5.8%', growth: '+9.4%', lat: 25.1124, lng: 55.1390, description: 'Ultra-luxury waterfront living with premium capital appreciation.' },
  { id: 'downtown', name: 'Downtown Dubai', emirate: 'Dubai, UAE', bua: 'AED 2,996', yield: '6.2%', growth: '+7.1%', lat: 25.1972, lng: 55.2744, description: 'The bustling center of Dubai, home to the Burj Khalifa and premium retail.' },
  { id: 'marina', name: 'Dubai Marina', emirate: 'Dubai, UAE', bua: 'AED 2,400', yield: '6.8%', growth: '+6.5%', lat: 25.0805, lng: 55.1403, description: 'Vibrant waterfront community popular among expatriates and tourists.' },
  { id: 'hills', name: 'Dubai Hills Estate', emirate: 'Dubai, UAE', bua: 'AED 2,150', yield: '6.5%', growth: '+8.2%', lat: 25.1165, lng: 55.2655, description: 'Master-planned community centered around an 18-hole championship golf course.' },
  { id: 'jvc', name: 'Jumeirah Village Circle', emirate: 'Dubai, UAE', bua: 'AED 1,180', yield: '7.8%', growth: '+5.5%', lat: 25.0648, lng: 55.2023, description: 'Family-friendly community offering excellent rental yields for investors.' },
  { id: 'saadiyat', name: 'Saadiyat Island', emirate: 'Abu Dhabi, UAE', bua: 'AED 2,850', yield: '5.2%', growth: '+6.1%', lat: 24.5428, lng: 54.4367, description: 'The cultural hub of Abu Dhabi with museums and luxury beachfront resorts.' },
];

function MapController({ selectedId }: { selectedId: string | null }) {
  const map = useMap();
  
  useEffect(() => {
    if (selectedId) {
      const selectedItem = marketData.find(item => item.id === selectedId);
      if (selectedItem) {
        map.flyTo([selectedItem.lat, selectedItem.lng], 13, {
          duration: 1.5,
          easeLinearity: 0.25
        });
      }
    } else {
      // Zoom out to fit Dubai
      map.flyTo([25.15, 55.20], 10, {
        duration: 1.5
      });
    }
  }, [selectedId, map]);

  return null;
}

export default function DubaiInteractiveMap() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  const selectedLocation = marketData.find(m => m.id === selectedId);

  return (
    <div className="flex flex-col xl:flex-row gap-8 items-stretch">
      {/* Left: Interactive Map */}
      <div className="w-full xl:w-3/5 relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 z-10">
        <MapContainer 
          center={[25.15, 55.20]} 
          zoom={10} 
          scrollWheelZoom={false}
          className="w-full h-full"
          attributionControl={false}
        >
          {/* Using standard OpenStreetMap tiles which are 100% free and require no API key */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {marketData.map((location) => (
            <Marker 
              key={location.id} 
              position={[location.lat, location.lng]}
              icon={selectedId === location.id ? customSelectedIcon : customIcon}
              eventHandlers={{
                click: () => {
                  setSelectedId(location.id === selectedId ? null : location.id);
                }
              }}
            >
              <Popup className="custom-popup">
                <div className="font-sans">
                  <h3 className="font-bold text-[#C8102E] text-sm m-0 leading-none mb-1">{location.name}</h3>
                  <p className="text-gray-500 text-xs m-0">{location.emirate}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          
          <MapController selectedId={selectedId} />
        </MapContainer>
        
        {/* Floating overlay gradient */}
        <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] z-[400]" />
      </div>

      {/* Right: Insights Panel */}
      <div className="w-full xl:w-2/5 flex flex-col gap-5">
        <div className="relative">
          <select
            value={selectedId || ''}
            onChange={(e) => setSelectedId(e.target.value || null)}
            className="w-full appearance-none bg-white border border-gray-200 text-black py-4 px-6 pr-12 rounded-lg font-bold text-lg md:text-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] transition-all cursor-pointer"
          >
            <option value="">Select a District to Analyze</option>
            {marketData.map((area) => (
              <option key={area.id} value={area.id}>{area.name}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-6 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {selectedLocation ? (
            <motion.div
              key={selectedLocation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F8FAF9] border border-gray-200 rounded-lg p-6 md:p-8 flex-1 flex flex-col"
            >
              <span className="text-[#C8102E] text-[10px] font-bold tracking-widest uppercase block mb-2">{selectedLocation.emirate}</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-4">{selectedLocation.name}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 flex-1">
                {selectedLocation.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase block mb-1">Avg Price / Sq.Ft</span>
                  <div className="text-xl md:text-2xl font-black text-black">{selectedLocation.bua}</div>
                </div>
                <div>
                  <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase block mb-1">Gross Yield</span>
                  <div className="text-xl md:text-2xl font-black text-[#C8102E]">{selectedLocation.yield}</div>
                </div>
                <div>
                  <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase block mb-1">10Yr Growth</span>
                  <div className="text-xl md:text-2xl font-black text-black">{selectedLocation.growth}</div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-gray-50 border border-gray-100 border-dashed rounded-lg p-8 flex-1 flex flex-col items-center justify-center text-center text-gray-400"
            >
              <svg className="w-12 h-12 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-sm">Select a district on the map or from the dropdown<br/>to view detailed market intelligence.</p>
            </motion.div>
          )}
        </AnimatePresence>

        <a href="#contact" className="group w-full flex items-center justify-between bg-black text-white p-6 rounded-lg hover:bg-[#C8102E] transition-colors">
          <span className="font-bold tracking-wide uppercase text-sm">Request Area Report</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
