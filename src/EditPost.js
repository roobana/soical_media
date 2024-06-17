import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditPost = ({
  editPostTitle,
  setEditPostTitle,
  editPostBody,
  setEditPostBody,
  handleEdit,
  posts,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  useEffect(() => {
    if (post) {
      setEditPostTitle(post.title);
      setEditPostBody(post.body);
    }
  }, [post, setEditPostTitle, setEditPostBody]);

  return (
    <main class="EditPostmain">
      {editPostTitle && (
        <>
          <h2>Edit Post</h2>
          <form className="editPostForm" onSubmit={(e) => e.preventDefault()}>
            <label>Title</label>
            <input
              type="text"
              value={editPostTitle}
              onChange={(e) => setEditPostTitle(e.target.value)}
            />
            <label>Post</label>
            <textarea
              id="editBody"
              value={editPostBody}
              onChange={(e) => setEditPostBody(e.target.value)}
            />
            <button
              type="submit"
              onClick={() => {
                handleEdit(post.id);
              }}
            >
              Submit
            </button>
          </form>
        </>
      )}
    </main>
  );
};
export default EditPost;
