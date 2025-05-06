import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types';
import { formatDate } from '../../utils/dateUtils';
import { TrendingUp } from 'lucide-react';

interface TrendingArticlesProps {
  articles: Article[];
}

const TrendingArticles: React.FC<TrendingArticlesProps> = ({ articles }) => {
  if (!articles.length) return null;

  return (
    <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <TrendingUp className="w-6 h-6 mr-2 text-blue-400" />
          <h2 className="text-2xl font-bold">Trending Now</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link 
              key={article.id}
              to={`/article/${article.slug}`}
              className="group flex items-start space-x-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 font-bold text-xl shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center text-sm text-gray-300">
                  <span>{article.category.name}</span>
                  <span className="mx-2">•</span>
                  <span>{formatDate(article.publishedAt)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingArticles;