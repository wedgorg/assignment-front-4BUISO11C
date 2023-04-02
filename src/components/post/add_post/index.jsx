import { createBlog } from "api/blogApi";
import Layout from "components/layout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddCard, Wrapper } from "./style";

const AddPost = () => {
  const [details, setDetails] = useState({
    title: "",
    description: "",
    media: "",
    category: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await createBlog(details);
      if (res.status === 201) {
        toast.success(res.data.message);
        setDetails(details);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Layout>
      <Wrapper>
        <AddCard>
          <h1>Create a Blog</h1>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={details.title}
            placeholder="blog title"
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            type="text"
            name="description"
            value={details.description}
            placeholder="blog description"
            onChange={handleChange}
          />
          <label htmlFor="media">Picture Url</label>
          <input
            id="media"
            type="url"
            name="media"
            value={details.media}
            placeholder="https://example.com"
            onChange={handleChange}
          />
          <label htmlFor="category">Category</label>
          <input
            id="category"
            type="text"
            name="category"
            value={details.category}
            placeholder="blog category"
            onChange={handleChange}
          />
          <button onClick={handleClick}>Add Post</button>
        </AddCard>
      </Wrapper>

      <ToastContainer />
    </Layout>
  );
};

export default AddPost;
