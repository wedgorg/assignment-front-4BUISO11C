import Colors from "components/colors";
import FONTS from "components/fonts";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 20px 20px;

  h1 {
    text-align: center;
    font-family: ${FONTS.headingFont};
    font-weight: 400;
    padding: 10px;
    font-size: 22px;
    border-bottom: 1px solid ${Colors.gray};
    /* border-top: 1px solid ${Colors.gray}; */
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    li {
      list-style-type: none;
      font-size: 20px;
      background-color: #dae3f5;
      padding: 6px 24px;
      border-radius: 15px;
      color: ${Colors.blue};
      font-family: ${FONTS.textFont};
    }
  }
`;
