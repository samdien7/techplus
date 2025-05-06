import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types';
import { formatDate } from '../../utils/dateUtils';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant = 'default' }) => {
  const { id, title, slug, excerpt, image, author, category, publishedAt } = article;
  
  if (variant === 'featured') {
    return (
      <div className="group overflow-hidden rounded-lg shadow-lg dark:shadow-gray-800/20 bg-white dark:bg-gray-900 transition-transform duration-300 hover:-translate-y-1">
        <Link to={`/article/${slug}`} className="block relative">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-600 mb-3">
                {category.name}
              </span>
              <h2 className="text-2xl font-bold leading-tight mb-2">{title}</h2>
              <div className="flex items-center text-sm">
                <img 
                  src={author.avatar} 
                  alt={author.name} 
                  className="h-8 w-8 rounded-full mr-2"
                />
                <span>{author.name}</span>
                <span className="mx-2">•</span>
                <span>{formatDate(publishedAt)}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="group flex items-start space-x-4 p-4 rounded-lg bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800/20 hover:shadow-md transition-shadow">
        <Link 
          to={`/article/${slug}`}
          className="shrink-0 w-24 h-24 rounded-md overflow-hidden"
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="flex-1 min-w-0">
          <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mb-1">
            <span className="font-medium text-blue-600 dark:text-blue-400">{category.name}</span>
            <span className="mx-2">•</span>
            <span>{formatDate(publishedAt)}</span>
          </div>
          <Link to={`/article/${slug}`}>
            <h3 className="text-base font-bold leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
          </Link>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="group overflow-hidden rounded-lg shadow-md dark:shadow-gray-800/20 bg-white dark:bg-gray-900 transition-transform duration-300 hover:-translate-y-1">
      <Link to={`/article/${slug}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white">
              {category.name}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {excerpt}
          </p>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
            <img 
              src={author.avatar} 
              alt={author.name} 
              className="h-6 w-6 rounded-full mr-2"
            />
            <span className="text-gray-800 dark:text-gray-300">{author.name}</span>
            <span className="mx-2">•</span>
            <span>{formatDate(publishedAt)}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;