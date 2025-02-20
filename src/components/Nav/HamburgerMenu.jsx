import * as S from "./HamburgerMenu.styled";

const HamburgerMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <S.HamburgerMenu $isMenuOpen={isMenuOpen} onClick={toggleMenu}>
      <span className='bars bar-one'></span>
      <span className='bars bar-two'></span>
      <span className='bars bar-three'></span>
    </S.HamburgerMenu>
  );
};

export default HamburgerMenu;
