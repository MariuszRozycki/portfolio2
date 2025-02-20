import styled from "styled-components";

export const Nav = styled.nav.attrs({ className: "nav" })`
  box-sizing: border-box;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor.header};
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.container};
  margin: 0;
  z-index: 1;
  transition: ${({ theme }) => theme.transitions.standard};
  transform: ${({ $isMenuOpen }) => ($isMenuOpen ? "translate(0)" : "translate(-100vw)")};

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  li {
    text-align: center;
    width: 100%;
  }

  a {
    font-size: 22px;

    &.active {
      color: ${({ theme }) => theme.color.active};
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    position: static;
    align-items: center;
    justify-content: flex-end;
    transform: translate(0);
    height: auto;
    padding: 0;

    ul {
      flex-direction: row;
      justify-content: flex-end;
    }

    a {
      font-size: 18px;
      text-align: right;
    }
  }
`;
