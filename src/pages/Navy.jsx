import React from 'react'
import { Link } from 'react-router-dom'

const Navy = () => {
  const merchantNavyInfo = [
    {
      title: "What is Merchant Navy?",
      content: "The Merchant Navy is the commercial fleet that handles global trade and transportation. It comprises cargo ships, tankers, container vessels, and other commercial ships that carry over 90% of world trade.",
      icon: "🚢"
    },
    {
      title: "Career Opportunities",
      content: "Exciting roles in Deck Department, Engine Department, and Service Department with opportunities to work on international vessels and visit multiple countries.",
      icon: "🌍"
    },
    {
      title: "Salary & Benefits",
      content: "Attractive tax-free salaries, early responsibilities, global exposure, and excellent career growth opportunities in the maritime industry.",
      icon: "💰"
    },
    {
      title: "Training & Certification",
      content: "Comprehensive training programs approved by DG Shipping and international maritime authorities with guaranteed placement assistance.",
      icon: "🎓"
    }
  ];

  const careerPaths = [
    {
      department: "Deck Department",
      roles: ["Navigation Officer", "Chief Officer", "Captain/Master", "Deck Cadet"],
      salary: "₹50,00,000 - ₹1,24,50,000",
      icon: "🧭"
    },
    {
      department: "Engine Department",
      roles: ["Marine Engineer", "Chief Engineer", "Junior Engineer", "Engine Cadet"],
      salary: "₹58,10,000 - ₹1,32,80,000",
      icon: "🔧"
    },
    {
      department: "Service Department",
      roles: ["Ship Cook", "Chief Steward", "Purser", "Hotel Manager"],
      salary: "₹33,20,000 - ₹66,40,000",
      icon: "👨‍🍳"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Merchant Navy Careers
          </h1>
          <p className="text-xl lg:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
            Embark on an exciting journey across the world's oceans with a prestigious career in the Merchant Navy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/course" 
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition duration-300"
            >
              Explore Courses
            </Link>
            <Link 
              to="/apply" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition duration-300"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            About Merchant Navy
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {merchantNavyInfo.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Career Paths Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Career Paths</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {careerPaths.map((path, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="text-3xl mb-4">{path.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">{path.department}</h3>
                <ul className="space-y-2 mb-4">
                  {path.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {role}
                    </li>
                  ))}
                </ul>
                <div className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-bold text-center">
                  Salary: {path.salary}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Merchant Navy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Why Choose Merchant Navy?</h2>
            <div className="space-y-4">
              {[
                "🌊 Global travel and international exposure",
                "💵 Tax-free income and high salaries",
                "🚀 Fast career progression",
                "🌎 Opportunity to visit 100+ countries",
                "🎯 Job security and high demand",
                "🏆 Prestigious career with respect"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center text-lg text-gray-700">
                  <span className="text-2xl mr-3">{benefit.split(' ')[0]}</span>
                  {benefit.split(' ').slice(1).join(' ')}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">Quick Facts</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Global Trade Transport</span>
                <span className="font-bold">95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Starting Salary</span>
                <span className="font-bold">₹33,20,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Career Growth</span>
                <span className="font-bold">10-15 Years to Captain</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Job Demand</span>
                <span className="font-bold">High</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Maritime Journey?</h2>
          <p className="text-xl text-blue-200 mb-8">Join thousands of successful seafarers who started their career with AS Maritime Academy</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/course" 
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition duration-300"
            >
              View All Courses
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition duration-300"
            >
              Contact Counselor
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navy