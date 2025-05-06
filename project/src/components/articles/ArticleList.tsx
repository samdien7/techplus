import React from 'react';
import { Article } from '../../types';
import ArticleCard from './ArticleCard';

interface ArticleListProps {
  articles: Article[];
  title?: string;
  columns?: 1 | 2 | 3 | 4;
}

const ArticleList: React.FC<ArticleListProps> = ({ 
  articles, 
  title, 
  columns = 3 
}) => {
  if (!articles.length) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-500 dark:text-gray-400">No articles found</p>
      </div>
    );
  }

  // Determine grid columns based on prop
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }[columns];

  return (
    <section className="container mx-auto px-4 py-8">
      {title && (
        <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">
          {title}
        </h2>
      )}
      
      <div className={`grid ${gridCols} gap-6`}>
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default ArticleList;