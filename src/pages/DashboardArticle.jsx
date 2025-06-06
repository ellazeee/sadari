import React, { useState, useEffect } from "react";
import { ArticleCard } from "../components/card/article-card.jsx";
import { AddArticle } from "../components/header/add-article.jsx";
import { Sidebar } from "../components/sidebar/sidebar-container.jsx";

export const DashboardArticle = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(" "); // endpoint API
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchArticles();
  }, []);

  const handleDeleteArticle = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
      try {
        const response = await fetch(`/api/articles/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete article");
        }
        setArticles((prev) => prev.filter(article => article.id !== id));
      } catch (error) {
        console.error("error", error);
      }
    }
  };

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex-grow ml-60 p-5">
        <AddArticle />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
          {articles.map(article => (
            <ArticleCard 
              key={article.id} 
              title={article.title} 
              description={article.description}
              img={article.img}
              onDelete={() => handleDeleteArticle(article.id)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};