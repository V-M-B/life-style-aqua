import { useEffect } from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Arowana", image: "https://ecprdstorage01.blob.core.windows.net/lifestyleaqua/images/24K-Golden-Head.png?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2099-03-30T23:12:15Z&st=2023-03-30T15:12:15Z&spr=https&sig=tpZd7lCFggnHkiANSByPfZ8nJMnUfY0C2Yr3yOm2fZw%3D", route: "/shop/arowana" },
  { id: 2, name: "Silver Dollar", image: "https://ecprdstorage01.blob.core.windows.net/lifestyleaqua/images/Red hock dollar 3.png?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2099-03-30T23:12:15Z&st=2023-03-30T15:12:15Z&spr=https&sig=tpZd7lCFggnHkiANSByPfZ8nJMnUfY0C2Yr3yOm2fZw%3D", route: "/shop/silver-dollar" },
  { id: 3, name: "Discus", image: "https://ecprdstorage01.blob.core.windows.net/lifestyleaqua/images/SC-Discus.png?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2099-03-30T23:12:15Z&st=2023-03-30T15:12:15Z&spr=https&sig=tpZd7lCFggnHkiANSByPfZ8nJMnUfY0C2Yr3yOm2fZw%3D", route: "/shop/discus" },
  { id: 4, name: "Fish Foods", image: "https://ecprdstorage01.blob.core.windows.net/lifestyleaqua/images/Hikari-Oranda-Gold-300g.png?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2099-03-30T23:12:15Z&st=2023-03-30T15:12:15Z&spr=https&sig=tpZd7lCFggnHkiANSByPfZ8nJMnUfY0C2Yr3yOm2fZw%3D", route: "/shop/fish-food" },
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
