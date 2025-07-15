import React from 'react';
import { Thermometer, Clock } from 'lucide-react';

const CityGrid = ({ destinations, onCitySelect }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {destinations.map((city) => (
          <div
            key={city.id}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700"
            onClick={() => onCitySelect(city)}
          >
            <div className="relative">
              <img 
                src={city.image} 
                alt={city.city}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-sm font-medium">
                {city.country}
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded-full text-sm">
                <div className="flex items-center gap-1">
                  <Thermometer size={14} />
                  <span>{city.climate}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{city.city}</h3>
              <p className="text-red-400 mb-3 text-sm">Signature: {city.signature}</p>
              
              <div className="text-sm text-gray-300 mb-4">
                <div className="flex items-center gap-1 mb-1">
                  <Clock size={14} />
                  <span>{city.timezone}</span>
                </div>
                <div>{city.bestTime}</div>
              </div>
              
              <div className="text-xs text-gray-500">
                Click to explore this destination
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Completion message */}
      <div className="text-center py-8">
        <p className="text-gray-400 mb-4">All 16 host cities now available!</p>
        <div className="flex justify-center gap-4 text-sm">
          <div className="bg-green-900/30 border border-green-700 rounded-lg px-4 py-2">
            ✅ Complete destination guides for all World Cup host cities
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityGrid;