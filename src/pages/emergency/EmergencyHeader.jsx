import React from 'react';
import { AlertTriangle, Phone, Shield, Heart, Globe } from 'lucide-react';

const EmergencyHeader = () => {
  const criticalNumbers = [
    { country: '🇺🇸 USA', number: '911', note: 'Police, Fire, Medical' },
    { country: '🇨🇦 Canada', number: '911', note: 'All Emergency Services' },
    { country: '🇲🇽 Mexico', number: '911', note: 'Nationwide Emergency' }
  ];

  return (
    <div className="bg-gradient-to-b from-red-900/40 to-gray-900 py-28 text-center">
      {/* Critical Alert Banner */}
      <div className="mb-8 bg-red-600/90 border border-red-400 rounded-xl p-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-2">
          <AlertTriangle size={24} className="text-white animate-pulse" />
          <h2 className="text-xl font-bold text-white">🚨 EMERGENCY NUMBERS - SAVE THESE NOW! 🚨</h2>
          <AlertTriangle size={24} className="text-white animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {criticalNumbers.map((item, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl font-bold text-white">{item.country}</div>
              <div className="text-3xl font-black text-yellow-300">{item.number}</div>
              <div className="text-sm text-gray-200">{item.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-red-500">Emergency</span> Assistant
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Complete crisis support for 2026 World Cup fans across USA, Canada & Mexico
        </p>
        
        {/* Service Icons */}
        <div className="flex justify-center gap-8 text-sm text-gray-400 flex-wrap">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-red-400" />
            <span>Emergency Numbers</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart size={16} className="text-red-400" />
            <span>Medical Services</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-red-400" />
            <span>Consulate Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-red-400" />
            <span>24/7 Assistance</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <div className="text-3xl font-bold text-green-400 mb-2">16</div>
          <div className="text-gray-300">Host Cities Covered</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
          <div className="text-gray-300">Countries Supported</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
          <div className="text-gray-300">Emergency Support</div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="mt-8 max-w-4xl mx-auto bg-orange-900/30 border border-orange-700 rounded-xl p-6">
        <h3 className="text-lg font-bold text-orange-400 mb-3">⚠️ Before You Travel</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div>• Register with your embassy/consulate</div>
          <div>• Get comprehensive travel insurance</div>
          <div>• Download offline maps and translation apps</div>
          <div>• Carry physical copies of important documents</div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyHeader;