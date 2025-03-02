import * as S from "./SectionProjects.styled";
import { useFetchProjectData } from "../../hooks";
import { Projects } from "../../components";
import { projectsCommercialData, projectsDataFirstYear, projectsDataSecondYear } from "../../data/projectsData";

const SectionProjects = () => {
  const { loading, error } = useFetchProjectData([...projectsCommercialData, ...projectsDataFirstYear, ...projectsDataSecondYear]);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <S.SectionProjects>
      <Projects title='Commercial projects' projectData={projectsCommercialData} />
      <Projects title='Second year projects' projectData={projectsDataSecondYear} />
      <Projects title='First year projects' projectData={projectsDataFirstYear} />
    </S.SectionProjects>
  );
};

export default SectionProjects;
