import React from "react";
import { Link } from "react-router-dom";
const NewPost = ({
  newPostTitle,
  setNewPostTitle,
  newPostBody,
  setNewPostBody,
  handleSubmit,
}) => {
  return (
    <div className="newPost">
      <form className="newPostForm" onSubmit={handleSubmit}>
        {/* // {(e) => e.defaultPrevented()} */}
        <label htmlFor="newPostTitleLabel">Post Title</label>
        <input
          type="text"
          className="newPostText"
          placeholder="please Enter the title"
          required
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
        <label htmlFor="newPostTextareaLabel">Post</label>
        <textarea
          className="newPostTextarea"
          placeholder="Please Enter the text"
          required
          value={newPostBody}
          onChange={(e) => setNewPostBody(e.target.value)}
        ></textarea>
        <button className="newPostButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default NewPost;
