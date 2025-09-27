import React from 'react'

const Placement = () => {
  const placementPartners = [
    {
      category: "International Shipping Companies",
      companies: [
        "Turners Shipping, South Africa",
        "Itra Shipping, Greece", 
        "Alghadheer Shipping L.L.C., Dubai",
        "Andrew Weir Ship Management, UK",
        "Nathalin Management Co., Ltd., Thailand",
        "Stavarouess Ship Management, Greece",
        "Thorisen & Co., (Bangkok) Ltd. Thailand"
      ]
    },
    {
      category: "National & Regional Partners", 
      companies: [
        "Bapu Shipping Agency (p) Ltd.",
        "Azman Shipping Co. Ltd.",
        "Greek Shipping L.L.C., Dubai",
        "Dubai Bulk Carrier Pvt. Ltd.", 
        "Linda Steel Shipping Co. Pvt. Ltd.",
        "Green Valley L.L.C., Dubai",
        "Manzali Shipping, Syria"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 pt-24"> {/* yaha pt-24 add karo */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            PLACEMENT PARTNERS
          </h1>
          <p className="text-lg lg:text-xl text-blue-200 max-w-4xl mx-auto">
            Connecting Aspiring Seafarers with Leading Global Shipping Companies
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">
            Placements in Merchant Navy
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
          <p className="text-gray-700 leading-relaxed text-center">
            <strong>ARHANT SEAFARERS MARITIME ACADEMY</strong> has retained its reputation as one of the best maritime training colleges in India, instructing Pre-sea training for deck cadets and rating cadets.
          </p>
        </div>

        {/* Placement Partners */}
        <div className="space-y-8">
          {placementPartners.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-2xl p-6">
              <h3 className="text-xl lg:text-2xl font-bold text-blue-800 mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.companies.map((company, companyIndex) => (
                  <div 
                    key={companyIndex}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200"
                  >
                    <div className="text-blue-600 text-2xl mb-2">⚓</div>
                    <h4 className="font-semibold text-blue-800">{company}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Placement