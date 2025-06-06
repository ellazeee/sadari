import React from "react";
import { Link } from "react-router-dom";
import { InputSearch } from "../header/input-search";

export const Navbar = () => {
  return (
    <div className="navbar bg-pink-600 shadow-sm flex items-center justify-between px-4 py-2 relative h-16">
      {/* Logo or title */}
      <div>
        <Link to="/home" className="text-white font-bold text-xl">
          SADARI
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-row gap-8 rounded-2xl pt-1 pb-1 pl-4 pr-4">
        <Link to="/home" className="text-white hover:underline">Home</Link>
        <Link to="/browser" className="text-white hover:underline">Browser</Link>
        <Link to="/settings" className="text-white hover:underline">Settings</Link>
      </div>

      {/* Search Input */}
      <InputSearch />
    </div>
  );
};
