import styled from "styled-components";

export const Header = styled.header.attrs({ className: "header" })`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.backgroundColor.header};
  height: 80px;
  width: 100%;
  z-index: 1;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
`;
