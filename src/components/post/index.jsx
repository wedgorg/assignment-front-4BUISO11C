import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Layout from "components/layout";
import {
  ButtonsWrapper,
  Card,
  DeleteButton,
  Details,
  IconButton,
  IconButtonWrapper,
  Wrapper,
} from "./style";
import api from "api/api";
import { useFetchSinglePost } from "components/useFetch/fetchSinglePost";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostDetails = () => {
  const { id } = useParams();
  const post = useFetchSinglePost(id);
  const navigate = useNavigate();

  const redicectToHome = () => {
    setTimeout(() => navigate("/"), 2000);
  };

  const handleDelete = async (id) => {
    return await api
      .delete(`/blog/delete/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
          redicectToHome();
        }
      })
      .catch((err) => toast.error("something went wrong!"));
  };

  return (
    <Layout>
      <Wrapper>
        <Card>
          <h1>{post.title}</h1>

          <img src={post.media} alt="loading..." />

          <Details>
            <ButtonsWrapper>
              <button>{post.category}</button>
              <IconButtonWrapper>
                <Link to={`/update/${post.blog_id}`}>
                  <IconButton>
                    <BiEdit />
                    edit
                  </IconButton>
                </Link>
                <DeleteButton onClick={() => handleDelete(post.blog_id)}>
                  <AiOutlineDelete />
                  delete
                </DeleteButton>
              </IconButtonWrapper>
            </ButtonsWrapper>
            <p>{post.description}</p>
            <span>created: {post.created_at}</span>
          </Details>
        </Card>
      </Wrapper>

      <ToastContainer />
    </Layout>
  );
};

export default PostDetails;
