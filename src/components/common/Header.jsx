import React, { useState } from 'react';
import { ChevronDown, X, Home, MapPin, Compass, Map, AlertTriangle } from 'lucide-react';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: <Home size={18} />,
      description: 'Main page'
    },
    { 
      path: '/host-cities', 
      label: 'Host Cities', 
      icon: <MapPin size={18} />,
      description: '16 incredible stadiums'
    },
    { 
      path: '/destination-guide', 
      label: 'Destination Guide', 
      icon: <Compass size={18} />,
      description: 'Explore vibrant cities'
    },
    { 
      path: '/travel-guide', 
      label: 'Travel Guide', 
      icon: <Map size={18} />,
      description: 'Travel information'
    },
    { 
      path: '/emergency-guide', 
      label: 'Emergency Guide', 
      icon: <AlertTriangle size={18} />,
      description: 'Safety & emergency info'
    }
  ];

  const handleMenuClick = (path) => {
    // Bu kısmı gerçek projede react-router-dom'un navigate hook'u ile değiştirin
    window.location.href = path;
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Fixed Menu Button */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={toggleModal}
          className="bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/90 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-700"
        >
          <ChevronDown 
            size={20} 
            className={`transition-transform duration-300 ${isModalOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden border border-gray-700">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-red-600 to-red-500 p-6 text-white relative">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Navigation</h2>
                    <p className="text-red-100 text-sm">2026 World Cup Guide</p>
                  </div>
                  <button
                    onClick={toggleModal}
                    className="text-white hover:text-red-200 transition-colors bg-red-700/30 rounded-full p-2"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-6 bg-gray-900">
                <nav className="space-y-3">
                  {menuItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleMenuClick(item.path)}
                      className="w-full text-left p-4 rounded-lg hover:bg-gray-800/50 transition-all duration-200 group border border-gray-700/50 hover:border-red-500/30"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-red-400 group-hover:text-red-300 transition-colors">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium group-hover:text-red-100 transition-colors">
                            {item.label}
                          </div>
                          <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                            {item.description}
                          </div>
                        </div>
                        <ChevronDown 
                          size={16} 
                          className="text-gray-500 group-hover:text-red-400 rotate-[-90deg] transition-colors" 
                        />
                      </div>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-800/50 p-4 text-center border-t border-gray-700">
                <p className="text-gray-400 text-sm">FIFA World Cup 2026™</p>
                <p className="text-gray-500 text-xs mt-1">June 11 - July 19, 2026</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;