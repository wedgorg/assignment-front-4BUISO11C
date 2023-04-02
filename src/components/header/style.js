import Colors from "components/colors";
import FONTS from "components/fonts";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(30px);
  z-index: 1;
`;

export const NavList = styled.ul`
  height: 100%;
  margin: 0;
  display: flex;
  list-style-type: none;
  align-items: center;
  gap: 40px;

  li {
    font-family: ${FONTS.headingFont};
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${Colors.black};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;

  button {
    width: 90px;
    height: 30px;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: gray;
  }
`;
