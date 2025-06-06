import { useState } from "react";

function App() {
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white text-gray-800 font-sans">
      
      {/* NAVBAR */}
      <nav className="bg-pink-600 shadow-sm py-3 px-4 flex flex-col md:flex-row md:items-center md:justify-between sticky top-0 z-10 gap-2">
        {/* Logo/Title */}
        <h1 className="text-xl font-bold text-white">SADARI</h1>

        {/* Navigation Items */}
        <div className="flex space-x-4">
          {["Home", "Browser", "Settings"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveNav(item)}
              className={`text-white hover:text-pink-200 transition-colors ${
                activeNav === item ? "font-bold" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search here..."
            className="p-2 h-8 w-48 md:w-56 text-sm border-0 rounded-l-md outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button className="bg-pink-400 text-white px-3 h-8 rounded-r-md hover:bg-pink-500 transition-colors">
            Enter
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="px-4 py-6 space-y-10">
        {/* Section: All About Breast Cancer */}
        <section>
          <h2 className="text-lg font-bold mb-4">All About Breast Cancer</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              "Apa itu sadari?",
              "Kenali tanda kanker payudara!",
              "Hidup sehat kunci terhindar dari kanker!",
            ].map((title, i) => (
              <div
                key={i}
                className="min-w-[140px] bg-white rounded-xl shadow hover:shadow-lg transition hover:scale-105 p-3"
              >
                <img
                  src={`https://via.placeholder.com/100?text=Img+${i + 1}`}
                  alt={title}
                  className="w-full mb-2 rounded-md"
                />
                <p className="text-sm font-semibold text-center">{title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Health Tips */}
        <section>
          <h2 className="text-lg font-bold mb-4">Health tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "10 Gerakan Workout Simpel",
              "Pentingnya kesehatan payudara!",
              "Sarapan sehat & bergizi",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-pink-600 text-white rounded-xl overflow-hidden hover:scale-105 hover:shadow-lg transition"
              >
                <div className="relative">
                  <img
                    src={`https://via.placeholder.com/300x180?text=Video+${i + 1}`}
                    alt={title}
                    className="w-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/40 px-2 py-1 rounded-full text-sm">
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
