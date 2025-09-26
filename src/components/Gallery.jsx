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
    </div>
  )
}

export default Gallery
