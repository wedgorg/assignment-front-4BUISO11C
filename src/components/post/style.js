import Colors from "components/colors";
import FONTS from "components/fonts";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 800px;
  padding: 100px 0;

  img {
    width: 100%;
    height: 400px;
    border-radius: 10px;
    object-fit: cover;
  }

  h1 {
    font-size: 36px;
    font-family: ${FONTS.headingFont};
    font-weight: 600;
    color: ${Colors.black};
    margin: 0;
  }

  button {
    width: 100px;
    height: 24px;
    font-size: 10px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  box-sizing: border-box;
  gap: 8px;

  p {
    font-size: 20px;
    font-family: ${FONTS.textFont};
    margin: 0;
  }

  span {
    font-size: 16px;
    margin-top: 20px;
    font-weight: 300;
    text-align: end;
    margin: 0;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const IconButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  a {
    text-decoration: none;
    color: ${Colors.black};
  }
`;

export const IconButton = styled.div`
  padding: 4px;
  background-color: ${Colors.gray};
  border-radius: 8px;
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const DeleteButton = styled(IconButton)`
  color: red;
  cursor: pointer;
`;
