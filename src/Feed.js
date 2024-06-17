import React from "react";
import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
        // we wiil pass post={post} to post.js
      ))}
    </div>
  );
};

export default Feed;
