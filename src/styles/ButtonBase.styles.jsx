import styled from "styled-components";

export const ButtonBase = styled.button`
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.radius.btn};
  border: 0;
  cursor: pointer;
  justify-self: center;
  background-color: ${({ theme }) => theme.backgroundColor.btn};
  font-size: 18px;
`;
