import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import HostCities from './pages/cities/Cities';
import DestinationGuide from './pages/destination/DestinationGuide';
import TravelGuide from './pages/travel/TravelGuide';
import Emergency from './pages/emergency/CompleteEmergencyAssistant';


const AppRoutes = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/host-cities" element={<HostCities />} />
          <Route path="/destination-guide" element={<DestinationGuide />} />
          <Route path="/travel-guide" element={<TravelGuide />} />
          <Route path="/emergency-guide" element={<Emergency />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;