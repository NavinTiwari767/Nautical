import React from 'react'

const Training = () => {
  const trainingCourses = [
    {
      title: "Personal Survival Techniques",
      description: "Training on survival at sea in the event of ship abandonment, including the use of life-saving appliances and survival techniques.",
      duration: "2 Days",
      eligibility: "Minimum 18 Years",
      icon: "🛟"
    },
    {
      title: "Fire Prevention & Fire Fighting",
      description: "Comprehensive training on fire prevention, firefighting techniques, and use of firefighting equipment onboard ships.",
      duration: "3 Days", 
      eligibility: "Minimum 18 Years",
      icon: "🔥"
    },
    {
      title: "Elementary First Aid",
      description: "Basic first aid training for immediate response to medical emergencies and accidents onboard vessels.",
      duration: "2 Days",
      eligibility: "Minimum 18 Years",
      icon: "🩹"
    },
    {
      title: "Personal Safety & Social Responsibility",
      description: "Training on safety practices, emergency procedures, and social responsibilities while working at sea.",
      duration: "1 Day",
      eligibility: "Minimum 18 Years",
      icon: "👥"
    }
  ];

  const trainingFeatures = [
    "DG Shipping Approved",
    "STCW Convention Compliant",
    "International Recognition",
    "Practical Hands-on Training",
    "Experienced Instructors",
    "Placement Assistance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            STCW BASIC TRAINING
          </h1>
          <p className="text-lg lg:text-xl text-blue-200 max-w-4xl mx-auto">
            Essential Safety Training for Seafarers as per International Standards
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-4 text-center">
            Basic Safety Training (BST) Course
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>STCW Basic Training (BT)</strong> or <strong>STCW Basic Safety Training (BST)</strong> as it is called formerly, is required for seafarers employed or engaged in any capacity on board ship at all levels such as deck and engine room rating qualifications, for most navigation, and all engineering certificates of competency.
            </p>
            <p>
              The course is for new entrants to the larger ships in the marine industry, or experienced mariners who have not had previous safety training, with the knowledge and skills to contain, report, and respond to a marine emergency, fight fires, abandon ship and understand the basics of workplace safety.
            </p>
            <p>
              The STCW Basic (Safety) Training course is also the legal minimum requirement for anyone looking for commercial work aboard vessels over 24 meters, including Superyachts and Cruise ships.
            </p>
          </div>
        </div>

        {/* Eligibility & Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">Eligibility Criteria</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Minimum 18 years of age
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Medical fitness certificate
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Basic English comprehension
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Valid identification documents
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Course Features</h3>
            <div className="grid grid-cols-2 gap-3">
              {trainingFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-yellow-500 mr-2">⚓</span>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training Courses Grid */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-6 text-center">
            Course Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-6">
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-4">{course.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-800 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm">{course.description}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Duration: {course.duration}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Eligibility: {course.eligibility}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification & Approval */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
          <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">Certification & Approval</h3>
          <div className="text-gray-700 space-y-3">
            <p>
              The course is approved by the <strong>Directorate General of Shipping</strong> and meets the requirements laid down in Regulation VII1, Section A-VI/1 paragraph 2.1, Table A-VI/1-1, Table A-VI/1-2, Table A-VI/1-3 and Table A-VI/1-4 of the STCW Convention and code1978, as amended.
            </p>
            <p>
              Participants will be assessed against the learning outcomes by using direct observation and oral and/or written questions as appropriate.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              Ready to Get STCW Certified?
            </h3>
            <p className="text-blue-200 mb-6">
              Start your maritime career with internationally recognized safety training
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition duration-300">
                Enroll Now
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-blue-900 transition duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Training