import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }`;

export const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
`;

export const fadeInDown = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`;

export const fadeOut = keyframes` 
from {
  opacity: 1;
}
  to {
    opacity: 0;
  }
`;

export const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const blinkingCursor = keyframes`
  50% {
    border-right-color: transparent;
  }
`;
