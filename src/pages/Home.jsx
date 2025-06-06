import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import Header from "../components/header/header";
import CekSadari from "../components/calendar/ceksadari";
import { InformationCard } from "../components/card/info-card";

export const Home = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const navigate = useNavigate(); 

  const handleEditTanggal = () => {
    navigate("/edittanggal"); 
  };

  const handleLakukanSadari = () => {
    navigate("/sadari"); 
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
      <Header />
      <CekSadari
        onEditTanggal={handleEditTanggal}
        onLakukanSadari={handleLakukanSadari}
      />
      <div className="px-4 mt-8 mb-12 flex flex-wrap gap-4 justify-center">
        <InformationCard
          img="/cover-article.jpg"
          title="Judul Informasi 1"
        />
        <InformationCard
          img="/cover-article.jpg"
          title="Judul Informasi 2"
        />
      </div>
    </div>
  );
};
