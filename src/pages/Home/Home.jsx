import { Container } from "react-bootstrap";

import { HomeHeading, AboutShort, SocialMedia, AboutPoints, SectionProjects, VideoContainer, WatchingYou } from "../../components";
import * as S from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <S.Home>
        <HomeHeading />
        <VideoContainer />
        <WatchingYou />
        <div className='home-content'>
          <AboutShort />
          <SocialMedia />
          <AboutPoints />
          <SectionProjects />
        </div>
      </S.Home>
    </Container>
  );
};

export default Home;
