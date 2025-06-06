import React from "react";

const CekSadari = ({ onEditTanggal, onLakukanSadari }) => (
  <div className="bg-pink-600 mx-4 rounded-lg text-center shadow-md p-4 mt-12">
    <p className="text-pink-200 font-bold">Cek Sadari:</p>
    <h2 className="text-pink-100 text-2xl font-bold">Hari Ke-2</h2>
    <div className="mt-4 flex justify-center gap-4 flex-wrap">
      <button
        onClick={onEditTanggal}
        className="bg-pink-50 text-pink-600 px-4 py-2 rounded-full font-semibold"
      >
        Edit Tanggal
      </button>
      <button
        onClick={onLakukanSadari}
        className="bg-pink-50 text-pink-600 px-4 py-2 rounded-full font-semibold"
      >
        Lakukan Sadari
      </button>
    </div>
  </div>
);

export default CekSadari;
