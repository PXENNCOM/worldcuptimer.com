import React, { useState } from 'react';
import { 
  CreditCard, 
  FileText, 
  Phone, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Heart,
  Plane,
  Shield,
  Camera,
  Download,
  Users,
  MapPin,
  Copy
} from 'lucide-react';

const InsuranceClaims = () => {
  const [activeTab, setActiveTab] = useState('claims');

  const tabs = [
    { id: 'claims', title: 'Insurance Claims', icon: CreditCard },
    { id: 'preparation', title: 'Emergency Prep', icon: Shield }
  ];

  const insuranceProviders = {
    travel: [
      { name: 'World Nomads', phone: '+1-512-271-5200', website: 'worldnomads.com', coverage: 'Comprehensive travel protection', rating: '4.2/5' },
      { name: 'Allianz Travel', phone: '+1-866-884-3556', website: 'allianztravelinsurance.com', coverage: 'Medical & trip cancellation', rating: '4.1/5' },
      { name: 'Travel Guard', phone: '+1-715-295-9355', website: 'travelguard.com', coverage: 'Emergency medical & evacuation', rating: '4.0/5' },
      { name: 'IMG Global', phone: '+1-317-655-4500', website: 'imglobal.com', coverage: 'International medical coverage', rating: '4.3/5' }
    ],
    medical: [
      { name: 'Blue Cross Blue Shield', phone: '1-888-630-2583', note: 'Check international coverage', coverage: 'Varies by plan' },
      { name: 'Aetna International', phone: '+1-813-775-0190', note: 'Global emergency assistance', coverage: 'Worldwide medical' },
      { name: 'Cigna Global', phone: '+1-302-797-3100', note: 'Worldwide coverage', coverage: 'International health' },
      { name: 'Anthem', phone: '1-855-547-5437', note: 'Emergency services abroad', coverage: 'Limited international' }
    ],
    credit: [
      { name: 'Chase Sapphire Reserve', benefits: 'Up to $10k trip protection, primary car rental', phone: '1-800-CHASE', annual: '$550' },
      { name: 'Amex Platinum', benefits: 'Global assist hotline, medical evacuation', phone: '1-800-297-6268', annual: '$695' },
      { name: 'Capital One Venture X', benefits: 'Trip cancellation, lost luggage coverage', phone: '1-800-227-4825', annual: '$395' },
      { name: 'Citi Prestige', benefits: 'Trip protection, emergency medical', phone: '1-800-950-5114', annual: '$495' }
    ]
  };

  const claimProcess = [
    {
      step: 1,
      title: 'Immediate Response',
      timeframe: 'Within 2 hours',
      priority: 'CRITICAL',
      actions: [
        'Ensure personal safety first',
        'Seek medical attention if injured',
        'Report to local police if crime involved',
        'Contact insurance 24/7 hotline immediately'
      ],
      tips: 'Take photos of everything - injuries, damage, scene, documents'
    },
    {
      step: 2,
      title: 'Documentation',
      timeframe: 'Within 24 hours',
      priority: 'HIGH',
      actions: [
        'Get official police report and case number',
        'Collect witness contact information',
        'Take detailed photos of all damage/theft',
        'Save ALL receipts for emergency expenses'
      ],
      tips: 'Document everything - receipts, photos, reports. More is always better!'
    },
    {
      step: 3,
      title: 'File Official Claim',
      timeframe: 'Within 48-72 hours',
      priority: 'HIGH',
      actions: [
        'Complete detailed claim form online/phone',
        'Submit all required documentation',
        'Get claim reference number',
        'Request confirmation of receipt'
      ],
      tips: 'Be thorough and honest. Missing info can delay your claim for weeks.'
    },
    {
      step: 4,
      title: 'Follow Up & Track',
      timeframe: 'Weekly',
      priority: 'MEDIUM',
      actions: [
        'Check claim status regularly online/phone',
        'Respond quickly to insurer requests',
        'Provide additional docs if requested',
        'Keep detailed log of all communications'
      ],
      tips: 'Squeaky wheel gets the grease - stay on top of your claim!'
    }
  ];

  const requiredDocuments = {
    medical: [
      'Insurance policy number and card',
      'Medical reports and hospital records',
      'All medical receipts and bills',
      'Doctor\'s statements and prescriptions',
      'Proof of travel (tickets, boarding passes)',
      'Photos of injuries (if applicable)'
    ],
    theft: [
      'Police report with case number',
      'Detailed list of stolen items with values',
      'Original purchase receipts/photos',
      'Travel insurance policy documents',
      'Passport/ID copies',
      'Witness statements if available'
    ],
    cancellation: [
      'Trip cancellation policy documentation',
      'Medical certificates (if health-related)',
      'Death certificates (if family emergency)',
      'Employer letters (if work-related)',
      'Original booking confirmations',
      'Proof of non-refundable expenses'
    ]
  };

  const emergencyPrep = {
    digital: [
      'Passport & visa photos in cloud storage',
      'All insurance policy PDFs',
      'Emergency contact list with international numbers',
      'Medical info & prescription details',
      'Credit card emergency numbers',
      'Embassy/consulate contact information',
      'Hotel & flight confirmations',
      'Complete travel itinerary with addresses'
    ],
    physical: [
      'Printed copies of all digital documents',
      'Emergency cash ($300-500 in mixed currencies)',
      'Backup credit/debit cards (separate from wallet)',
      'Extra prescription medications (2-week supply)',
      'Basic first aid kit',
      'Portable charger/power bank',
      'Emergency contact card in local language',
      'Copy of this emergency guide'
    ],
    apps: [
      { name: 'Google Translate', purpose: 'Offline translation in 100+ languages', essential: true },
      { name: 'Maps.me', purpose: 'Offline maps that work without internet', essential: true },
      { name: 'First Aid by Red Cross', purpose: 'Step-by-step emergency medical guidance', essential: true },
      { name: 'SkyAlert', purpose: 'Real-time emergency and weather alerts', essential: false },
      { name: 'Travel Smart', purpose: 'US embassy locations & emergency contacts', essential: false },
      { name: 'XE Currency', purpose: 'Offline currency converter', essential: false }
    ]
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'CRITICAL': return 'text-red-400 bg-red-900/30 border-red-700';
      case 'HIGH': return 'text-orange-400 bg-orange-900/30 border-orange-700';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-900/30 border-yellow-700';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-700';
    }
  };

  const renderClaims = () => (
    <div className="space-y-8">
      {/* Emergency Hotlines */}
      <div className="bg-red-900/30 border border-red-700 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
          <AlertTriangle size={24} />
          🚨 Emergency Insurance Hotlines - SAVE THESE NOW!
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {insuranceProviders.travel.map((provider, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-center">
              <div className="font-bold text-white mb-1">{provider.name}</div>
              <div className="text-xl font-bold text-green-400 mb-1">{provider.phone}</div>
              <div className="text-xs text-gray-400">{provider.coverage}</div>
              <div className="text-xs text-yellow-400 mt-1">⭐ {provider.rating}</div>
            </div>
          ))}
        </div>
        <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock size={20} className="text-yellow-400" />
            <span className="font-bold text-yellow-400">⚡ Speed Matters!</span>
          </div>
          <p className="text-gray-300 text-sm">
            Most insurance companies require notification within 24-48 hours. Delays can result in claim denial!
          </p>
        </div>
      </div>

      {/* Claim Process Timeline */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Clock size={24} className="text-blue-400" />
          Step-by-Step Claim Process
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {claimProcess.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-b from-red-500 to-red-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                {step.step}
              </div>
              <div className="text-center mb-4">
                <h4 className="font-bold text-red-400 mb-1">{step.title}</h4>
                <div className="text-sm text-yellow-400 mb-2">{step.timeframe}</div>
                <div className={`inline-block px-2 py-1 rounded text-xs font-bold border ${getPriorityColor(step.priority)}`}>
                  {step.priority}
                </div>
              </div>
              
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                {step.actions.map((action, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle size={12} className="text-green-400 mt-1 flex-shrink-0" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-3">
                <div className="text-xs text-blue-400 font-bold mb-1">💡 Pro Tip:</div>
                <div className="text-xs text-gray-300">{step.tips}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Required Documents */}
      <div className="bg-purple-900/20 border border-purple-700 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
          <FileText size={24} />
          Essential Documents for Claims
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(requiredDocuments).map(([type, docs]) => (
            <div key={type} className="bg-gray-800/50 rounded-lg p-5 border border-gray-700">
              <h4 className="font-bold text-white mb-4 capitalize flex items-center gap-2">
                <FileText size={18} className="text-purple-400" />
                {type === 'theft' ? 'Theft/Loss Claims' : type === 'cancellation' ? 'Trip Cancellation' : 'Medical Claims'}
              </h4>
              <ul className="space-y-2">
                {docs.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle size={14} className="text-green-400 mt-1 flex-shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-6 bg-orange-900/30 border border-orange-700 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Camera size={20} className="text-orange-400" />
            <span className="font-bold text-orange-400">📸 Documentation is Everything!</span>
          </div>
          <p className="text-gray-300 text-sm">
            Take photos of EVERYTHING - damaged items, receipts, police reports, medical records. 
            More documentation = faster claim approval!
          </p>
        </div>
      </div>

      {/* Insurance Provider Details */}
      <div className="space-y-6">
        {Object.entries(insuranceProviders).map(([category, providers]) => (
          <div key={category} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <CreditCard size={24} className="text-green-400" />
              {category === 'travel' ? 'Travel Insurance' : category === 'medical' ? 'Medical Insurance' : 'Credit Card Protection'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {providers.map((provider, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-white text-lg">{provider.name}</h4>
                      {provider.rating && <div className="text-yellow-400 text-sm">⭐ {provider.rating}</div>}
                      {provider.annual && <div className="text-red-400 text-sm">Annual Fee: {provider.annual}</div>}
                    </div>
                    <button className="text-blue-400 hover:text-blue-300">
                      <Copy size={16} />
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-green-400" />
                      <span className="font-mono text-green-400 text-sm">{provider.phone}</span>
                    </div>
                    
                    <div className="text-gray-300 text-sm">
                      {provider.coverage || provider.benefits || provider.note}
                    </div>
                    
                    {provider.website && (
                      <div className="text-blue-400 text-sm">{provider.website}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPreparation = () => (
    <div className="space-y-8">
      {/* Pre-Travel Checklist */}
      <div className="bg-green-900/20 border border-green-700 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
          <Shield size={24} />
          Pre-Travel Emergency Kit
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-blue-400 mb-4 flex items-center gap-2">
              <Download size={20} />
              Digital Backup Essentials
            </h4>
            <div className="space-y-2">
              {emergencyPrep.digital.map((item, index) => (
                <label key={index} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 cursor-pointer transition-colors">
                  <input type="checkbox" className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-orange-400 mb-4 flex items-center gap-2">
              <Users size={20} />
              Physical Items to Pack
            </h4>
            <div className="space-y-2">
              {emergencyPrep.physical.map((item, index) => (
                <label key={index} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 cursor-pointer transition-colors">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Essential Apps */}
      <div className="bg-blue-900/20 border border-blue-700 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
          <Phone size={24} />
          Must-Have Emergency Apps
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {emergencyPrep.apps.map((app, index) => (
            <div key={index} className={`rounded-lg p-4 border ${app.essential ? 'bg-green-900/30 border-green-700' : 'bg-gray-800/50 border-gray-700'}`}>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-bold text-white">{app.name}</h4>
                {app.essential && <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">ESSENTIAL</span>}
              </div>
              <p className="text-gray-400 text-sm mb-3">{app.purpose}</p>
              <div className="text-xs text-blue-400">📱 Download with offline capabilities</div>
            </div>
          ))}
        </div>
      </div>

      {/* Communication Plan */}
      <div className="bg-purple-900/20 border border-purple-700 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
          <Users size={24} />
          Emergency Communication Strategy
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-yellow-400 mb-4">🏠 Before Departure</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Share complete itinerary</div>
                  <div className="text-gray-400 text-sm">Include hotels, flights, activities with dates/times</div>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Set check-in schedule</div>
                  <div className="text-gray-400 text-sm">Daily text/call at agreed times</div>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Register with embassy</div>
                  <div className="text-gray-400 text-sm">STEP registration for US citizens</div>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-red-400 mb-4">🚨 During Emergency</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                <AlertTriangle size={16} className="text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Call 911 first</div>
                  <div className="text-gray-400 text-sm">Local emergency services priority #1</div>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                <AlertTriangle size={16} className="text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Contact embassy if serious</div>
                  <div className="text-gray-400 text-sm">Arrest, hospitalization, major incidents</div>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                <AlertTriangle size={16} className="text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Call insurance within 24h</div>
                  <div className="text-gray-400 text-sm">Critical for claim approval</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final Ready Checklist */}
      <div className="bg-red-900/20 border border-red-700 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
          <AlertTriangle size={24} />
          Final World Cup Readiness Check
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 rounded-lg p-5">
            <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
              <FileText size={18} />
              ✅ Documents Ready
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✓ Passport valid 6+ months</li>
              <li>✓ Visa requirements verified</li>
              <li>✓ Travel insurance purchased & active</li>
              <li>✓ Digital & physical copies prepared</li>
              <li>✓ Emergency contacts updated</li>
            </ul>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-5">
            <h4 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
              <Phone size={18} />
              📱 Emergency Numbers Saved
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✓ Local 911 services</li>
              <li>✓ Embassy/consulate contacts</li>
              <li>✓ Insurance 24/7 hotlines</li>
              <li>✓ Credit card emergency numbers</li>
              <li>✓ Hotel emergency contacts</li>
            </ul>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-5">
            <h4 className="font-bold text-purple-400 mb-3 flex items-center gap-2">
              <Heart size={18} />
              🏥 Health & Safety Ready
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✓ Medical insurance verified</li>
              <li>✓ Prescription meds packed (extra)</li>
              <li>✓ First aid basics included</li>
              <li>✓ Emergency apps downloaded</li>
              <li>✓ Communication plan set</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-900/30 border border-yellow-700 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Clock size={20} className="text-yellow-400" />
            <h4 className="font-bold text-yellow-400">⚡ Remember: Seconds Count in Emergencies!</h4>
          </div>
          <p className="text-gray-300 text-sm">
            Preparation isn't paranoia - it's smart travel. Having this information ready and accessible 
            can save precious time when every minute counts during your World Cup adventure!
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 mb-12">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600'
              }`}
            >
              <IconComponent size={24} />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto">
        {activeTab === 'claims' ? renderClaims() : renderPreparation()}
      </div>
    </div>
  );
};

export default InsuranceClaims;