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

export const fadeInFromDown = keyframes`
  from {
    opacity: 0;
    height: 0;
    transform: translateY(-100px);
  }
  to {
    height: 100%;
    opacity: 1;
    transform: translateY(0);
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
