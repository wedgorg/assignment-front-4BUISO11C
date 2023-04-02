import React, { useEffect, useState } from "react";

import Layout from "components/layout";
import { AddCard, Wrapper } from "../add_post/style";
import { useParams } from "react-router-dom";
import { getBlog, updateBlog } from "api/blogApi";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const initialState = {
  title: "",
  description: "",
  media: "",
  category: "",
};

const UpdatePost = () => {
  const [details, setDetails] = useState(initialState);
  const { title, description, media, category } = details;
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSinglePost(id);
    }
  }, [id]);

  const getSinglePost = async (ID) => {
    const res = await getBlog(ID);
    if (res.status === 200) {
      setDetails({ ...res.data.blog });
    }
  };

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const res = await updateBlog(id, details);
        if (res.status === 200) {
          toast.success(res.data.message);
          console.log(res);
        }
      }
    } catch (error) {
      toast.error("something went wrong!");
    }
  };

  return (
    <Layout>
      <Wrapper>
        <AddCard onSubmit={handleSubmit}>
          <h1>Update Blog</h1>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            placeholder="blog title"
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            type="text"
            name="description"
            value={description}
            placeholder="blog description"
            onChange={handleChange}
          />
          <label htmlFor="media">Picture Url</label>
          <input
            id="media"
            type="text"
            name="media"
            value={media}
            placeholder="blog media url"
            onChange={handleChange}
          />
          <label htmlFor="category">Category</label>
          <input
            id="category"
            type="text"
            name="category"
            value={category}
            placeholder="blog category"
            onChange={handleChange}
          />
          <button type="submit">Save changes</button>
        </AddCard>
      </Wrapper>

      <ToastContainer />
    </Layout>
  );
};

export default UpdatePost;
