import { Link } from "react-router-dom";
import backgroundVideo from "../assets/home-media/hero1/superhighbackgoldenfrom wahseahfarm-6-7incheswithcertificateand microchip-7850.mp4";


const Home = () => {
  return (
    <div>
<section id="hero" className="relative h-screen w-full overflow-hidden">
  {/* Background Video */}
  <video 
    autoPlay 
    loop 
    muted
    playsInline 
    className="absolute top-0 left-0  object-cover"
    style={{ height: "100vh" }}
  >
    <source 
      src="https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Hero1/superhighbackgoldenfrom%20wahseahfarm-6-7incheswithcertificateand%20microchip-7850.mp4" 
      type="video/mp4" 
    />
    Your browser does not support the video tag.
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        All Arowana’s Shipping
      </h1>
      <p className="text-lg md:text-xl mb-8">
        We ship high-quality fishes worldwide
      </p>
      <Link to="/shop" className="hover:text-black border border-red-500 bg-red-500 rounded-full px-6 py-2">
              Shop Now
            </Link>
    </div>
  </div>
</section>



      {/* STATS SECTION */}
      <section className="bg-white py-10">
      <div className="container mx-auto px-6 flex flex-wrap justify-center gap-6">
        {[
          { number: "1000+", label: "Total Products" },
          { number: "5000+", label: "Total Customers" },
          { number: "100%", label: "Happy Customers" },
          { number: "15+", label: "Years of Experience" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-blue-100 text-center rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-80 md:w-64 lg:w-56"
          >
            <h2 className="text-3xl font-bold text-black">{stat.number}</h2>
            <p className="text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>

      {/* SHOP BY CATEGORY */}
      <section id="shop" className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category Card 1 */}
            <div className="bg-white shadow hover:shadow-lg transition p-4 rounded hover:shadow-blue-300">
              <img
                src="https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Category/MC-Golden%20Head%20Arowana.png"
                alt="Fish 1"
                className="w-full h-auto rounded"
              />
              <h3 className="text-xl font-semibold mt-4">Arowana</h3>
              <p className="text-gray-600 mt-2">
              The Arowana, a majestic freshwater fish, is known for its long, sleek body, metallic scales, and upturned mouth. Revered in many cultures as a symbol of prosperity, it thrives in large tanks with a carnivorous diet and ample swimming space.
              </p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                View More
              </button>
            </div>
            {/* Category Card 2 */}
            <div className="bg-white shadow hover:shadow-lg transition p-4 rounded hover:shadow-blue-300">
              <img
                src="https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Category/MC-Dollars.png"
                alt="Fish 2"
                className="w-full h-auto rounded"
              />
              <h3 className="text-xl font-semibold mt-4">Silver Dollar</h3>
              <p className="text-gray-600 mt-2">
              The Silver Dollar fish is a popular freshwater species known for its distinctive, disc-shaped body and shimmering silver scales. Typically found in schools, they are peaceful and make great community tank inhabitants.
              </p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                View More
              </button>
            </div>
            {/* Category Card 3 */}
            <div className="bg-white shadow hover:shadow-lg transition p-4 rounded hover:shadow-blue-300">
              <img
                src="https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Category/Category-Discus%20Fish.png"
                alt="Fish Food"
                className="w-full h-auto rounded"
              />
              <h3 className="text-xl font-semibold mt-4">Discus</h3>
              <p className="text-gray-600 mt-2">
              Discus fish are vibrant, disc-shaped freshwater fish from the Amazon, known for their stunning colors and graceful appearance. They require warm, soft water and specific care, making them a favorite among experienced aquarists.
              </p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                View More
              </button>
            </div>

          {/* Category Card 4 */}
            <div className="bg-white shadow hover:shadow-lg hover:shadow-blue-300 transition p-4 rounded md:col-start-2">
              <img
                src="https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Category/Mc-Fish%20Food.png"
                alt="Fish 2"
                className="w-full h-auto rounded"
              />
              <h3 className="text-xl font-semibold mt-4">Fish Foods</h3>
              <p className="text-gray-600 mt-2">
              Fish food and accessories encompass a wide range of products designed to promote the health and well-being of aquatic pets. High-quality fish food is formulated to meet the nutritional needs of various species, while accessories include items like filters, heaters, and decorations that enhance the aquarium environment.
              </p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NEW VARIETIES SECTION */}
      <section className="bg-gray-50 py-12">
      {/* NEW VARIETIES card 1 */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">New Varieties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white shadow hover:shadow-lg transition rounded overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250.png?text=Variety+1"
                alt="Variety 1"
                className="w-full h-auto"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-2">Red Dragon Fish</h3>
                <p className="text-gray-600">
                  Newly arrived red dragon fish, perfect for aquariums.
                </p>
              </div>
            </div>
            
            
      {/* NEW VARIETIES card 2 */}
            <div className="bg-white shadow hover:shadow-lg transition rounded overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250.png?text=Variety+2"
                alt="Variety 2"
                className="w-full h-auto"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-2">Golden Discus</h3>
                <p className="text-gray-600">
                  Beautiful golden discus, vibrant and healthy.
                </p>
              </div>
            </div>
      {/* NEW VARIETIES card 3 */}
      <div className="bg-white shadow hover:shadow-lg transition rounded overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250.png?text=Variety+2"
                alt="Variety 2"
                className="w-full h-auto"
              />
              <div className=" p-4 text-left">
                <h3 className="text-xl font-semibold mb-2">Golden Discus</h3>
                <p className="text-gray-600">
                  Beautiful golden discus, vibrant and healthy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
          <div className="max-w-xl mx-auto space-y-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded shadow">
              <p className="italic">
                "I got my fish delivered in perfect condition. Absolutely
                stunning Arowana!"
              </p>
              <h4 className="font-semibold mt-4">- John Doe</h4>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded shadow">
              <p className="italic">
                "Customer service was excellent and they guided me through every
                step."
              </p>
              <h4 className="font-semibold mt-4">- Jane Smith</h4>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded shadow">
              <p className="italic">
                "The best place to buy exotic fish online! Highly recommended."
              </p>
              <h4 className="font-semibold mt-4">- Mike Johnson</h4>
            </div>
          </div>
        </div>
      </section>

      {/* VLOGS */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Vlogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white shadow hover:shadow-lg transition rounded overflow-hidden">
              <img
                src="https://via.placeholder.com/300x200.png?text=Vlog+1"
                alt="Vlog 1"
                className="w-full h-auto"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold">
                  How to Care for Arowanas
                </h3>
              </div>
            </div>
            <div className="bg-white shadow hover:shadow-lg transition rounded overflow-hidden">
              <img
                src="https://via.placeholder.com/300x200.png?text=Vlog+2"
                alt="Vlog 2"
                className="w-full h-auto"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold">
                  Feeding Techniques &amp; Tips
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section id="blogs" className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white shadow hover:shadow-lg transition rounded overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250.png?text=Blog+1"
                alt="Blog 1"
                className="w-full h-auto"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-2">
                  Understanding Aquarium Chemistry
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="bg-white shadow hover:shadow-lg transition rounded overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250.png?text=Blog+2"
                alt="Blog 2"
                className="w-full h-auto"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-2">
                  Top 5 Tips for Healthy Fish
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
