import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

export const SectionProjects = styled.section.attrs({ className: "projects-section mt-5" })`
  overflow: hidden;
  animation-delay: 1s;
  animation: ${fadeIn} 1.2s linear forwards;
`;
