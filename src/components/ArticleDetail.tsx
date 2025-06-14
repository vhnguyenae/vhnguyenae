import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Article } from '../services/newsService';
import './ArticleDetail.css';

const ArticleDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article: Article | undefined = location.state?.article;

  if (!article) {
    return (
      <div className="article-detail-container">
        <p>Article not found.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="article-detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>&larr; Back</button>
      <h1 className="article-title">{article.title}</h1>
      {article.image && <img src={article.image} alt={article.title} className="article-image" />}
      <div className="article-meta">
        <span>{article.source?.name}</span> | <span>{new Date(article.publishedAt).toLocaleString()}</span>
      </div>
      <p className="article-desc">{article.description}</p>
      <a className="article-link" href={article.url} target="_blank" rel="noopener noreferrer">
        Read full article on original site
      </a>
    </div>
  );
};

export default ArticleDetail; 