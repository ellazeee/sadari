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
    <div className="bg-gradient-to-b from-pink-600 to-pink-200 min-h-screen flex flex-col justify-between">
      {/* HEADER */}
      <div className="text-center p-4">
        <p className="text-gray-100">30 September</p>
        <div className="flex justify-center space-x-2 mt-2">
          {["29", "30", "1", "2", "3", "4"].map((date) => (
            <div
              key={date}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                date === "30"
                  ? "bg-white text-pink-600"
                  : "bg-pink-100 text-pink-600"
              }`}>
              {date}
            </div>
          ))}
        </div>
      </div>

      {/* CEK SADARI */}
      <div className="bg-white mx-4 rounded-2xl p-4 text-center shadow-lg">
        <p className="text-pink-600 font-bold">Cek Sadari:</p>
        <h2 className="text-pink-800 text-2xl font-bold">Hari Ke-2</h2>
        <button
          onClick={handleEditTanggal}
          className="mt-3 bg-pink-50 border border-pink-600 text-pink-600 px-4 py-2 rounded-full font-semibold"
        >
          Edit Tanggal
        </button>
        <button
          onClick={handleLakukanSadari}
          className="mt-2 bg-pink-600 text-white px-4 py-2 rounded-full font-semibold"
        >
          Lakukan Sadari
        </button>
      </div>

      {/* INFORMASI */}
      <div className="mx-4 mt-6">
      <h3 className="text-white font-bold mb-2">Informasi hari ini</h3>
      <div className="flex justify-between gap-4">
          {[
            { img: "/1.png", text: "Apa itu Sadari?" },
            { img: "/2.png", text: "Kenali tanda kanker payudara" },
            { img: "/3.png", text: "Hidup sehat terhindar dari kanker" },
            ].map((item) => (
          <div
            key={item.text}
            onClick={() => handleCardClick(item.text)}
            className="bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl shadow-md p-4 w-1/3 flex flex-col items-center cursor-pointer transform transition-transform hover:scale-105">
            {/* Kotak kecil untuk icon dengan border putih */}
            <div className="bg-pink-100 border-4 border-white rounded-xl p-2 mb-2 flex items-center justify-center">
            <img src={item.img} alt={item.text} className="h-12" />
          </div>
          <p className="text-sm text-pink-800 font-semibold text-center">
          {item.text}
          </p>
          </div>))}
        </div>
        </div>

      {/* GRAFIK */}
      <div className="mx-4 mt-6">
      <h3 className="text-white font-bold mb-2">Gejala anda 6 bulan terakhir</h3>
      <div className="bg-white rounded-lg flex items-center justify-center overflow-hidden p-4">
        <img
          src="/grafik.jpg"
          alt="Grafik Gejala"
          className="w-full max-w-[650px] object-contain"
        />
      </div>
    </div>
    
      {/* BOTTOM NAV */}
      <div className="flex justify-around bg-white py-3 border-t border-gray-200 mt-6 rounded-t-xl">
        <Home
          size={24}
          className={`cursor-pointer ${
            activeNav === "Home" ? "text-pink-600" : "text-gray-400"
          }`}
          onClick={() => setActiveNav("Home")}
        />
        <Search
          size={24}
          className={`cursor-pointer ${
            activeNav === "Browse" ? "text-pink-600" : "text-gray-400"
          }`}
          onClick={() => setActiveNav("Browse")}
        />
        <Settings
          size={24}
          className={`cursor-pointer ${
            activeNav === "Settings" ? "text-pink-600" : "text-gray-400"
          }`}
          onClick={() => setActiveNav("Settings")}
        />
        <MessageCircle
          size={24}
          className={`cursor-pointer ${
            activeNav === "Chat" ? "text-pink-600" : "text-gray-400"
          }`}
          onClick={() => setActiveNav("Chat")}
        />
      </div>
    </div>
  );
}

export default App;
