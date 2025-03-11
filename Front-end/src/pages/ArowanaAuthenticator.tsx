import { useEffect, useState } from "react";

const Authenticator = () => {
  const [tagId, setTagId] = useState("");

  const handleSearch = () => {
    console.log("Searching for Tag ID:", tagId);
    // Implement search logic here
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">Life Style Aqua - Authenticator</h1>
      <div className="flex items-center space-x-4">
        <label className="text-lg">Enter Tag ID:</label>
        <input
          type="text"
          className="border p-2 rounded w-80"
          value={tagId}
          onChange={(e) => setTagId(e.target.value)}
          placeholder="Enter Tag ID"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Authenticator;
