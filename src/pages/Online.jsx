import React, { useState } from 'react';

const Online = () => {
  const [formData, setFormData] = useState({
    userName: '',
    dob: '',
    contactNo: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      userName: '',
      dob: '',
      contactNo: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        
        {/* Header Section with Logo Style */}
        <div className="text-center mb-6">
          {/* Logo Style Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-4 sm:p-6 mb-4 shadow-lg">
            <div className="flex flex-col items-center justify-center">
              {/* Main Logo Text */}
              <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2 tracking-wide">
                ONLINE TEST
              </h1>
              {/* Subtitle */}
              <div className="w-20 sm:w-24 h-1 bg-yellow-400 rounded-full mb-2"></div>
              <p className="text-blue-100 text-sm sm:text-base font-medium">
                AS Maritime Academy
              </p>
            </div>
          </div>

          {/* Form Title */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            Check Your Exam Details
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Enter your information to access exam portal
          </p>
        </div>

        {/* Main Form Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-6 sm:p-8">
          
          {!isSubmitted ? (
            <>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                
                {/* User Name Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    📝 User Name *
                  </label>
                  <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Date of Birth Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    📅 Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                  />
                </div>

                {/* Contact Number Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    📞 Contact Number *
                  </label>
                  <input
                    type="tel"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                    placeholder="Enter registered contact number"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 sm:py-4 px-6 rounded-lg font-bold text-base sm:text-lg transition duration-300 ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:scale-95'
                  } text-white shadow-lg transform hover:scale-105`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Checking Details...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      🔍 Check Details
                    </span>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Result Section */
            <div className="text-center py-4">
              <div className="mb-4 sm:mb-6">
                {/* Result Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl text-red-500">❌</span>
                </div>
                
                {/* Result Text */}
                <h3 className="text-lg sm:text-xl font-bold text-red-600 mb-2">
                  No User Found
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  We couldn't find any exam details matching your information.
                </p>

                {/* Help Box */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                  <p className="text-xs sm:text-sm text-gray-600">
                    💡 Please check your details or contact support if you believe this is an error.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={handleReset}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 active:scale-95 transition duration-300 text-sm sm:text-base shadow-md"
                >
                  🔄 Try Again
                </button>
                <a
                  href="/contact"
                  className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white active:scale-95 transition duration-300 text-sm sm:text-base text-center shadow-md"
                >
                  📞 Contact Support
                </a>
              </div>
            </div>
          )}

          {/* Footer Help */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="text-center">
              <p className="text-xs sm:text-sm text-gray-500 mb-2">
                🚀 Secure Online Exam Portal
              </p>
              <p className="text-xs text-gray-400">
                AS Maritime Academy © 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Online;