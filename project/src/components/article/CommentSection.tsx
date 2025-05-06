import React, { useState } from 'react';
import { Comment } from '../../types';
import { getRelativeTime } from '../../utils/dateUtils';

interface CommentSectionProps {
  comments: Comment[];
  articleId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments, articleId }) => {
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState('');
  const [localComments, setLocalComments] = useState<Comment[]>(comments);
  
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim() || !username.trim()) {
      return;
    }
    
    // Create a new comment
    const comment: Comment = {
      id: Date.now().toString(),
      articleId,
      author: username,
      content: newComment,
      publishedAt: new Date().toISOString(),
    };
    
    // Add to local comments
    setLocalComments([comment, ...localComments]);
    
    // Clear form
    setNewComment('');
  };
  
  return (
    <section className="max-w-4xl mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-6">Comments ({localComments.length})</h2>
      
      {/* Comment Form */}
      <div className="mb-8 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Leave a Comment</h3>
        <form onSubmit={handleSubmitComment}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium mb-1">
              Your Comment
            </label>
            <textarea
              id="comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Post Comment
          </button>
        </form>
      </div>
      
      {/* Comments List */}
      <div className="space-y-6">
        {localComments.length > 0 ? (
          localComments.map(comment => (
            <div 
              key={comment.id} 
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm"
            >
              <div className="flex justify-between mb-4">
                <h4 className="font-semibold">{comment.author}</h4>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {getRelativeTime(comment.publishedAt)}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </section>
  );
};

export default CommentSection;