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
  { name: "Super High Back Golden", image: "https://ecprdstorage01.blob.core.windows.net/lifestyleaqua/images/24K-Golden.png?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2099-03-30T23:12:15Z&st=2023-03-30T15:12:15Z&spr=https&sig=tpZd7lCFggnHkiANSByPfZ8nJMnUfY0C2Yr3yOm2fZw%3D" },
  { name: "Malaysian Crossback ", image: "https://ecprdstorage01.blob.core.windows.net/lifestyleaqua/images/vlog4.PNG?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2099-03-30T23:12:15Z&st=2023-03-30T15:12:15Z&spr=https&sig=tpZd7lCFggnHkiANSByPfZ8nJMnUfY0C2Yr3yOm2fZw%3D" },
  { name: "24K Golden Arowana", image: "https://ecprdstorage01.blob.core.windows.net/lifestyleaqua/images/MC-Golden%20Head%20Arowana.png?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2099-03-30T23:12:15Z&st=2023-03-30T15:12:15Z&spr=https&sig=tpZd7lCFggnHkiANSByPfZ8nJMnUfY0C2Yr3yOm2fZw%3D" },
  { name: "Golden Head Red Base", image: "https://ecprdstorage01.blob.core.windows.net/lifestyleaqua/images/24K-Golden-Head.png?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2099-03-30T23:12:15Z&st=2023-03-30T15:12:15Z&spr=https&sig=tpZd7lCFggnHkiANSByPfZ8nJMnUfY0C2Yr3yOm2fZw%3D" },
  { name: "India Super Red", image: "https://ecprdstorage01.blob.core.windows.net/lifestyleaqua/images/Indo-Super-Red-1.png?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2099-03-30T23:12:15Z&st=2023-03-30T15:12:15Z&spr=https&sig=tpZd7lCFggnHkiANSByPfZ8nJMnUfY0C2Yr3yOm2fZw%3D" },
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