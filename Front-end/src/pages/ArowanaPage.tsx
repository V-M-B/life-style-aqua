import React from "react";

// Fish Card Component
const FishCard: React.FC<{ fish: { name: string; image: string } }> = ({ fish }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg m-4 w-64 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
      <div className="relative">
        <img src={fish.image} alt={fish.name} className="w-full h-48 object-cover transition-all duration-300" />
        <div className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 text-center font-semibold group-hover:text-blue-600 transition-colors duration-300">{fish.name}</div>
    </div>
  );
};

// Sample fish data
const fishData = [
  { name: "Super High Back Golden", image: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Arowana%20Page/MC-HighbackGolden.png" },
  { name: "Malaysian Crossback Golden", image: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Arowana%20Page/MC-Malaysian%20Crossback%20golden.png" },
  { name: "24K Golden Arowana", image: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Arowana%20Page/MC-Golden%20Head%20Arowana.png" },
  { name: "Golden Head Red Base", image: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Arowana%20Page/Mc-Golden%20Head%20Bule%20Base.png" },
  { name: "India Super Red", image: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Arowana%20Page/MC-Indo%20Super%20Red.png" },
];

// Main Arowana Page Component
const ArowanaPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header Section */}
      <header className="relative w-full h-auto bg-white shadow-md flex flex-col justify-center items-center text-center">
        <img
          src="https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Arowana%20Page/CA-Arowana%20Fishes%20-24012025.png"
          alt="Arowana"
          className="w-full max-h-96 object-cover"
        />
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">Arowana</h1>
        
        <p className="text-center mb-8 max-w-2xl mx-auto">
          The Arowana, a majestic freshwater fish, is known for its long, sleek
          body, metallic scales, and upturned mouth. Revered in many cultures
          as a symbol of prosperity, it thrives in large tanks with a
          meticulously maintained aquatic ecosystem.
        </p>
        
        {/* Fish Gallery - Centered Layout with Hover Animations */}
        <div className="flex flex-wrap justify-center">
          {fishData.map((fish, index) => (
            <FishCard key={index} fish={fish} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArowanaPage;