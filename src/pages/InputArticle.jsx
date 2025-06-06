import React, { useState } from "react";
import { useNavigate } from "react-router";

export const InputArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!title || !description || !photo) {
      setMessage({ type: "error", text: "Please fill all fields and select a photo." });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("photo", photo);

      const response = await fetch("", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit article");
      }

      setMessage({ type: "success", text: "Article submitted successfully!" });
      setTitle("");
      setDescription("");
      setPhoto(null);
      e.target.reset(); 
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    }
  };

  const handleBack = () => { navigate("/dashboard"); };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-lg mt-10">
        <button
        onClick={handleBack} 
        class="text-gray-800 text-4xl">
        &#8592;</button>
      <h1 className="text-2xl text-center font-bold mb-4 text-gray-800">Input Article</h1>
      {message && (
        <div
          className={`mb-4 p-3 rounded ${
            message.type === "error" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
          }`}
        >
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <div>
          <label className="block font-semibold text-gray-700">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter article title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
            required
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">
            Description
          </label>
          <textarea
            placeholder="Enter article description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-pink-600"
            required
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">
            Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="block w-full text-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 font-semibold text-white rounded bg-pink-600 hover:bg-pink-200 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}