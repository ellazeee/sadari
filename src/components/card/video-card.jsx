import React from "react";

export const VideoCard = ({ src, title, onDelete, onEdit }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden p-4">
      <video
        src={src}
        controls
        className="rounded-md w-full h-40 object-cover"
      />
      <h3 className="text-lg font-semibold mt-3">{title}</h3>
      <div className="flex gap-2 mt-2">
        <button
          onClick={onEdit}
          className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
