import React from "react";
import { useNavigate } from "react-router";

export const AddVideo = () => {
  const navigate = useNavigate();

  const handleAddVideo = () => {
    navigate("/tambah-video"); // Ganti ini sesuai rute halaman input video kamu
  };

  return (
    <div className="flex mb-1 justify-between">
      <h2 className="font-semibold mb-2 my-auto text-xl">
        VIDEOS
      </h2>
      <button
        onClick={handleAddVideo}
        className="text-black text-4xl py-2 px-2 rounded"
      >
        +
      </button>
    </div>
  );
};
