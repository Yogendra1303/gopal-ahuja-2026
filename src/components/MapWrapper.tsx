"use client";

import dynamic from 'next/dynamic';

const DubaiInteractiveMap = dynamic(
  () => import('./DubaiInteractiveMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center bg-gray-50 rounded-2xl border border-gray-200">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-[#C8102E] rounded-full animate-spin" />
          <p className="text-gray-500 text-sm font-medium">Loading Interactive Map...</p>
        </div>
      </div>
    )
  }
);

export default DubaiInteractiveMap;
