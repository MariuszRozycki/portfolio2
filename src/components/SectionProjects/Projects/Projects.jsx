import * as S from "../SectionProjects.styled";
import { useInView } from "react-intersection-observer";
import { Row } from "react-bootstrap";
import ProjectCard from "../../ProjectCard/ProjectCard";

const Projects = ({ title, projectData }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <S.SectionProjects ref={ref}>
      {inView && (
        <>
          <h3 className='h4'>{title}</h3>
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
              />
            ))}
          </Row>
        </>
      )}
    </S.SectionProjects>
  );
};

export default Projects;
