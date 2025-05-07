import React from "react";
import { Link } from "react-router"
import { InputSearch } from "../header/input-search"

export const Navbar = () => {
  return (
    <div className="navbar bg-pink-600 shadow-sm flex items-center justify-between px-4 py-2 relative h-16">
      <div>
        <Link to="/home" className="text-white font-bold text-xl">
          SADARI
        </Link>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-row gap-8 rounded-2xl pt-1 pb-1 pl-4 pr-4">
        <Link to="/home" className="text-white">Home</Link>
        <Link to="/browser" className="text-white">Browser</Link>
        <Link to="/settings" className="text-white">Settings</Link>
      </div>

      <InputSearch />
    </div>
  )
}
