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
        
        {/* Header Section - Mobile Optimized */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3">
            Online Exam Portal
          </h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-3"></div>
          <p className="text-sm sm:text-base text-gray-600">
            Check your exam details
          </p>
        </div>

        {/* Main Form Section - Mobile Responsive */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-6 sm:p-8">
          
          {!isSubmitted ? (
            <>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                
                {/* User Name Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    User Name *
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
                    Date of Birth *
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
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                    placeholder="Enter contact number"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 sm:py-4 px-6 rounded-lg font-bold text-base sm:text-lg transition duration-300 ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
                  } text-white shadow-lg`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Checking...
                    </span>
                  ) : 'Check Details'}
                </button>
              </form>
            </>
          ) : (
            /* Result Section - Mobile Optimized */
            <div className="text-center py-4">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl text-red-500">❌</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-red-600 mb-2">No User Found</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  No exam details found for the provided information.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={handleReset}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition duration-300 text-sm sm:text-base"
                >
                  Try Again
                </button>
                <a
                  href="/contact"
                  className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white active:scale-95 transition duration-300 text-sm sm:text-base text-center"
                >
                  Contact Support
                </a>
              </div>
            </div>
          )}

          {/* Help Text - Mobile Optimized */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500 text-center">
              📞 Need help? Call <a href="tel:+919876543210" className="text-blue-600 hover:underline">+91 98765 43210</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Online;