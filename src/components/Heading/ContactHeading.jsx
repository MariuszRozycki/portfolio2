import * as S from "./Heading.styled";
import { Typewriter } from "react-simple-typewriter";

const ContactHeading = () => {
  return (
    <S.Heading>
      <h1>
        <Typewriter
          words={["Contact to Mariusz Rozycki"]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <h2 className="h3">Don&apos;t forget to send an e-mail!</h2>
    </S.Heading>
  );
};

export default ContactHeading;
