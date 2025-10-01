import { useEffect, useState } from "react";

interface FishData {
  name: string;
  purchaseDate: string;
  owner: string;
  price: string;
  size: string;
}

const Authenticator = () => {
  const [tagId, setTagId] = useState("");
  const [fishData, setFishData] = useState<FishData | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");

  // Database of fish with Tag IDs 1-20
  const fishDatabase: Record<number, FishData> = {
    1: { name: "Silver Dollar", purchaseDate: "2024-01-15", owner: "Rajesh Kumar", price: "₹450", size: "3 inches" },
    2: { name: "Wide Bar Dollar", purchaseDate: "2024-01-18", owner: "Priya Singh", price: "₹800", size: "2.5 inches" },
    3: { name: "Spotted Dollar", purchaseDate: "2024-01-22", owner: "Amit Sharma", price: "₹650", size: "3.5 inches" },
    4: { name: "Red Hook Dollar", purchaseDate: "2024-01-25", owner: "Sneha Patel", price: "₹1000", size: "4 inches" },
    5: { name: "Black Berry Dollar", purchaseDate: "2024-02-01", owner: "Vikram Reddy", price: "₹1250", size: "3 inches" },
    6: { name: "Tiger Dollar", purchaseDate: "2024-02-05", owner: "Meera Gupta", price: "₹950", size: "3.5 inches" },
    7: { name: "Golden Dollar", purchaseDate: "2024-02-08", owner: "Arjun Joshi", price: "₹750", size: "2.5 inches" },
    8: { name: "Blue Diamond Dollar", purchaseDate: "2024-02-12", owner: "Kavya Nair", price: "₹1500", size: "4 inches" },
    9: { name: "Rainbow Dollar", purchaseDate: "2024-02-15", owner: "Rohit Agarwal", price: "₹1100", size: "3 inches" },
    10: { name: "Albino Dollar", purchaseDate: "2024-02-18", owner: "Divya Menon", price: "₹850", size: "2.5 inches" },
    11: { name: "Marble Dollar", purchaseDate: "2024-02-22", owner: "Karan Malhotra", price: "₹900", size: "3.5 inches" },
    12: { name: "Pearl Dollar", purchaseDate: "2024-02-25", owner: "Asha Pillai", price: "₹1300", size: "4 inches" },
    13: { name: "Platinum Dollar", purchaseDate: "2024-03-01", owner: "Suresh Iyer", price: "₹1600", size: "3.5 inches" },
    14: { name: "Electric Blue Dollar", purchaseDate: "2024-03-05", owner: "Pooja Saxena", price: "₹1200", size: "3 inches" },
    15: { name: "Sunset Dollar", purchaseDate: "2024-03-08", owner: "Manish Verma", price: "₹950", size: "2.5 inches" },
    16: { name: "Crystal Dollar", purchaseDate: "2024-03-12", owner: "Ritu Bhatt", price: "₹1050", size: "4 inches" },
    17: { name: "Neon Dollar", purchaseDate: "2024-03-15", owner: "Sanjay Kapoor", price: "₹800", size: "3 inches" },
    18: { name: "Royal Dollar", purchaseDate: "2024-03-18", owner: "Latha Krishnan", price: "₹1400", size: "3.5 inches" },
    19: { name: "Diamond Dollar", purchaseDate: "2024-03-22", owner: "Deepak Shah", price: "₹1350", size: "4 inches" },
    20: { name: "Premium Black Dollar", purchaseDate: "2024-03-25", owner: "Sunita Roy", price: "₹1800", size: "4.5 inches" }
  };

  const handleSearch = () => {
    setError("");
    setIsSearching(true);

    // Simulate API call delay
    setTimeout(() => {
      const id = parseInt(tagId);
      
      if (!tagId) {
        setError("Please enter a Tag ID");
        setFishData(null);
      } else if (id < 1 || id > 20 || !Number.isInteger(id)) {
        setError("Invalid Tag ID. Please enter a number between 1 and 20.");
        setFishData(null);
      } else {
        const fish = fishDatabase[id];
        if (fish) {
          setFishData(fish);
          setError("");
        } else {
          setError("Fish data not found for this Tag ID.");
          setFishData(null);
        }
      }
      
      setIsSearching(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Life Style Aqua</h1>
          <h2 className="text-2xl font-semibold text-blue-600">Fish Authenticator</h2>
          <p className="text-gray-600 mt-2">Enter Tag ID (1-20) to verify your fish authenticity</p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <label className="text-lg font-medium text-gray-700 whitespace-nowrap">Enter Tag ID:</label>
            <input
              type="number"
              min="1"
              max="20"
              className="flex-1 border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none text-center text-lg"
              value={tagId}
              onChange={(e) => setTagId(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="1 - 20"
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
              onClick={handleSearch}
              disabled={isSearching}
            >
              {isSearching ? "Searching..." : "Authenticate"}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            </div>
          </div>
        )}

        {/* Fish Details */}
        {fishData && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Success Header */}
              <div className="bg-green-500 text-white p-4">
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-semibold">Authentic Fish Verified!</h3>
                </div>
              </div>

              {/* Fish Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Tag ID</label>
                      <p className="text-lg font-semibold text-blue-600">#{tagId}</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Fish Name</label>
                      <p className="text-lg font-semibold text-gray-800">{fishData.name}</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Size</label>
                      <p className="text-lg font-semibold text-gray-800">{fishData.size}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Purchase Date</label>
                      <p className="text-lg font-semibold text-gray-800">{fishData.purchaseDate}</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Owner</label>
                      <p className="text-lg font-semibold text-gray-800">{fishData.owner}</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Purchase Price</label>
                      <p className="text-lg font-semibold text-green-600">{fishData.price}</p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Certificate:</strong> This fish has been verified as authentic from Life Style Aqua. 
                    Keep your Tag ID safe for future reference and warranty claims.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="max-w-2xl mx-auto mt-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">How to Use:</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Enter your fish Tag ID (number between 1-20)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Click "Authenticate" or press Enter
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                View your fish details and ownership verification
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authenticator;