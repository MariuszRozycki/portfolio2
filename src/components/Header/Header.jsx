import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { HamburgerMenu, Nav, Logo } from "../../components";
import { useMobileNav } from "../../hooks";
import * as S from "../Header/Header.styled";

const Header = ({ headerRef }) => {
  const { toggleMenu, isMenuOpen, handleLinkClick } = useMobileNav();

  return (
    <S.Header ref={headerRef}>
      <Container>
        <Link onClick={handleLinkClick} to='/portfolio2/'>
          <Logo />
        </Link>
        <HamburgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <Nav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </Container>
    </S.Header>
  );
};

export default Header;
