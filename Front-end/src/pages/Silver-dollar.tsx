import React from "react";

const SilverDollar: React.FC = () => {
  const discusData = [
    { id: 1, name: "Wide Bar Dollar ",size: 3, price: 850, image: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Discus/Discus1.png" },
    { id: 2, name: "Wide Bar Dollar",size: 2.5, price: 800, image: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Discus/Discus2.png" },
    { id: 3, name: "Red Hock Dollar", size: 3,price: 1000, image: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Discus/Discus3.png" },
    { id: 4, name: "Black Berry Dollar",size: 2.5, price: 1250, image: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Discus/Discus4.png" },
    { id: 5, name: "Black Berry Dollar",size: 3, price: 1500, image: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Discus/Discus4.png" },
   
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header with Title */}
      <div className="text-center py-6 bg-white shadow-sm">
        <h1 className="text-4xl font-bold text-red-900">Discus</h1>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Sort Options */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center">
            <span className="text-sm mr-2">Sort by:</span>
            <select className="text-sm border-gray-200 rounded-md py-1 pl-3 pr-8 bg-white focus:ring-blue-500 focus:border-blue-500">
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discusData.map((fish) => (
            <div key={fish.id} className="bg-white rounded-lg overflow-hidden shadow group transition-all duration-300 hover:shadow-lg">
              <div className="relative">
                <img
                  src={fish.image}
                  alt={fish.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-800">{fish.name}</h3>
                  <span className="font-semibold text-lg">₹{fish.price}</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-blue-500 font-medium">{fish.size}"</span>
                  <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-md px-3 py-1.5 text-sm flex items-center transition-colors">
                    Add to
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SilverDollar;