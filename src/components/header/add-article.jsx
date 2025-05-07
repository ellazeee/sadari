import React from "react";
import { useNavigate } from "react-router";

export const AddArticle = () => {
  const navigate = useNavigate();

const handleAddArticle = () => { navigate(""); }; // ke halaman input data article

  return (
    <div class="flex mb-1 justify-between">
        <h2 class="font-semibold mb-2 my-auto text-xl">
          ARTICLES</h2>
        <button
        onClick={handleAddArticle} 
        class="text-black text-4xl py-2 px-2 rounded">
          +</button>
    </div>
  );
};