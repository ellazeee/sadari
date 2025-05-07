import React from "react";

export const InformationCard = ({ img, title }) => {
  return (
    <button className="focus:outline-none bg-white border rounded-lg shadow-md p-4 flex items-center gap-4 w-56">
        <figure className="flex-shrink-0">
          <img
            src={img}
            alt={title}
            className="rounded-lg w-16 h-20 object-cover"
          />
        </figure>
        <h3 className="text-start font-semibold text-base flex-1 line-clamp-3 whitespace-normal break-words">
          {title}</h3>
    </button>
  );
};