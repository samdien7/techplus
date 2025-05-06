import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types';
import ArticleCard from './ArticleCard';
import { ArrowRight } from 'lucide-react';

interface FeaturedArticlesProps {
  articles: Article[];
}

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({ articles }) => {
  if (!articles.length) return null;

  // Get up to 6 featured articles
  const featuredArticles = articles.slice(0, 6);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold border-l-4 border-blue-500 pl-4">
          Featured Articles
        </h2>
        <Link 
          to="/news" 
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          View All Tech News
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;