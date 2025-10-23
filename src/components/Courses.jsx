import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Courses = () => {
  const [isBlinking, setIsBlinking] = useState(true);

  // Blinking effect for Apply Now button
  React.useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 1000);
    return () => clearInterval(blinkInterval);
  }, []);

  const courses = [
    {
      title: "Pre Sea Training",
      duration: "6 Months",
      icon: "⚓"
    },
    {
      title: "Watchkeeping",
      duration: "3-6 Months", 
      icon: "🧭"
    },
    {
      title: "Seaman Book",
      duration: "2-4 Weeks",
      icon: "📘"
    },
    {
      title: "C.O.C Certification",
      duration: "6-12 Months",
      icon: "🎓"
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Action Buttons Section */}
        <div className="mb-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
            Quick Actions
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap px-2">
            <Link 
              to="/course"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-blue-800 rounded-full font-bold text-sm sm:text-base hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
            >
              Explore Courses
            </Link>
            <Link 
              to="/apply"
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base transform hover:scale-105 transition-all duration-300 shadow-xl text-center ${
                isBlinking 
                  ? 'bg-red-600 text-white' 
                  : 'bg-white text-red-600'
              } animate-pulse`}
            >
              Apply Now
            </Link>
            <Link 
              to="/online-exam"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-green-600 rounded-full font-bold text-sm sm:text-base text-white hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
            >
              Online Exam
            </Link>
            <Link 
              to="/online-exam"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-purple-600 rounded-full font-bold text-sm sm:text-base text-white hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
            >
              Download Admit Card
            </Link>
            <Link 
              to="/online-exam"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-orange-600 rounded-full font-bold text-sm sm:text-base text-white hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl text-center"
            >
              Download Result
            </Link>
          </div>
        </div>

        {/* Courses Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900">Our Courses</h2>
          <p className="text-gray-600 mt-2">Professional maritime training programs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-3">{course.icon}</div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">Duration: {course.duration}</p>
              <Link 
                to="/course" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/course" 
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition duration-300"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Courses