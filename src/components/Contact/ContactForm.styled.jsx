import styled from "styled-components";

export const ContactForm = styled.form.attrs({ id: "form-15", className: "form", method: "post" })`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  row-gap: 15px;
  padding: ${({ theme }) => theme.padding.container};
  box-sizing: border-box;
  border-radius: var(--border-radius-min);
  background: #515a6e;

  h2 {
    color: var(--color-denary);
  }

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 2px;
    font-size: 16px;
    color: var(--color-denary);

    input,
    textarea {
      box-sizing: border-box;
      width: 100%;
      padding: ${({ theme }) => theme.padding.input};
      border-radius: var(--border-radius-standard);
      border: 1px solid;
      color: var(--color-black);
      font-size: 16px;
    }

    textarea {
      height: 200px;
      resize: none;
    }
  }

  .message {
    margin-top: 10px;

    button {
      margin: auto;
      background-color: var(--color-denary);
      color: #000001;
      border: none;
      padding: 8px 10px;
    }
  }

  .form-error {
    font-size: 16px;
    color: var(--color-white);
    font-weight: 200;
    margin-top: 5px;
    padding: ${({ theme }) => theme.padding.input};
    background-color: rgba(255, 0, 0, 0.1);
    border-radius: var(--border-radius-min);
  }

  .success {
    color: green;
  }

  .error {
    color: red;
  }
`;
