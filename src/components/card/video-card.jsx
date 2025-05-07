import React from "react";

export const VideoCard = ({ video }) => {
  return (
    <video 
      src={video}
      type="video/mp4"
      className="rounded-xl w-64 h-36"
      controls
    >
    </video>
  );
};
