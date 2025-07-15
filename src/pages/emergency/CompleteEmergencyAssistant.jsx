import React from 'react';
import EmergencyHeader from './EmergencyHeader';
import EmergencyNumbers from './EmergencyNumbers';
import ConsulateSupport from './ConsulateSupport';
import InsuranceClaims from './InsuranceClaims';

const CompleteEmergencyAssistant = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <section id="header">
        <EmergencyHeader />
      </section>

      {/* Emergency Numbers Section */}
      <section id="emergency-numbers" className="border-t border-gray-800">
        <EmergencyNumbers />
      </section>

      {/* Consulate Support Section */}
      <section id="consulate-support" className="border-t border-gray-800">
        <ConsulateSupport />
      </section>

      {/* Insurance Claims Section */}
      <section id="insurance-claims" className="border-t border-gray-800">
        <InsuranceClaims />
      </section>

      {/* Quick Navigation Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-red-400 mb-4">🚨 Emergency Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="tel:911" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-colors">
                📞 Call 911 (All Countries)
              </a>
              <a href="tel:+1-888-407-4747" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-colors">
                🇺🇸 US Embassy Emergency
              </a>
              <a href="tel:+1-613-996-8885" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-colors">
                🇨🇦 Canada Emergency
              </a>
            </div>
            <div className="mt-6 text-gray-400 text-sm">
              <p>Save this page offline • Share with travel companions • Keep emergency numbers accessible</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompleteEmergencyAssistant;