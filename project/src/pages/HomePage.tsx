import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import FeaturedArticles from '../components/articles/FeaturedArticles';
import TrendingArticles from '../components/articles/TrendingArticles';
import ArticleList from '../components/articles/ArticleList';
import PopularTags from '../components/home/PopularTags';
import NewsletterSection from '../components/home/NewsletterSection';
import { articles, tags } from '../data/mockData';

const HomePage: React.FC = () => {
  // Get featured articles
  const featuredArticles = articles.filter(article => article.featured);
  
  // Get trending articles
  const trendingArticles = articles.filter(article => article.trending);
  
  // Get latest articles (excluding featured ones)
  const latestArticles = articles
    .filter(article => !article.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 6);
  
  return (
    <Layout>
      <HeroSection />
      <FeaturedArticles articles={featuredArticles} />
      <TrendingArticles articles={trendingArticles} />
      <PopularTags tags={tags} />
      <ArticleList 
        articles={latestArticles} 
        title="Latest Articles" 
      />
      <NewsletterSection />
    </Layout>
  );
};

export default HomePage;