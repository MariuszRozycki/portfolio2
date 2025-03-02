import * as S from "./IntroText.styled";
import { Typewriter } from "react-simple-typewriter";

const IntroText = () => {
  const fullText = ["Hi, my name is Mariusz Rozycki,", "Student of Frontend development at Noroff.", "Read more about me below..."];

  return (
    <S.IntroText>
      <>
        <Typewriter words={fullText} cursor cursorStyle='|' typeSpeed={50} deleteSpeed={20} delaySpeed={1000} loop={0} />
      </>
    </S.IntroText>
  );
};

export default IntroText;
