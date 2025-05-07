import React from "react";

export const SidebarList = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full">
        <h2 className="font-semibold pb-2">Dashboard</h2>
        <ul className="text-sm list-none">
          <li className="mb-1 w-full h-6">
            <a href="" className="block hover:bg-pink-500 pl-4">Home</a>
          </li>
          <li className="mb-1 w-full h-6">
            <a href="" className="block hover:bg-pink-500 pl-4">Articles</a>
          </li>
          <li className="mb-1 w-full h-6">
            <a href="" className="block hover:bg-pink-500 pl-4">Videos</a>
          </li>
          <li className="mb-1 w-full h-6">
            <a href="" className="block hover:bg-pink-500 pl-4">Notifications</a>
          </li>
          <hr className="border mt-3 mb-3" />
        </ul>
      </div>

      <div className="w-full">
        <h2 className="font-semibold pb-2">Account Settings</h2>
        <ul className="text-sm list-none">                            
          <li className="mb-1 w-full h-6">
            <a href="" className="block  hover:bg-pink-500 pl-4">Edit Profile</a>
          </li>
          <li className="mb-1 w-full h-6">
            <a href="" className="block hover:bg-pink-500 pl-4">Change Password</a>
          </li>
          <li className="mb-1 w-full h-6">
            <a href="" className="block hover:bg-pink-500 pl-4">Log Out</a>
          </li>
          <hr className="border mt-3 mb-3" />
        </ul>
      </div>
    </div>
  );
};