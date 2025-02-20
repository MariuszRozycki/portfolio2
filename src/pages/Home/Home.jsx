import { Container } from "react-bootstrap";
import { AboutShort, SocialMedia, AboutLonger, SectionProjects } from "../../components";
import * as S from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <S.Home>
        <h1 className='h2'>Mariusz Rozycki</h1>
        <h2 className='h3'>Frontend developer</h2>
        <div className='home-content'>
          <AboutShort />
          <SocialMedia />
          <AboutLonger />
          <SectionProjects title="Student's projects" />
        </div>
      </S.Home>
    </Container>
  );
};

export default Home;
