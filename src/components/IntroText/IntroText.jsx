import * as S from "./IntroText.styled";
import { Typewriter } from "react-simple-typewriter";

const IntroText = () => {
  const fullText = [
    "Hi, I'm Mariusz Rozycki.",
    "I hold a Higher Professional Degree in Frontend Development from Noroff.",
    "I'm looking for an exciting new project where I can apply my frontend skills and creativity.",
    "Take a look at my projects!",
    "Learn more about me below and check out my CV.",
  ];

  return (
    <S.IntroText>
      <>
        <Typewriter words={fullText} cursor cursorStyle='|' typeSpeed={45} deleteSpeed={20} delaySpeed={1500} loop={0} />
      </>
    </S.IntroText>
  );
};

export default IntroText;
