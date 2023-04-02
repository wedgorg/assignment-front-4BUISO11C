import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  svg {
    position: absolute;
    margin-top: 8px;
    margin-left: 6px;
    color: gray;
  }
`;

export const SearchInput = styled.input`
  width: 350px;
  height: 28px;
  text-indent: 25px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;

  &:focus {
    border: 1px solid gray;
  }
`;
