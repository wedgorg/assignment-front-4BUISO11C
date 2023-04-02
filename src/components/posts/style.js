import Colors from "components/colors";
import FONTS from "components/fonts";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 60px;
  gap: 50px;
`;

export const Title = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${Colors.gray};

  h1 {
    font-weight: 400;
    font-family: ${FONTS.headingFont};
    font-size: 32px;
  }
`;
