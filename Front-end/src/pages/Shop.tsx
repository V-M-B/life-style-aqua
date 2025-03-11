import { useEffect } from "react";


const products = [
  { id: 1, name: "Product 1", image: "/assets/product1.jpg" },
  { id: 2, name: "Product 2", image: "/assets/product2.jpg" },
  { id: 3, name: "Product 3", image: "/assets/product3.jpg" },
  { id: 4, name: "Product 4", image: "/assets/product4.jpg" },
  { id: 5, name: "Product 5", image: "/assets/product5.jpg" },
  { id: 6, name: "Product 6", image: "/assets/product6.jpg" },
];

const Products = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{product.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
