import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

export const VideoContainer = styled.div.attrs({ className: "video-container mt-4" })`
  max-width: 200px;
  height: 200px;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;

  video {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius-circle);
  }

  @media ${({ theme }) => theme.device.laptop} {
    max-width: 250px;
    height: 250px;
  }
`;
