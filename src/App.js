import React, { useEffect, useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import { format } from "date-fns";
import { Routes, Route, useNavigate } from "react-router-dom";
import api from "./api/postaxios";
import EditPost from "./EditPost";
//  import Post from "./Post";
// import { Routes, Route, Link } from "react-router-dom";
// import PageLayout from "./PageLayout";
// // import { useState } from "react";

const App = () => {
  const [search, SetSearch] = useState("");
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [editPostTitle, setEditPostTitle] = useState("");
  const [editPostBody, setEditPostBody] = useState("");
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Await for the axios instance (api) to GET data from "/posts"
        // http://localhost:3500/posts.
        const response = await api.get("/posts");

        // Set the fetched posts data to the state using setPosts
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status); //Log the HTTP status code (e.g., 404, 500) returned by the server.
          console.log(err.response.headers); //response object property
        } else {
          console.log(`Error: ${err.message}`); // Log a general error message like network error
        }
      }
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const filterResults = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
      );
    });
    setSearchResult(filterResults.reverse());
  }, [posts, search]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), `MMMM dd, yyyy pp`);
    const newPost = { id, title: newPostTitle, datetime, body: newPostBody };
    try {
      const response = await api.post("/posts", newPost); //Use POST requests to send data to a server
      // const allPost = [...posts, newPost]; //old code
      const allPost = [...posts, response.data];
      setPosts(allPost);
      setNewPostTitle("");
      setNewPostBody("");
      navigate("/");
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status); //Log the HTTP status code (e.g., 404, 500) returned by the server.
        console.log(err.response.headers); //response object property
      } else {
        console.log(`Error: ${err.message}`); // Log a general error message like network error
      }
    }
  };
  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = {
      id,
      title: editPostTitle,
      datetime,
      body: editPostBody,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );

      setEditPostTitle("");
      setEditPostBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`); // Log a general error message like network error
    }
  };

  return (
    <>
      <Header title="Soical Media" />
      <Nav search={search} setSearch={SetSearch} />
      <Routes>
        <Route path="/" element={<Home posts={searchResult} />} />
        <Route path="post">
          <Route
            index
            element={
              <NewPost
                newPostTitle={newPostTitle}
                setNewPostTitle={setNewPostTitle}
                newPostBody={newPostBody}
                setNewPostBody={setNewPostBody}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path=":id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
        </Route>
        <Route
          path="/edit/:id"
          element={
            <EditPost
              editPostTitle={editPostTitle}
              setEditPostTitle={setEditPostTitle}
              editPostBody={editPostBody}
              setEditPostBody={setEditPostBody}
              handleEdit={handleEdit}
              posts={posts}
            />
          }
        />

        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;

{
  /* <ul>
<li>
  <Link to="/">Home</Link>
</li>
<li>
  <Link to="/About"> About </Link>
</li>

<li>
  <Link to="/postpage">Post Page</Link>
</li>
</ul>
; */
}

// <Routes>
// <Route path="/" element={<Home />} />
// <Route path="/about" element={<About />} />
// <Route path="/newpost" element={<NewPost />} />
// <Route path="/postpage" element={<PageLayout />}>
//   {/* <Route path="/postpage" element={<PostPage />} /> insted of this below line path is replaced with index */}
//   <Route index element={<PostPage />} />

//   {/* <Route path="/postPage/:id" element={<Post />} />   check below code */}

//   <Route path=":id" element={<Post />} />
//   {/* <Route path=":id/:name" element={<Post />} /> */}
//   {/*  <Route path="/postpage/newpost" element={<NewPost />} /> */}
//   <Route path="newpost" element={<NewPost />} />
// </Route>

// <Route path="*" element={<Missing />} />
// </Routes>
