import { useEffect } from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Arowana", image: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Category/MC-Golden%20Head%20Arowana.png", route: "/shop/arowana" },
  { id: 2, name: "Silver Dollar", image: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Category/MC-Dollars.png", route: "/shop/silver-dollar" },
  { id: 3, name: "Discus", image: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Category/Category-Discus%20Fish.png", route: "/shop/discus" },
  { id: 4, name: "Fish Foods", image: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Category/Mc-Fish%20Food.png", route: "/shop/fish-food" },
];


const Products = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link to={product.route} key={product.id}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{product.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
