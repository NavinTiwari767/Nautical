import React, { useState } from 'react';

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Netlify automatically handles form submission
    // We just show success message after delay
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
    }, 1500);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our admission counselors for course details, fee structure, and career guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form - Netlify Version */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Send Your Query</h2>
            
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                ✅ Thank you! Your message has been sent successfully. We'll contact you within 24 hours.
              </div>
            )}

            {/* NETLIFY FORM - Important Attributes */}
            <form 
              name="admission-contact"
              method="POST" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden Netlify Inputs - REQUIRED */}
              <input type="hidden" name="form-name" value="admission-contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Course Selection */}
              <div>
                <label htmlFor="course" className="block text-gray-700 font-semibold mb-2">
                  Course Interested In
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
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
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                  placeholder="Tell us about your query or interest in maritime courses..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                } text-white shadow-lg`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                📧 Form submissions will be sent directly to your Netlify dashboard
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Academy Info */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">AS Maritime Academy</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-blue-100">
                      Maritime Education Complex, <br />
                      Sea View Road, Mumbai Port <br />
                      Mumbai, Maharashtra - 400001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <h4 className="font-bold">Phone Numbers</h4>
                    <p className="text-blue-100">+91 98765 43210</p>
                    <p className="text-blue-100">+91 12345 67890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📧</span>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-blue-100">navintiwari72798@gmail.com</p>
                    <p className="text-blue-100">info@asmaritime.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Support */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Quick Support</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                  <span className="text-2xl mr-4">🎓</span>
                  <div>
                    <h4 className="font-semibold">Admission Guidance</h4>
                    <p className="text-sm text-gray-600">Get expert counseling for course selection</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition duration-300">
                  <span className="text-2xl mr-4">💼</span>
                  <div>
                    <h4 className="font-semibold">Placement Queries</h4>
                    <p className="text-sm text-gray-600">Learn about our 100% placement assistance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center">
                <span className="text-3xl mr-4">💬</span>
                <div>
                  <h4 className="font-bold text-green-700 text-lg">Instant WhatsApp Support</h4>
                  <a 
                    href="https://wa.me/919876543210?text=Hi, I want to know more about maritime courses at AS Maritime Academy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Contact Options */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="tel:+919876543210" className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Call Now</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </a>
          
          <a href="mailto:navintiwari72798@gmail.com" className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Email Directly</h3>
            <p className="text-gray-600">navintiwari72798@gmail.com</p>
          </a>
          
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">WhatsApp</h3>
            <p className="text-gray-600">Instant Message</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;