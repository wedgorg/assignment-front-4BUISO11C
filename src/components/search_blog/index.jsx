import React from "react";
import { SearchInput, Wrapper } from "./style";
import { FiSearch } from "react-icons/fi";

const SearchBlog = () => {
  return (
    <Wrapper>
      <SearchInput placeholder="search for blog..." />
      <FiSearch />
    </Wrapper>
  );
};

export default SearchBlog;
