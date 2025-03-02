import * as S from "./AboutPoints.styled";
import { Typewriter } from "react-simple-typewriter";

const AboutPoints = () => {
  const fullText = [
    "Hi, my name is Mariusz Rozycki,",
    "student of Frontend development at Noroff.",
    "Let me introduce myself...",
    "I write clean and well-structured code in React and TypeScript,",
    "I follow best practices,",
    "I have a strong understanding of component-based architecture in React,",
    "I write separating logic from styles using styled-components,",
    "I implement state management and dynamic data operations (CRUD: create, edit, delete),",
    "I develop user authentication, profile editing, and comment systems",
  ];

  return (
    <S.AboutPoints>
      <>
        <Typewriter words={fullText} cursor cursorStyle='|' typeSpeed={50} deleteSpeed={20} delaySpeed={1000} loop={0} />
      </>
    </S.AboutPoints>
  );
};

export default AboutPoints;
