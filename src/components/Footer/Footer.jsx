import { Container } from "react-bootstrap";
import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.Footer>
      <Container>
        <p>Web development</p>
        <p>&copy; Mariusz Rozycki</p>
        <div className='email-wrapper'>
          <p className='email-header'>e-mail:</p>
          <a href='mailto:mariusz.frontdev@gmail.com'>mariusz.frontdev@gmail.com</a>
        </div>
      </Container>
    </S.Footer>
  );
};

export default Footer;
