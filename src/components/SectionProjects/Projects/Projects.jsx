import * as S from "../SectionProjects.styled";
import { Row } from "react-bootstrap";
import ProjectCard from "../../ProjectCard/ProjectCard";

const Projects = ({ title, projectData }) => {
  return (
    <S.SectionProjects>
      <h3 className='h4 mt-5'>{title}</h3>
      <Row className='g-3'>
        {projectData.map((project) => (
          <ProjectCard
            project={project}
            key={project.id}
            title={project.title}
            imgSrc={project.imgSrc}
            description={project.description}
            btnHrefLive={project.btnHrefLive}
            btnHrefGitHub={project.btnHrefGitHub}
            techStack={project.techStack}
          />
        ))}
      </Row>
    </S.SectionProjects>
  );
};

export default Projects;
