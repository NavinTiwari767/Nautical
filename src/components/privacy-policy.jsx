import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-blue-100 text-lg">Effective Date: 06-11-2023</p>
        </div>
      </div>

      {/* Breadcrumb */}
      

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border border-blue-200">
          
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              ARIHANT SEAFARERS MARITIME ACADEMY
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>"Academy," "we," "us," or "our"</strong> is committed to safeguarding your privacy. 
              This Privacy Policy explains how we collect, use, share, and protect your personal information 
              when you use our website and related services.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200">
              1. Information We Collect
            </h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-blue-700 mb-3">1.1 Personal Data You Provide</h4>
              <p className="text-gray-700 mb-3">
                We may collect personal details you voluntarily share with us, including when you:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Register for a course or create an account (e.g., name, email, phone number, address, and payment details)</li>
                <li>Contact us for inquiries or support</li>
                <li>Subscribe to newsletters or marketing communications</li>
                <li>Post comments or content on our website</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-3">1.2 Automatically Collected Data</h4>
              <p className="text-gray-700 mb-3">
                When you use our website, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Usage Data:</strong> IP address, browser type, operating system, pages visited, and the time and date of visits</li>
                <li><strong>Cookies and Tracking Technologies:</strong> Small files stored on your device that help us recognize you, remember preferences, and gather statistical data</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">
                You may disable cookies through your browser settings, but some features may not function properly.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200">
              2. How We Use Your Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-2">2.1 Service Delivery</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Process registrations and payments</li>
                  <li>Manage course enrollments and accounts</li>
                  <li>Provide support and respond to inquiries</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-2">2.2 Service Improvement</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Analyze website usage to improve functionality</li>
                  <li>Customize content and features based on preferences</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-2">2.3 Marketing and Communications</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Send newsletters, updates, and promotional materials (with your consent)</li>
                  <li>Notify you about relevant courses, offers, or events</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-2">2.4 Legal and Security Compliance</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Fulfill legal obligations</li>
                  <li>Prevent fraud, unauthorized access, and security threats</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200">
              3. How We Share Your Information
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-blue-700 mb-2">3.1 Service Providers</h4>
                <p className="text-gray-700">
                  We may share your data with trusted third-party service providers (e.g., for payment processing, hosting, or communication). These providers are required to maintain confidentiality.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-700 mb-2">3.2 Legal Requirements</h4>
                <p className="text-gray-700">
                  We may disclose information if required by law or valid government requests.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-700 mb-2">3.3 Business Transfers</h4>
                <p className="text-gray-700">
                  In the event of a merger, acquisition, or sale of assets, your data may be transferred, subject to the same privacy protections.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200">
              4. Data Security
            </h3>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security measures to protect your data, including:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
                <div className="text-blue-600 font-bold text-lg mb-2">Encryption</div>
                <p className="text-gray-700 text-sm">Secure data transmission</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
                <div className="text-blue-600 font-bold text-lg mb-2">Access Controls</div>
                <p className="text-gray-700 text-sm">Restricted data access</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
                <div className="text-blue-600 font-bold text-lg mb-2">Regular Audits</div>
                <p className="text-gray-700 text-sm">Monitor and identify vulnerabilities</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              However, no online system is 100% secure, and we cannot guarantee absolute protection.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200">
              5. Your Rights and Choices
            </h3>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-600 rounded-full p-2 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">Access and Update</h4>
                  <p className="text-gray-700 text-sm">Request access to or correction of your personal information</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-600 rounded-full p-2 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">Delete</h4>
                  <p className="text-gray-700 text-sm">Request deletion of your data, unless retention is required by law</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-600 rounded-full p-2 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">Opt-Out</h4>
                  <p className="text-gray-700 text-sm">Unsubscribe from marketing emails at any time</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-600 rounded-full p-2 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">Manage Cookies</h4>
                  <p className="text-gray-700 text-sm">Disable cookies via browser settings</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              To exercise these rights, please contact us at <span className="text-blue-600 font-medium">arihantmaritime@gmail.com</span>
            </p>
          </section>

          {/* Remaining Sections */}
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200">
              6. Data Retention
            </h3>
            <p className="text-gray-700">
              We retain personal data only as long as necessary to fulfill the purposes stated in this Policy or as required by law. Once no longer needed, data is securely deleted or anonymized.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200">
              7. Third-Party Links
            </h3>
            <p className="text-gray-700">
              Our website may link to external sites not operated by us. We are not responsible for their privacy practices and encourage you to review their policies.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200">
              8. Children's Privacy
            </h3>
            <p className="text-gray-700">
              Our services are not intended for individuals under 18. We do not knowingly collect personal data from minors. If such data is found, we will delete it promptly.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-200">
              9. Changes to This Privacy Policy
            </h3>
            <p className="text-gray-700">
              We may revise this Privacy Policy from time to time. Updates will be posted on this page with the new "Effective Date." We encourage periodic review of this Policy.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">10. Contact Us</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-4 inline-block mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2">Address</h4>
                <p className="text-blue-100">Dwarka, New Delhi, India</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-4 inline-block mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2">Email</h4>
                <p className="text-blue-100">arihantmaritime@gmail.com</p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="mt-8 pt-6 border-t border-blue-200 text-center">
            <p className="text-gray-600 text-sm">
              Last updated: November 6, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;