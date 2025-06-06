import React, { useRef } from "react";
import { useNavigate } from "react-router";

export const InputSearch = () => {
  const ref = useRef();
  const navigation = useNavigate();

  const handleSearch = (event) => {
    const keyword = ref.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      navigation(`/browser/${keyword}`);
      ref.current.value = "";
    }
  };

  return (
    <>
      <div className="flex justify-end mb-5 mt-5">
        <div className="header relative">
          <input
            name="search"
            id="search-input"
            placeholder="Search here..."
            className="input p-2 h-8 w-56 text-sm pr-16 border rounded-md outline-none"
            ref={ref}
            onKeyDown={handleSearch}
            >
          </input>
          <button
              onClick={handleSearch}
              className="absolute bg-pink-400 text-white text-sm inset-y-0 right-0 items-center flex p-2 rounded-r-md"
              >Enter
          </button>
        </div>
      </div>
    </>
  );
};