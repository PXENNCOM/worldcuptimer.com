import React, { useState } from 'react';
import {  Users, Calendar, Star } from 'lucide-react';

export default function Cities() {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedCity, setSelectedCity] = useState(null);

  const hostCities = {
    usa: [
      {
        id: 1,
        city: "New York/New Jersey",
        state: "New York/New Jersey",
        stadium: "MetLife Stadium",
        capacity: "82,500",
        opened: "2010",
        teams: "New York Giants, New York Jets",
        specialFeature: "World Cup Final Venue",
        image: "https://blog.ticketmaster.com/wp-content/uploads/step-inside-metlife-stadium.png",
        matches: "8 matches including Final",
        highlights: ["Largest capacity stadium", "Final match venue", "Located near NYC"]
      },
      {
        id: 2,
        city: "Los Angeles",
        state: "California",
        stadium: "SoFi Stadium",
        capacity: "70,000",
        opened: "2020",
        teams: "LA Rams, LA Chargers",
        specialFeature: "Newest Stadium",
        image: "https://dimin.com/assets/images/processed/NoCrop_2560x2560/16173-sofi-stadium-at-hollywood-park.jpg",
        matches: "8 matches",
        highlights: ["Most recently built", "2028 Olympics venue", "State-of-the-art facility"]
      },
      {
        id: 3,
        city: "Dallas",
        state: "Texas",
        stadium: "AT&T Stadium",
        capacity: "80,000",
        opened: "2009",
        teams: "Dallas Cowboys",
        specialFeature: "Semi-Final Venue",
        image: "https://images.axios.com/w0ghqERfM_P3onP_5WlRSnMSghM=/0x541:4841x3264/1920x1080/2024/01/18/1705604763364.jpg",
        matches: "7 matches including Semi-Final",
        highlights: ["Retractable roof", "Massive video screen", "Architectural marvel"]
      },
      {
        id: 4,
        city: "Atlanta",
        state: "Georgia",
        stadium: "Mercedes-Benz Stadium",
        capacity: "75,000",
        opened: "2017",
        teams: "Atlanta Falcons, Atlanta United FC",
        specialFeature: "Semi-Final Venue",
        image: "https://media.cntraveler.com/photos/5b7304891f8f5f5aacc37801/16:9/w_2560,c_limit/Mercedes-Benz-Stadium_Courtesy-AMB-Sports-+-Entertainment_2018_AtlantaMBS_PhotoByBruceDamonte_04.jpg",
        matches: "7 matches including Semi-Final",
        highlights: ["Retractable roof", "LEED Platinum certified", "Iconic design"]
      },
      {
        id: 5,
        city: "Miami",
        state: "Florida",
        stadium: "Hard Rock Stadium",
        capacity: "65,000",
        opened: "1987",
        teams: "Miami Dolphins",
        specialFeature: "Third Place Match",
        image: "https://archello.s3.eu-central-1.amazonaws.com/images/2020/06/19/hok-hard-rock-stadium-florida-usa-archello--8-.1592571084.9599.jpg",
        matches: "6 matches including Third Place",
        highlights: ["Recently renovated", "Multiple Super Bowls hosted", "Perfect climate"]
      },
      {
        id: 6,
        city: "Philadelphia",
        state: "Pennsylvania",
        stadium: "Lincoln Financial Field",
        capacity: "69,596",
        opened: "2003",
        teams: "Philadelphia Eagles",
        specialFeature: "Historic City",
        image: "https://delco.today/wp-content/uploads/sites/3/2023/02/Lincoln-Financial-stadium-1.jpg",
        matches: "6 matches",
        highlights: ["Rich football history", "Green technology", "City of brotherly love"]
      },
      {
        id: 7,
        city: "Boston",
        state: "Massachusetts",
        stadium: "Gillette Stadium",
        capacity: "70,000",
        opened: "2002",
        teams: "New England Patriots, New England Revolution",
        specialFeature: "Historic Region",
        image: "https://www.gillettestadium.com/wp-content/uploads/2023/10/2023-GSLH-DIGITALKeepsake.jpeg",
        matches: "6 matches",
        highlights: ["Patriots dynasty home", "Soccer heritage", "New England charm"]
      },
      {
        id: 8,
        city: "Seattle",
        state: "Washington",
        stadium: "Lumen Field",
        capacity: "69,000",
        opened: "2002",
        teams: "Seattle Seahawks, Seattle Sounders",
        specialFeature: "12th Man Loudest",
        image: "https://s1.ticketm.net/dam/a/6ba/cca88b1c-9704-49ea-83ff-23d0e4c246ba_1665171_RETINA_PORTRAIT_3_2.jpg",
        matches: "6 matches",
        highlights: ["Loudest stadium", "Soccer passionate city", "Pacific Northwest beauty"]
      },
      {
        id: 9,
        city: "San Francisco Bay Area",
        state: "California",
        stadium: "Levi's Stadium",
        capacity: "70,909",
        opened: "2014",
        teams: "San Francisco 49ers",
        specialFeature: "Tech Hub",
        image: "https://www.santaclaraca.gov/home/showpublishedimage/78773/638727143086100000",
        matches: "6 matches",
        highlights: ["Green technology leader", "Silicon Valley proximity", "2026 Super Bowl host"]
      },
      {
        id: 10,
        city: "Kansas City",
        state: "Missouri",
        stadium: "Arrowhead Stadium",
        capacity: "76,416",
        opened: "1972",
        teams: "Kansas City Chiefs",
        specialFeature: "Loudest Stadium Record",
        image: "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/02/1294/728/1da64565-chiefs1.jpg?ve=1&tl=1",
        matches: "6 matches",
        highlights: ["World record for noise", "Chiefs Kingdom", "Central location"]
      },
      {
        id: 11,
        city: "Houston",
        state: "Texas",
        stadium: "NRG Stadium",
        capacity: "72,220",
        opened: "2002",
        teams: "Houston Texans",
        specialFeature: "Multi-Purpose Venue",
        image: "https://ww3.hdnux.com/photos/36/00/25/7865690/9/rawImage.jpg",
        matches: "6 matches",
        highlights: ["Retractable roof", "Multiple sports", "Energy capital"]
      }
    ],
    mexico: [
      {
        id: 12,
        city: "Mexico City",
        state: "Mexico City",
        stadium: "Estadio Azteca",
        capacity: "87,523",
        opened: "1966",
        teams: "Club América, Mexico National Team",
        specialFeature: "Opening Match Venue",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Azteca_entrance.jpg",
        matches: "5 matches including Opening",
        highlights: ["Legendary stadium", "3rd World Cup hosting", "Maradona's 'Hand of God'"]
      },
      {
        id: 13,
        city: "Guadalajara",
        state: "Jalisco",
        stadium: "Estadio Akron",
        capacity: "48,000",
        opened: "2010",
        teams: "Club Deportivo Guadalajara",
        specialFeature: "Modern Mexican Stadium",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/EstadioAkronGDL.jpg/1200px-EstadioAkronGDL.jpg",
        matches: "4 matches",
        highlights: ["Modern design", "Chivas home", "Cultural capital"]
      },
      {
        id: 14,
        city: "Monterrey",
        state: "Nuevo León",
        stadium: "Estadio BBVA",
        capacity: "53,500",
        opened: "2015",
        teams: "CF Monterrey",
        specialFeature: "Steel Giant",
        image: "https://cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/MXYWHLVORRDHPHVD3QOKK6G7AI.jpg",
        matches: "4 matches",
        highlights: ["El Gigante de Acero", "Modern architecture", "Industrial hub"]
      }
    ],
    canada: [
      {
        id: 15,
        city: "Toronto",
        state: "Ontario",
        stadium: "BMO Field",
        capacity: "45,500",
        opened: "2007",
        teams: "Toronto FC, Toronto Argonauts",
        specialFeature: "Canada Opening Match",
        image: "https://nbcsports.brightspotcdn.com/dims4/default/a21f197/2147483647/strip/true/crop/851x479+0+1/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fcb%2F46%2Fd73943a2240f1e37634bd612f075%2Fscreen-shot-2014-11-25-at-10-48-08-am.png",
        matches: "6 matches including Canada opener",
        highlights: ["Expanding for World Cup", "Downtown location", "Canada's largest city"]
      },
      {
        id: 16,
        city: "Vancouver",
        state: "British Columbia",
        stadium: "BC Place",
        capacity: "54,500",
        opened: "1983",
        teams: "Vancouver Whitecaps FC, BC Lions",
        specialFeature: "Retractable Roof",
        image: "https://images.prismic.io/bcplace/34b7e08a-9bfb-45e4-85a1-cb9dded29eb4_BC+Place.jpg?auto=compress,format&rect=0,0,3049,2033&w=1410&h=940",
        matches: "5 matches",
        highlights: ["Retractable fabric roof", "Mountain backdrop", "Pacific beauty"]
      }
    ]
  };

  const getAllCities = () => {
    if (selectedCountry === 'all') {
      return [...hostCities.usa, ...hostCities.mexico, ...hostCities.canada];
    }
    return hostCities[selectedCountry] || [];
  };

  const getCountryStats = () => {
    return {
      total: 16,
      usa: 11,
      mexico: 3,
      canada: 2
    };
  };

  const stats = getCountryStats();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white ">
      {/* Header */}
      <div className=" py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          2026 World Cup <span className="text-red-500">Host Cities</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          16 incredible stadiums across 3 nations ready to make history
        </p>
        
        {/* Stats */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">{stats.total}</div>
            <div className="text-sm text-gray-400">Total Cities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">{stats.usa}</div>
            <div className="text-sm text-gray-400">USA Cities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">{stats.mexico}</div>
            <div className="text-sm text-gray-400">Mexico Cities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">{stats.canada}</div>
            <div className="text-sm text-gray-400">Canada Cities</div>
          </div>
        </div>

        {/* Country Filter */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setSelectedCountry('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCountry === 'all' 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All Countries
          </button>
          <button
            onClick={() => setSelectedCountry('usa')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCountry === 'usa' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🇺🇸 USA
          </button>
          <button
            onClick={() => setSelectedCountry('mexico')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCountry === 'mexico' 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🇲🇽 Mexico
          </button>
          <button
            onClick={() => setSelectedCountry('canada')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCountry === 'canada' 
                ? 'bg-red-400 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🇨🇦 Canada
          </button>
        </div>
      </div>

      {/* Cities Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getAllCities().map((city) => (
            <div
              key={city.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700"
              onClick={() => setSelectedCity(city)}
            >
              <div className="relative">
                <img 
                  src={city.image} 
                  alt={city.stadium}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-sm font-medium">
                  {city.specialFeature}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{city.city}</h3>
                <h4 className="text-lg text-red-400 mb-3">{city.stadium}</h4>
                
                <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{city.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{city.opened}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-1">Home Teams:</div>
                  <div className="text-sm">{city.teams}</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-green-400 font-medium">
                    {city.matches}
                  </div>
                  <div className="text-xs text-gray-500">
                    Click for details
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* City Detail Modal */}
      {selectedCity && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedCity.image} 
                alt={selectedCity.stadium}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedCity(null)}
                className="absolute top-4 right-4 bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-2">{selectedCity.city}</h2>
              <h3 className="text-2xl text-red-400 mb-4">{selectedCity.stadium}</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">Capacity</div>
                  <div className="text-xl font-bold">{selectedCity.capacity}</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">Opened</div>
                  <div className="text-xl font-bold">{selectedCity.opened}</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">Matches</div>
                  <div className="text-xl font-bold text-green-400">{selectedCity.matches}</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">Special Feature</div>
                  <div className="text-lg font-bold text-yellow-400">{selectedCity.specialFeature}</div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Home Teams</h4>
                <p className="text-gray-300">{selectedCity.teams}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Highlights</h4>
                <div className="grid gap-2">
                  {selectedCity.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Star size={16} className="text-yellow-400" />
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}