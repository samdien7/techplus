import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from '../../types';

interface PopularTagsProps {
  tags: Tag[];
}

const PopularTags: React.FC<PopularTagsProps> = ({ tags }) => {
  if (!tags.length) return null;

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">
        Popular Topics
      </h2>
      
      <div className="flex flex-wrap gap-3">
        {tags.map(tag => (
          <Link
            key={tag.id}
            to={`/news?tag=${tag.slug}`}
            className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-sm"
          >
            #{tag.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularTags;