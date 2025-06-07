import React from "react";

export const ArticleCard = ({ title, img, description, onDelete, onEdit }) => {
  return (
    <div className= "bg-white border rounded-lg shadow-md p-4">
      <figure>
        <img
          src={img}
          alt="Article"
          className="rounded-lg mb-2 w-full h-20 object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="text-start font-semibold text-xl text-ellipsis line-clamp-2 mb-1">
            {title}</h3>
        <p className="text-start text-gray-700 text-xs line-clamp-3">
            {description}</p>
        <div className="flex justify-end mt-2 gap-2">
          <button onClick={onEdit} 
          className="bg-pink-600 text-white text-xs py-1 px-4 rounded">
            Edit
          </button>
          <button onClick={onDelete} 
            className="bg-red-600 text-white text-xs py-1 px-2 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};