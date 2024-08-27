import React, { useState, useEffect } from "react";

// Replace this URL with your actual API endpoint
const API_URL = "https://dummyjson.com/posts";
import ReactGA from "react-ga4";
const Feed = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Feed",
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${API_URL}?limit=10&skip=${page}&delay=2000`
        );
        const data = await response.json();
        const posts = data.posts;
        console.log("🚀 ~ fetchPosts ~ posts:", posts);

        if (posts.length > 0) {
          setPosts((prevPosts) => [...prevPosts, ...posts]);
        } else {
          setHasMore(false); // No more posts to load
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  const loadMorePosts = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 10);
    }
  };

  return (
    <div className="p-6 bg-base">
      <div className="max-w-4xl mx-auto space-y-4">
        {posts.map((post, index) => (
          <article key={index} className="card glass rounded-xl">
            <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
              <a href="#" className="block shrink-0">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  className="object-cover rounded-lg size-14"
                />
              </a>

              <div>
                <h3 className="font-medium sm:text-lg">
                  <a href="#" className="hover:underline">
                    {" "}
                    {post.title}{" "}
                  </a>
                </h3>

                <p className="text-sm line-clamp-2">{post.body}</p>

                <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                  <div className="flex items-center gap-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                    <p className="text-xs">{post.reactions.likes} Likes</p> |{" "}
                    <p className="text-xs">
                      {post.reactions.dislikes} Dislikes
                    </p>{" "}
                    | <p className="text-xs">{post.views} Views</p>
                  </div>

                  <span className="hidden sm:block" aria-hidden="true">
                    &middot;
                  </span>

                  <p className="hidden sm:block sm:text-xs ">
                    Posted by
                    <a href="#" className="font-medium underline ">
                      {" "}
                      John{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end hidden">
              <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>

                <span className="text-[10px] font-medium sm:text-xs ">
                  Solved!
                </span>
              </strong>
            </div>
          </article>
          // <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg">
          //   <div className="flex items-center p-4 border-b border-gray-200">
          //     <img src={post.avatar || 'https://via.placeholder.com/48'} alt="User Avatar" className="object-cover w-12 h-12 rounded-full" />
          //     <div className="ml-4">
          //       <div className="flex items-center justify-between">
          //         <span className="text-lg font-semibold">{post.title}</span>
          //         <span className="text-sm text-gray-500">{post.timeAgo}</span>
          //       </div>
          //       <p className="mt-2 text-gray-700">{post.body}</p>
          //     </div>
          //   </div>
          //   <div className="p-4 border-t border-gray-200">
          //     <div className="flex items-center mb-2 space-x-6 text-sm text-gray-600">
          //       <span className="flex items-center space-x-1">
          //         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7" />
          //         </svg>
          //         <span>{post.reactions.likes} Likes</span>
          //       </span>
          //       <span className="flex items-center space-x-1">
          //         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 12h2m-1-1v2m-2-2a1 1 0 00-1 1v1a1 1 0 001 1h1v2h-2v-2m0-2h-2v2h2v-1a1 1 0 011-1h2v-2h-2v1a1 1 0 00-1 1v1h2v-2h-2z" />
          //         </svg>
          //         <span>{post.reactions.dislikes} Dislikes</span>
          //       </span>
          //       <span className="flex items-center space-x-1">
          //         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6H2v2h2V6zM4 11H2v2h2v-2zM4 16H2v2h2v-2zM4 21H2v2h2v-2zM7 6H5v2h2V6zM7 11H5v2h2v-2zM7 16H5v2h2v-2zM7 21H5v2h2v-2zM10 6H8v2h2V6zM10 11H8v2h2v-2zM10 16H8v2h2v-2zM10 21H8v2h2v-2zM13 6h-2v2h2V6zM13 11h-2v2h2v-2zM13 16h-2v2h2v-2zM13 21h-2v2h2v-2zM16 6h-2v2h2V6zM16 11h-2v2h2v-2zM16 16h-2v2h2v-2zM16 21h-2v2h2v-2zM19 6h-2v2h2V6zM19 11h-2v2h2v-2zM19 16h-2v2h2v-2zM19 21h-2v2h2v-2z" />
          //         </svg>
          //         <span>{post.views} Views</span>
          //       </span>
          //     </div>
          //     <div className="flex pt-2 space-x-4 border-t border-gray-200">
          //       <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-700">
          //         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7" />
          //         </svg>
          //         <span>Like</span>
          //       </button>
          //       <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-700">
          //         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18" />
          //         </svg>
          //         <span>Comment</span>
          //       </button>
          //       <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-700">
          //         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7" />
          //         </svg>
          //         <span>Share</span>
          //       </button>
          //     </div>
          //   </div>
          // </div>
        ))}
        {loading && (
          <p className="text-center text-gray-600">
            <span className="loading loading-dots loading-lg"></span>
          </p>
        )}
        {!hasMore && (
          <p className="text-center text-gray-600">No more posts to load.</p>
        )}
        {hasMore && !loading && (
          <div className="mt-4 text-center">
            <button
              onClick={loadMorePosts}
              className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
