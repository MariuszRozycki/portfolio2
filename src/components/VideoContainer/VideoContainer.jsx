import * as S from "./VideoContainer.styled";

const VideoContainer = () => {
  return (
    <S.VideoContainer>
      <video loop muted playsInline autoPlay>
        <source src='/portfolio2/videos/animation.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </S.VideoContainer>
  );
};

export default VideoContainer;
