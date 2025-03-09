const Home = () => {
  return (
    <div>
      <section
        id="hero"
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://via.placeholder.com/1600x900.png?text=Hero+Background")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              All Arowana’s Shipping
            </h1>
            <p className="text-lg md:text-xl mb-8">
              We ship high-quality fishes worldwide
            </p>
            <a
              href="#shop"
              className="inline-block bg-red-500 hover:bg-red-600 transition-colors px-6 py-3 rounded text-white font-semibold"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-around">
          <div className="text-center mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-red-500">1000+</h2>
            <p className="text-gray-700">Fishes</p>
          </div>
          <div className="text-center mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-red-500">5000+</h2>
            <p className="text-gray-700">Shipments</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-500">15+</h2>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section id="shop" className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category Card 1 */}
            <div className="bg-white shadow hover:shadow-lg transition p-4 rounded">
              <img
                src="https://via.placeholder.com/300x300.png?text=Fish+1"
                alt="Fish 1"
                className="w-full h-auto rounded"
              />
              <h3 className="text-xl font-semibold mt-4">Gold Arowana</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                View More
              </button>
            </div>
            {/* Category Card 2 */}
            <div className="bg-white shadow hover:shadow-lg transition p-4 rounded">
              <img
                src="https://via.placeholder.com/300x300.png?text=Fish+2"
                alt="Fish 2"
                className="w-full h-auto rounded"
              />
              <h3 className="text-xl font-semibold mt-4">Silver Arowana</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                View More
              </button>
            </div>
            {/* Category Card 3 */}
            <div className="bg-white shadow hover:shadow-lg transition p-4 rounded">
              <img
                src="https://via.placeholder.com/300x300.png?text=Fish+Food"
                alt="Fish Food"
                className="w-full h-auto rounded"
              />
              <h3 className="text-xl font-semibold mt-4">Fish Food</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">New Varieties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
