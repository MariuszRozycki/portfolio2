import { ContactForm, ContactDetails, ContactHeading } from "../../components";
import { Container } from "react-bootstrap";
import * as SC from "./Contact.styled";
import * as S from "../../components/Contact/Contact.styled";

const Contact = () => {
  return (
    <SC.Contact>
      <Container>
        <S.Contact>
          <ContactHeading />
          <ContactDetails />
          <ContactForm />
        </S.Contact>
      </Container>
    </SC.Contact>
  );
};

export default Contact;
