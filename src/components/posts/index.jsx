import React from "react";
import PostCard from "./postcard";
import { Title, Wrapper } from "./style";

const Posts = ({ blogs }) => {
  return (
    <Wrapper>
      <Title>
        <h1>Blogs</h1>
      </Title>
      {blogs.map((item) => (
        <PostCard key={item.blog_id} item={item} />
      ))}
    </Wrapper>
  );
};

export default Posts;
