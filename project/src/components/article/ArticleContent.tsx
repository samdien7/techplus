import React from 'react';
import { Twitter, Facebook, Linkedin, Share2 } from 'lucide-react';
import { Article } from '../../types';
import { formatDateTime } from '../../utils/dateUtils';

interface ArticleContentProps {
  article: Article;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  const { title, content, image, author, category, publishedAt, tags } = article;

  // Function to handle social sharing
  const handleShare = (platform: 'twitter' | 'facebook' | 'linkedin') => {
    const url = window.location.href;
    const text = `Check out this article: ${title}`;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 mb-4 font-medium">
          <span>{category.name}</span>
          {tags.length > 0 && (
            <>
              <span className="mx-2">•</span>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag.id} className="text-gray-600 dark:text-gray-400">
                    #{tag.name}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        
        <div className="flex items-center mb-6">
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {formatDateTime(publishedAt)}
            </p>
          </div>
        </div>
      </header>
      
      {/* Featured Image */}
      <div className="mb-8 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Article Content */}
      <div 
        className="prose dark:prose-invert prose-lg max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      
      {/* Author Bio */}
      <div className="border-t border-b border-gray-200 dark:border-gray-800 py-6 my-8">
        <div className="flex items-start space-x-4">
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="h-12 w-12 rounded-full"
          />
          <div>
            <p className="font-semibold text-lg mb-1">{author.name}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{author.bio}</p>
          </div>
        </div>
      </div>
      
      {/* Social Sharing */}
      <div className="flex items-center justify-between py-4">
        <p className="text-gray-600 dark:text-gray-400 text-sm">Share this article:</p>
        <div className="flex space-x-3">
          <button 
            onClick={() => handleShare('twitter')}
            className="p-2 rounded-full bg-gray-200 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label="Share on Twitter"
          >
            <Twitter className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button 
            onClick={() => handleShare('facebook')}
            className="p-2 rounded-full bg-gray-200 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label="Share on Facebook"
          >
            <Facebook className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button 
            onClick={() => handleShare('linkedin')}
            className="p-2 rounded-full bg-gray-200 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button 
            className="p-2 rounded-full bg-gray-200 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label="Copy link"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert('Link copied to clipboard!');
            }}
          >
            <Share2 className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleContent;