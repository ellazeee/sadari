import React from "react";

export const ToastNotification = ({ message, onClose }) => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-pink-500 text-white font-semibold px-6 py-4 rounded-xl shadow-lg flex items-center justify-between gap-4">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 bg-white text-pink-500 font-bold rounded-full px-2 py-1 text-sm hover:bg-pink-100"
        >
          ×
        </button>
      </div>
    </div>
  );
};
