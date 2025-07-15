import React, { useState } from 'react';
import { 
  Ticket, 
  MapPin, 
  Plane, 
  Hotel, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  CreditCard,
  FileText,
  Users,
  Car,
  Train,
  Bus
} from 'lucide-react';

const TravelSections = () => {
  const [activeSection, setActiveSection] = useState('tickets');

  const sections = [
    { id: 'tickets', title: 'Tickets & Packages', icon: Ticket },
    { id: 'visa', title: 'Visa Information', icon: MapPin },
    { id: 'transportation', title: 'Transportation', icon: Plane },
    { id: 'accommodation', title: 'Accommodation', icon: Hotel }
  ];

  const ticketInfo = {
    categories: [
      {
        name: "Category 1",
        description: "Premium seats at center of pitch",
        price: "$150-$800",
        features: ["Best view", "VIP amenities", "Premium location"]
      },
      {
        name: "Category 2", 
        description: "Good seats at corners",
        price: "$100-$500",
        features: ["Great view", "Standard amenities", "Corner sections"]
      },
      {
        name: "Category 3",
        description: "Behind goal seats",
        price: "$70-$300",
        features: ["Budget friendly", "Behind goals", "Atmosphere section"]
      }
    ],
    process: [
      "Register interest on FIFA official website",
      "Wait for ticket sale announcement (Late 2025)",
      "Apply during official lottery period",
      "Receive confirmation if selected",
      "Complete payment with Visa/Mastercard"
    ],
    warnings: [
      "Beware of fraudulent ticket websites",
      "Only buy from FIFA official channels",
      "Host country residents get priority access",
      "Prices increase for knockout stages"
    ]
  };

  const visaInfo = {
    usa: {
      requirements: [
        "Valid passport (6+ months)",
        "DS-160 online application",
        "Visa interview appointment",
        "Photo and biometric data",
        "Proof of financial support"
      ],
      waitTimes: [
        "Average wait: 260 days",
        "Colombia: 670 days",
        "Mexico: 458 days", 
        "India: 404 days",
        "Start process NOW!"
      ],
      tips: [
        "Apply as early as possible",
        "Book interview immediately",
        "Have all documents ready",
        "Consider expedited processing"
      ]
    },
    canada: {
      requirements: [
        "Valid passport",
        "Online application (eTA/Visa)",
        "Proof of funds",
        "Travel itinerary",
        "No criminal record"
      ],
      processing: "eTA: Minutes to hours, Visa: 2-8 weeks"
    },
    mexico: {
      requirements: [
        "Valid passport",
        "Tourism card (FMM)",
        "Proof of accommodation",
        "Return ticket",
        "Sufficient funds"
      ],
      processing: "No visa required for many countries"
    }
  };

  const transportationInfo = {
    flights: [
      {
        type: "International Flights",
        tips: [
          "Book 6-12 months in advance",
          "Consider multi-city tickets",
          "Use airline miles/points",
          "Check visa requirements for connections"
        ]
      },
      {
        type: "Domestic Travel", 
        options: [
          "Flights between host cities",
          "Amtrak train services",
          "Bus connections (Greyhound)",
          "Car rental for road trips"
        ]
      }
    ],
    crossBorder: [
      "USA ↔ Canada: Easy crossing with proper documents",
      "USA ↔ Mexico: Passport required, possible delays",
      "Consider air travel between countries",
      "Check entry requirements for each country"
    ]
  };

  const accommodationInfo = {
    types: [
      {
        name: "Hotels",
        pros: ["Full service", "Reliable", "Central locations"],
        cons: ["Expensive during World Cup", "Book very early"],
        tips: ["Book 12+ months ahead", "Consider hotel packages"]
      },
      {
        name: "Airbnb/Vacation Rentals",
        pros: ["More space", "Kitchen facilities", "Local neighborhoods"],
        cons: ["Quality varies", "Less service"],
        tips: ["Read reviews carefully", "Verify location"]
      },
      {
        name: "Hostels",
        pros: ["Budget friendly", "Meet other fans", "Central locations"],
        cons: ["Shared facilities", "Limited privacy"],
        tips: ["Book early", "Check safety ratings"]
      }
    ],
    cities: [
      {
        city: "New York/New Jersey",
        avgPrice: "$300-800/night",
        tips: "Book Manhattan for convenience, NJ for savings"
      },
      {
        city: "Los Angeles", 
        avgPrice: "$200-600/night",
        tips: "Consider West Hollywood or Santa Monica"
      },
      {
        city: "Miami",
        avgPrice: "$250-700/night", 
        tips: "South Beach premium, Coral Gables alternative"
      }
    ]
  };

  const renderTicketsSection = () => (
    <div className="space-y-6 lg:space-y-8">
      {/* Ticket Categories */}
      <div>
        <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 flex items-center gap-2 flex-wrap">
          <Ticket className="text-red-500 flex-shrink-0" />
          <span>Ticket Categories & Pricing</span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {ticketInfo.categories.map((category, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-4 lg:p-6 border border-gray-700">
              <h4 className="text-lg lg:text-xl font-bold text-red-400 mb-2">{category.name}</h4>
              <p className="text-gray-300 mb-3 text-sm lg:text-base">{category.description}</p>
              <p className="text-xl lg:text-2xl font-bold text-green-400 mb-4">{category.price}</p>
              <ul className="space-y-2">
                {category.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Purchase Process */}
      <div className="bg-blue-900/20 border border-blue-700 rounded-xl p-4 lg:p-6">
        <h4 className="text-lg lg:text-xl font-bold text-blue-400 mb-4">How to Buy Tickets</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ticketInfo.process.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2 text-sm lg:text-base">
                {index + 1}
              </div>
              <p className="text-xs lg:text-sm text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Warnings */}
      <div className="bg-red-900/20 border border-red-700 rounded-xl p-4 lg:p-6">
        <h4 className="text-lg lg:text-xl font-bold text-red-400 mb-4 flex items-center gap-2 flex-wrap">
          <AlertTriangle size={20} className="flex-shrink-0" />
          <span>Important Warnings</span>
        </h4>
        <ul className="space-y-2">
          {ticketInfo.warnings.map((warning, index) => (
            <li key={index} className="flex items-start gap-2 text-sm lg:text-base text-gray-300">
              <AlertTriangle size={16} className="text-red-400 flex-shrink-0 mt-1" />
              <span>{warning}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderVisaSection = () => (
    <div className="space-y-6 lg:space-y-8">
      {/* USA Visa */}
      <div className="bg-blue-900/20 border border-blue-700 rounded-xl p-4 lg:p-6">
        <h3 className="text-lg lg:text-2xl font-bold mb-4 flex items-center gap-2 flex-wrap">
          <span>🇺🇸</span>
          <span>USA Visa Information</span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          <div>
            <h4 className="font-bold text-blue-400 mb-3">Requirements</h4>
            <ul className="space-y-2">
              {visaInfo.usa.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <FileText size={14} className="text-blue-400 flex-shrink-0 mt-1" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-red-400 mb-3">Wait Times</h4>
            <ul className="space-y-2">
              {visaInfo.usa.waitTimes.map((time, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <Clock size={14} className="text-red-400 flex-shrink-0 mt-1" />
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-green-400 mb-3">Tips</h4>
            <ul className="space-y-2">
              {visaInfo.usa.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle size={14} className="text-green-400 flex-shrink-0 mt-1" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Canada & Mexico */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="bg-red-900/20 border border-red-700 rounded-xl p-4 lg:p-6">
          <h3 className="text-lg lg:text-xl font-bold mb-4 flex items-center gap-2 flex-wrap">
            <span>🇨🇦</span>
            <span>Canada Visa</span>
          </h3>
          <p className="text-gray-300 mb-4 text-sm lg:text-base">Processing: {visaInfo.canada.processing}</p>
          <ul className="space-y-2">
            {visaInfo.canada.requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                <FileText size={14} className="text-red-400 flex-shrink-0 mt-1" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-green-900/20 border border-green-700 rounded-xl p-4 lg:p-6">
          <h3 className="text-lg lg:text-xl font-bold mb-4 flex items-center gap-2 flex-wrap">
            <span>🇲🇽</span>
            <span>Mexico Entry</span>
          </h3>
          <p className="text-gray-300 mb-4 text-sm lg:text-base">Processing: {visaInfo.mexico.processing}</p>
          <ul className="space-y-2">
            {visaInfo.mexico.requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                <FileText size={14} className="text-green-400 flex-shrink-0 mt-1" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const renderTransportationSection = () => (
    <div className="space-y-6 lg:space-y-8">
      {/* Flight Information */}
      <div>
        <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 flex items-center gap-2 flex-wrap">
          <Plane className="text-red-500 flex-shrink-0" />
          <span>Flight Information</span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {transportationInfo.flights.map((flight, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-4 lg:p-6 border border-gray-700">
              <h4 className="text-lg lg:text-xl font-bold text-blue-400 mb-4">{flight.type}</h4>
              <ul className="space-y-2">
                {(flight.tips || flight.options).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm lg:text-base text-gray-300">
                    <Plane size={16} className="text-blue-400 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Ground Transportation */}
      <div className="bg-purple-900/20 border border-purple-700 rounded-xl p-4 lg:p-6">
        <h4 className="text-lg lg:text-xl font-bold text-purple-400 mb-4">Ground Transportation Options</h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <Car size={24} className="text-purple-400 mx-auto mb-2" />
            <h5 className="font-bold mb-1 text-sm lg:text-base">Car Rental</h5>
            <p className="text-xs lg:text-sm text-gray-300">Flexibility for road trips</p>
          </div>
          <div className="text-center">
            <Train size={24} className="text-purple-400 mx-auto mb-2" />
            <h5 className="font-bold mb-1 text-sm lg:text-base">Amtrak</h5>
            <p className="text-xs lg:text-sm text-gray-300">Scenic train routes</p>
          </div>
          <div className="text-center">
            <Bus size={24} className="text-purple-400 mx-auto mb-2" />
            <h5 className="font-bold mb-1 text-sm lg:text-base">Bus</h5>
            <p className="text-xs lg:text-sm text-gray-300">Budget-friendly option</p>
          </div>
          <div className="text-center">
            <Plane size={24} className="text-purple-400 mx-auto mb-2" />
            <h5 className="font-bold mb-1 text-sm lg:text-base">Domestic Flights</h5>
            <p className="text-xs lg:text-sm text-gray-300">Fastest between cities</p>
          </div>
        </div>
      </div>

      {/* Cross-Border Travel */}
      <div className="bg-yellow-900/20 border border-yellow-700 rounded-xl p-4 lg:p-6">
        <h4 className="text-lg lg:text-xl font-bold text-yellow-400 mb-4">Cross-Border Travel</h4>
        <ul className="space-y-2">
          {transportationInfo.crossBorder.map((info, index) => (
            <li key={index} className="flex items-start gap-2 text-sm lg:text-base text-gray-300">
              <MapPin size={16} className="text-yellow-400 flex-shrink-0 mt-1" />
              <span>{info}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderAccommodationSection = () => (
    <div className="space-y-6 lg:space-y-8">
      {/* Accommodation Types */}
      <div>
        <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 flex items-center gap-2 flex-wrap">
          <Hotel className="text-red-500 flex-shrink-0" />
          <span>Accommodation Options</span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {accommodationInfo.types.map((type, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-4 lg:p-6 border border-gray-700">
              <h4 className="text-lg lg:text-xl font-bold text-green-400 mb-4">{type.name}</h4>
              
              <div className="mb-4">
                <h5 className="font-bold text-green-300 mb-2 text-sm lg:text-base">Pros:</h5>
                <ul className="space-y-1">
                  {type.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs lg:text-sm text-gray-300">
                      <CheckCircle size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="font-bold text-red-300 mb-2 text-sm lg:text-base">Cons:</h5>
                <ul className="space-y-1">
                  {type.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs lg:text-sm text-gray-300">
                      <AlertTriangle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-blue-300 mb-2 text-sm lg:text-base">Tips:</h5>
                <ul className="space-y-1">
                  {type.tips.map((tip, idx) => (
                    <li key={idx} className="text-xs lg:text-sm text-gray-300">• {tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* City Pricing */}
      <div className="bg-orange-900/20 border border-orange-700 rounded-xl p-4 lg:p-6">
        <h4 className="text-lg lg:text-xl font-bold text-orange-400 mb-4">Expected Pricing by City</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {accommodationInfo.cities.map((city, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-4">
              <h5 className="font-bold text-white mb-2 text-sm lg:text-base">{city.city}</h5>
              <p className="text-orange-400 font-bold mb-2 text-sm lg:text-base">{city.avgPrice}</p>
              <p className="text-xs lg:text-sm text-gray-300">{city.tips}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch(activeSection) {
      case 'tickets': return renderTicketsSection();
      case 'visa': return renderVisaSection();
      case 'transportation': return renderTransportationSection();
      case 'accommodation': return renderAccommodationSection();
      default: return renderTicketsSection();
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 lg:py-12">
      {/* Section Navigation */}
      <div className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-8 lg:mb-12">
        {sections.map((section) => {
          const IconComponent = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-3 lg:px-6 py-2 lg:py-3 rounded-xl font-medium transition-all text-sm lg:text-base ${
                activeSection === section.id
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <IconComponent size={16} className="lg:w-5 lg:h-5" />
              <span className="hidden sm:inline">{section.title}</span>
              <span className="sm:hidden">{section.title.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Section Content */}
      <div className="w-full">
        {renderSection()}
      </div>
    </div>
  );
};

export default TravelSections;