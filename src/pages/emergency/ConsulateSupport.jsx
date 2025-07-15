import React, { useState } from 'react';
import { 
  Shield, 
  FileText, 
  CreditCard, 
  Phone, 
  MapPin, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  Lock
} from 'lucide-react';

const ConsulateSupport = () => {
  const [activeSection, setActiveSection] = useState('consulates');

  const sections = [
    { id: 'consulates', title: 'Embassy/Consulate', icon: Shield },
    { id: 'lost', title: 'Lost/Stolen Items', icon: FileText },
  ];

  const embassyContacts = {
    usa: {
      emergency: '1-888-407-4747',
      note: 'From US & Canada (24/7)',
      international: '+1-202-501-4444',
      services: [
        'Replace lost/stolen passports',
        'Emergency financial assistance',
        'Arrest/detention assistance',
        'Medical emergency support',
        'Death abroad assistance',
        'Disaster/crisis evacuation'
      ],
      locations: [
        { city: 'Mexico City', phone: '+52-55-5080-2000', address: 'Paseo de la Reforma 305' },
        { city: 'Toronto', phone: '+1-416-595-1700', address: '360 University Avenue' },
        { city: 'Vancouver', phone: '+1-604-685-4311', address: '1075 West Pender Street' }
      ]
    },
    canada: {
      emergency: '+1-613-996-8885',
      note: 'Call collect where available (24/7)',
      toll_free: '1-800-387-3124',
      services: [
        'Emergency travel documents',
        'Financial assistance (loans)',
        'Legal assistance referrals',
        'Medical emergency help',
        'Family notification',
        'Evacuation assistance'
      ],
      locations: [
        { city: 'Washington DC', phone: '+1-202-682-1740', address: '501 Pennsylvania Avenue NW' },
        { city: 'Mexico City', phone: '+52-55-5724-7900', address: 'Schiller No. 529' },
        { city: 'Los Angeles', phone: '+1-213-346-2700', address: '550 South Hope Street' }
      ]
    },
    mexico: {
      emergency: '+52-55-5080-2000',
      note: 'Mexican Foreign Ministry PROTECCION (24/7)',
      services: [
        'Tourist legal assistance',
        'Document replacement help',
        'Translation services',
        'Medical emergency coordination',
        'Family communication',
        'Repatriation assistance'
      ],
      locations: [
        { city: 'Washington DC', phone: '+1-202-728-1600', address: '1911 Pennsylvania Avenue NW' },
        { city: 'Toronto', phone: '+1-416-368-2875', address: '199 Bay Street' },
        { city: 'Vancouver', phone: '+1-604-684-3547', address: '810-1130 West Pender Street' }
      ]
    }
  };

  const lostStolenGuide = {
    passport: {
      immediate: [
        'Report to local police immediately',
        'Get police report/case number',
        'Contact nearest embassy/consulate',
        'Gather required documents for replacement'
      ],
      documents: [
        'Police report',
        'Proof of citizenship (birth certificate copy)',
        'Government-issued photo ID',
        'Passport photos (2)',
        'Completed application form',
        'Fee payment ($165 USD for US passport)'
      ],
      timeline: '1-2 weeks for regular processing, 24-72 hours emergency',
      tips: [
        'Keep photocopies separate from originals',
        'Store digital copies in cloud storage',
        'Register with embassy before traveling',
        'Consider emergency passport for urgent travel'
      ]
    },
    credit_cards: {
      immediate: [
        'Call card issuer immediately (24/7 numbers)',
        'Request immediate card cancellation',
        'Ask for emergency card replacement',
        'Report fraudulent charges'
      ],
      major_cards: [
        { name: 'Visa', number: '+1-303-967-1096', note: 'Collect calls accepted' },
        { name: 'Mastercard', number: '+1-636-722-7111', note: 'Collect calls accepted' },
        { name: 'American Express', number: '+1-336-393-1111', note: 'Global assist hotline' },
        { name: 'Discover', number: '+1-801-902-3100', note: 'International collect calls' }
      ],
      tips: [
        'Use banking app to freeze cards instantly',
        'Get emergency cash advance if needed',
        'Emergency cards can be delivered in 24-48 hours',
        'Keep emergency cash in separate location'
      ]
    },
    phone: {
      immediate: [
        'Use Find My Device/Find My iPhone',
        'Contact carrier to suspend service',
        'Change important account passwords',
        'Report to local police if theft suspected'
      ],
      carriers: [
        { name: 'Verizon', number: '1-800-922-0204', note: 'Report lost/stolen' },
        { name: 'AT&T', number: '1-800-331-0500', note: 'Suspend service' },
        { name: 'T-Mobile', number: '1-877-453-1304', note: 'Device protection' },
        { name: 'Rogers (Canada)', number: '1-888-764-3771', note: 'Suspend/replace' }
      ],
      tips: [
        'Enable remote wipe if device not recoverable',
        'File insurance claim if covered',
        'Get temporary phone for emergency communication',
        'Update emergency contacts with new number'
      ]
    },
    money: {
      immediate: [
        'Report to police immediately',
        'Contact banks and credit card companies',
        'Notify embassy for emergency financial assistance',
        'Cancel any compromised cards/accounts'
      ],
      emergency_funds: [
        'Western Union money transfer',
        'MoneyGram transfer service',
        'Bank wire transfer to local bank',
        'Embassy emergency loan (repayment required)',
        'Credit card cash advance',
        'Contact family/friends for assistance'
      ],
      tips: [
        'Keep some cash in hotel safe',
        'Use multiple ATM cards from different banks',
        'Notify banks of travel plans beforehand',
        'Consider traveler\'s checks as backup'
      ]
    }
  };

  const renderConsulates = () => (
    <div className="space-y-8">
      <div className="bg-red-900/20 border border-red-700 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
          <AlertTriangle size={24} />
          🚨 SAVE THESE NUMBERS BEFORE YOU TRAVEL!
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
            <h4 className="font-bold text-blue-400 mb-2">🇺🇸 US Citizens</h4>
            <div className="text-2xl font-bold text-white mb-1">{embassyContacts.usa.emergency}</div>
            <div className="text-sm text-gray-300">{embassyContacts.usa.note}</div>
          </div>
          <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
            <h4 className="font-bold text-red-400 mb-2">🇨🇦 Canadian Citizens</h4>
            <div className="text-2xl font-bold text-white mb-1">{embassyContacts.canada.emergency}</div>
            <div className="text-sm text-gray-300">{embassyContacts.canada.note}</div>
          </div>
          <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
            <h4 className="font-bold text-green-400 mb-2">🇲🇽 Mexican Citizens</h4>
            <div className="text-2xl font-bold text-white mb-1">{embassyContacts.mexico.emergency}</div>
            <div className="text-sm text-gray-300">{embassyContacts.mexico.note}</div>
          </div>
        </div>
      </div>

      {/* Embassy Services */}
      {Object.entries(embassyContacts).map(([country, data]) => (
        <div key={country} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4 capitalize flex items-center gap-2">
            <Shield className="text-blue-400" />
            {country === 'usa' ? '🇺🇸 US' : country === 'canada' ? '🇨🇦 Canadian' : '🇲🇽 Mexican'} Embassy Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-blue-400 mb-3">Available Services</h4>
              <ul className="space-y-2">
                {data.services.map((service, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-green-400" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-blue-400 mb-3">Key Locations</h4>
              <div className="space-y-3">
                {data.locations.map((location, index) => (
                  <div key={index} className="bg-gray-700/50 rounded-lg p-3">
                    <div className="font-bold text-white">{location.city}</div>
                    <div className="text-green-400 font-mono text-sm">{location.phone}</div>
                    <div className="text-gray-400 text-sm">{location.address}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderLostStolen = () => (
    <div className="space-y-8">
      {/* Passport Section */}
      <div className="bg-red-900/20 border border-red-700 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
          <FileText size={24} />
          Lost/Stolen Passport
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-orange-400 mb-3">Immediate Actions</h4>
            <ul className="space-y-2 mb-6">
              {lostStolenGuide.passport.immediate.map((action, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <AlertTriangle size={16} className="text-red-400 mt-1" />
                  {action}
                </li>
              ))}
            </ul>
            
            <h4 className="font-bold text-blue-400 mb-3">Required Documents</h4>
            <ul className="space-y-2">
              {lostStolenGuide.passport.documents.map((doc, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={16} className="text-green-400" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={20} className="text-yellow-400" />
                <h4 className="font-bold text-yellow-400">Processing Time</h4>
              </div>
              <p className="text-gray-300">{lostStolenGuide.passport.timeline}</p>
            </div>
            
            <h4 className="font-bold text-green-400 mb-3">Prevention Tips</h4>
            <ul className="space-y-2">
              {lostStolenGuide.passport.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <Shield size={16} className="text-green-400 mt-1" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Credit Cards Section */}
      <div className="bg-orange-900/20 border border-orange-700 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-orange-400 mb-4 flex items-center gap-2">
          <CreditCard size={24} />
          Lost/Stolen Credit Cards
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-red-400 mb-3">Immediate Actions</h4>
            <ul className="space-y-2 mb-6">
              {lostStolenGuide.credit_cards.immediate.map((action, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <AlertTriangle size={16} className="text-red-400 mt-1" />
                  {action}
                </li>
              ))}
            </ul>
            
            <h4 className="font-bold text-green-400 mb-3">Recovery Tips</h4>
            <ul className="space-y-2">
              {lostStolenGuide.credit_cards.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <CheckCircle size={16} className="text-green-400 mt-1" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-blue-400 mb-3">24/7 Card Company Numbers</h4>
            <div className="space-y-3">
              {lostStolenGuide.credit_cards.major_cards.map((card, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg p-3">
                  <div className="font-bold text-white">{card.name}</div>
                  <div className="text-green-400 font-mono">{card.number}</div>
                  <div className="text-gray-400 text-sm">{card.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phone Section */}
      <div className="bg-blue-900/20 border border-blue-700 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
          <Phone size={24} />
          Lost/Stolen Phone
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-red-400 mb-3">Immediate Actions</h4>
            <ul className="space-y-2 mb-6">
              {lostStolenGuide.phone.immediate.map((action, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <AlertTriangle size={16} className="text-red-400 mt-1" />
                  {action}
                </li>
              ))}
            </ul>
            
            <h4 className="font-bold text-green-400 mb-3">Recovery Tips</h4>
            <ul className="space-y-2">
              {lostStolenGuide.phone.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <CheckCircle size={16} className="text-green-400 mt-1" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-blue-400 mb-3">Carrier Emergency Numbers</h4>
            <div className="space-y-3">
              {lostStolenGuide.phone.carriers.map((carrier, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg p-3">
                  <div className="font-bold text-white">{carrier.name}</div>
                  <div className="text-green-400 font-mono">{carrier.number}</div>
                  <div className="text-gray-400 text-sm">{carrier.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Money/Wallet Section */}
      <div className="bg-green-900/20 border border-green-700 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
          <Lock size={24} />
          Lost/Stolen Money & Wallet
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-red-400 mb-3">Immediate Actions</h4>
            <ul className="space-y-2 mb-6">
              {lostStolenGuide.money.immediate.map((action, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <AlertTriangle size={16} className="text-red-400 mt-1" />
                  {action}
                </li>
              ))}
            </ul>
            
            <h4 className="font-bold text-green-400 mb-3">Prevention Tips</h4>
            <ul className="space-y-2">
              {lostStolenGuide.money.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <Shield size={16} className="text-green-400 mt-1" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-blue-400 mb-3">Emergency Funding Options</h4>
            <div className="space-y-2">
              {lostStolenGuide.money.emergency_funds.map((option, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={16} className="text-blue-400" />
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Section Navigation */}
      <div className="flex justify-center gap-4 mb-12">
        {sections.map((section) => {
          const IconComponent = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeSection === section.id
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <IconComponent size={20} />
              <span>{section.title}</span>
            </button>
          );
        })}
      </div>

      {/* Section Content */}
      <div className="max-w-6xl mx-auto">
        {activeSection === 'consulates' ? renderConsulates() : renderLostStolen()}
      </div>
    </div>
  );
};

export default ConsulateSupport;