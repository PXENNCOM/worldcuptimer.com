import React, { useState } from 'react';
import { 
  Phone, 
  Hospital, 
  Pill, 
  MapPin, 
  Clock, 
  AlertTriangle,
  Heart,
  Users,
  Shield
} from 'lucide-react';

const EmergencyNumbers = () => {
  const [activeCountry, setActiveCountry] = useState('usa');

  const countries = [
    { id: 'usa', name: 'USA', flag: '🇺🇸', color: 'blue' },
    { id: 'canada', name: 'Canada', flag: '🇨🇦', color: 'red' },
    { id: 'mexico', name: 'Mexico', flag: '🇲🇽', color: 'green' }
  ];

  const emergencyData = {
    usa: {
      primary: '911',
      services: [
        { name: 'All Emergencies', number: '911', note: 'Police, Fire, Medical' },
        { name: 'Non-Emergency Police', number: '311', note: 'Most cities' },
        { name: 'Poison Control', number: '1-800-222-1222', note: 'National hotline' },
        { name: 'Mental Health Crisis', number: '988', note: 'Suicide & Crisis Lifeline' },
        { name: 'Tourist Assistance', number: '1-800-CALL-FBI', note: 'For tourist-related crimes' }
      ],
      hospitals: [
        { name: 'NewYork-Presbyterian', city: 'New York', phone: '212-746-5454', note: 'Top-rated emergency care' },
        { name: 'Ronald Reagan UCLA', city: 'Los Angeles', phone: '310-825-9111', note: 'Level 1 trauma center' },
        { name: 'Jackson Memorial', city: 'Miami', phone: '305-585-1111', note: 'Public safety net hospital' },
        { name: 'Parkland Hospital', city: 'Dallas', phone: '214-590-8000', note: 'Level 1 trauma center' }
      ],
      pharmacies: [
        { name: 'CVS Pharmacy', note: 'Nationwide - Many 24/7 locations', phone: 'Use store locator app' },
        { name: 'Walgreens', note: 'Nationwide - 24-hour locations available', phone: '1-800-WALGREENS' },
        { name: 'Rite Aid', note: 'East Coast & West Coast', phone: '1-800-RITE-AID' }
      ],
      tips: [
        'Call 911 for any life-threatening emergency',
        'Use 311 for non-emergency police issues',
        'Emergency rooms cannot refuse treatment',
        'Ambulance rides are expensive - consider Uber/Lyft for non-critical situations',
        'Urgent care centers are cheaper than ERs for minor issues'
      ]
    },
    canada: {
      primary: '911',
      services: [
        { name: 'All Emergencies', number: '911', note: 'Police, Fire, Medical' },
        { name: 'Health Link', number: '811', note: '24/7 health advice (most provinces)' },
        { name: 'Poison Control', number: '1-800-268-9017', note: 'National hotline' },
        { name: 'Crisis Line', number: '1-833-456-4566', note: 'Mental health support' },
        { name: 'Tourist Info', number: '1-800-O-CANADA', note: 'General assistance' }
      ],
      hospitals: [
        { name: 'Toronto General Hospital', city: 'Toronto', phone: '416-340-4800', note: 'Major trauma center' },
        { name: 'Vancouver General Hospital', city: 'Vancouver', phone: '604-875-4111', note: 'Level 1 trauma center' },
        { name: 'Montreal General Hospital', city: 'Montreal', phone: '514-934-1934', note: 'McGill University Health Centre' },
        { name: 'Foothills Medical Centre', city: 'Calgary', phone: '403-944-1110', note: 'Alberta trauma center' }
      ],
      pharmacies: [
        { name: 'Shoppers Drug Mart', note: 'Nationwide - Some 24-hour locations', phone: '1-800-SHOPPERS' },
        { name: 'Pharmasave', note: 'Western Canada focus', phone: 'Local store numbers' },
        { name: 'Jean Coutu', note: 'Quebec-focused chain', phone: 'Local store numbers' }
      ],
      tips: [
        'Healthcare is free for residents, tourists pay out-of-pocket',
        'Call 811 for non-emergency health advice',
        'Walk-in clinics are cheaper than emergency rooms',
        'Prescription drugs are not covered - bring insurance',
        'Some pharmacists can prescribe for minor conditions'
      ]
    },
    mexico: {
      primary: '911',
      services: [
        { name: 'All Emergencies', number: '911', note: 'Police, Fire, Medical' },
        { name: 'Red Cross Ambulance', number: '065', note: 'Cruz Roja emergency services' },
        { name: 'Tourist Police', number: '078', note: 'Tourist-focused assistance' },
        { name: 'Green Angels', number: '078', note: 'Roadside assistance on highways' },
        { name: 'Local Emergency (backup)', number: '066', note: 'If 911 doesn\'t work' }
      ],
      hospitals: [
        { name: 'Hospital Angeles Pedregal', city: 'Mexico City', phone: '+52-55-5449-5500', note: 'Top private hospital' },
        { name: 'Galenia Hospital', city: 'Cancun', phone: '+52-998-891-5200', note: 'Medical tourism hub' },
        { name: 'Hospital Civil de Guadalajara', city: 'Guadalajara', phone: '+52-33-3617-0060', note: 'Public emergency hospital' },
        { name: 'Hospital General Tijuana', city: 'Tijuana', phone: '+52-664-684-0537', note: 'Border region hospital' }
      ],
      pharmacies: [
        { name: 'Farmacias del Ahorro', note: 'Nationwide chain - Some 24-hour', phone: 'Local store numbers' },
        { name: 'Farmacias Guadalajara', note: 'Major chain across Mexico', phone: 'Local store numbers' },
        { name: 'Sanborns Pharmacy', note: 'Tourist areas, English spoken', phone: 'Department store locations' }
      ],
      tips: [
        'Private hospitals require payment upfront or insurance',
        'Public hospitals (IMSS) serve emergencies for free',
        'Tourist police (078) speak English and help foreigners',
        'Green Angels provide free roadside assistance',
        'Pharmacies sell many medications over-the-counter'
      ]
    }
  };

  const currentData = emergencyData[activeCountry];
  const colorClasses = {
    blue: 'border-blue-500 bg-blue-900/30 text-blue-400',
    red: 'border-red-500 bg-red-900/30 text-red-400',
    green: 'border-green-500 bg-green-900/30 text-green-400'
  };

  const activeColor = countries.find(c => c.id === activeCountry)?.color || 'blue';

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Country Selector */}
      <div className="flex justify-center gap-4 mb-12">
        {countries.map((country) => (
          <button
            key={country.id}
            onClick={() => setActiveCountry(country.id)}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              activeCountry === country.id
                ? colorClasses[country.color]
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 border border-gray-600'
            }`}
          >
            <span className="text-2xl">{country.flag}</span>
            <span>{country.name}</span>
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Emergency Numbers Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Phone className="text-red-500" />
            Emergency Numbers
          </h2>
          
          {/* Primary Emergency Number */}
          <div className={`mb-6 p-6 rounded-xl border-2 ${colorClasses[activeColor]}`}>
            <div className="text-center">
              <div className="text-6xl font-black mb-2">{currentData.primary}</div>
              <div className="text-xl font-bold">PRIMARY EMERGENCY NUMBER</div>
              <div className="text-gray-300">Save this number in your phone NOW!</div>
            </div>
          </div>

          {/* All Emergency Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentData.services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <h4 className="font-bold text-red-400 mb-2">{service.name}</h4>
                <div className="text-2xl font-bold text-white mb-1">{service.number}</div>
                <div className="text-sm text-gray-400">{service.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hospitals Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Hospital className="text-red-500" />
            Major Hospitals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentData.hospitals.map((hospital, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="flex items-start gap-3 mb-3">
                  <Hospital size={24} className="text-red-400 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-lg">{hospital.name}</h4>
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <MapPin size={16} />
                      <span>{hospital.city}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone size={16} className="text-green-400" />
                    <span className="font-mono text-green-400">{hospital.phone}</span>
                  </div>
                  <div className="text-sm text-gray-300">{hospital.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pharmacies Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Pill className="text-red-500" />
            Pharmacy Chains
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentData.pharmacies.map((pharmacy, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <Pill size={20} className="text-blue-400" />
                  <h4 className="font-bold text-white">{pharmacy.name}</h4>
                </div>
                <div className="text-sm text-gray-300 mb-3">{pharmacy.note}</div>
                <div className="text-sm text-blue-400">{pharmacy.phone}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Tips */}
        <div className={`p-6 rounded-xl border-2 ${colorClasses[activeColor]}`}>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle size={20} />
            Critical Tips for {countries.find(c => c.id === activeCountry)?.name}
          </h3>
          <ul className="space-y-2">
            {currentData.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-300">
                <Shield size={16} className="text-red-400 mt-1 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmergencyNumbers;