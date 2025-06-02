import React, { useState } from "react";

export const FormChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle
  };

  return (
    <div className="flex flex-col bg-white drop-shadow-md rounded-xl p-10">
      <h2 className="mb-6 text-xl font-bold mx-auto">CHANGE PASSWORD</h2>
      <div className="w-full max-w-sm space-y-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border text-sm"
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border text-sm"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-pink-600 hover:bg-pink-200 text-white rounded-md"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};
