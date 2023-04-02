import React from "react";
import { Route, Routes } from "react-router-dom";

import PostDetails from "components/post";
import AddPost from "components/post/add_post";
import Main from "pages/main";
import UpdatePost from "components/post/update_post";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/post/:id" element={<PostDetails />} />
      <Route path="/create" element={<AddPost />} />
      <Route path="/update/:id" element={<UpdatePost />} />
    </Routes>
  );
};

export default App;
