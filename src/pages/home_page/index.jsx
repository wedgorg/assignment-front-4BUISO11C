import React from "react";

import { Container, Image, Info, MainBlogCard, Wrapper } from "./style";
import Posts from "components/posts";
import Sidebar from "components/sidebar";
import { useFetch } from "components/useFetch";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const data = useFetch(`/blog/getAll`);

  return (
    <Wrapper>
      <MainBlogCard>
        <Info>
          <button>category</button>
          <h1>
            Create an Art That shows the beauty in everyone's ideas of flaws
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            dolorem voluptatum vitae, perferendis tempora praesentium incidunt
            officia iure adipisci eaque aspernatur, exercitationem ipsum numquam
            enim dolorum?
          </p>
        </Info>

        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbfkqI29JeyjrTL0B6mMhop9ILPcz0zvdBc4oorc88w&s" />
      </MainBlogCard>

      <Container>
        <Posts blogs={data} />
        <Sidebar />
      </Container>

      <ToastContainer />
    </Wrapper>
  );
};

export default Home;
