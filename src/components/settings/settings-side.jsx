import React from "react";

export const SettingsSide = ({ onSelect }) => {
  return (
    <div className="flex flex-col bg-white drop-shadow-md rounded-xl pt-10 pb-10 pl-14 pr-14">
      <div>
        <img
          className="w-20 h-20 rounded-full mx-auto"
          src="/cover-article.jpg"
          alt=""
        />
      </div>
      <h2 className="mx-auto p-5 pb-8 font-semibold">Unknown</h2>
      <div>
        <ul className="text-sm list-none">
          <li className="mb-2">
            <button onClick={() => onSelect("editProfile")}>Edit Profile</button>
          </li>
          <li className="mb-2">
            <button onClick={() => onSelect("changePassword")}>Change Password</button>
          </li>
          <li className="mb-2">
            <button>Notifications</button>
          </li>
          <li className="mb-2">
            <button>Dark Mode</button>
          </li>
          <li className="mb-2">
            <button>About Us</button>
          </li>
          <li className="mb-2">
            <button>Privacy Policy</button>
          </li>
          <li className="mb-2">
            <button>Help</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
