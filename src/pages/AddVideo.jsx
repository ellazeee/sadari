import React, { useState } from "react";
import { Sidebar } from "../components/sidebar/sidebar-container.jsx";
import { useNavigate } from "react-router-dom";
import { ToastNotification } from "../components/card/ToastNotification.jsx";

export const AddVideo = () => {
  const [title, setTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", caption);
    formData.append("video", videoFile);

    try {
      const res = await fetch("https://backend-sadari.vercel.app/videoAdmin", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Gagal upload video");
      }

      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate("/dashboardvideo");
      }, 2000);
    } catch (error) {
      alert("Upload gagal: " + error.message);
    }
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
        <h1 className="text-2xl font-bold text-center text-gray-800 mt-4 mb-6">
          Tambah Video
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-4"
        >
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Judul Video
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Caption
            </label>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-pink-600"
              rows={5}
              placeholder="Tambahkan caption untuk video ini"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Upload Video
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files[0])}
              className="block w-full text-gray-700"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 font-semibold text-white rounded bg-pink-600 hover:bg-pink-200 focus:outline-none"
          >
            Tambah Video
          </button>
        </form>
      </div>
    </div>
  );
};