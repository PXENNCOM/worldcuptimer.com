import React, { useState } from 'react';
import { Camera, Utensils, ShoppingBag, Star, Thermometer, Clock } from 'lucide-react';

const CityModal = ({ selectedCity, onClose }) => {
  const [activeTab, setActiveTab] = useState('attractions');

  if (!selectedCity) return null;

  const getTabIcon = (tab) => {
    switch(tab) {
      case 'attractions': return <Camera size={18} />;
      case 'food': return <Utensils size={18} />;
      case 'shopping': return <ShoppingBag size={18} />;
      case 'culture': return <Star size={18} />;
      default: return <Camera size={18} />;
    }
  };

  const getTabContent = (city, tab) => {
    return city[tab] || [];
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={selectedCity.image} 
            alt={selectedCity.city}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black transition-colors"
          >
            ✕
          </button>
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
            <h2 className="text-2xl font-bold">{selectedCity.city}</h2>
            <p className="text-lg text-red-400">{selectedCity.country}</p>
          </div>
        </div>
        
        <div className="p-6">
          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                <Thermometer size={16} />
                Climate
              </div>
              <div className="font-semibold">{selectedCity.climate}</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                <Clock size={16} />
                Timezone
              </div>
              <div className="font-semibold">{selectedCity.timezone}</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                <Utensils size={16} />
                Signature
              </div>
              <div className="font-semibold">{selectedCity.signature}</div>
            </div>
          </div>

          {/* Best Time to Visit */}
          <div className="bg-green-900/30 border border-green-700 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-green-400 mb-2">Best Time to Visit</h4>
            <p className="text-gray-300">{selectedCity.bestTime}</p>
          </div>

          {/* Transportation */}
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-blue-400 mb-2">Getting Around</h4>
            <p className="text-gray-300">{selectedCity.transportation}</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-700">
            {['attractions', 'food', 'shopping', 'culture'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-medium transition-all ${
                  activeTab === tab 
                    ? 'bg-red-500 text-white border-b-2 border-red-500' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {getTabIcon(tab)}
                <span className="capitalize">{tab}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid gap-3">
            {getTabContent(selectedCity, activeTab).map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityModal;