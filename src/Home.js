import React from "react";
import Feed from "./Feed";
const Home = ({ posts }) => {
  return (
    <main>
      {posts.length ? <Feed posts={posts} /> : <p>No Post to display</p>}
    </main>
  );
};
export default Home;
