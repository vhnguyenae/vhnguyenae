import React, { useEffect, useState, useRef } from 'react';
import { fetchDailyArticles, Article } from '../services/newsService';
import './Home.css';

function formatTopic(topic: string): string {
  if (topic.toLowerCase().includes('finance')) return 'Finance';
  if (topic.toLowerCase().includes('car')) return 'Car';
  if (topic.toLowerCase().includes('tech')) return 'Technology';
  return topic.charAt(0).toUpperCase() + topic.slice(1);
}

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [topic, setTopic] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    fetchDailyArticles()
      .then(({ articles, topic }) => {
        setArticles(articles);
        setTopic(topic);
      })
      .catch(() => setError('Failed to load news.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="home-container">
      <h1 className="greeting">
        Hai say hi <span className="wave">👋</span>
      </h1>
      <div className="news-section">
        <h2 className="news-header">
          Today's Fresh Feeds{topic && ` about ${formatTopic(topic)}`}
        </h2>
        {loading && <div className="news-loading">Loading news...</div>}
        {error && <div className="news-error">{error}</div>}
        <div className="news-list">
          {articles.map((article, idx) => (
            <a
              className="news-card"
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.image && <img src={article.image} alt={article.title} className="news-image" />}
              <div className="news-content">
                <h3 className="news-title">{article.title}</h3>
                <p className="news-desc">{article.description}</p>
                <span className="news-source">{article.source?.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 