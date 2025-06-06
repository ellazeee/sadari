import React, { useState } from "react";
import { Sidebar } from "../components/sidebar/sidebar-container.jsx";
import { InputSearch } from "../components/header/input-search.jsx";
import { useNavigate } from "react-router-dom";
import { ToastNotification } from "../components/card/ToastNotification.jsx";

export const AddVideo = () => {
  const [title, setTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    // Simulasi backend
    setTimeout(() => {
      setShowToast(false);
      navigate("/dashboardvideo");
    }, 2000);
  };

  return (
    <div className="flex flex-row min-h-screen relative">
      {showToast && (
        <ToastNotification
          message="Video berhasil ditambahkan!"
          onClose={() => setShowToast(false)}
        />
      )}
      <Sidebar />
      <div className="flex-grow ml-60 p-6">
        <InputSearch />
        <h1 className="text-2xl font-bold mb-6 mt-4">Tambah Video</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-6 max-w-xl"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Judul Video
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Caption
            </label>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              rows="4"
              placeholder="Tambahkan caption untuk video ini"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Upload Video
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files[0])}
              className="w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-pink-500 text-white font-bold px-6 py-2 rounded-lg hover:bg-pink-600 transition duration-200"
          >
            Tambah Video
          </button>
        </form>
      </div>
    </div>
  );
};
