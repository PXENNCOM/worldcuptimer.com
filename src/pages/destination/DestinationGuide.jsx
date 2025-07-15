// pages/DestinationGuide.jsx
import React, { useState } from 'react';
import DestinationHeader from './DestinationHeader';
import CityGrid from './CityGrid';
import CityModal from './CityModal';

const DestinationGuide = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const destinations = [
    {
      id: 1,
      city: "New York/New Jersey",
      country: "USA",
      image: "https://media.cntraveller.com/photos/64f4fc5f663208f83a21af16/4:3/w_2668,h_2001,c_limit/New%20York%20City_GettyImages-1347979016.jpg",
      climate: "Warm summers (20-28°C)",
      timezone: "EST (UTC-5)",
      bestTime: "June-July perfect for outdoor activities",
      signature: "New York-style pizza",
      attractions: [
        "Times Square - The crossroads of the world",
        "Central Park - 843-acre green oasis",
        "Statue of Liberty - Symbol of freedom",
        "Broadway Shows - World-class theater",
        "9/11 Memorial - Moving tribute",
        "Brooklyn Bridge - Iconic suspension bridge"
      ],
      food: [
        "Joe's Pizza - Authentic NY pizza slices",
        "Katz's Delicatessen - Famous pastrami sandwiches",
        "Union Oyster House - Historic seafood dining",
        "Levain Bakery - Legendary cookies",
        "Peter Luger - Legendary steakhouse"
      ],
      shopping: [
        "Fifth Avenue - Luxury flagship stores",
        "SoHo - Trendy boutiques and art galleries",
        "Woodbury Common - Premium outlet shopping",
        "Century 21 - Designer discounts",
        "Chelsea Market - Food and artisan vendors"
      ],
      culture: [
        "Metropolitan Museum of Art",
        "MoMA - Modern art masterpieces",
        "Little Italy & Chinatown heritage",
        "Greenwich Village jazz scene",
        "Harlem's rich African-American culture"
      ],
      transportation: "Extensive subway system, taxis, Uber/Lyft"
    },
    {
      id: 2,
      city: "Los Angeles",
      country: "USA",
      image: "https://cdn.britannica.com/22/154122-050-B1D0A7FD/Skyline-Los-Angeles-California.jpg",
      climate: "Mediterranean (18-26°C)",
      timezone: "PST (UTC-8)",
      bestTime: "Perfect weather year-round",
      signature: "Tacos and Korean BBQ",
      attractions: [
        "Hollywood Walk of Fame - Celebrity stars",
        "Venice Beach - Bohemian boardwalk",
        "Griffith Observatory - City views and stars",
        "Santa Monica Pier - Classic amusement park",
        "Getty Center - Art and architecture",
        "Malibu Beaches - Scenic coastline"
      ],
      food: [
        "King Taco - Legendary taco trucks",
        "Guelaguetza - Authentic Oaxacan cuisine",
        "Night + Market - Modern Thai flavors",
        "Republique - French-inspired bistro",
        "Grand Central Market - Food hall paradise"
      ],
      shopping: [
        "Rodeo Drive - Luxury shopping district",
        "Melrose Avenue - Vintage and trendy finds",
        "The Grove - Outdoor shopping complex",
        "Third Street Promenade - Street performers",
        "Arts District - Local artisan goods"
      ],
      culture: [
        "Little Tokyo cultural heritage",
        "Olvera Street Mexican history",
        "Koreatown vibrant community",
        "Museum Row on Wilshire",
        "Street art in Downtown LA"
      ],
      transportation: "Metro system, ride-sharing, rental cars recommended"
    },
    {
      id: 3,
      city: "Mexico City",
      country: "Mexico",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mexico_City_Reforma_Street.jpg/960px-Mexico_City_Reforma_Street.jpg",
      climate: "Mild year-round (15-25°C)",
      timezone: "CST (UTC-6)",
      bestTime: "Dry season, perfect for sightseeing",
      signature: "Street tacos and mezcal",
      attractions: [
        "Zócalo - Historic main square",
        "Templo Mayor - Aztec ruins",
        "Chapultepec Castle - Imperial palace",
        "Xochimilco - Floating gardens",
        "Frida Kahlo Museum - Artist's home",
        "Teotihuacán - Ancient pyramids"
      ],
      food: [
        "Pujol - World-renowned Mexican cuisine",
        "Azul Histórico - Traditional dishes",
        "Mercado de San Juan - Gourmet market",
        "Tacos El Califa - Street taco perfection",
        "Quintonil - Modern Mexican gastronomy"
      ],
      shopping: [
        "Mercado de Artesanías - Handcrafted goods",
        "Polanco - Upscale shopping district",
        "Coyoacán Market - Traditional crafts",
        "Antara Fashion Hall - Designer brands",
        "Ciudadela Market - Authentic souvenirs"
      ],
      culture: [
        "Mariachi music in Plaza Garibaldi",
        "Day of the Dead traditions",
        "Muralism art movement",
        "Colonial architecture",
        "Indigenous heritage sites"
      ],
      transportation: "Metro system, Metrobús, taxis, Uber"
    },
    {
      id: 4,
      city: "Toronto",
      country: "Canada",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Toronto_Skyline_viewed_from_Algonquin_Island_%2816-9_crop%29.jpg/960px-Toronto_Skyline_viewed_from_Algonquin_Island_%2816-9_crop%29.jpg",
      climate: "Warm summers (18-26°C)",
      timezone: "EST (UTC-5)",
      bestTime: "Summer perfect for outdoor festivals",
      signature: "Poutine and multicultural cuisine",
      attractions: [
        "CN Tower - Iconic landmark and views",
        "Royal Ontario Museum - Natural history",
        "Toronto Islands - Beach getaway",
        "Casa Loma - Gothic Revival castle",
        "Harbourfront - Waterfront entertainment",
        "Kensington Market - Bohemian neighborhood"
      ],
      food: [
        "St. Lawrence Market - Culinary destination",
        "Schwartz's Deli - Montreal-style smoked meat",
        "Richmond Station - Farm-to-table dining",
        "Pai Northern Thai - Authentic Thai cuisine",
        "The Stockyards - Canadian comfort food"
      ],
      shopping: [
        "Eaton Centre - Major shopping mall",
        "Queen Street West - Indie boutiques",
        "Kensington Market - Vintage finds",
        "PATH Underground - Weather-protected shopping",
        "Distillery District - Artisan shops"
      ],
      culture: [
        "Multiculturalism celebrations",
        "Toronto International Film Festival",
        "Indigenous heritage sites",
        "Hockey Hall of Fame",
        "Caribana festival traditions"
      ],
      transportation: "TTC subway, streetcars, buses, GO Transit"
    },
    {
      id: 5,
      city: "Miami",
      country: "USA",
      image: "https://res.cloudinary.com/sentral/image/upload/f_auto/q_auto/v1679415641/miami_arial_view_2000x1125.jpg",
      climate: "Tropical (22-31°C)",
      timezone: "EST (UTC-5)",
      bestTime: "Less humid in early summer",
      signature: "Cuban sandwiches and ceviche",
      attractions: [
        "South Beach - Art Deco architecture",
        "Wynwood Walls - Street art district",
        "Little Havana - Cuban culture",
        "Vizcaya Museum - Italian Renaissance villa",
        "Everglades National Park - Wildlife sanctuary",
        "Key Biscayne - Pristine beaches"
      ],
      food: [
        "Joe's Stone Crab - Miami institution",
        "Versailles Restaurant - Cuban cuisine",
        "Yardbird - Southern comfort food",
        "Zuma - Japanese robatayaki",
        "La Mar - Peruvian seafood"
      ],
      shopping: [
        "Lincoln Road - Pedestrian mall",
        "Aventura Mall - Luxury shopping",
        "Bayside Marketplace - Waterfront shopping",
        "Design District - High-end boutiques",
        "Dadeland Mall - Major retail center"
      ],
      culture: [
        "Art Basel Miami Beach",
        "Cuban exile community heritage",
        "Art Deco preservation",
        "Salsa and Latin music scene",
        "International banking hub"
      ],
      transportation: "Metromover, Metrobus, ride-sharing, rental cars"
    },
    {
      id: 6,
      city: "Seattle",
      country: "USA",
      image: "https://d2i7eq829tbbje.cloudfront.net/webp/medium/scenicseattle8_P_2554_328274d4-ef06-441f-8380-22986e8ab7ad",
      climate: "Mild summers (15-24°C)",
      timezone: "PST (UTC-8)",
      bestTime: "Dry summer season ideal",
      signature: "Coffee culture and fresh seafood",
      attractions: [
        "Space Needle - Iconic 1962 World's Fair tower",
        "Pike Place Market - Historic public market",
        "Chihuly Garden and Glass - Art installation",
        "Mount Rainier National Park - Alpine paradise",
        "Puget Sound - Ferry rides and islands",
        "Fremont Troll - Quirky neighborhood art"
      ],
      food: [
        "Pike Place Fish Market - Fresh seafood",
        "Original Starbucks - Coffee history",
        "Canlis - Fine Pacific Northwest dining",
        "Paseo - Caribbean sandwiches",
        "Dick's Drive-In - Local burger chain"
      ],
      shopping: [
        "Pike Place Market - Local crafts",
        "Westfield Southcenter - Major mall",
        "Capitol Hill - Vintage and records",
        "University Village - Outdoor shopping",
        "Fremont Sunday Market - Antiques"
      ],
      culture: [
        "Grunge music birthplace",
        "Coffee culture origins",
        "Native American heritage",
        "Tech industry innovation",
        "Environmental consciousness"
      ],
      transportation: "Link Light Rail, buses, streetcars, ferries"
    },
    {
      id: 7,
      city: "Dallas",
      country: "USA",
      image: "https://cdn.britannica.com/31/94331-050-4B1F71C2/Skyline-Dallas-Texas.jpg",
      climate: "Hot summers (22-35°C)",
      timezone: "CST (UTC-6)",
      bestTime: "Spring and fall ideal, summer hot",
      signature: "BBQ brisket and Tex-Mex",
      attractions: [
        "Reunion Tower - Iconic Dallas skyline view",
        "Sixth Floor Museum - JFK assassination site", 
        "Dallas Arboretum - 66-acre botanical garden",
        "Deep Ellum - Historic entertainment district",
        "AT&T Stadium Tours - Cowboys home venue",
        "Klyde Warren Park - Urban green space"
      ],
      food: [
        "Franklin Barbecue - Award-winning brisket",
        "Pecan Lodge - Authentic Texas BBQ",
        "El Fenix - Historic Tex-Mex restaurant",
        "Campisi's - Dallas pizza institution",
        "State Fair Corny Dogs - Local favorites"
      ],
      shopping: [
        "NorthPark Center - Luxury shopping mall",
        "West Village - Trendy boutiques",
        "Bishop Arts District - Local artisans",
        "Deep Ellum Markets - Vintage finds",
        "Knox-Henderson - Upscale shopping"
      ],
      culture: [
        "Dallas Arts District - Largest in US",
        "Country music heritage",
        "Cowboys football culture",
        "Oil industry history",
        "Southern hospitality traditions"
      ],
      transportation: "DART light rail, buses, ride-sharing"
    },
    {
      id: 8,
      city: "Atlanta",
      country: "USA",
      image: "https://bunny-wp-pullzone-cjamrcljf0.b-cdn.net/wp-content/uploads/2021/02/atlanta_001.jpg",
      climate: "Humid summers (21-31°C)",
      timezone: "EST (UTC-5)",
      bestTime: "Spring and fall comfortable",
      signature: "Fried chicken and peach dishes",
      attractions: [
        "Martin Luther King Jr. Historic Site",
        "Atlanta Beltline - Urban trail system",
        "Georgia Aquarium - World's largest",
        "Piedmont Park - Central green space",
        "Fox Theatre - Historic entertainment venue",
        "Stone Mountain - Confederate memorial"
      ],
      food: [
        "Mary Mac's Tea Room - Southern comfort food",
        "The Varsity - Historic drive-in",
        "Busy Bee Cafe - Soul food institution",
        "Antico Pizza - Neapolitan-style pizza",
        "Sweet Auburn Barbecue - Local favorite"
      ],
      shopping: [
        "Lenox Square - Premier shopping mall",
        "Atlantic Station - Mixed-use development",
        "Little Five Points - Vintage and alternative",
        "Buckhead - Upscale shopping district",
        "Ponce City Market - Trendy food hall"
      ],
      culture: [
        "Civil Rights Movement history",
        "Hip-hop music birthplace",
        "Southern belle traditions",
        "Film industry 'Hollywood of the South'",
        "African-American cultural heritage"
      ],
      transportation: "MARTA rail system, streetcars, buses"
    },
    {
      id: 9,
      city: "Boston",
      country: "USA",
      image: "https://cdn.britannica.com/66/93866-050-64944EF0/Skyline-Boston.jpg",
      climate: "Mild summers (18-27°C)",
      timezone: "EST (UTC-5)",
      bestTime: "Summer perfect for walking tours",
      signature: "Clam chowder and lobster rolls",
      attractions: [
        "Freedom Trail - Revolutionary War sites",
        "Fenway Park - Historic baseball stadium",
        "Boston Common - America's oldest park",
        "USS Constitution - 'Old Ironsides'",
        "Harvard University - Cambridge campus",
        "Boston Tea Party Ships - Interactive museum"
      ],
      food: [
        "Union Oyster House - America's oldest restaurant",
        "Neptune Oyster - Fresh seafood",
        "Legal Sea Foods - Boston institution",
        "Mike & Patty's - Gourmet breakfast sandwiches",
        "Modern Pastry - North End Italian bakery"
      ],
      shopping: [
        "Newbury Street - Fashion and galleries",
        "Faneuil Hall Marketplace - Historic shopping",
        "Copley Place - Upscale shopping mall",
        "Harvard Square - Books and boutiques",
        "North End Markets - Italian specialties"
      ],
      culture: [
        "Revolutionary War heritage",
        "Irish-American traditions",
        "Academic excellence (Harvard, MIT)",
        "Literary history",
        "Sports passion (Red Sox, Celtics)"
      ],
      transportation: "T subway system, walking-friendly"
    },
    {
      id: 10,
      city: "Philadelphia",
      country: "USA",
      image: "https://www.visitphilly.com/wp-content/uploads/2025/06/Center-city-skyline-photo-by-elevated-angles-for-visit-philadelphia-2200x1237px.jpg",
      climate: "Warm summers (20-29°C)",
      timezone: "EST (UTC-5)",
      bestTime: "Spring and summer for outdoor exploration",
      signature: "Philly cheesesteaks",
      attractions: [
        "Liberty Bell - Symbol of American independence",
        "Independence Hall - Birthplace of America",
        "Philadelphia Museum of Art - Rocky Steps",
        "Reading Terminal Market - Historic food market",
        "Eastern State Penitentiary - Historic prison",
        "Fairmount Park - Largest urban park system"
      ],
      food: [
        "Pat's King of Steaks - Original cheesesteak",
        "Geno's Steaks - Cheesesteak rivalry",
        "Reading Terminal Market - Diverse food vendors",
        "Zahav - Israeli cuisine",
        "Federal Donuts - Artisanal donuts and fried chicken"
      ],
      shopping: [
        "Rittenhouse Square - Upscale boutiques",
        "King of Prussia Mall - Massive shopping center",
        "South Street - Eclectic shops",
        "Chestnut Street - Historic shopping district",
        "Northern Liberties - Trendy local shops"
      ],
      culture: [
        "American Revolution birthplace",
        "City of Brotherly Love motto",
        "Mural arts program",
        "Italian Market heritage",
        "Sports culture (Eagles, Phillies)"
      ],
      transportation: "SEPTA regional rail, buses, walkable downtown"
    },
    {
      id: 11,
      city: "Houston",
      country: "USA",
      image: "https://pbk.com/wp-content/uploads/2024/05/pbk-GettyImages-1500177421-2-1536x1014.jpg",
      climate: "Hot, humid summers (24-36°C)",
      timezone: "CST (UTC-6)",
      bestTime: "Fall and winter, summer very hot",
      signature: "Tex-Mex and BBQ",
      attractions: [
        "Space Center Houston - NASA's visitor center",
        "Museum District - 19 cultural institutions",
        "Buffalo Bayou Park - Urban green space",
        "Houston Zoo - 6,000 animals",
        "Downtown Tunnels - Underground walkways",
        "Rice Village - Shopping and dining district"
      ],
      food: [
        "The Pit Room - Award-winning barbecue",
        "Xochi - Oaxacan Mexican cuisine",
        "Crawfish & Noodles - Vietnamese-Cajun fusion",
        "Uchi - Japanese sushi and seafood",
        "Ninfa's - Tex-Mex institution"
      ],
      shopping: [
        "The Galleria - Massive shopping complex",
        "River Oaks District - Luxury shopping",
        "Heights Mercantile - Local artisans",
        "Westheimer Antique Market - Vintage finds",
        "Rice Village - Boutique shopping"
      ],
      culture: [
        "Space exploration heritage",
        "Oil industry capital",
        "Diverse international communities",
        "Rodeo and cowboy culture",
        "Medical center innovation"
      ],
      transportation: "METRORail, extensive highway system"
    },
    {
      id: 12,
      city: "Kansas City",
      country: "USA",
      image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/257000/257648-Missouri.jpg",
      climate: "Hot summers (21-32°C)",
      timezone: "CST (UTC-6)",
      bestTime: "Spring and fall comfortable",
      signature: "Kansas City barbecue and jazz",
      attractions: [
        "National WWI Museum - World's most comprehensive",
        "Kansas City Zoo - 200-acre wildlife experience",
        "Union Station - Historic transportation hub",
        "Crown Center - Shopping and entertainment",
        "Nelson-Atkins Museum - World-class art collection",
        "Country Club Plaza - Outdoor shopping district"
      ],
      food: [
        "Joe's Kansas City Bar-B-Que - Burnt ends originated here",
        "LC's Bar-B-Q - Local barbecue institution",
        "Winstead's - Regional burger chain",
        "The American - Modern American cuisine",
        "Gus's World Famous Fried Chicken"
      ],
      shopping: [
        "Country Club Plaza - Outdoor shopping",
        "Crown Center - Indoor shopping and entertainment", 
        "Crossroads Arts District - Local artisans",
        "Overland Park Farmers Market - Local goods",
        "Zona Rosa - Outdoor lifestyle center"
      ],
      culture: [
        "Jazz music heritage",
        "Barbecue capital",
        "Fountains (more than Rome)",
        "Chiefs football culture",
        "Midwest hospitality"
      ],
      transportation: "KC Streetcar, buses, ride-sharing"
    },
    {
      id: 13,
      city: "San Francisco Bay Area",
      country: "USA",
      image: "https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2025-01/VC_San-Francisco-Bay-Area-Region_gty-1348089637-RF_1280x640.jpg.webp?itok=gnJSI8kT",
      climate: "Cool summers (14-22°C)",
      timezone: "PST (UTC-8)",
      bestTime: "Fall warmest, summer can be foggy",
      signature: "Sourdough bread and Dungeness crab",
      attractions: [
        "Golden Gate Bridge - Iconic suspension bridge",
        "Alcatraz Island - Historic federal prison",
        "Fisherman's Wharf - Tourist waterfront district",
        "Lombard Street - World's crookedest street",
        "Silicon Valley - Tech innovation hub",
        "Napa Valley - World-famous wine region"
      ],
      food: [
        "Swan Oyster Depot - Historic seafood counter",
        "Tartine Bakery - Artisanal bread and pastries",
        "Mission Chinese Food - Innovative Chinese cuisine",
        "Zuni Café - San Francisco institution",
        "Ghirardelli Square - Chocolate factory"
      ],
      shopping: [
        "Union Square - Premier shopping district",
        "Ferry Building Marketplace - Artisanal foods",
        "Haight-Ashbury - Vintage and counterculture",
        "Castro District - LGBTQ+ community shops",
        "Chinatown - Traditional Asian goods"
      ],
      culture: [
        "Summer of Love counterculture",
        "LGBTQ+ rights movement",
        "Gold Rush history",
        "Tech industry innovation",
        "Environmental activism"
      ],
      transportation: "BART, Muni, cable cars, ferries"
    },
    {
      id: 14,
      city: "Vancouver",
      country: "Canada",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Concord_Pacific_Master_Plan_Area.jpg",
      climate: "Mild year-round (8-22°C)",
      timezone: "PST (UTC-8)",
      bestTime: "Summer dry season ideal",
      signature: "Sushi and Pacific salmon",
      attractions: [
        "Stanley Park - 1,000-acre urban park",
        "Granville Island - Public market and arts",
        "Capilano Suspension Bridge - Treetop adventure",
        "Gastown - Historic cobblestone district",
        "Science World - Interactive science museum",
        "Queen Elizabeth Park - Bloedel Conservatory"
      ],
      food: [
        "Vij's - Modern Indian cuisine",
        "Tojo's Restaurant - Sushi innovation",
        "White Spot - Canadian comfort food",
        "Japadog - Japanese-style hot dogs",
        "Tim Hortons - Canadian coffee chain"
      ],
      shopping: [
        "Robson Street - Fashion and shopping",
        "Pacific Centre - Downtown shopping mall",
        "Granville Island Public Market - Local artisans",
        "Main Street - Vintage and indie shops",
        "Richmond Night Market - Asian goods"
      ],
      culture: [
        "Indigenous First Nations heritage",
        "Asian Pacific community",
        "Film industry 'Hollywood North'",
        "Outdoor recreation culture",
        "Environmental consciousness"
      ],
      transportation: "SkyTrain, buses, SeaBus ferries"
    },
    {
      id: 15,
      city: "Guadalajara",
      country: "Mexico",
      image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/62000/62637-Guadalajara.jpg",
      climate: "Mild year-round (18-28°C)",
      timezone: "CST (UTC-6)",
      bestTime: "Dry season October to April",
      signature: "Birria and tequila",
      attractions: [
        "Historic Center - Colonial architecture",
        "Hospicio Cabañas - UNESCO World Heritage site",
        "Tlaquepaque - Artisan village",
        "Tequila Express - Train to tequila region",
        "Teatro Degollado - Neoclassical opera house",
        "Mercado San Juan de Dios - Traditional market"
      ],
      food: [
        "Birrieria Las 9 Esquinas - Traditional birria",
        "Casa Bariachi - Regional Mexican cuisine",
        "Tortas Ahogadas El Guero - Drowned sandwiches",
        "La Chata - Traditional Tapatía food",
        "Karne Garibaldi - World's fastest service"
      ],
      shopping: [
        "Tlaquepaque - Handcrafted pottery and art",
        "Tonalá - Traditional Mexican crafts",
        "Plaza del Sol - Modern shopping center",
        "Mercado Libertad - Traditional market",
        "Andares - Upscale shopping mall"
      ],
      culture: [
        "Mariachi music birthplace",
        "Charro (Mexican cowboy) traditions",
        "Tapatío cultural identity",
        "Day of the Dead celebrations",
        "Traditional pottery crafts"
      ],
      transportation: "Mi Macro bus system, taxis, Uber"
    },
    {
      id: 16,
      city: "Monterrey",
      country: "Mexico",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/de/View_of_Monterrey_%282015%29.jpg",
      climate: "Hot summers (20-35°C)",
      timezone: "CST (UTC-6)",
      bestTime: "Fall and winter milder",
      signature: "Cabrito and craft beer",
      attractions: [
        "Cerro de la Silla - Iconic mountain backdrop",
        "Macroplaza - Grand central square",
        "Santa Lucía Riverwalk - Artificial canal",
        "Palacio del Obispado - Historic palace",
        "Fundidora Park - Urban green space",
        "MARCO Museum - Contemporary art"
      ],
      food: [
        "El Rey del Cabrito - Traditional roasted goat",
        "Mercado Juárez - Local food market",
        "Los Arcos - Seafood institution",
        "Casa do Bacalhau - Portuguese cuisine",
        "Bread & Milk - Modern Mexican breakfast"
      ],
      shopping: [
        "Palacio del Hierro - Luxury department store",
        "Fashion Drive - High-end shopping center",
        "Mercado Juárez - Traditional market",
        "Plaza Fiesta San Agustín - Regional shopping",
        "Paseo San Pedro - Entertainment complex"
      ],
      culture: [
        "Industrial heritage",
        "Regiomontano identity",
        "Business and innovation hub",
        "Traditional norteño music",
        "Steel and manufacturing history"
      ],
      transportation: "Metrorrey subway, buses, taxis"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <DestinationHeader />
      <CityGrid 
        destinations={destinations} 
        onCitySelect={setSelectedCity}
      />
      <CityModal 
        selectedCity={selectedCity} 
        onClose={() => setSelectedCity(null)}
      />
    </div>
  );
};

export default DestinationGuide;