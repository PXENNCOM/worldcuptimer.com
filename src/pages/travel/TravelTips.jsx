import React from 'react';
import { AlertTriangle, Clock, CreditCard, Shield, Phone, DollarSign, Calendar } from 'lucide-react';

const TravelTips = () => {
  const urgentTips = [
    {
      icon: AlertTriangle,
      title: "VISA CRISIS",
      description: "US visa wait times 260+ days average. Some countries 700+ days. Apply NOW or consider Canada/Mexico games!",
      priority: "critical"
    },
    {
      icon: DollarSign,
      title: "Budget Reality",
      description: "Total trip cost: $5,000-20,000+ per person. Hotels up 400%, flights surge pricing expected.",
      priority: "critical"
    },
    {
      icon: Clock,
      title: "Ticket Sales Soon",
      description: "Official tickets expected late 2025. Hospitality packages available NOW ($5,300-$73,200).",
      priority: "high"
    },
    {
      icon: Shield,
      title: "No Fan ID",
      description: "Unlike previous World Cups, NO special visa system. Regular visas required for all countries.",
      priority: "high"
    }
  ];

  const timelineSteps = [
    { 
      date: "RIGHT NOW", 
      task: "Apply for US visa IMMEDIATELY (if needed). Book luxury hotels. Register FIFA interest.",
      status: "critical"
    },
    { 
      date: "Late 2025", 
      task: "Official ticket lottery. Book flights. Final visa push.",
      status: "high"
    },
    { 
      date: "Early 2026", 
      task: "Final accommodations. Travel insurance. Document prep.",
      status: "medium"
    },
    { 
      date: "June 11, 2026", 
      task: "🏆 World Cup begins in Mexico City!",
      status: "celebration"
    }
  ];

  const budgetBreakdown = [
    { category: "Flights", cost: "$800-3,000", note: "Book 6-12 months ahead" },
    { category: "Hotels (7 nights)", cost: "$1,400-8,400", note: "Expect 400% surge pricing" },
    { category: "Match Tickets", cost: "$300-2,000", note: "Per match, varies by category" },
    { category: "Meals & Transport", cost: "$100-300/day", note: "City dependent" },
    { category: "Visa Fees", cost: "$185-500", note: "Plus appointment/travel costs" },
    { category: "Travel Insurance", cost: "$100-400", note: "Essential for trip cancellation" }
  ];

  const alternativeStrategies = [
    {
      title: "Canada Focus Strategy",
      description: "Target Toronto/Vancouver games. Much easier visa process, lower costs.",
      savings: "Save 30-50% vs US cities"
    },
    {
      title: "Mexico Experience",
      description: "No visa for most countries. Incredible atmosphere, lower costs.",
      savings: "Save 40-60% vs US cities"
    },
    {
      title: "Regional Clustering",
      description: "Pick one region (West/Central/East) to minimize travel costs.",
      savings: "Save 20-40% on transportation"
    },
    {
      title: "Group Travel",
      description: "Organize with friends for bulk discounts on accommodation/transport.",
      savings: "Save 15-30% through sharing"
    }
  ];

  const criticalFacts = [
    "🚨 First World Cup with 48 teams = 104 matches",
    "🚨 No Fan ID system unlike Qatar/Russia",
    "🚨 Three countries = Three visa processes",
    "🚨 16 host cities = Massive travel distances",
    "🚨 Hotels already selling out 18+ months ahead",
    "🚨 Dynamic pricing may make tickets like US sports"
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 lg:py-12">
      {/* Critical Facts Banner */}
      <div className="mb-8 lg:mb-12 bg-red-900/30 border border-red-700 rounded-xl p-4 lg:p-6">
        <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center text-red-400">
          🚨 CRITICAL 2026 WORLD CUP FACTS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {criticalFacts.map((fact, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-3 text-center">
              <p className="text-gray-300 text-xs lg:text-sm break-words">{fact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Urgent Tips */}
      <div className="mb-8 lg:mb-12">
        <h3 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center">
          <span className="text-red-500">URGENT</span> Action Required
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
          {urgentTips.map((tip, index) => {
            const IconComponent = tip.icon;
            const priorityColors = {
              critical: 'border-red-500 bg-red-900/30',
              high: 'border-orange-500 bg-orange-900/20',
              medium: 'border-yellow-500 bg-yellow-900/20'
            };
            
            return (
              <div key={index} className={`rounded-xl p-4 lg:p-6 border-2 ${priorityColors[tip.priority]}`}>
                <IconComponent size={28} className="text-red-400 mb-3 lg:mb-4" />
                <h4 className="font-bold text-white mb-2 text-sm lg:text-base">{tip.title}</h4>
                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">{tip.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Budget Breakdown */}
      <div className="mb-8 lg:mb-12">
        <h3 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center">
          💰 <span className="text-red-500">Realistic</span> Budget Breakdown
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {budgetBreakdown.map((item, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-4 lg:p-6 border border-gray-700">
              <h4 className="font-bold text-green-400 mb-2 text-sm lg:text-base">{item.category}</h4>
              <p className="text-lg lg:text-2xl font-bold text-white mb-2">{item.cost}</p>
              <p className="text-xs lg:text-sm text-gray-400">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 lg:mt-6 text-center bg-orange-900/20 border border-orange-700 rounded-xl p-4 lg:p-6">
          <h4 className="text-lg lg:text-xl font-bold text-orange-400 mb-2">Total Estimated Cost Per Person</h4>
          <p className="text-2xl lg:text-3xl font-bold text-white">$5,000 - $20,000+</p>
          <p className="text-gray-300 mt-2 text-sm lg:text-base">Depends on cities, matches, and accommodation choices</p>
        </div>
      </div>

      {/* Alternative Strategies */}
      <div className="mb-8 lg:mb-12">
        <h3 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center">
          🎯 <span className="text-red-500">Money-Saving</span> Strategies
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {alternativeStrategies.map((strategy, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-4 lg:p-6 border border-gray-700">
              <h4 className="font-bold text-blue-400 mb-2 text-sm lg:text-base">{strategy.title}</h4>
              <p className="text-gray-300 mb-3 text-xs lg:text-sm leading-relaxed">{strategy.description}</p>
              <p className="text-green-400 font-semibold text-sm lg:text-base">{strategy.savings}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto mb-8 lg:mb-12">
        <h3 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center">
          ⏰ <span className="text-red-500">Critical</span> Timeline
        </h3>
        <div className="space-y-4 lg:space-y-6">
          {timelineSteps.map((step, index) => {
            const statusColors = {
              critical: 'bg-red-500',
              high: 'bg-orange-500', 
              medium: 'bg-yellow-500',
              celebration: 'bg-green-500'
            };
            
            return (
              <div key={index} className="flex items-start gap-3 lg:gap-4 bg-gray-800/50 rounded-xl p-4 lg:p-6">
                <div className={`w-8 h-8 lg:w-12 lg:h-12 ${statusColors[step.status]} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm lg:text-base`}>
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-red-400 mb-1 text-sm lg:text-base">{step.date}</h4>
                  <p className="text-gray-300 text-xs lg:text-sm leading-relaxed break-words">{step.task}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Final Warning */}
      <div className="bg-red-900/30 border border-red-700 rounded-xl p-4 lg:p-8 text-center">
        <AlertTriangle size={32} className="text-red-400 mx-auto mb-4 lg:w-12 lg:h-12" />
        <h3 className="text-xl lg:text-3xl font-bold text-red-400 mb-4">⚠️ FINAL WARNING ⚠️</h3>
        <div className="max-w-4xl mx-auto space-y-3 lg:space-y-4 text-sm lg:text-lg text-gray-300">
          <p>
            The 2026 World Cup will be the <strong>biggest in history</strong> with unprecedented demand.
          </p>
          <p>
            US visa processing is already critically behind. <strong className="text-red-400">Some fans have already missed the window.</strong>
          </p>
          <p>
            Hotels are selling out 18+ months ahead. <strong className="text-red-400">Prices have already doubled in many cities.</strong>
          </p>
          <p className="text-base lg:text-xl font-bold text-red-400">
            If you're planning to attend, every day you wait makes it harder and more expensive!
          </p>
        </div>
        
        <div className="mt-4 lg:mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          <div className="bg-red-800/30 rounded-lg p-3 lg:p-4">
            <h4 className="font-bold text-red-300 mb-2 text-sm lg:text-base">Need US Visa?</h4>
            <p className="text-xs lg:text-sm text-gray-300">Apply TODAY. Window closing fast.</p>
          </div>
          <div className="bg-green-800/30 rounded-lg p-3 lg:p-4">
            <h4 className="font-bold text-green-300 mb-2 text-sm lg:text-base">Consider Alternatives</h4>
            <p className="text-xs lg:text-sm text-gray-300">Canada & Mexico much easier, cheaper.</p>
          </div>
          <div className="bg-blue-800/30 rounded-lg p-3 lg:p-4">
            <h4 className="font-bold text-blue-300 mb-2 text-sm lg:text-base">Start Planning NOW</h4>
            <p className="text-xs lg:text-sm text-gray-300">Every week counts. Don't wait!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTips;