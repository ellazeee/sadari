import React from 'react';

export default function Navbar({ activeNav, setActiveNav }) {
  return (
    <nav className="bg-pink-600 shadow-sm py-3 px-4 flex items-center justify-between sticky top-0 z-10">
      <h1 className="text-xl font-bold text-white">SADARI</h1>

      <div className="flex space-x-6">
        {['Home', 'Browser', 'Settings'].map((item) => (
          <button
            key={item}
            onClick={() => setActiveNav(item)}
            className={`text-white hover:text-pink-200 transition-colors ${
              activeNav === item ? 'font-bold underline' : ''
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search here..."
          className="p-2 h-8 w-56 text-sm border-0 rounded-l-md outline-none focus:ring-2 focus:ring-pink-300"
        />
        <button className="bg-pink-400 text-white px-2 h-8 rounded-r-md hover:bg-pink-500 transition-colors">
          Enter
        </button>
      </div>
    </nav>
  );
}
