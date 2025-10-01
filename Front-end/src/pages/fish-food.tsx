import React, { useEffect } from "react";

const fishFoodData = [
    {
        id: 1,
        name: "Hikari Oranda Gold 100g",
        price: 830,
        image: "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.QzA-8HasQMiC46FL1pyXkAHaHa%3Fpid%3DApi&f=1&ipt=d49f89072aff0faeba622ac7c689e071d178ed930831731755f86e2013a7c969",
    },
    {
        id: 2,
        name: "Hikari Oranda Gold 300g",
        price: 1567,
        image: "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.cZICTPMragNBgFLwrwTrqAHaM5%3Fpid%3DApi&f=1&ipt=e39eaf05fad74a4b6d46c33e727f5985d6c8819b7254008fe859e209958d7b1f",
    },
    {
        id: 3,
        name: "Arowana pellets (lose pack) 250gm",
        price: 1500,
        image: "//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdown-ph.img.susercontent.com%2Ffile%2F85206a49a5ed3b0c2ebea9f4f893bc71&f=1&nofb=1&ipt=e58629237dd20715eb046ee8a644a4f7da0c808c63129d867835fd7fe5664e63",
        label: "Small & Large",
    },
];

const FishFood: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-blue-50 min-h-screen font-sans">
            {/* Header with Title */}
            <div className="text-center py-6 bg-white shadow-sm">
                <h1 className="text-4xl font-bold text-red-900">Fish Food</h1>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fishFoodData.map((food) => (
                        <div key={food.id} className="bg-white rounded-lg overflow-hidden shadow group transition-all duration-300 hover:shadow-lg">
                            <div className="relative flex flex-col items-center">
                                {food.label && (
                                    <span className="absolute left-2 top-2 bg-blue-200 text-blue-700 text-xs font-semibold px-2 py-1 rounded">{food.label}</span>
                                )}
                                <img
                                    src={food.image}
                                    alt={food.name}
                                    className="w-32 h-32 object-contain mt-4 mb-2"
                                />
                            </div>
                            <div className="p-4 flex flex-col items-center">
                                                <h3 className="font-medium text-gray-800 text-center mb-1">{food.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FishFood;
