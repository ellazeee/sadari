import React from "react";
import { Link } from "react-router-dom";

export const SidebarList = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full">
        <h2 className="font-semibold pb-2">Dashboard</h2>
        <ul className="text-sm list-none">
          <li className="mb-1 w-full h-6">
            <Link to="/" className="block hover:bg-pink-500 pl-4">Home</Link>
          </li>
          <li className="mb-1 w-full h-6">
            <Link to="/dashboardarticle" className="block hover:bg-pink-500 pl-4">Articles</Link>
          </li>
          <li className="mb-1 w-full h-6">
            <Link to="/dashboardvideo" className="block hover:bg-pink-500 pl-4">Videos</Link>
          </li>
          <li className="mb-1 w-full h-6">
            <Link to="/notifications" className="block hover:bg-pink-500 pl-4">Notifications</Link>
          </li>
          <hr className="border mt-3 mb-3" />
        </ul>
      </div>

      <div className="w-full">
        <h2 className="font-semibold pb-2">Account Settings</h2>
        <ul className="text-sm list-none">                            
          <li className="mb-1 w-full h-6">
            <Link to="/edit-profile" className="block hover:bg-pink-500 pl-4">Edit Profile</Link>
          </li>
          <li className="mb-1 w-full h-6">
            <Link to="/change-password" className="block hover:bg-pink-500 pl-4">Change Password</Link>
          </li>
          <li className="mb-1 w-full h-6">
            <Link to="/logout" className="block hover:bg-pink-500 pl-4">Log Out</Link>
          </li>
          <hr className="border mt-3 mb-3" />
        </ul>
      </div>
    </div>
  );
};
