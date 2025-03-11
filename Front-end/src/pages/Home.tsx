import { Link } from "react-router-dom";
import { useState } from "react";
const videos = [
  { id: 1, title: "Customer's Video on Indo Super Red Arowana", url: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Vlog/24k%20Golden%20Albino.mp4" },
  { id: 2, title: "Customer's Video on 24K Golden Arowana", url: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Vlog/Malaysian%20golden%206-9.mp4" },
  { id: 3, title: "Customer's Video on Indo Super Red Arowana", url: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Vlog/Rare%20Albino%2024K%20Golden%20Head%20Arowana.mp4" },
  { id: 4, title: "Customer's Video on Platinum Arowana", url: "https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/Hero1/superhighbackgoldenfrom%20wahseahfarm-6-7incheswithcertificateand%20microchip-7850.mp4" },
];

const testimonials = [
  {
    name: "Sneha",
    review: "What a beautiful and happy experience buying 3 arowanas... Mr. Yadesh Sir was very patient and calm... Highly recommended!",
  },
  {
    name: "Pratheesh R",
    review: "Best place to buy good quality Arowana's, well maintained, and a must visit if you're serious about them!",
  },
  {
    name: "Tanmay Bagkar",
    review: "Absolutely delighted with my 24 Carat Gold Arowana purchase and the safe home delivery! Highly recommended!",
  },
  {
    name: "Rahul Martin",
    review: "Bought this stunning SHB Arowana and it’s just been a week, but I’m deeply attached already!",
  },
  {
    name: "Saroj Jena",
    review: "Ordered a super highback golden arowana and got the best quality ever! Loved it!",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
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

        {/* New Varieties Section */}
      <section className="bg-blue-50 py-12">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-8">New Varieties</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Fish Card 1 */}
      <div className="bg-white shadow-md hover:shadow-lg transition rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/New%20Varitey/Malaysian%20Crossback%20Golden%20(A)%209-10.png"
            alt="Malaysian Crossback Golden (A)"
            className="w-full h-52 object-cover"
          />
          <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            9-10"
          </span>
        </div>
        <div className="p-4 text-left">
          <h3 className="text-lg font-semibold mb-1">Malaysian Crossback Golden (A) 9-10</h3>

          <div className="text-xl font-bold text-gray-800">₹13,500</div>
          <button className="mt-3 flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Add to <span className="ml-2">🛒</span>
          </button>
        </div>
      </div>

      {/* Fish Card 2 */}
      <div className="bg-white shadow-md hover:shadow-lg transition rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/New%20Varitey/Malaysian%20Crossback%20Golden%20(A)%20%20.png"
            alt="Malaysian Crossback Golden (A)"
            className="w-full h-52 object-cover"
          />
          <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            12-13"
          </span>
        </div>
        <div className="p-4 text-left">
          <h3 className="text-lg font-semibold mb-1">Malaysian Crossback Golden (A)</h3>
         
          <div className="text-xl font-bold text-gray-800">₹15,500</div>
          <button className="mt-3 flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Add to <span className="ml-2">🛒</span>
          </button>
        </div>
      </div>

      {/* Fish Card 3 */}
      <div className="bg-white shadow-md hover:shadow-lg transition rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/New%20Varitey/Indo%20super%20red%2012-13.png"
            alt="Platinum Indo super red 12-13"
            className="w-full h-52 object-cover"
          />
          <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            10-12"
          </span>
        </div>
        <div className="p-4 text-left">
          <h3 className="text-lg font-semibold mb-1"> Indo super red 12-13"</h3>
          <div className="text-xl font-bold text-gray-800">₹85,000</div>
          <button className="mt-3 flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Add to <span className="ml-2">🛒</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="testimonials" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-red-700">Testimonials</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="italic text-gray-700">"{testimonials[currentIndex].review}"</p>
            <h4 className="font-semibold mt-4 text-red-600">- {testimonials[currentIndex].name}</h4>
          </div>
          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-3 py-2 rounded-full"
          >
            &#10094;
          </button>
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-3 py-2 rounded-full"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>

      {/* VLOGS */}
      <div className="video-section-container mb-8 bg-blue-50 p-8 rounded-lg text-center">
      <h2 className="text-3xl font-bold text-center text-red-700 mb-6">VLOGS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="video-card bg-white shadow-lg hover:shadow-xl transition p-4 rounded-lg text-center border border-gray-200">
            <video className="w-full h-60 rounded-lg" autoPlay loop muted playsInline>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-lg font-semibold text-red-700 mt-4">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>

      {/* BLOGS */}
      <section id="blogs" className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white shadow hover:shadow-lg transition rounded overflow-hidden">
              <img
                src="https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/New%20Varitey/Malaysian%20Crossback%20Golden%20(A)%20%20.png"
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
                src="https://nhyudcwevlaeklzgyvfe.supabase.co/storage/v1/object/public/media/New%20Varitey/Indo%20super%20red%2012-13.png"
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
