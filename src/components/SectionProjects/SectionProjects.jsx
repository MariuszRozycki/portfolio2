import * as S from "./SectionProjects.styled";
import { Row } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";

const SectionProjects = ({ title }) => {
  return (
    <S.SectionProjects>
      <h3 className='h4'>{title}</h3>
      <Row className='g-3'>
        <ProjectCard
          title='Holidaze'
          imgSrc='/pictures/holidaze-image/holidaze.jpg'
          description='This is description of Holidaze project'
          btnHrefLive='https://mariuszrozycki.github.io/holidaze/'
          btnHrefGitHub='https://github.com/MariuszRozycki/holidaze'
        />
        <ProjectCard
          title='E-Com'
          imgSrc='/pictures/holidaze-image/e-com.jpg'
          description='This is description of E-com project'
          btnHrefLive='https://ecom-react-mariusz.netlify.app/'
          btnHrefGitHub='https://github.com/MariuszRozycki/e-com-store-react'
        />
        <ProjectCard
          title='Auction house'
          imgSrc='/pictures/holidaze-image/auction-house.jpg'
          description='This is description of Auction house Gavel project'
          btnHrefLive='https://genuine-squirrel-c1ec8c.netlify.app/'
          btnHrefGitHub='https://github.com/MariuszRozycki/auction-gavel'
        />
        <ProjectCard
          title='My class'
          imgSrc='/pictures/holidaze-image/my-class.jpg'
          description='This is description of My class project'
          btnHrefLive='https://coruscating-melomakarona-28cd35.netlify.app/'
          btnHrefGitHub='https://github.com/MariuszRozycki/my-class'
        />
        <ProjectCard
          title="Flower Power - florist's shop"
          imgSrc='/pictures/holidaze-image/flower-power.jpg'
          description='This is description of Flower Power project'
          btnHrefLive='https://mariuszrozycki.info/flower-power/'
          btnHrefGitHub='pureWordPress'
        />
      </Row>
    </S.SectionProjects>
  );
};

export default SectionProjects;
