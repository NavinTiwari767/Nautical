import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

// --- Modified State/District Data ---
// Added 'Others / Not Found' to the start of all district arrays
const stateDistrictData = {
  'Andaman and Nicobar Islands': ['Others / Not Found', 'Port Blair', 'Nicobar', 'South Andaman'],
  'Andhra Pradesh': ['Others / Not Found', 'Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry', 'Tirupati', 'Kadapa', 'Anantapur', 'Kakinada'],
  'Arunachal Pradesh': ['Others / Not Found', 'Itanagar', 'Naharlagun', 'Pasighat', 'Tawang', 'Ziro'],
  'Assam': ['Others / Not Found', 'Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukar', 'Tezpur', 'Bongaigaon'],
  'Bihar': ['Others / Not Found', 'Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'],
  'Chandigarh': ['Others / Not Found', 'Chandigarh'],
  'Chhattisgarh': ['Others / Not Found', 'Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Raigarh'],
  'Dadra and Nagar Haveli and Daman and Diu': ['Others / Not Found', 'Daman', 'Diu', 'Silvassa'],
  'Delhi': ['Others / Not Found', 'New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'Central Delhi', 'North East Delhi', 'North West Delhi', 'South East Delhi', 'South West Delhi', 'Shahdara'],
  'Goa': ['Others / Not Found', 'North Goa', 'South Goa', 'Panaji', 'Margao', 'Vasco da Gama'],
  'Gujarat': ['Others / Not Found', 'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Gandhinagar', 'Anand', 'Navsari', 'Bharuch', 'Mehsana'],
  'Haryana': ['Others / Not Found', 'Faridabad', 'Gurgaon', 'Hisar', 'Rohtak', 'Panipat', 'Karnal', 'Sonipat', 'Yamunanagar', 'Panchkula', 'Ambala'],
  'Himachal Pradesh': ['Others / Not Found', 'Shimla', 'Mandi', 'Kangra', 'Kullu', 'Solan', 'Hamirpur', 'Una', 'Dharamshala'],
  'Jammu and Kashmir': ['Others / Not Found', 'Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Udhampur', 'Kathua', 'Pulwama', 'Rajouri'],
  'Jharkhand': ['Others / Not Found', 'Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh'],
  'Karnataka': ['Others / Not Found', 'Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Gulbarga', 'Davanagere', 'Bellary', 'Bijapur', 'Shimoga', 'Tumkur'],
  'Kerala': ['Others / Not Found', 'Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Kannur', 'Alappuzha', 'Palakkad', 'Kottayam', 'Malappuram'],
  'Ladakh': ['Others / Not Found', 'Leh', 'Kargil'],
  'Lakshadweep': ['Others / Not Found', 'Kavaratti', 'Agatti', 'Minicoy'], // Added 'Others / Not Found'
  'Madhya Pradesh': ['Others / Not Found', 'Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Dewas', 'Satna', 'Ratlam', 'Rewa'],
  'Maharashtra': ['Others / Not Found', 'Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur', 'Kolhapur', 'Amravati', 'Nanded', 'Sangli'],
  'Manipur': ['Others / Not Found', 'Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur', 'Ukhrul'],
  'Meghalaya': ['Others / Not Found', 'Shillong', 'Tura', 'Jowai', 'Nongstoin'],
  'Mizoram': ['Others / Not Found', 'Aizawl', 'Lunglei', 'Champhai', 'Saiha'],
  'Nagaland': ['Others / Not Found', 'Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha'],
  'Odisha': ['Others / Not Found', 'Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghpur', 'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur', 'Sundargarh'],
  'Puducherry': ['Others / Not Found', 'Puducherry', 'Karaikal', 'Mahe', 'Yanam'],
  'Punjab': ['Others / Not Found', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Pathankot', 'Hoshiarpur'],
  'Rajasthan': ['Others / Not Found', 'Jaipur', 'Jodhpur', 'Kota', 'Udaipur', 'Ajmer', 'Bikaner', 'Alwar', 'Bharatpur', 'Bhilwara', 'Sikar'],
  'Sikkim': ['Others / Not Found', 'Gangtok', 'Namchi', 'Gyalshing', 'Mangan'],
  'Tamil Nadu': ['Others / Not Found', 'Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Tiruppur', 'Vellore', 'Erode', 'Thanjavur'],
  'Telangana': ['Others / Not Found', 'Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Ramagundam', 'Mahbubnagar'],
  'Tripura': ['Others / Not Found', 'Agartala', 'Udaipur', 'Dharmanagar', 'Kailasahar'],
  'Uttar Pradesh': ['Others / Not Found', 'Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Varanasi', 'Meerut', 'Allahabad', 'Bareilly', 'Aligarh', 'Moradabad', 'Saharanpur', 'Gorakhpur'],
  'Uttarakhand': ['Others / Not Found', 'Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rudrapur', 'Kashipur', 'Rishikesh'],
  'West Bengal': ['Others / Not Found', 'Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Bardhaman', 'Malda', 'Baharampur', 'Kharagpur'],
};
const states = Object.keys(stateDistrictData).sort();
// -----------------------------------------------------------

const Apply = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    postName: '',
    candidateName: '',
    fatherHusbandName: '',
    dateOfBirth: '',
    gender: 'Male', // 💡 Defaulted to 'Male'
    religion: '',
    category: '',
    contactNo1: '',
    motherName: '',
    email: '',
    maritalStatus: '',
    nationality: '',
    contactNo2: '',

    // Permanent Address
    permanentTownVillage: '',
    permanentPostOffice: '',
    permanentTehsil: '',
    permanentDistrict: '', // Changed to select/input
    permanentCity: '',
    permanentState: '', // Changed to select
    permanentPinCode: '', // Numeric Only

    // Identification
    visibleMarks: '',

    // Education
    education: '',

    // Declaration
    declaration: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const navigate = useNavigate();

  // 💡 Districts filtered based on selected state
  const availableDistricts = formData.permanentState 
    ? stateDistrictData[formData.permanentState] || [] 
    : [];
    
  // 💡 Flag to determine if District should be a text input
  const isCustomDistrict = formData.permanentDistrict === 'Others / Not Found' || 
                           (availableDistricts.length === 1 && availableDistricts[0] === 'Others / Not Found' && formData.permanentState);


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

    setFormData(prev => {
      let newValue = type === 'checkbox' ? checked : value;

      // 💡 Reset District when State changes
      if (name === 'permanentState' && value !== prev.permanentState) {
        return {
          ...prev,
          [name]: newValue,
          permanentDistrict: ''
        };
      }
      
      // 💡 Pin Code validation (Allow only numbers)
      if (name === 'permanentPinCode' && value && !/^\d+$/.test(value)) {
        return prev;
      }
      
      // 💡 If State is selected, but District is being reset to an empty string, 
      //    and the value is NOT 'Others / Not Found', keep the value.
      //    This is mainly for the case where we switch the District input type.
      if (name === 'permanentDistrict' && value === 'Others / Not Found' && prev.permanentDistrict === 'Others / Not Found') {
        // Do nothing if we're in custom mode and the user is typing
      }

      return {
        ...prev,
        [name]: newValue
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 💡 Add basic form validation before submission
    if (!formData.declaration) {
      alert("Please check the declaration box to submit the application.");
      return;
    }

    // 💡 Additional validation for Custom District field
    if (isCustomDistrict && (!formData.permanentDistrict || formData.permanentDistrict === 'Others / Not Found')) {
        alert("Please enter your District name.");
        return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // 💡 Prepare templateParams (Removed Postal Address Fields)
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
        templateParams,
        EMAILJS_CONFIG.USER_ID // Added USER_ID as the 4th argument as per EmailJS docs
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        // Form reset करें
        setFormData({
          postName: '', candidateName: '', fatherHusbandName: '', dateOfBirth: '', gender: 'Male', // Reset to Default
          religion: '', category: '', contactNo1: '', motherName: '', email: '', maritalStatus: '',
          nationality: '', contactNo2: '', permanentTownVillage: '', permanentPostOffice: '',
          permanentTehsil: '', permanentDistrict: '', permanentCity: '', permanentState: '',
          permanentPinCode: '', visibleMarks: '', education: '', declaration: false
        });

        // 2 second के बाद Thank You page पर redirect करें
        setTimeout(() => {
          navigate('/thank-you');
        }, 2000);
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

  const posts = ['Seaman', 'Deck Rating', 'Engine Rating', 'Fitter', 'Welder', 'Electrician', 'Cook'];
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
              ✅ Your application has been submitted successfully! Redirecting to Thank You page...
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
              <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">Personal Information (Only For Boys)</h2>
              
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
                    placeholder="Enter your contact number"
                    minLength="10"
                    maxLength="10"
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
                    {/* 💡 Removed 'Female' as per 'Only For Boys' header, but keeping the logic for robustness */}
                    {['Male', 'Female'].map(gender => (
                      <label key={gender} className={`flex items-center text-sm sm:text-base ${gender === 'Female' ? 'text-gray-400 cursor-not-allowed' : ''}`}>
                        <input
                          type="radio"
                          name="gender"
                          value={gender}
                          checked={formData.gender === gender}
                          onChange={handleChange}
                          required
                          disabled={gender === 'Female'} // Optional: Disable Female
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
                    Parent's Phone No *
                  </label>
                  <input
                    type="tel"
                    name="contactNo2"
                    value={formData.contactNo2}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Parent's contact number"
                    minLength="10"
                    maxLength="10"
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
                placeholder="Describe any visible identification marks on body (e.g., A mole on left cheek)"
              />
            </div>

            {/* Permanent Address Section 🏠 */}
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">Permanent Address *</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                
                {/* State Dropdown (Map) */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                    State *
                  </label>
                  <select
                    name="permanentState"
                    value={formData.permanentState}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">Select State</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                {/* District Input (Conditional based on isCustomDistrict) */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                        District *
                    </label>
                    {isCustomDistrict ? (
                        <input
                            type="text"
                            name="permanentDistrict"
                            value={formData.permanentDistrict === 'Others / Not Found' ? '' : formData.permanentDistrict}
                            onChange={handleChange}
                            required
                            disabled={!formData.permanentState}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base disabled:bg-gray-100"
                            placeholder="Enter your District name"
                        />
                    ) : (
                        <select
                            name="permanentDistrict"
                            value={formData.permanentDistrict}
                            onChange={handleChange}
                            required
                            disabled={!formData.permanentState}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base disabled:bg-gray-100"
                        >
                            <option value="">{formData.permanentState ? 'Select District' : 'Select State first'}</option>
                            {availableDistricts.map(district => (
                                <option key={district} value={district}>{district}</option>
                            ))}
                        </select>
                    )}
                    {/* Add a button/link to switch to text input for districts that have multiple options */}
                    {formData.permanentState && !isCustomDistrict && availableDistricts.length > 1 && (
                        <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, permanentDistrict: 'Others / Not Found' }))}
                            className="text-blue-600 text-xs mt-1 hover:text-blue-800 transition duration-150"
                        >
                            District not listed? Click to type.
                        </button>
                    )}
                </div>
                
                {/* Town/Village */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Town/Village *
                  </label>
                  <input
                    type="text"
                    name="permanentTownVillage"
                    value={formData.permanentTownVillage}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your Town/Village"
                  />
                </div>

                {/* Post Office */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Post Office *
                  </label>
                  <input
                    type="text"
                    name="permanentPostOffice"
                    value={formData.permanentPostOffice}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your Post Office"
                  />
                </div>
                
                {/* Tehsil */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Tehsil *
                  </label>
                  <input
                    type="text"
                    name="permanentTehsil"
                    value={formData.permanentTehsil}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your Tehsil/Subdivision"
                  />
                </div>
                
                {/* City */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                    City *
                  </label>
                  <input
                    type="text"
                    name="permanentCity"
                    value={formData.permanentCity}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your City"
                  />
                </div>

                {/* Pin Code (Numeric Only) */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Pin Code *
                  </label>
                  <input
                    type="number" // 💡 Changed to type="number"
                    name="permanentPinCode"
                    value={formData.permanentPinCode}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter 6-digit Pin Code"
                    pattern="\d{6}"
                    maxLength="6"
                  />
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">Education *</h2>
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
              <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">Declaration *</h2>
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
                disabled={isSubmitting || !formData.declaration} // Disable if not declared
                className={`px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition duration-300 ${
                  isSubmitting || !formData.declaration
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