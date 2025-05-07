import React, { useState, useRef } from "react";
import { Navbar } from "../components/navbar/navbar";
import { InformationCard } from "../components/card/info-card";
import { VideoCard } from "../components/card/video-card";

export const Browser = () => {
  const [information] = useState([
    { id: 1, 
        img: "/cover-article.jpg", 
        title: "Apa Itu Sadari?" },
    { id: 2, 
        img: "/cover-article.jpg", 
        title: "Cara Menerapkan Hidup Sehat" },
    { id: 3, 
        img: "/cover-article.jpg", 
        title: "Judul 3" },
    { id: 4, 
        img: "/cover-article.jpg", 
        title: "Judul 4" },
    { id: 5, 
        img: "/cover-article.jpg", 
        title: "Judul 5" },
  ]);

  const [video] = useState([
    { id: 1,
      video: "/video-sadari-1.mp4"
    },
    { id: 2,
      video: "/video-sadari-1.mp4"
    },
    { id: 3,
      video: "/video-sadari-1.mp4"
    },
    { id: 4,
      video: "/video-sadari-1.mp4"
    }
  ]);

  const containerRefInfo = useRef(null);
  const containerRefVid = useRef(null);

  const scrollAmount = 200;

  const scrollLeftInfo = () => {
    if (containerRefInfo.current) {
      containerRefInfo.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
      });
    }
  };
  
  const scrollRightInfo = () => {
    if (containerRefInfo.current) {
      containerRefInfo.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };
  
  const scrollLeftVid = () => {
    if (containerRefVid.current) {
      containerRefVid.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const scrollRightVid = () => {
    if (containerRefVid.current) {
      containerRefVid.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="browser">
      <Navbar />

      <div className="article">
        <h1 className="mb-5 mt-10 font-bold text-center text-2xl">
          All About Breast Cancer
        </h1>
        <div className="w-3/4 m-auto mt-4 relative">
          <button
            onClick={scrollLeftInfo}
            aria-label="Scroll Left"
            className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10"
            style={{ userSelect: "none" }}
          >
            <span className="text-pink-600 text-2xl">&#8592;</span>
          </button>

          <div
            ref={containerRefInfo}
            className="flex overflow-hidden space-x-4 scroll-smooth"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {information.map((info) => (
              <div key={info.id} className="flex-shrink-0 w-56 snap-center">
                <InformationCard 
                img={info.img} 
                title={info.title} />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRightInfo}
            aria-label="Scroll Right"
            className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10"
            style={{ userSelect: "none" }}
          >
            <span className="text-pink-600 text-2xl">&#8594;</span>
          </button>
        </div>
      </div>

      <div className="video">
        <h1 className="mb-5 mt-16 text-center font-bold text-2xl">
          Healthy Tips
        </h1>
        <div className="w-3/4 m-auto mt-4 relative">
          <button
            onClick={scrollLeftVid}
            aria-label="Scroll Left"
            className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10"
            style={{ userSelect: "none" }}
          >
            <span className="text-pink-600 text-2xl">&#8592;</span>
          </button>

          <div
            ref={containerRefVid}
            className="flex overflow-hidden space-x-4 scroll-smooth"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {video.map((vid) => (
              <div key={vid.id} className="flex-shrink-0 w-64 snap-center">
                <VideoCard 
                video={vid.video} />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRightVid}
            aria-label="Scroll Right"
            className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 shadow-md z-10"
            style={{ userSelect: "none" }}
          >
            <span className="text-pink-600 text-2xl">&#8594;</span>
          </button>
        </div>
      </div>

    </div>
  );
};
