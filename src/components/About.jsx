import React from 'react';

const About = () => {
  const careerFlow = [
    {
      department: "Navigation Team (Deck Department)",
      icon: "🧭",
      simpleExplanation: "Responsible for sailing the ship - Navigation, Safety, and Cargo management",
      levels: [
        { position: "Captain", simple: "Master of the ship - Full responsibility" },
        { position: "Chief Officer", simple: "Captain's right hand - Manages daily operations" },
        { position: "2nd/3rd Officer", simple: "Handles navigation and safety equipment" },
        { position: "Deck Cadet", simple: "Trainee learning ship operations" }
      ]
    },
    {
      department: "Engine Team (Engine Department)", 
      icon: "🔧",
      simpleExplanation: "Takes care of ship's machinery and engines - Keeps the ship running",
      levels: [
        { position: "Chief Engineer", simple: "Head of all engine operations" },
        { position: "2nd/3rd Engineer", simple: "Maintains and repairs ship engines" },
        { position: "Engine Cadet", simple: "Trainee learning engine operations" }
      ]
    },
    {
      department: "Service Team (Saloon Department)",
      icon: "👨‍🍳", 
      simpleExplanation: "Manages food, cleaning, and crew comfort onboard",
      levels: [
        { position: "Chief Cook", simple: "Prepares meals for entire crew" },
        { position: "Steward", simple: "Serves food and maintains cleanliness" }
      ]
    }
  ];

  const benefits = [
    { icon: "💰", title: "High Salary", desc: "Starting salary ₹50,000+ per month" },
    { icon: "🌍", title: "World Travel", desc: "Opportunity to visit 100+ countries" },
    { icon: "🎯", title: "Job Security", desc: "Always in demand globally" },
    { icon: "💼", title: "Tax Benefits", desc: "Tax-free income in many cases" }
  ];

  const simpleSteps = [
    { step: "1", title: "Complete 12th", desc: "Science stream with Physics, Chemistry, Maths", icon: "🎓" },
    { step: "2", title: "Join Training", desc: "Enroll in maritime academy course", icon: "⚓" },
    { step: "3", title: "Get Certified", desc: "Complete DG Shipping approved training", icon: "📜" },
    { step: "4", title: "Start Career", desc: "Begin your journey as a cadet", icon: "🚢" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
          Career in Merchant Navy
        </h1>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Sail the seas, explore the world, and build an exciting career with excellent opportunities
        </p>
      </div>

      {/* Simple Explanation */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12 text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">What is Merchant Navy?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>In Simple Terms:</strong> These are commercial ships that transport goods across oceans - 
          everything from your mobile phones, cars, fuel, clothes to food items. Working on these ships is what Merchant Navy is all about.
        </p>
        <div className="mt-6 bg-blue-100 rounded-lg p-4">
          <p className="text-blue-800 font-semibold">
            💡 90% of world trade happens through ships - That's why jobs are always available!
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Why Choose Merchant Navy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Career Flow Section */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
         About the Career Flow
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">+91-9211237634
          {careerFlow.map((department, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              {/* Department Header */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{department.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{department.department}</h3>
                <p className="text-sm text-gray-600">{department.simpleExplanation}</p>
              </div>
              
              {/* Career Levels */}
              <div className="space-y-3">
                {department.levels.map((level, levelIndex) => (
                  <div key={levelIndex} className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${
                        levelIndex === 0 ? 'bg-green-500' : 
                        levelIndex === 1 ? 'bg-blue-500' :
                        levelIndex === 2 ? 'bg-yellow-500' : 'bg-gray-500'
                      }`}></div>
                      <div>
                        <h4 className="font-bold text-blue-800 text-sm">{level.position}</h4>
                        <p className="text-xs text-gray-600">{level.simple}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Career Progression Note */}
        <div className="mt-8 bg-yellow-50 rounded-lg p-4 text-center">
          <p className="text-yellow-800 font-semibold">
            🚀 <strong>Career Path:</strong> Start as Cadet (Training) → Become Officer → Grow to Captain/Chief Engineer!
          </p>
        </div>
      </div>

      {/* Simple Steps to Join */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">How to Get Started?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {simpleSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl mb-3">{step.icon}</div>
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                {step.step}
              </div>
              <h3 className="font-bold text-blue-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Training Information */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">Ready to Start Your Journey?</h2>
        <p className="text-blue-200 mb-6">
          Join our maritime training program and begin your exciting career at sea
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition duration-300">
            Apply for Course
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-blue-900 transition duration-300">
            Download Brochure
          </button>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-8 text-center">
        <p className="text-gray-700">
          ❓ <strong>Have questions?</strong> Speak with our career counselor - 
          <span className="text-blue-600 font-semibold"> +91-XXXXXXXXXX</span>
        </p>
      </div>
    </div>
  );
};

export default About;