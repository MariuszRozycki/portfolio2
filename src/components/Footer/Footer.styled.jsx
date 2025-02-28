import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColor.footer};
  padding: 7px 5px;

  .container {
    justify-content: center;
    flex-direction: column;
  }

  p {
    color: ${({ theme }) => theme.color.footerParagraph};
    margin: 1px 0;
    font-size: 12px;
    text-align: center;
  }

  .email-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .email-header {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: var(--color-yellow);
    font-size: 12px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    p,
    a {
      text-align: left;
      font-size: 12px;
    }

    .email-wrapper {
      flex-direction: row;
      gap: 5px;
    }

    .email-header {
      display: block;
    }
  }
`;
