import * as S from "./SectionProjects.styled";
import { useInView } from "react-intersection-observer";
import { useFetchProjectData } from "../../hooks";
import { Row } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";

const SectionProjects = ({ title }) => {
  const { projects, loading, error } = useFetchProjectData();
  console.log(projects);

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <S.SectionProjects ref={ref}>
      {loading && <p>Loading projects...</p>}
      {error && <p>Error: {error}</p>}
      {inView && !loading && !error && (
        <>
          <h3 className='h4'>{title}</h3>
          <Row className='g-3'>
            {projects.map((project) => (
              <ProjectCard
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

export default SectionProjects;
