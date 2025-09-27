import React from 'react'

const Course = () => {
  const courses = [
    {
      title: "Pre Sea Training",
      subtitle: "SEAMAN (ENGINE RATING), SALON RATING STOW 2010",
      description: "Comprehensive pre-sea training program designed to prepare aspiring seafarers for their maritime careers with practical and theoretical knowledge.",
      features: [
        "DG Shipping Approved",
        "International Standards",
        "Practical Training",
        "Placement Assistance"
      ],
      duration: "6-12 Months",
      eligibility: "10+2 with PCM"
    },
    {
      title: "Watchkeeping Navigation/Engine",
      subtitle: "PANAMA, HONDURAS, LIBERIA, DOMINIKA, PALAU MICRONESIA",
      description: "Advanced watchkeeping certification for navigation and engine officers, recognized by multiple international maritime authorities.",
      features: [
        "International Recognition",
        "Multiple Flag States",
        "Advanced Simulation",
        "Global Validity"
      ],
      duration: "3-6 Months",
      eligibility: "Diploma/Degree in Navigation/Engineering"
    },
    {
      title: "SEAMAN Book",
      subtitle: "PANAMA, HONDURAS, LIBERIA, PALAU, MICRONESIA",
      description: "Official seaman's book certification from various flag states, essential for working on international vessels.",
      features: [
        "Multiple Flag Options",
        "Fast Processing",
        "International Validity",
        "Lifetime Documentation"
      ],
      duration: "2-4 Weeks",
      eligibility: "Basic Training Completed"
    },
    {
      title: "C.O.C Engine/Deck",
      subtitle: "PANAMA, HONDURAS, LIBERIA, DOMINIKA, PALAU, MICRONESIA COOKS ISLAND",
      description: "Certificate of Competency for both Engine and Deck departments, providing official licensing for officer positions.",
      features: [
        "Officer Licensing",
        "Multiple Countries",
        "Career Advancement",
        "Higher Salary Scale"
      ],
      duration: "6-12 Months",
      eligibility: "Watchkeeping Experience Required"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
          OUR COURSES
        </h1>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Comprehensive maritime training programs designed to shape world-class seafarers 
          with international certifications and guaranteed placement opportunities.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Course Header */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-blue-200 text-sm">{course.subtitle}</p>
              </div>
              
              {/* Course Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-bold text-blue-800 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    Course Features
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Course Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-xs text-gray-500">Duration</div>
                    <div className="font-bold text-blue-800">{course.duration}</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-xs text-gray-500">Eligibility</div>
                    <div className="font-bold text-blue-800 text-sm">{course.eligibility}</div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold py-3 px-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition duration-300 text-sm">
                    Enroll Now
                  </button>
                  <button className="px-4 bg-blue-100 text-blue-700 font-bold rounded-lg hover:bg-blue-200 transition duration-300 text-sm">
                    ℹ️
                  </button>
                </div>
              </div>
              
              {/* Ribbon for Popular Course */}
              {index === 0 && (
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default Course