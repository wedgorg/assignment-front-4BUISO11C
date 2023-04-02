import Colors from "components/colors";
import FONTS from "components/fonts";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`;

export const AddCard = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px 40px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 34px;
    font-weight: 500;
    font-family: ${FONTS.headingFont};
    margin: 0;
    margin-bottom: 20px;
    color: ${Colors.blue};
  }

  label {
    width: 100%;
    margin-top: 10px;
    font-family: ${FONTS.headingFont};
  }

  input {
    width: 100%;
    height: 30px;
    outline: none;
    border: 1px solid ${Colors.gray};
    border-radius: 4px;
    margin-bottom: 8px;
    margin-top: 4px;
    text-indent: 10px;
    font-family: ${FONTS.font};

    &:focus {
      border: 1px solid ${Colors.black};
    }
  }

  textarea {
    width: 100%;
    height: 140px;
    outline: none;
    border: 1px solid ${Colors.gray};
    border-radius: 4px;
    margin-bottom: 8px;
    margin-top: 4px;
    text-indent: 10px;
    font-family: ${FONTS.font};

    &:focus {
      border: 1px solid ${Colors.black};
    }
  }

  button {
    width: 100%;
    height: 32px;
    outline: none;
    border-radius: 8px;
    border: none;
    background-color: ${Colors.blue};
    color: ${Colors.white};
    font-family: ${FONTS.headingFont};
    margin-top: 15px;
  }
`;
