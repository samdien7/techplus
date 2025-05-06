import React from 'react';
import { Category } from '../../types';

interface CategoryFiltersProps {
  categories: Category[];
  activeCategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
          }`}
          aria-pressed={activeCategory === null}
        >
          All Categories
        </button>
        
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.slug
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
            aria-pressed={activeCategory === category.slug}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilters;