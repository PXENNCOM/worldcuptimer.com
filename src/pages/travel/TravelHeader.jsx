import React from 'react';
import { Plane, Ticket, MapPin, Clock } from 'lucide-react';

const TravelHeader = () => {
  return (
    <div className="py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        <span className="text-red-500">Travel</span> Guide
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Your complete guide to attending the 2026 World Cup
      </p>
      <div className="flex justify-center gap-8 text-sm text-gray-400 flex-wrap">
        <div className="flex items-center gap-2">
          <Ticket size={16} />
          <span>Tickets & Packages</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>Visa Information</span>
        </div>
        <div className="flex items-center gap-2">
          <Plane size={16} />
          <span>Transportation</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>Start Planning Now</span>
        </div>
      </div>
    </div>
  );
};

export default TravelHeader;