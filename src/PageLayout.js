import React from "react";
import { Link, Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/postPage/1">Post 1</Link>
        </li>
        <li>
          <Link to="/postPage/2">Post 2</Link>
        </li>
        <li>
          <Link to="/postPage/3">Post 3</Link>
        </li>
        <li>
          <Link to="/newpost">NewPost</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default PageLayout;
