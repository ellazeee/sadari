import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState('Dashboard');

  return (
    <div className="flex">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <div className="flex-1">
        <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />

        {/* DASHBOARD CARDS */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border rounded-lg shadow-md p-4 flex items-center space-x-4">
            <div className="text-pink-600 text-3xl">📄</div>
            <div>
              <h2 className="text-lg font-semibold">Total Artikel</h2>
              <p className="text-sm">5 Artikel</p>
            </div>
          </div>

          <div className="bg-white border rounded-lg shadow-md p-4 flex items-center space-x-4">
            <div className="text-pink-600 text-3xl">🎥</div>
            <div>
              <h2 className="text-lg font-semibold">Total Video Edukasi</h2>
              <p className="text-sm">3 Video</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
