import React from 'react';
import { Article } from '../../types';
import ArticleCard from '../articles/ArticleCard';

interface RelatedArticlesProps {
  articles: Article[];
  currentArticleId: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles, currentArticleId }) => {
  // Filter out the current article and limit to 3 related articles
  const filteredArticles = articles
    .filter(article => article.id !== currentArticleId)
    .slice(0, 3);
  
  if (filteredArticles.length === 0) return null;
  
  return (
    <section className="max-w-6xl mx-auto mt-12 px-4">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;