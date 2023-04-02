import React from "react";
import SearchBlog from "components/search_blog";
import { Link } from "react-router-dom";

import { NavList, Wrapper } from "./style";

const Header = () => {
  return (
    <Wrapper>
      <NavList>
        <Link to="/">HOME</Link>
        <Link to="/">BLOGS</Link>
        <Link to="/create">ADD BLOG</Link>
        <Link to="/">CONTACT</Link>
      </NavList>

      <SearchBlog />
    </Wrapper>
  );
};

export default Header;
