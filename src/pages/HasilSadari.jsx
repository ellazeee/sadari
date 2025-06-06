import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const HasilSadari = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state || {};

  const {
    kemerahan = { ada: false, tingkat: "" },
    cairan = { ada: false, tingkat: "" },
    benjolan = { ada: false, tingkat: "" },
    isFinal = false,
  } = result;

  const showWarning =
  (kemerahan.ada && kemerahan.tingkat !== "Ringan") ||
  (benjolan.ada && benjolan.tingkat !== "Ringan") ||
  (cairan.ada && cairan.tingkat !== "Ringan" || cairan.tingkat.toLowerCase() !== "asi");

  const GejalaItem = ({ icon, title, subtitle, tingkat }) => (
    <div className="flex items-start gap-4 mb-6">
      <img
        src={icon}
        alt={title}
        className={`w-12 h-12 object-contain ${
          title === "Kemerahan" ? "scale-90" : ""
        }`}
      />
      <div className="flex-1">
        <h3 className="text-[#E1004E] font-bold">{title}</h3>
        <p className="text-sm text-gray-700">{subtitle}</p>
        {tingkat && (
          <div className="mt-2 flex gap-2">
            {["Ringan", "Sedang", "Berat"].map((level) => (
              <button
                key={level}
                className={`px-3 py-1 rounded-full text-sm font-semibold border ${
                  tingkat === level
                    ? "bg-[#E1004E] text-white"
                    : "bg-[#FFE5EC] text-[#E1004E]"
                }`}
                onClick={() =>
                  navigate("/hasilsadari", {
                    state: {
                      ...result,
                      [title.toLowerCase()]: { ada: true, tingkat: level },
                      isFinal: false,
                    },
                  })
                }
              >
                {level}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#E1004E] text-white py-4 px-4 relative">
        <button
            onClick={() => {
            if (isFinal) {
                navigate("/home");
            } else {
                navigate(-1);
            }
            }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl"
        >
          &larr;
        </button>
        <h1 className="text-center text-xl font-semibold">30 September</h1>
      </div>

      <div className="p-6">
        {/* Title */}
        <h2 className="text-[#E1004E] font-bold text-lg mb-4 text-center">
          {isFinal ? "Catatan Gejala Payudara" : "Berikut gejala pada payudaramu"}
        </h2>

        {/* Gejala */}
        <div className="bg-white rounded-xl">
          <GejalaItem
            icon="/kemerahan.png"
            title="Kemerahan"
            subtitle={
              kemerahan.ada
                ? isFinal
                  ? `Terdapat kemerahan pada payudara dengan tingkat keparahan ${kemerahan.tingkat.toLowerCase()}.`
                  : "Terdapat kemerahan pada payudara."
                : "Tidak terdapat kemerahan pada payudara."
            }
            tingkat={kemerahan.ada && !isFinal ? kemerahan.tingkat : null}
          />

          <GejalaItem
            icon="/cairan.png"
            title="Cairan"
            subtitle={
              cairan.ada
                ? isFinal
                  ? `Terdapat cairan pada payudara dengan tingkat keparahan ${cairan.tingkat.toLowerCase()}.`
                  : "Terdapat cairan pada payudara."
                : "Tidak terdapat cairan apapun pada payudara."
            }
            tingkat={cairan.ada && !isFinal ? cairan.tingkat : null}
          />

          <GejalaItem
            icon="/benjolan.png"
            title="Benjolan"
            subtitle={
              benjolan.ada
                ? isFinal
                  ? `Terdapat benjolan pada payudara dengan tingkat keparahan ${benjolan.tingkat.toLowerCase()}.`
                  : "Terdapat benjolan pada payudara."
                : "Tidak terdapat benjolan pada payudara."
            }
            tingkat={benjolan.ada && !isFinal ? benjolan.tingkat : null}
          />
        </div>

        {isFinal && showWarning && (
        <p className="text-sm text-red-600 mt-6">
            {`Gejala ${
            kemerahan.ada && kemerahan.tingkat !== "Ringan" ? "kemerahan" : ""
            }${
            benjolan.ada && benjolan.tingkat !== "Ringan"
                ? kemerahan.ada && kemerahan.tingkat !== "Ringan"
                ? " dan benjolan"
                : "benjolan"
                : ""
            }${
            cairan.ada &&
            cairan.tingkat !== "Ringan" ||
            cairan.tingkat.toLowerCase() !== "asi"
                ? `${
                    (kemerahan.ada && kemerahan.tingkat !== "Ringan") ||
                    (benjolan.ada && benjolan.tingkat !== "Ringan")
                    ? " serta cairan"
                    : "cairan"
                }`
                : ""
            } menunjukkan tingkat keparahan yang perlu diperhatikan. Harap segera berkonsultasi ke dokter.`}
        </p>
        )}


        {/* Button */}
        <button
          onClick={() => {
            if (isFinal) {
              navigate("/sadari");
            } else {
              navigate("/hasilsadari", {
                state: { ...result, isFinal: true },
              });
            }
          }}
          className="mt-6 bg-[#E1004E] text-white font-semibold w-full py-3 rounded-full"
        >
          {isFinal ? "Catat Ulang Gejala" : "Konfirmasi"}
        </button>
      </div>
    </div>
  );
};

export { HasilSadari };
