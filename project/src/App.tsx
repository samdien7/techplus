import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeTheme } from './utils/themeUtils';

// Pages
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import ArticlePage from './pages/ArticlePage';
import ForYouPage from './pages/ForYouPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  // Initialize theme on first load
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
        <Route path="/for-you" element={<ForYouPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;