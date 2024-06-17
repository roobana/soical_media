import React from "react";
import { Link } from "react-router-dom";
// the props is from feed
const post = ({ post }) => {
  return (
    <div className="postClass">
      <Link to={`post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="postsDate">{post.datetime}</p>
      </Link>
      <p className="postBody">
        {post.body.length > 25 ? `${post.body.slice(0, 25)}...` : post.body}
      </p>
    </div>
  );
};

export default post;
