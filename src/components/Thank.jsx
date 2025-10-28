import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Thank = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Google Ads conversion tracking ke liye (agar use karna ho)
    // window.gtag('event', 'conversion', {'send_to': 'AW-123456789/AbC-D_EFGhIJKLmnOPQR'});
    
    // 10 seconds ke baad automatically home page pe redirect
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-8 px-4">
      <div className="max-w-2xl w-full text-center">
        
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">
          Thank You!
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Application Submitted Successfully
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            Thank you for applying to <span className="font-semibold text-blue-600">AS Maritime Academy</span>. 
            We have successfully received your application.
          </p>

          <div className="space-y-4 text-left max-w-md mx-auto">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700">Your application is under review</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700">We will contact you within 24-48 hours</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700">Check your email for confirmation</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Need Immediate Assistance?</h3>
          <div className="space-y-2 text-gray-700">
            <p>📧 Email: arihantmaritime@gmail.com</p>
            <p>📞 Phone: +91 [Your Phone Number]</p>
            <p>📍 Address: Dwarka, New Delhi, India</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.print()}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            Print Confirmation
          </button>
        </div>

        {/* Auto Redirect Notice */}
        <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
          <p className="text-yellow-700 text-sm">
            You will be automatically redirected to the homepage in <span className="font-bold">10 seconds</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thank;