import React from 'react'

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      category: "Campus",
      title: "Modern Training Facilities",
      description: "State-of-the-art classrooms and simulation labs"
    },
    {
      id: 2,
      category: "Training",
      title: "Practical Sessions",
      description: "Hands-on training with expert instructors"
    },
    {
      id: 3,
      category: "Placement",
      title: "Campus Recruitment",
      description: "Top shipping companies visiting for placements"
    },
    
  ];

  const categories = ["All", "Campus", "Training", "Placement", "Infrastructure", "Events", "Achievements", "Facilities"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
          OUR GALLERY
        </h1>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Explore the vibrant life at AS Maritime Academy through our photo gallery. 
          Witness our world-class facilities, training sessions, and student achievements.
        </p>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-full border border-blue-200 hover:bg-blue-600 hover:text-white transition duration-300 shadow-sm"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image Placeholder - Replace with actual images */}
              <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <div className="text-sm opacity-90">Image {image.id}</div>
                </div>
              </div>
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-end">
                <div className="p-4 transform translate-y-full group-hover:translate-y-0 transition duration-300">
                  <span className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <p className="text-blue-200 text-sm">{image.description}</p>
                </div>
              </div>
              
              {/* Quick View Button */}
              <button className="absolute top-3 right-3 bg-white bg-opacity-90 text-blue-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
                👁️
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-blue-200">Photos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-blue-200">Events</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">1000+</div>
              <div className="text-blue-200">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">12+</div>
              <div className="text-blue-200">Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8 inline-block">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            Want to See More?
          </h3>
          <p className="text-gray-600 mb-6">
            Visit our campus for a personal tour and see our facilities in person
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition duration-300">
            🏫 Schedule Campus Visit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gallery