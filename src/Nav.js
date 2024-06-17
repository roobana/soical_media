import React from "react";
import { Link } from "react-router-dom";
// object destructuring in the function parameter,Nav component expects two props
const Nav = ({ search, setSearch }) => {
  return (
    <>
      <nav className="navigation">
        {/* e.preventDefault is used to prevent the default form submission */}
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
          <label className="searchLabel">search post</label>
          <input
            className="searchInput"
            type="text "
            placeholder="Search for the post"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
        <ul className="unOrderList">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/About"> About </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
