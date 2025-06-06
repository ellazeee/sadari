import React from "react";
import { useNavigate } from "react-router";

export const AddArticle = () => {
  const navigate = useNavigate();

const handleAddArticle = () => { navigate("/inputarticle"); }; // ke halaman input data article

  return (
    <div class="flex mb-1 justify-between">
        <h2 class="font-bold mb-2 my-auto text-xl text-gray-800">
          ARTICLES</h2>
        <button
        onClick={handleAddArticle} 
        class="text-gray-800 text-4xl py-2 px-2 rounded">
          +</button>
    </div>
  );
};