import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.toLocaleString("id-ID", { month: "long" });

  const navigate = useNavigate();

  // Buat 6 tanggal ke depan dari hari ini
  const dates = Array.from({ length: 6 }, (_, i) => {
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + i);
    return newDate.getDate(); // hanya angka tanggal
  });

  const handleClick = () => {
    navigate("/edittanggal");
  };

  return (
    <div className="text-center p-4 cursor-pointer" onClick={handleClick}>
      <p className="text-black font-bold mt-10">{todayDate} {todayMonth.charAt(0).toUpperCase() + todayMonth.slice(1)}</p>
      <div className="flex justify-center space-x-2 mt-5">
        {dates.map((date) => (
          <div
            key={date}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border 
              ${
                date === todayDate
                  ? "border-pink-500 border-dashed text-pink-700"
                  : "border-pink-500 text-pink-700"
              }`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
