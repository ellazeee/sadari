import React, { useState } from "react";
import { InputSearch } from "../components/header/input-search.jsx";
import { ArticleCard } from "../components/card/article-card.jsx";
import { AddArticle } from "../components/header/add-article.jsx";
import { Sidebar } from "../components/sidebar/sidebar-container.jsx";

export const DashboardArticle = () => {
  const [articles, setArticles] = useState([
    { id: 1,
      title: "Judul 1", 
      img: "/cover-article.jpg",
      description: "Deskripsi 1"
    },

    { id: 2, 
      title: "Judul 2", 
      img: "/cover-article.jpg",
      description: "Deskripsi 2"
    },

    { id: 3, 
      title: "Judul 3", 
      img: "/cover-article.jpg",
      description: "Deskripsi 3" 
    },
    { id: 4, 
      title: "Judul 4", 
      img: "/cover-article.jpg",
      description: "Deskripsi 4" 
    },
    { id: 5, 
      title: "Judul 5", 
      img: "/cover-article.jpg",
      description: "Deskripsi 5" 
    },
  ]);

  const handleDeleteArticle = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
      setArticles(articles.filter(article => article.id !== id));
    }
  };

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex-grow ml-60 p-4">
        <InputSearch />
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