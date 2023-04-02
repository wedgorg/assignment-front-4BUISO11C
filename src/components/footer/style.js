import Colors from "components/colors";
import FONTS from "components/fonts";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  padding: 40px 140px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid ${Colors.gray};

  ul {
    display: flex;
    flex-direction: column;
    gap: 4px;

    li {
      list-style-type: none;
      font-size: 20px;
      display: flex;
      gap: 10px;
      font-family: ${FONTS.textFont};
      align-items: center;

      h1 {
        font-size: 22px;
        font-family: ${FONTS.headingFont};
        font-weight: 500;
        color: ${Colors.black};
        margin: 0;
      }

      span {
        color: #182438;
        font-family: ${FONTS.textFont};
      }

      svg {
        color: #182438;
      }
    }
  }
`;
