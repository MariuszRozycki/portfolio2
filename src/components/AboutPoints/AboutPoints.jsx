import * as S from "./AboutPoints.styled";
import { Typewriter } from "react-simple-typewriter";

const AboutPoints = () => {
  const fullText = [
    "I write clean and well-structured code",
    "I follow best practices",
    "I have a strong understanding of component-based architecture in React",
    "I write separating logic from styles using styled-components",
    "I implement state management and dynamic data operations (CRUD: create, edit, delete)",
    "I develop user authentication, profile editing, and comment systems",
  ];

  return (
    <S.AboutPoints>
      <>
        <h3 className='h4 mt-5'>About me</h3>
        <Typewriter words={fullText} cursor cursorStyle='|' typeSpeed={30} deleteSpeed={0} delaySpeed={1000} loop={0} />
      </>
    </S.AboutPoints>
  );
};

export default AboutPoints;
