import * as S from "./SocialMedia.styled";

const SocialMedia = () => {
  return (
    <S.SocialMedia>
      <ul className='social-media'>
        <li>
          <a href=''>
            <i className='bi bi-github'></i>
          </a>
        </li>
        <li>
          <a href=''>
            <i className='bi bi-linkedin'></i>
          </a>
        </li>
        <li>
          <a href=''>
            <i className='bi bi-envelope-at-fill'></i>
          </a>
        </li>
        <li>
          <a href=''>
            <i className='bi bi-phone-fill'></i>
          </a>
        </li>
      </ul>
    </S.SocialMedia>
  );
};

export default SocialMedia;
