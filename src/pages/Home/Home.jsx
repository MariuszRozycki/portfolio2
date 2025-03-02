import { Container } from "react-bootstrap";

import { HomeHeading, AboutShort, SocialMedia, IntroText, SectionProjects, VideoContainer } from "../../components";
import * as S from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <S.Home>
        <HomeHeading />
        <VideoContainer />
        <IntroText />
        <div className='home-content'>
          <AboutShort />
          <SocialMedia />

          <SectionProjects />
        </div>
      </S.Home>
    </Container>
  );
};

export default Home;
