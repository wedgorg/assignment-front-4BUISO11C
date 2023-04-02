import styled from "styled-components";
import Colors from "components/colors";
import FONTS from "components/fonts";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const MainBlogCard = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  padding: 80px 100px;
  box-sizing: border-box;
  align-items: flex-end;
  gap: 30px;
  background-color: #fafafa;
  border-bottom: 1px solid ${Colors.gray};
`;

export const Info = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 500;
    font-family: ${FONTS.headingFont};
    font-size: 40px;
    margin: 0;
    color: ${Colors.black};
  }

  button {
    width: 100px;
    height: 22px;
    border-radius: 10px;
    color: #254d8a;
    outline: none;
    border: none;
    background-color: #d2e2fa;
  }

  p {
    font-size: 20px;
    font-family: ${FONTS.textFont};
    color: #454c54;
  }
`;

export const Image = styled.img`
  width: 320px;
  height: 360px;
  border-radius: 10px;
  object-fit: cover;
`;
