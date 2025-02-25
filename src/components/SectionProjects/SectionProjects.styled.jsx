import styled from "styled-components";
import { fadeInDown } from "../../styles/animations";

export const SectionProjects = styled.section.attrs({ className: "projects-section mt-5" })`
  animation: ${fadeInDown} 3s linear forwards;
`;
