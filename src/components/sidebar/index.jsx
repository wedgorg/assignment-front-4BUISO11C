import React from "react";
import { Wrapper } from "./style";
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";

const Sidebar = () => {
  return (
    <Wrapper>
      <h1>CATEGORIES</h1>
      <ul>
        <li>life</li>
        <li>style</li>
        <li>tech</li>
        <li>music</li>
        <li>sport</li>
      </ul>

      <h1>ABOUT ME</h1>
      <ul>
        <li>
          <BsTelegram />
        </li>
        <li>
          <BsFacebook />
        </li>
        <li>
          <BsInstagram />
        </li>
        <li>
          <BsTwitter />
        </li>
      </ul>
    </Wrapper>
  );
};

export default Sidebar;
