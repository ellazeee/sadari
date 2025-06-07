import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/sidebar/sidebar-container.jsx";
import { ToastNotification } from "../components/card/ToastNotification.jsx";

export const InputArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Validasi input
  if (!title || !description || !photo) {
    alert("Semua field wajib diisi sebelum mengirimkan artikel.");
    return;
  }

  try {
    // Simulasi pengiriman data artikel (dummy)
    console.log("Data artikel yang dikirim (dummy):", {
      title,
      description,
      photoName: photo.name,
    });

    // Simulasi delay seperti proses request ke server
    setTimeout(() => {
      setShowToast(true);
      setTimeout(() => {
        navigate("/dashboardarticle");
      }, 2000);
    }, 1000);
  } catch (error) {
    alert("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
  }
};


  const handleBack = () => {
    navigate("/dashboardarticle");
  };

  return (
    <div className="flex flex-row min-h-screen relative">
      {showToast && (
        <ToastNotification
          message="Artikel berhasil ditambahkan!"
          onClose={() => setShowToast(false)}
        />
      )}
      <Sidebar />
      <div className="flex-grow ml-60 p-6">
        <button
          onClick={handleBack}
          className="text-gray-800 text-3xl mb-2 hover:text-pink-500 transition"
        >
          &#8592;
        </button>
        <h1 className="text-2xl text-center font-bold text-gray-800 mb-6">Tambah Artikel</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-4"
          encType="multipart/form-data"
        >
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Judul</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Masukkan judul artikel"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Deskripsi</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              placeholder="Tambahkan deskripsi untuk artikel ini"
              className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Upload Foto</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="block w-full text-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 font-semibold text-white rounded bg-pink-600 hover:bg-pink-200 transition duration-200"
          >
            Tambah Artikel
          </button>
        </form>
      </div>
    </div>
  );
};
