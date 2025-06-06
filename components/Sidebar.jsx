import React from 'react';

export default function Sidebar({ activeNav, setActiveNav }) {
  const menu = ['Dashboard', 'Artikel', 'Video', 'Akun Admin', 'Settings'];

  return (
    <aside className="w-60 bg-pink-600 text-white flex flex-col p-4 space-y-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Admin</h2>
      {menu.map((item) => (
        <button
          key={item}
          onClick={() => setActiveNav(item)}
          className={`text-left px-2 py-2 rounded hover:bg-pink-500 transition-colors ${
            activeNav === item ? 'bg-pink-700' : ''
          }`}
        >
          {item}
        </button>
      ))}
    </aside>
  );
}
