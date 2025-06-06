import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sadari = () => {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);
  const [selected, setSelected] = useState({
    kemerahan: null,
    benjolan: null,
    cairan: null,
  });

  const handleNext = () => {
    if (slide < 2) {
      setSlide(slide + 1);
    } else {
      const result = {
        kemerahan: {
          ada: selected.kemerahan === "ada",
          tingkat: selected.kemerahan === "ada" ? "Ringan" : "",
        },
        benjolan: {
          ada: selected.benjolan === "ada",
          tingkat: selected.benjolan === "ada" ? "Ringan" : "",
        },
        cairan: {
          ada:
            selected.cairan === "darah" ||
            selected.cairan === "lainnya",
          tingkat:
            selected.cairan === "darah" ||
            selected.cairan === "lainnya"
              ? "Ringan"
              : selected.cairan === "asi"
              ? "ASI"
              : "",
        },
        isFinal: false,
      };
      navigate("/hasilsadari", { state: result });
    }
  };

  const handleBack = () => {
    if (slide > 0) setSlide(slide - 1);
  };

  const handleSelect = (key, value) => {
    setSelected((prev) => ({ ...prev, [key]: value }));
  };

  const steps = [
    {
      title: "Langkah 1: Periksa di depan cermin",
      desc: "Perhatikan bentuk dan ukuran payudara Anda. Pastikan tidak ada perubahan yang tidak normal seperti benjolan atau perubahan warna kulit.",
    },
    {
      title: "Langkah 2: Kondisi payudara hari ini",
      desc: "Pilih kondisi yang sesuai dengan payudara Anda saat ini.",
    },
    {
      title: "Langkah 3: Apakah terdapat cairan?",
      desc: "Pilih apakah terdapat cairan keluar dari payudara Anda.",
    },
  ];

  const progressWidth = `${((slide + 1) / 3) * 100}%`;

  return (
    <div
      className="min-h-screen flex flex-col px-6 py-6 text-white"
      style={{ background: "linear-gradient(180deg, #F96D8C 0%, #FFB7C7 100%)" }}
    >
      <div className="relative mb-6">
        <button onClick={handleBack} className="text-white font-semibold">
          &larr; Kembali
        </button>
        <div className="h-1 bg-white/30 mt-4 rounded-full overflow-hidden">
          <div
            className="h-1 bg-white transition-all duration-300"
            style={{ width: progressWidth }}
          />
        </div>
        <div className="flex justify-between text-xs mt-1">
          <span>Langkah {slide + 1}/3</span>
          <span>3 menit</span>
        </div>
      </div>

      <div className="text-center mb-4">
        <h1 className="text-lg font-bold">Mari Melakukan Pemeriksaan SADARI</h1>
        <p className="text-sm text-white/80">
          Ikuti langkah-langkah berikut dengan cermat
        </p>
      </div>

      <div className="bg-white text-black rounded-2xl p-6 shadow-md mb-6">
        <h2 className="text-base font-semibold mb-2">{steps[slide].title}</h2>
        <p className="text-sm mb-4">{steps[slide].desc}</p>

        {slide === 0 && (
          <video
            className="w-full rounded-xl"
            controls
            src="/video-sadari-1.mp4"
          />
        )}

        {slide === 1 && (
          <div className="grid grid-cols-2 gap-4">
            <OptionCard
              label="Tidak ada kemerahan"
              selected={selected.kemerahan === "tidak"}
              onClick={() => handleSelect("kemerahan", "tidak")}
            />
            <OptionCard
              label="Terdapat kemerahan"
              selected={selected.kemerahan === "ada"}
              onClick={() => handleSelect("kemerahan", "ada")}
            />
            <OptionCard
              label="Tidak ada benjolan"
              selected={selected.benjolan === "tidak"}
              onClick={() => handleSelect("benjolan", "tidak")}
            />
            <OptionCard
              label="Terdapat benjolan"
              selected={selected.benjolan === "ada"}
              onClick={() => handleSelect("benjolan", "ada")}
            />
          </div>
        )}

        {slide === 2 && (
          <div className="grid grid-cols-2 gap-4">
            <OptionCard
              label="Tidak ada cairan"
              selected={selected.cairan === "none"}
              onClick={() => handleSelect("cairan", "none")}
            />
            <OptionCard
              label="Cairan ASI"
              selected={selected.cairan === "asi"}
              onClick={() => handleSelect("cairan", "asi")}
            />
            <OptionCard
              label="Darah"
              selected={selected.cairan === "darah"}
              onClick={() => handleSelect("cairan", "darah")}
            />
            <OptionCard
              label="Cairan lainnya"
              selected={selected.cairan === "lainnya"}
              onClick={() => handleSelect("cairan", "lainnya")}
            />
          </div>
        )}
      </div>

      <button
        onClick={handleNext}
        className="bg-white text-pink-600 font-bold py-3 rounded-xl text-center w-full mt-auto"
      >
        {slide === 2 ? "Lihat Hasil" : "Lanjutkan"}
      </button>
    </div>
  );
};

const OptionCard = ({ label, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 text-sm font-semibold rounded-xl cursor-pointer text-[#E1004E] border-2 transition-all duration-200
        ${selected ? "bg-[#FFB7C7]" : "bg-white"} border-[#E1004E]`}
    >
      {label}
    </div>
  );
};

export { Sadari };
