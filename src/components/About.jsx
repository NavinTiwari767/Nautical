import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
          About Merchant Navy
        </h1>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Discover the prestigious world of maritime careers and embark on a journey 
          that combines adventure, professionalism, and global opportunities.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              What is the Merchant Navy?
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              The Merchant Navy represents the commercial fleet of a country, comprising 
              cargo ships, tankers, passenger vessels, and other commercial ships that 
              facilitate global trade and transportation. It's the backbone of international 
              commerce, carrying over 90% of world trade.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Unlike the military navy, the Merchant Navy focuses on commercial shipping 
              operations, offering exciting career opportunities for seafarers who ensure 
              the smooth flow of goods across the world's oceans.
            </p>
            
            <div className="bg-blue-800 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Why Choose Merchant Navy?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3">⚓</span>
                  <span>Global exposure and international travel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3">💰</span>
                  <span>Attractive salary packages with tax benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3">🌍</span>
                  <span>Opportunity to visit multiple countries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3">🚢</span>
                  <span>Early responsibility and career growth</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content - Image/Stats */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
              Career Statistics
            </h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">$100,000+</div>
                <div className="text-gray-600">Average Annual Salary</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">180+</div>
                <div className="text-gray-600">Countries to Explore</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">95%</div>
                <div className="text-gray-600">Global Trade Transport</div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">Quick Facts:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Merchant Navy officers enjoy tax-free income in many cases</li>
                <li>• Career progression from Cadet to Captain in 10-15 years</li>
                <li>• Continuous demand for qualified maritime professionals</li>
                <li>• Opportunity to work with international shipping companies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Career Path Section */}
        <div className="bg-white rounded-xl shadow-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Career Path in Merchant Navy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-4">👨‍✈️</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Deck Department</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Navigation Officer</li>
                <li>• Chief Officer</li>
                <li>• Captain/Master</li>
                <li>• Deck Cadet</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Engine Department</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Engine Cadet</li>
                <li>• Junior Engineer</li>
                <li>• Chief Engineer</li>
                <li>• Technical Superintendent</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-4">🍳</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Service Department</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Cook/Steward</li>
                <li>• Chief Cook</li>
                <li>• Purser</li>
                <li>• Hotel Manager</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Training Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-yellow-300 mb-6 text-center">
            Training at AS Maritime Academy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Our Programs Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="bg-yellow-400 text-blue-900 rounded-full w-6 h-6 flex items-center justify-center mr-3">✓</span>
                  <span>Pre-Sea Training Courses</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-400 text-blue-900 rounded-full w-6 h-6 flex items-center justify-center mr-3">✓</span>
                  <span>DG Shipping Approved Programs</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-400 text-blue-900 rounded-full w-6 h-6 flex items-center justify-center mr-3">✓</span>
                  <span>STCW Certification</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-400 text-blue-900 rounded-full w-6 h-6 flex items-center justify-center mr-3">✓</span>
                  <span>Placement Assistance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Eligibility Criteria:</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• 10+2 with Physics, Chemistry, Mathematics</li>
                <li>• Age: 17-25 years</li>
                <li>• Medical fitness as per DG Shipping standards</li>
                <li>• Good English communication skills</li>
              </ul>
              <button className="mt-6 bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition duration-300">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About