import styled from "styled-components";

export const HamburgerMenu = styled.div.attrs({ id: "hamburger-menu", className: "hamburger-menu" })`
  order: 1;
  cursor: pointer;

  .bars {
    display: block;
    width: 35px;
    height: 3px;
    margin: 4px 0;
    background-color: var(--color-yellow);
    border-radius: 50px;
    transition: var(--transition-standard);
  }

  /* bars transition */
  .bar-one {
    transform: ${({ $isMenuOpen }) => ($isMenuOpen ? "translateY(10px) rotate(45deg)" : "none")};
    margin: ${({ $isMenuOpen }) => ($isMenuOpen ? "7px 0" : "4px 0")};
  }

  .bar-three {
    transform: ${({ $isMenuOpen }) => ($isMenuOpen ? "translateY(-10px) rotate(-45deg)" : "none")};
    margin: ${({ $isMenuOpen }) => ($isMenuOpen ? "7px 0" : "4px 0")};
  }

  .bar-two {
    opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? 0 : 1)};
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
