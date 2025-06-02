import React, { useState, useRef } from "react";

export const FormEditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // tambahin untuk kirim data

    console.log("name:", name);
    console.log("email:", email);
    console.log("profilePicture:", profilePicture);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file)); 
    }
  };

  const handleProfileClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col bg-white drop-shadow-md rounded-xl p-10">
      <h2 className="mb-6 text-xl font-bold mx-auto">EDIT PROFILE</h2>
      <div className="w-full max-w-sm space-y-6">
        <form className="space-y-4" 
              onSubmit={handleSubmit}>
          <div className="flex justify-center">
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="Profile Preview"
                onClick={handleProfileClick}
                className="w-20 h-20 rounded-full object-cover cursor-pointer border-2 border-pink-600"
                title="Click to change photo"
              />
            ) : (
              <div
                onClick={handleProfileClick}
                className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer border-2 border-gray-400"
                title="Upload photo"
                >
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="hidden"
            />
          </div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            className="w-full px-4 py-2 rounded-md border text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full px-4 py-2 rounded-md border text-sm"
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

