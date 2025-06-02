import React from "react";

export const SettingsSide = ({ onSelect }) => {
  return (
    <div className="flex flex-col bg-white drop-shadow-md rounded-xl pt-10 pb-10 pl-14 pr-14 min-w-56">
      <div>
        <img
          className="w-20 h-20 rounded-full mx-auto border-2 border-pink-600"
          src=""
          alt=""
        />
      </div>
      <h2 className="mx-auto p-5 pb-8 font-semibold">{name}</h2>
      <div>
        <ul className="text-sm list-none">
          <li className="mb-2">
            <button
            className="outline-none" 
            onClick={() => onSelect("editProfile")}
            >Edit Profile</button>
          </li>
          <li className="mb-2">
            <button
            className="outline-none"
            onClick={() => onSelect("changePassword")}
            >
              Change Password</button>
          </li>
          <li className="mb-2">
            <button className="outline-none">
              Notifications</button>
          </li>
          <li className="mb-2">
            <button className="outline-none"
            >Dark Mode</button>
          </li>
          <li className="mb-2">
            <button className="outline-none"
            >About Us</button>
          </li>
          <li className="mb-2">
            <button className="outline-none"
            >Privacy Policy</button>
          </li>
          <li className="mb-2">
            <button className="outline-none"
            >Help</button>
          </li>
        </ul>
      </div>
    </div>
  );
};