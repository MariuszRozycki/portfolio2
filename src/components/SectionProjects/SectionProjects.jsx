import * as S from "./SectionProjects.styled";
import { useFetchProjectData } from "../../hooks";
import { Projects } from "../../components";
import { projectsData } from "../../data/projectsData";

const SectionProjects = () => {
  const { loading, error } = useFetchProjectData([projectsData]);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <S.SectionProjects>
      <Projects title="My projects" projectData={projectsData} />
    </S.SectionProjects>
  );
};

export default SectionProjects;
