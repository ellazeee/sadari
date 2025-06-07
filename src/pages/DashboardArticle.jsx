import React, { useState, useEffect } from "react";
import { ArticleCard } from "../components/card/article-card.jsx";
import { AddArticle } from "../components/header/add-article.jsx";
import { Sidebar } from "../components/sidebar/sidebar-container.jsx";
import { useNavigate } from "react-router-dom";

export const DashboardArticle = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Data dummy
    const dummyArticles = [
      {
        id: 1,
        title: "Manfaat SADARI untuk Deteksi Dini Kanker Payudara",
        img: "cover-article.jpg",
      },
      {
        id: 2,
        title: "Pentingnya Pemeriksaan Rutin",
        img: "cover-article.jpg",
      },
      {
        id: 3,
        title: "Mengenali Gejala Kanker Payudara",
        img: "cover-article.jpg",
      },
      {
        id: 4,
        title: "Gaya Hidup Sehat untuk Mencegah Kanker",
        img: "cover-article.jpg",
      },
    ];

    setArticles(dummyArticles);
  }, []);

  const handleDeleteArticle = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
      setArticles((prev) => prev.filter((article) => article.id !== id));
    }
  };

  const handleEditArticle = (id) => {
    navigate(`/inputarticle`);
  };

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex-grow ml-60 p-5">
        <AddArticle />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
              img={article.img}
              onDelete={() => handleDeleteArticle(article.id)}
              onEdit={() => handleEditArticle(article.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
