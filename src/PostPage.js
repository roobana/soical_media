import React from "react";
import { Link, useParams } from "react-router-dom";
const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main>
      {/* conditional rendering */}
      {post && (
        <>
          <h2>{post.title}</h2>
          <p className="postsDate">{post.datetime}</p>
          <p className="postbody">{post.body}</p>
          <button onClick={() => handleDelete(post.id)}>Delete post</button>
          <Link to={`/edit/${post.id}`}>
            <button type="button" className="editPostButton">
              Edit
            </button>
          </Link>
        </>
      )}
      {!post && (
        <>
          <p>Sorry! post not found</p>
          <Link to="/">Visit to our homepage</Link>
        </>
      )}
    </main>
  );
};
export default PostPage;
