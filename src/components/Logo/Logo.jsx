import * as S from "./Logo.styled";

const Logo = () => {
  return (
    <S.Logo>
      <div className='img-wrapper'>
        <img src='/portfolio2/pictures/logo/logo.jpg' alt='Logo' />
      </div>
      <p className='logo-text'>MR Coder</p>
    </S.Logo>
  );
};

export default Logo;
