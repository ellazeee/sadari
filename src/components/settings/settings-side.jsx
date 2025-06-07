import React from "react";

export const SettingsSide = ({ onSelect }) => {

  return (
    <div className="flex flex-col bg-white drop-shadow-md rounded-xl pt-10 pb-10 pl-14 pr-14 min-w-56">
      <ul className="text-sm list-none space-y-2">
        <li>
          <button className="outline-none" onClick={() => onSelect("editProfile")}>
            Edit Profile
          </button>
        </li>
        <li>
          <button className="outline-none" onClick={() => onSelect("changePassword")}>
            Change Password
          </button>
        </li>
      </ul>
    </div>
  );
};
