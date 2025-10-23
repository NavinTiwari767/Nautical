import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_fq8is28',
    TEMPLATE_ID: 'template_64aeubs',
    USER_ID: 'opO16FepALHGPna-3'
  };

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.USER_ID);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        course: formData.course,
        message: formData.message,
        to_email: 'navintiwari72798@gmail.com',
        reply_to: formData.email,
        submission_date: new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'medium'
        })
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const courses = [
    'GP Rating',
    'DNS (Diploma in Nautical Science)',
    'B.Tech Marine Engineering',
    'B.Sc Nautical Science', 
    'Electro Technical Officer',
    'Marine Catering',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8 sm:py-10 lg:py-12 px-3 mt-4 sm:mt-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12 mt-4 sm:mt-0">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-blue-900 mb-3 sm:mb-4">
            Contact Us
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-yellow-400 mx-auto mb-3 sm:mb-4 lg:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Get in touch with our admission counselors for course details, fee structure, and career guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12">
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl p-4 sm:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-800 mb-4 sm:mb-6">Send Your Query</h2>
            
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-3 sm:px-4 py-2.5 sm:py-3 rounded mb-4 text-sm">
                ✅ Thank you! Your message has been sent successfully. We'll contact you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-2.5 sm:py-3 rounded mb-4 text-sm">
                ❌ Failed to send message. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-sm sm:text-base"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-sm sm:text-base"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-sm sm:text-base"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Course Selection */}
              <div>
                <label htmlFor="course" className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Course Interested In
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-sm sm:text-base"
                >
                  <option value="">Select a course</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-sm sm:text-base"
                  placeholder="Tell us about your query or interest in maritime courses..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-lg font-bold text-base sm:text-lg transition duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                } text-white shadow-lg`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center text-sm sm:text-base">
                    <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>

              <p className="text-xs sm:text-sm text-gray-500 text-center mt-3">
                📧 Message will be sent directly to arihantmaritime@gmail.com
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Academy Info */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 text-white">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-yellow-300">AS Maritime Academy</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <span className="text-lg sm:text-xl lg:text-2xl mr-3 sm:mr-4">📍</span>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Address</h4>
                    <p className="text-blue-100 text-sm sm:text-base">
                      Dwarka, New Delhi,India <br />
                      
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-lg sm:text-xl lg:text-2xl mr-3 sm:mr-4">📞</span>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Phone Numbers</h4>
                    <p className="text-blue-100 text-sm sm:text-base">+91 9211237634</p>
             
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-lg sm:text-xl lg:text-2xl mr-3 sm:mr-4">📧</span>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Email</h4>
                    <p className="text-blue-100 text-sm sm:text-base">arihantmaritime@gmail.com</p>
                    <p className="text-blue-100 text-sm sm:text-base">info@asmaritime.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Support */}
            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-800 mb-4 sm:mb-6">Quick Support</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center p-3 sm:p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <span className="text-lg sm:text-xl lg:text-2xl mr-3 sm:mr-4">🎓</span>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Admission Guidance</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Get expert counseling for course selection</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 sm:p-4 bg-green-50 rounded-lg hover:bg-green-100 transition duration-300">
                  <span className="text-lg sm:text-xl lg:text-2xl mr-3 sm:mr-4">💼</span>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Placement Queries</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Learn about our 100% placement assistance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-800 mb-4 sm:mb-6">Our Location</h3>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-48 sm:h-56 lg:h-64">
                <div className="w-full h-full flex items-center justify-center bg-blue-100">
                  <div className="text-center text-blue-800">
                    <span className="text-3xl mb-2 block">📍</span>
                    <p className="font-semibold text-sm sm:text-base">Dwarka, New Delhi</p>
                    <p className="text-xs sm:text-sm mt-2">Map will be embedded here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;