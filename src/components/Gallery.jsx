import React from 'react'

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      category: "Campus",
      title: "Modern Training Facilities",
      description: "State-of-the-art classrooms and simulation labs",
      image: "/m1.jpeg"
    },
    {
      id: 2,
      category: "Training",
      title: "Practical Sessions",
      description: "Hands-on training with expert instructors",
      image: "/m2.jpeg"
    },
    {
      id: 3,
      category: "Placement",
      title: "Campus Recruitment",
      description: "Top shipping companies visiting for placements",
      image: "/m3.jpeg"
    },
    {
      id: 4,
      category: "Campus",
      title: "Infrastructure",
      description: "Modern facilities for maritime education",
      image: "/m4.jpeg"
    },
    {
      id: 5,
      category: "Training",
      title: "Advanced Equipment",
      description: "Industry-standard training equipment",
      image: "/m5.jpeg"
    },
    {
      id: 6,
      category: "Events",
      title: "Student Activities",
      description: "Engaging campus life and events",
      image: "/m6.jpeg"
    }
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={image.image} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-4 w-full">
                  <span className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <p className="text-blue-200 text-sm">{image.description}</p>
                </div>
              </div>
              
              {/* Quick View Button */}
              <button className="absolute top-3 right-3 bg-white bg-opacity-90 text-blue-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-yellow-400 hover:text-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery