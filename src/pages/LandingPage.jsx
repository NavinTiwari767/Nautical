import React, { useState, useEffect } from 'react';

export default function LandingPage() {
  const [formData, setFormData] = useState({
    post: '',
    candidateName: '',
    fatherName: '',
    dob: '',
    email: '',
    state: '',
    district: '',
    pincode: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const posts = [
    'Select Post',
    'Seaman',
    'Deck Rating',
    'Engine Rating',
    'Fitter',
    'Welder',
    'Electrician',
    'Cook'
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/emailjs-com/3.2.0/email.min.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMessage) setErrorMessage('');
  };

  const validateForm = () => {
    if (!formData.post || formData.post === 'Select Post') {
      setErrorMessage('Please select a post');
      return false;
    }
    if (!formData.candidateName.trim()) {
      setErrorMessage('Please enter candidate name');
      return false;
    }
    if (!formData.fatherName.trim()) {
      setErrorMessage('Please enter father name');
      return false;
    }
    if (!formData.dob) {
      setErrorMessage('Please select date of birth');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter email address');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.state.trim()) {
      setErrorMessage('Please enter state');
      return false;
    }
    if (!formData.district.trim()) {
      setErrorMessage('Please enter district');
      return false;
    }
    if (!formData.pincode.trim()) {
      setErrorMessage('Please enter pincode');
      return false;
    }
    if (!/^\d{6}$/.test(formData.pincode)) {
      setErrorMessage('Please enter a valid 6-digit pincode');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_PUBLIC_KEY';

    if (typeof window.emailjs !== 'undefined') {
      window.emailjs.init(userID);
      
      window.emailjs.send(serviceID, templateID, {
        post: formData.post,
        candidate_name: formData.candidateName,
        father_name: formData.fatherName,
        dob: formData.dob,
        email: formData.email,
        state: formData.state,
        district: formData.district,
        pincode: formData.pincode
      }).then(() => {
        setSuccessMessage('Application submitted successfully! We will contact you soon.');
        setFormData({
          post: '',
          candidateName: '',
          fatherName: '',
          dob: '',
          email: '',
          state: '',
          district: '',
          pincode: ''
        });
        setIsSubmitting(false);
        setTimeout(() => setSuccessMessage(''), 5000);
      }).catch((error) => {
        console.error('EmailJS Error:', error);
        setErrorMessage('Failed to submit application. Please try again or contact us directly.');
        setIsSubmitting(false);
      });
    } else {
      console.log('Form Data:', formData);
      setErrorMessage('Email service is loading. Please try again in a moment.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
          ARIHANT SEAFARERS MARITIME ACADEMY
        </h1>
        <p className="text-xl text-blue-100">AS MARITIME ACADEMY</p>
        <p className="text-lg text-blue-200 mt-4">Where Excellence Meets the Ocean</p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8 border-b-4 border-blue-600 pb-4">
          Apply Online
        </h2>

        {successMessage && (
          <div className="bg-green-500 text-white p-4 rounded-lg mb-6 text-center">
            <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="bg-red-500 text-white p-4 rounded-lg mb-6 text-center">
            <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {errorMessage}
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Post <span className="text-red-500">*</span>
            </label>
            <select
              name="post"
              value={formData.post}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition bg-gray-50"
            >
              {posts.map((post, index) => (
                <option key={index} value={post} disabled={post === 'Select Post'}>
                  {post}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Candidate Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="candidateName"
              value={formData.candidateName}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition bg-gray-50"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Father Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition bg-gray-50"
              placeholder="Enter father's name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              max={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition bg-gray-50"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              State <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition bg-gray-50"
              placeholder="Enter your state"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              District <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition bg-gray-50"
              placeholder="Enter your district"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Pincode <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              maxLength="6"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition bg-gray-50"
              placeholder="Enter 6-digit pincode"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-blue-800 hover:to-blue-600 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:from-blue-900 disabled:hover:to-blue-700"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit Application'
            )}
          </button>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            For any queries, please contact us at{' '}
            <a href="mailto:info@arihantseafarers.com" className="text-blue-600 hover:underline font-semibold">
              info@arihantseafarers.com
            </a>
          </p>
          <p className="text-xs mt-2 text-gray-500">
            All fields marked with <span className="text-red-500">*</span> are mandatory
          </p>
        </div>
      </div>
    </div>
  );
}