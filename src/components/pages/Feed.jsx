import React, { useState, useEffect } from 'react';

// Replace this URL with your actual API endpoint
const API_URL = 'https://dummyjson.com/posts';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}?page=${page}&limit=10`);
        const data = await response.json();
        const posts = data.posts;
        console.log("🚀 ~ fetchPosts ~ posts:", posts);
        
        if (posts.length > 0) {
          setPosts(prevPosts => [...prevPosts, ...posts]);
        } else {
          setHasMore(false); // No more posts to load
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  const loadMorePosts = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center p-4 border-b border-gray-200">
              <img src={post.avatar || 'https://via.placeholder.com/48'} alt="User Avatar" className="w-12 h-12 rounded-full object-cover" />
              <div className="ml-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg">{post.title}</span>
                  <span className="text-gray-500 text-sm">{post.timeAgo}</span>
                </div>
                <p className="text-gray-700 mt-2">{post.body}</p>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-6 text-gray-600 text-sm mb-2">
                <span className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7" />
                  </svg>
                  <span>{post.reactions.likes} Likes</span>
                </span>
                <span className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 12h2m-1-1v2m-2-2a1 1 0 00-1 1v1a1 1 0 001 1h1v2h-2v-2m0-2h-2v2h2v-1a1 1 0 011-1h2v-2h-2v1a1 1 0 00-1 1v1h2v-2h-2z" />
                  </svg>
                  <span>{post.reactions.dislikes} Dislikes</span>
                </span>
                <span className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6H2v2h2V6zM4 11H2v2h2v-2zM4 16H2v2h2v-2zM4 21H2v2h2v-2zM7 6H5v2h2V6zM7 11H5v2h2v-2zM7 16H5v2h2v-2zM7 21H5v2h2v-2zM10 6H8v2h2V6zM10 11H8v2h2v-2zM10 16H8v2h2v-2zM10 21H8v2h2v-2zM13 6h-2v2h2V6zM13 11h-2v2h2v-2zM13 16h-2v2h2v-2zM13 21h-2v2h2v-2zM16 6h-2v2h2V6zM16 11h-2v2h2v-2zM16 16h-2v2h2v-2zM16 21h-2v2h2v-2zM19 6h-2v2h2V6zM19 11h-2v2h2v-2zM19 16h-2v2h2v-2zM19 21h-2v2h2v-2z" />
                  </svg>
                  <span>{post.views} Views</span>
                </span>
              </div>
              <div className="flex space-x-4 border-t pt-2 border-gray-200">
                <button className="text-blue-500 hover:text-blue-700 flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7" />
                  </svg>
                  <span>Like</span>
                </button>
                <button className="text-blue-500 hover:text-blue-700 flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18" />
                  </svg>
                  <span>Comment</span>
                </button>
                <button className="text-blue-500 hover:text-blue-700 flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7" />
                  </svg>
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
        {loading && <p className="text-center text-gray-600">Loading more posts...</p>}
        {!hasMore && <p className="text-center text-gray-600">No more posts to load.</p>}
        {hasMore && !loading && (
          <div className="text-center mt-4">
            <button onClick={loadMorePosts} className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
