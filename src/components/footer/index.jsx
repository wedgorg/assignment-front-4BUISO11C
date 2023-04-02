import React from "react";
import { BiNews } from "react-icons/bi";
import {
  BsArrowRight,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

import { Wrapper } from "./style";

const Footer = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <BiNews /> NewsBlog
        </li>
        <li>2023. All Rights Reserved</li>
        <li>
          Designed by <span>me</span>
        </li>
      </ul>

      <ul>
        <li>
          <h1>Categories</h1>
        </li>
        <li>
          <BsArrowRight />
          Beauty
        </li>
        <li>
          <BsArrowRight />
          Fashion and Style
        </li>
        <li>
          <BsArrowRight />
          Lifestyle
        </li>
      </ul>

      <ul>
        <li>
          <h1>Social Media</h1>
        </li>
        <li>
          <BsFacebook /> Facebook
        </li>
        <li>
          <BsLinkedin />
          LinkedIn
        </li>
        <li>
          <BsInstagram /> Instagram
        </li>
        <li>
          <BsTwitter /> Twitter
        </li>
      </ul>
    </Wrapper>
  );
};

export default Footer;
