import * as S from "./ContactDetails.styled";

const ContactDetails = () => {
  return (
    <S.ContactDetails>
      {/* <div className='img-wrapper'>
        <img src='/portfolio2/pictures/user/user-pic.png' alt='Contact Mariusz Rozycki' />
      </div> */}
      <ul className="contact-details">
        <li>
          <a href="tel:+4793928270">
            <div className="contact-details-icon-wrapper">
              <i className="bi bi-phone-fill"></i>
            </div>
            +47 939-28-270
          </a>
        </li>
        <li>
          <a href="https://github.com/MariuszRozycki">
            <div className="contact-details-icon-wrapper github-icon">
              <i className="bi bi-github"></i>
            </div>
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mariusz-rozycki/">
            <div className="contact-details-icon-wrapper linkedin-icon">
              <i className="bi bi-linkedin"></i>
            </div>
            Linkedin
          </a>
        </li>
        <li>
          <a href="mailto:mariusz.frontdev@gmail.com">
            <div className="contact-details-icon-wrapper email-icon">
              <i className="bi bi-envelope-at-fill"></i>
            </div>
            mariusz.frontdev@gmail.com
          </a>
        </li>
      </ul>
    </S.ContactDetails>
  );
};

export default ContactDetails;
