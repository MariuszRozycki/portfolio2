import * as S from "./HomeHeading.styled";
import { Typewriter } from "react-simple-typewriter";

const HomeHeading = () => {
  return (
    <S.HomeHeading>
      <h1>
        <Typewriter words={["Mariusz Rozycki"]} loop={0} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
      </h1>
      <h2 className='h3'>Frontend developer</h2>
    </S.HomeHeading>
  );
};

export default HomeHeading;
