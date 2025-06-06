import React, { useState } from "react";
import { Home, Search, Settings, MessageCircle } from "lucide-react";

function App() {
  const [activeNav, setActiveNav] = useState("Home");

  const handleEditTanggal = () => {
    alert("Edit Tanggal diklik!");
  };

  const handleLakukanSadari = () => {
    alert("Lakukan Sadari diklik!");
  };

  const handleCardClick = (message) => {
    alert(message);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">

    {/* NAVBAR */}
      <nav className="bg-pink-600 shadow-sm py-3 px-4 flex items-center justify-between sticky top-0 z-10">
    {/* Logo/Title */}
      <h1 className="text-xl font-bold text-white">SADARI</h1>
  
    {/* Navigation Items */}
     <div className="flex space-x-6">
     {['Home', 'Browser', 'Settings'].map((item) => (
     <button
        key={item}
        onClick={() => setActiveNav(item)}
        className={`text-white hover:text-pink-200 transition-colors ${
          activeNav === item ? 'text-white' : 'text-white'
        }`}
      >
        {item}
      </button>
      ))}
      </div>

    {/* Search Bar with Enter Button */}
    <div className="flex items-center">
      <input
      type="text"
      placeholder="Search here..."
      className="p-2 h-8 w-56 text-sm border-0 rounded-l-md outline-none focus:ring-2 focus:ring-pink-300"
      />
      <button className="bg-pink-400 text-white px-2 h-8 rounded-r-md hover:bg-pink-50 transition-colors">
        Enter
      </button>
      </div>
    </nav>


      {/* HEADER */}
      <div className="text-center p-4">
        <p className="text-black font-bold mt-10">30 Juni</p>
        <div className="flex justify-center space-x-2 mt-5">
          {["29", "30", "1", "2", "3", "4"].map((date) => (
            <div
              key={date}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                date === "30"
                  ? "bg-pink-200 text-pink-800"
                  : "bg-pink-300 text-pink-800"
              }`}>
              {date}
            </div>
          ))}
        </div>
      </div>
  
       {/* - CEK SADARI - */}
      <div className="bg-pink-600 mx-4 rounded-lg text-center shadow-md p-4 mt-12">
          <p className="text-pink-200 font-bold">Cek Sadari:</p>
          <h2 className="text-pink-100 text-2xl font-bold">Hari Ke-2</h2>

          <div className="mt-4 flex justify-center gap-4 flex-wrap">
          <button
            onClick={handleEditTanggal}
            className="bg-pink-50 text-pink-600 px-4 py-2 rounded-full font-semibold"
          >
          Edit Tanggal
          </button>
          <button
            onClick={handleLakukanSadari}
            className="bg-pink-50 text-pink-600 px-4 py-2 rounded-full font-semibold"
          >
          Lakukan Sadari
        </button>
        </div>
      </div>

      {/* INFORMASI */}
      <div className="mx-4 mt-6">
      <h3 className="text-black font-bold mb-2">Informasi hari ini</h3>
      <div className="flex justify-between gap-4">
          {[
            { img: "/1.png", text: "Apa itu Sadari?" },
            { img: "/2.png", text: "Kenali tanda kanker payudara" },
            { img: "/3.png", text: "Hidup sehat terhindar dari kanker" },
            ].map((item) => (
          <div
            key={item.text}
            onClick={() => handleCardClick(item.text)}
            className="mb-12 mt-6 bg-white border rounded-lg shadow-md p-4 w-1/3 flex flex-col items-center cursor-pointer transform transition-transform hover:scale-105">
            <div className="rounded-lg mb-2 full h-22 object-cover">
            <img src={item.img} alt={item.text} className="h-14" />
          </div>
          <p className="text-sm text-black font-semibold text-center">
          {item.text}
          </p>
          </div>))}
        </div>
        </div>

    </div>
  );
}

export default App;
