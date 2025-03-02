import * as S from "./SocialMedia.styled";

const SocialMedia = () => {
  return (
    <S.SocialMedia>
      <ul className='social-media'>
        <li>
          <a href='https://github.com/MariuszRozycki'>
            <i className='bi bi-github'></i>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/mariusz-rozycki/'>
            <i className='bi bi-linkedin'></i>
          </a>
        </li>
        <li>
          <a href='mailto:mariusz.frontdev@gmail.com'>
            <i className='bi bi-envelope-at-fill'></i>
          </a>
        </li>
        <li>
          <a href='tel:+4793928270'>
            <i className='bi bi-phone-fill'></i>
          </a>
        </li>
      </ul>
    </S.SocialMedia>
  );
};

export default SocialMedia;
