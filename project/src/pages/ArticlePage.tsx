import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ArticleContent from '../components/article/ArticleContent';
import CommentSection from '../components/article/CommentSection';
import RelatedArticles from '../components/article/RelatedArticles';
import { articles, comments } from '../data/mockData';
import { Article, Comment } from '../types';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [articleComments, setArticleComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate data loading
    setIsLoading(true);
    
    setTimeout(() => {
      // Find article by slug
      const foundArticle = articles.find(a => a.slug === slug);
      
      if (foundArticle) {
        setArticle(foundArticle);
        
        // Get comments for this article
        const filteredComments = comments.filter(c => c.articleId === foundArticle.id);
        setArticleComments(filteredComments);
        
        // Update document title
        document.title = `${foundArticle.title} | TechPlus`;
      } else {
        // Article not found, redirect to 404 or news page
        navigate('/news');
      }
      
      setIsLoading(false);
    }, 300);
    
    // Cleanup
    return () => {
      document.title = 'TechPlus';
    };
  }, [slug, navigate]);
  
  // Get related articles (same category or tags)
  const getRelatedArticles = () => {
    if (!article) return [];
    
    return articles
      .filter(a => 
        a.id !== article.id && 
        (a.category.id === article.category.id || 
         a.tags.some(tag => article.tags.some(t => t.id === tag.id)))
      )
      .slice(0, 3);
  };
  
  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse max-w-4xl mx-auto">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-8"></div>
            <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <ArticleContent article={article} />
        <CommentSection comments={articleComments} articleId={article.id} />
        <RelatedArticles 
          articles={getRelatedArticles()} 
          currentArticleId={article.id} 
        />
      </div>
    </Layout>
  );
};

export default ArticlePage;