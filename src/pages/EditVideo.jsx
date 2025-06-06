import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastNotification } from "../components/card/ToastNotification.jsx";

export const EditVideo = () => {
  const [title, setTitle] = useState("Video SADARI 1");
  const [videoFile, setVideoFile] = useState(null);
  const [caption, setCaption] = useState("Caption untuk video ini");
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate("/dashboardvideo");
    }, 2000);
  };

  const handleBack = () => {
    navigate("/dashboardvideo");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-lg mt-10">
      {showToast && (
        <ToastNotification
          message="Video berhasil diupdate!"
          onClose={() => setShowToast(false)}
        />
      )}
      <button onClick={handleBack} className="text-gray-800 text-4xl">
        &#8592;
      </button>
      <h1 className="text-2xl text-center font-bold mb-4 text-gray-800">Edit Video</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold text-gray-700">Judul Video</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Caption</label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows={5}
            placeholder="Tambahkan caption untuk video ini"
            className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Upload Video Baru (opsional)</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            className="block w-full text-gray-700"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 font-semibold text-white rounded bg-pink-600 hover:bg-pink-200 focus:outline-none"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
};
