import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Apply = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    postName: '',
    candidateName: '',
    fatherHusbandName: '',
    dateOfBirth: '',
    gender: '',
    religion: '',
    category: '',
    contactNo1: '',
    motherName: '',
    email: '',
    maritalStatus: '',
    nationality: '',
    contactNo2: '',

    // Postal Address
    townVillage: '',
    postOffice: '',
    tehsil: '',
    district: '',
    city: '',
    state: '',
    pinCode: '',

    // Permanent Address
    permanentTownVillage: '',
    permanentPostOffice: '',
    permanentTehsil: '',
    permanentDistrict: '',
    permanentCity: '',
    permanentState: '',
    permanentPinCode: '',

    // Identification
    visibleMarks: '',

    // Education
    education: '',

    // Declaration
    declaration: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_011lqze',
    TEMPLATE_ID: 'template_ntsohpq',
    USER_ID: 'opO16FepALHGPna-3'
  };

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.USER_ID);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const templateParams = {
        to_email: 'arihantmaritime@gmail.com',
        reply_to: formData.email,
        submission_date: new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'medium'
        }),

        // Personal Information
        post_name: formData.postName,
        candidate_name: formData.candidateName,
        father_husband_name: formData.fatherHusbandName,
        date_of_birth: formData.dateOfBirth,
        gender: formData.gender,
        religion: formData.religion,
        category: formData.category,
        contact_no1: formData.contactNo1,
        mother_name: formData.motherName,
        applicant_email: formData.email,
        marital_status: formData.maritalStatus,
        nationality: formData.nationality,
        contact_no2: formData.contactNo2,

        // Postal Address
        town_village: formData.townVillage,
        post_office: formData.postOffice,
        tehsil: formData.tehsil,
        district: formData.district,
        city: formData.city,
        state: formData.state,
        pin_code: formData.pinCode,

        // Permanent Address
        permanent_town_village: formData.permanentTownVillage,
        permanent_post_office: formData.permanentPostOffice,
        permanent_tehsil: formData.permanentTehsil,
        permanent_district: formData.permanentDistrict,
        permanent_city: formData.permanentCity,
        permanent_state: formData.permanentState,
        permanent_pin_code: formData.permanentPinCode,

        // Other Details
        visible_marks: formData.visibleMarks,
        education: formData.education,
        declaration: formData.declaration ? 'Yes' : 'No'
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          postName: '', candidateName: '', fatherHusbandName: '', dateOfBirth: '', gender: '',
          religion: '', category: '', contactNo1: '', motherName: '', email: '', maritalStatus: '',
          nationality: '', contactNo2: '', townVillage: '', postOffice: '', tehsil: '', district: '',
          city: '', state: '', pinCode: '', permanentTownVillage: '', permanentPostOffice: '',
          permanentTehsil: '', permanentDistrict: '', permanentCity: '', permanentState: '',
          permanentPinCode: '', visibleMarks: '', education: '', declaration: false
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

  const posts = ['Seaman',
  'Deck Rating',
  'Engine Rating',
  'Fitter',
  'Welder',
  'Electrician',
  'Cook'];
  const religions = ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Buddhist', 'Jain', 'Parsi', 'Others'];
  const categories = ['General', 'SC', 'ST', 'OBC', 'Person With Disability'];
  const educationLevels = ['10th Pass', '12th Pass', 'Diploma', 'Graduate', 'Post Graduate'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8 sm:py-10 mt-4 sm:mt-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 mt-4 sm:mt-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4 px-2">
            AS Maritime Academy - Application Form
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-yellow-400 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 px-2">
            Fill out the form below to apply for maritime courses
          </p>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 mb-8">
          {submitStatus === 'success' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-3 sm:px-4 py-2.5 sm:py-3 rounded mb-4 sm:mb-6 text-sm sm:text-base">
              ✅ Your application has been submitted successfully! We'll contact you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-2.5 sm:py-3 rounded mb-4 sm:mb-6 text-sm sm:text-base">
              ❌ Failed to submit application. Please try again or contact us directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            
            {/* Personal Information Section */}
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">Only For Boys</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Name of Post */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Name Of Post *
                  </label>
                  <select
                    name="postName"
                    value={formData.postName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">Select Post</option>
                    {posts.map((post, index) => (
                      <option key={index} value={post}>{post}</option>
                    ))}
                  </select>
                </div>

                {/* Candidate's Full Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Candidate's Full Name *
                  </label>
                  <input
                    type="text"
                    name="candidateName"
                    value={formData.candidateName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter full name"
                  />
                </div>

                {/* Father's/Husband's Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Father's / Husband's Name *
                  </label>
                  <input
                    type="text"
                    name="fatherHusbandName"
                    value={formData.fatherHusbandName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter father's/husband's name"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                {/* Contact No. 1 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Contact No. 1 *
                  </label>
                  <input
                    type="tel"
                    name="contactNo1"
                    value={formData.contactNo1}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter contact number"
                  />
                </div>

                {/* Religion */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Religion *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {religions.map(religion => (
                      <label key={religion} className="flex items-center text-sm">
                        <input
                          type="radio"
                          name="religion"
                          value={religion}
                          checked={formData.religion === religion}
                          onChange={handleChange}
                          required
                          className="mr-2"
                        />
                        {religion}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Category *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map(cat => (
                      <label key={cat} className="flex items-center text-sm">
                        <input
                          type="radio"
                          name="category"
                          value={cat}
                          checked={formData.category === cat}
                          onChange={handleChange}
                          required
                          className="mr-2"
                        />
                        {cat}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Gender *</label>
                  <div className="flex space-x-4">
                    {['Male', 'Female'].map(gender => (
                      <label key={gender} className="flex items-center text-sm sm:text-base">
                        <input
                          type="radio"
                          name="gender"
                          value={gender}
                          checked={formData.gender === gender}
                          onChange={handleChange}
                          required
                          className="mr-2"
                        />
                        {gender}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Mother's Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Mother's Name *
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter mother's name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter email address"
                  />
                </div>

                {/* Marital Status */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Marital Status *</label>
                  <div className="flex space-x-4">
                    {['Married', 'Unmarried'].map(status => (
                      <label key={status} className="flex items-center text-sm sm:text-base">
                        <input
                          type="radio"
                          name="maritalStatus"
                          value={status}
                          checked={formData.maritalStatus === status}
                          onChange={handleChange}
                          required
                          className="mr-2"
                        />
                        {status}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Nationality */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Nationality *</label>
                  <div className="flex space-x-4">
                    {['Indian', 'Others'].map(nation => (
                      <label key={nation} className="flex items-center text-sm sm:text-base">
                        <input
                          type="radio"
                          name="nationality"
                          value={nation}
                          checked={formData.nationality === nation}
                          onChange={handleChange}
                          required
                          className="mr-2"
                        />
                        {nation}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Contact No. 2 */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Contact No. 2
                  </label>
                  <input
                    type="tel"
                    name="contactNo2"
                    value={formData.contactNo2}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Alternate contact number"
                  />
                </div>
              </div>
            </div>

            {/* Visible Marks Section */}
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">Visible Marks of Identification</h2>
              <textarea
                name="visibleMarks"
                value={formData.visibleMarks}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                placeholder="Describe any visible identification marks on body..."
              />
            </div>

            {/* Postal Address Section */}
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">Postal Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { name: 'townVillage', label: 'Town/Village *' },
                  { name: 'postOffice', label: 'Post Office *' },
                  { name: 'tehsil', label: 'Tehsil *' },
                  { name: 'district', label: 'District *' },
                  { name: 'city', label: 'City *' },
                  { name: 'state', label: 'State *' },
                  { name: 'pinCode', label: 'Pin Code *' }
                ].map(field => (
                  <div key={field.name}>
                    <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.label.includes('*')}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder={`Enter ${field.label.replace('*', '').toLowerCase()}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Permanent Address Section */}
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">Permanent Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { name: 'permanentTownVillage', label: 'Town/Village *' },
                  { name: 'permanentPostOffice', label: 'Post Office *' },
                  { name: 'permanentTehsil', label: 'Tehsil *' },
                  { name: 'permanentDistrict', label: 'District *' },
                  { name: 'permanentCity', label: 'City *' },
                  { name: 'permanentState', label: 'State *' },
                  { name: 'permanentPinCode', label: 'Pin Code *' }
                ].map(field => (
                  <div key={field.name}>
                    <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.label.includes('*')}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder={`Enter ${field.label.replace('*', '').toLowerCase()}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">Education</h2>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              >
                <option value="">Select Education Level</option>
                {educationLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            {/* Declaration Section */}
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">Declaration</h2>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleChange}
                  required
                  className="mr-3 mt-1"
                />
                <span className="text-gray-700 text-sm sm:text-base">
                  I hereby certify that above particulars mentioned in the application are correct and true to the best of my knowledge and belief. If any particulars mentioned by me is found false at any stage then I shall be liable to be terminated without any notice.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                } text-white shadow-lg`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;