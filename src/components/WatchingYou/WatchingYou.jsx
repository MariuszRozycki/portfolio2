import * as S from "./WatchingYou.styled";
import { Typewriter } from "react-simple-typewriter";

const WatchingYou = () => {
  return (
    <S.WatchingYou>
      <Typewriter
        words={["I am watching you..."]}
        loop={3}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </S.WatchingYou>
  );
};

export default WatchingYou;
