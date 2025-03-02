import styled from "styled-components";

export const ContactDetails = styled.div.attrs({ className: "contact-details-wrapper" })`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 600px;
  margin: 20px auto;

  .img-wrapper {
    height: 130px;
    width: 130px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.radius.picture};
    }
  }

  .contact-details {
    justify-self: flex-start;
    list-style: none;
    margin: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    gap: 5px;

    li {
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: 5px;
        color: var(--color-denary);
        transition: color var(--transition-standard);

        &:hover {
          color: var(--red-color);
        }

        .contact-details-icon-wrapper {
          display: inline-block;
          height: 20px;
          padding-right: 8px;

          img {
            width: auto;
            height: 100%;
          }

          &.email-icon {
            height: 20px;
          }
        }
      }

      p {
        font-weight: 600;
      }

      &:last-of-type p {
        margin: 7px 0;
      }
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: auto 1fr;
  }
`;
