import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Thank = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Google Ads conversion trigger
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17685658362/XXXXXXXXXXXX', // <-- replace your ID
        'value': 1.0,
        'currency': 'INR'
      });
    }

    // ✅ Auto-redirect in 10 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-8 px-4">
      <div className="max-w-2xl w-full text-center">
        
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">
          Thank You!
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Application Submitted Successfully
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Thank you for applying to <span className="font-semibold text-blue-600">AS Maritime Academy</span>. 
            We have successfully received your application.
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Need Help?</h3>
          <p className="text-gray-700">📧 arihantmaritime@gmail.com</p>
          <p className="text-gray-700">📞 +91 9211237634</p>
          <p className="text-gray-700">📍 Dwarka, New Delhi, India</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
          >
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.print()}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
          >
            Print Confirmation
          </button>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
          <p className="text-yellow-700 text-sm">
            ⏳ Redirecting in <b>10 seconds</b>...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thank;
