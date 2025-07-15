import React from 'react';
import { MapPin, Plane, Clock } from 'lucide-react';

const DestinationHeader = () => {
  return (
    <div className=" py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        <span className="text-red-500">Destination</span> Guide
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Explore the vibrant host cities of the 2026 World Cup
      </p>
      <div className="flex justify-center gap-8 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>16 Host Cities</span>
        </div>
        <div className="flex items-center gap-2">
          <Plane size={16} />
          <span>3 Countries</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>June 11 - July 19, 2026</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationHeader;