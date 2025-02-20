import styled from "styled-components";

export const SocialMedia = styled.section.attrs({ className: "social-media-section" })`
  .social-media {
    display: flex;
    justify-content: flex-start;
    gap: 15px;

    i {
      font-size: 27px;
      opacity: 0.6;
      cursor: pointer;
      transition: ${({ theme }) => theme.transitions.standard};

      &:hover {
        opacity: 1;
      }
    }
  }
`;
