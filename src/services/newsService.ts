const API_KEY = process.env.REACT_APP_GNEWS_API_KEY;
const BASE_URL = 'https://gnews.io/api/v4/search';

export interface Article {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  source: { name: string; url: string };
  content: string;
}

const topics = [
  'technology',
  'car',
  'finance economy',
  'science',
  'business'
];

export async function fetchDailyArticles(): Promise<{ articles: Article[], topic: string }> {
  const topic = topics[Math.floor(Math.random() * topics.length)];
  const url = `${BASE_URL}?q=${encodeURIComponent(topic)}&lang=en&max=10&token=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  const short = (data.articles || []).filter((a: Article) => a.description && a.description.length < 600);

  // Remove duplicates by title (case-insensitive, trimmed)
  const seenTitles = new Set<string>();
  const unique = short.filter((article: Article) => {
    const normalized = article.title.trim().toLowerCase();
    if (seenTitles.has(normalized)) return false;
    seenTitles.add(normalized);
    return true;
  });

  // Pick up to 3 random unique short articles
  const shuffled = unique.sort(() => 0.5 - Math.random());
  return { articles: shuffled.slice(0, 3), topic };
} 