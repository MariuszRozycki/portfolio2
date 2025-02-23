import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

export const HomeHeading = styled.div.attrs({ className: "home-heading" })`
  h1 {
    span {
      font-size: 28px;
      font-family: "Cabin", serif;
      color: var(--color-denary);
    }
  }

  h2 {
    animation: ${fadeIn} 2s ease-in-out forwards;
  }
`;
