import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ArticleList from '../components/articles/ArticleList';
import SearchBar from '../components/news/SearchBar';
import CategoryFilters from '../components/news/CategoryFilters';
import { articles, categories } from '../data/mockData';
import { Article } from '../types';

const NewsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);
  
  // Get query parameters
  const categoryParam = searchParams.get('category');
  const tagParam = searchParams.get('tag');
  const searchParam = searchParams.get('search');
  
  useEffect(() => {
    let result = articles;
    
    // Filter by category if provided
    if (categoryParam) {
      result = result.filter(article => 
        article.category.slug === categoryParam
      );
    }
    
    // Filter by tag if provided
    if (tagParam) {
      result = result.filter(article => 
        article.tags.some(tag => tag.slug === tagParam)
      );
    }
    
    // Filter by search query if provided
    if (searchParam) {
      const search = searchParam.toLowerCase();
      result = result.filter(
        article => 
          article.title.toLowerCase().includes(search) ||
          article.excerpt.toLowerCase().includes(search) ||
          article.content.toLowerCase().includes(search)
      );
    }
    
    // Sort by most recent
    result = result.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    
    setFilteredArticles(result);
  }, [categoryParam, tagParam, searchParam]);
  
  const handleCategoryChange = (categorySlug: string | null) => {
    if (categorySlug) {
      searchParams.set('category', categorySlug);
      // Remove other filters
      searchParams.delete('tag');
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
  };
  
  const handleSearch = (query: string) => {
    if (query) {
      searchParams.set('search', query);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            {tagParam ? (
              <>Exploring <span className="text-blue-600 dark:text-blue-400">#{tagParam}</span></>
            ) : categoryParam ? (
              <>Latest in <span className="text-blue-600 dark:text-blue-400">{
                categories.find(c => c.slug === categoryParam)?.name || categoryParam
              }</span></>
            ) : searchParam ? (
              <>Search Results for <span className="text-blue-600 dark:text-blue-400">"{searchParam}"</span></>
            ) : (
              'Tech News'
            )}
          </h1>
          
          <SearchBar onSearch={handleSearch} initialQuery={searchParam || ''} />
          
          {!tagParam && !searchParam && (
            <CategoryFilters 
              categories={categories} 
              activeCategory={categoryParam} 
              onCategoryChange={handleCategoryChange} 
            />
          )}
          
          {filteredArticles.length > 0 ? (
            <ArticleList articles={filteredArticles} columns={3} />
          ) : (
            <div className="py-12 text-center">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchParams({});
                }}
                className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;