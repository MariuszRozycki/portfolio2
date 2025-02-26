import styled from "styled-components";
import { fadeInDown } from "../../styles/animations";

export const SectionProjects = styled.section.attrs({ className: "projects-section" })`
  animation: ${fadeInDown} 3s linear forwards;
`;
