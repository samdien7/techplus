import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import ArticleList from '../components/articles/ArticleList';
import { articles, tags } from '../data/mockData';
import { Article, Tag } from '../types';

const ForYouPage: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [recommendedArticles, setRecommendedArticles] = useState<Article[]>([]);
  
  // Effect to update recommended articles when selected tags change
  useEffect(() => {
    if (selectedTags.length === 0) {
      // If no tags selected, show random articles
      const shuffled = [...articles].sort(() => 0.5 - Math.random());
      setRecommendedArticles(shuffled.slice(0, 6));
    } else {
      // Filter articles by selected tags
      const filtered = articles.filter(article => 
        article.tags.some(tag => selectedTags.includes(tag.id))
      );
      
      // Sort by relevance (number of matching tags)
      filtered.sort((a, b) => {
        const aMatches = a.tags.filter(tag => selectedTags.includes(tag.id)).length;
        const bMatches = b.tags.filter(tag => selectedTags.includes(tag.id)).length;
        return bMatches - aMatches;
      });
      
      setRecommendedArticles(filtered);
    }
  }, [selectedTags]);
  
  const handleTagToggle = (tagId: string) => {
    setSelectedTags(prev => {
      if (prev.includes(tagId)) {
        return prev.filter(id => id !== tagId);
      } else {
        return [...prev, tagId];
      }
    });
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              For You
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Select your interests to see personalized article recommendations.
            </p>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Your Interests</h2>
              <div className="flex flex-wrap gap-3">
                {tags.map(tag => (
                  <TagButton
                    key={tag.id}
                    tag={tag}
                    isSelected={selectedTags.includes(tag.id)}
                    onToggle={() => handleTagToggle(tag.id)}
                  />
                ))}
              </div>
            </div>
          </header>
          
          {/* Recommended Articles */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              {selectedTags.length > 0 
                ? 'Recommended Articles' 
                : 'Discover Articles'}
            </h2>
            
            {recommendedArticles.length > 0 ? (
              <ArticleList articles={recommendedArticles} columns={3} />
            ) : (
              <div className="py-12 text-center">
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  No articles found matching your interests.
                </p>
                <button
                  onClick={() => setSelectedTags([])}
                  className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Reset Interests
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </Layout>
  );
};

interface TagButtonProps {
  tag: Tag;
  isSelected: boolean;
  onToggle: () => void;
}

const TagButton: React.FC<TagButtonProps> = ({ tag, isSelected, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        isSelected
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
      }`}
    >
      {tag.name}
    </button>
  );
};

export default ForYouPage;