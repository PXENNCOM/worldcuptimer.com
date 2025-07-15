import React from 'react';
import TravelHeader from './TravelHeader';
import TravelSections from './TravelSections';
import TravelTips from './TravelTips';

const TravelGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <TravelHeader />
      <TravelSections />
      <TravelTips />
    </div>
  );
};

export default TravelGuide;