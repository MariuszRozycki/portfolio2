import styled from "styled-components";

export const Logo = styled.div.attrs({ className: "logo-wrapper" })`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 5px;
  width: 150px;

  .img-wrapper {
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.backgroundColor.header};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.radius.circle};
      border: 1px solid var(--color-yellow);
    }
  }

  .logo-text {
    color: var(--color-yellow);
    margin: 0;
    font-size: 16px;
  }
`;
