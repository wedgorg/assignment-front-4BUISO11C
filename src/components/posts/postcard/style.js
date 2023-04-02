import Colors from "components/colors";
import FONTS from "components/fonts";
import styled from "styled-components";

export const Card = styled.div`
  width: 360px;

  img {
    width: 100%;
    height: 240px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  box-sizing: border-box;
  gap: 8px;

  button {
    width: 100px;
    height: 22px;
    font-size: 10px;
    border-radius: 10px;
    border: none;
  }

  h1 {
    font-size: 22px;
    font-family: ${FONTS.headingFont};
    font-weight: 600;
    color: ${Colors.black};
    margin: 0;
  }

  p {
    font-size: 16px;
    font-family: ${FONTS.textFont};
    margin: 0;
  }

  span {
    font-size: 12px;
    font-weight: 300;
    text-align: end;
    margin: 0;
  }
`;
