import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import MagicPendulumPage from './components/MagicPendulumPage';
import EmojifyText from './components/EmojifyText';
import ArticleDetail from './components/ArticleDetail';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/emojify" element={<EmojifyText />} />
            <Route path="/magic-pendulum" element={<MagicPendulumPage />} />
            <Route path="/article/:title" element={<ArticleDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App; 