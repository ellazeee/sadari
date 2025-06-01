import React, { useState } from "react";

export const FormEditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle
    console.log("name:", name);
    console.log("email:", email);
  };

  return (
    <div className="flex flex-col bg-white drop-shadow-md rounded-xl p-10">
      <h2 className="mb-10 text-xl font-bold mx-auto">EDIT PROFILE</h2>
      <div className="w-full max-w-sm space-y-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            className="w-full px-4 py-2 rounded-md border"
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full px-4 py-2 rounded-md border"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-pink-600 hover:bg-pink-200 text-white rounded-md"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
