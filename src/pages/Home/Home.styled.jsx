import styled from "styled-components";

export const Home = styled.div.attrs({ className: "home outlet-content" })`
  .home-content {
    margin-top: 10px;
    p {
      color: var(--color-denary);
    }

    .about-longer-section,
    .projects-section {
      margin-bottom: 50px;
    }
  }
`;
