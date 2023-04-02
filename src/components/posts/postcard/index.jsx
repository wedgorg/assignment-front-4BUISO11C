import React from "react";
import moment from "moment/moment";
import { Link } from "react-router-dom";

import { Card, Details } from "./style";

const PostCard = ({ item }) => {
  return (
    <Card>
      <Link to={`/post/${item.blog_id}`}>
        <img src={item.media} alt="loading..." />
      </Link>
      <Details>
        <button>{item.category}</button>

        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <span>created: {moment(item.created_at).format("DD/MM/YYYY")}</span>
      </Details>
    </Card>
  );
};

export default PostCard;
