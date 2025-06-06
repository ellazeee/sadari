import React, { useState } from "react";
import { InputSearch } from "../components/header/input-search.jsx";
import { Sidebar } from "../components/sidebar/sidebar-container.jsx";
import { VideoCard } from "../components/card/video-card.jsx";
import { ToastNotification } from "../components/card/ToastNotification.jsx";
import { useNavigate } from "react-router-dom";

export const DashboardVideo = () => {
  const navigate = useNavigate();

  const [videos, setVideos] = useState([
    { id: 1, title: "Video SADARI 1", src: "/video-sadari-1.mp4" },
    { id: 2, title: "Video SADARI 2", src: "/video-sadari-1.mp4" },
    { id: 3, title: "Video SADARI 3", src: "/video-sadari-1.mp4" },
    { id: 4, title: "Video SADARI 4", src: "/video-sadari-1.mp4" },
    { id: 5, title: "Video SADARI 5", src: "/video-sadari-1.mp4" },
  ]);

  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const confirmDelete = (id) => {
    setSelectedVideoId(id);
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    setVideos(videos.filter((video) => video.id !== selectedVideoId));
    setShowConfirm(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
    setSelectedVideoId(null);
  };

  const handleEditVideo = () => {
    navigate("/editvideo");
  };

  const handleAddVideo = () => {
    navigate("/addvideo");
  };

  return (
    <div className="flex flex-row relative">
      <Sidebar />
      <div className="flex-grow ml-60 p-4">
        {showToast && (
          <ToastNotification
            message="Video berhasil dihapus!"
            onClose={() => setShowToast(false)}
          />
        )}

        {showConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Hapus Video?
              </h2>
              <p className="text-gray-600 mb-6">
                Apakah kamu yakin ingin menghapus video ini?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleConfirmDelete}
                  className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                >
                  Ya, Hapus
                </button>
                <button
                  onClick={handleCancelDelete}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}

        <InputSearch />
        <div className="flex justify-between items-center mt-4 mb-6">
          <h1 className="text-2xl font-bold">VIDEOS</h1>
          <button
            onClick={handleAddVideo}
            className="text-3xl font-bold text-pink-600 hover:text-pink-800 transition"
          >
            +
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              src={video.src}
              onDelete={() => confirmDelete(video.id)}
              onEdit={() => handleEditVideo(video.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
