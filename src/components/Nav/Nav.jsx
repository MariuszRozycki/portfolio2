import { NavLink } from "react-router-dom";
import * as S from "../Nav/Nav.styled";

const Nav = ({ isMenuOpen, toggleMenu }) => {
  return (
    <S.Nav $isMenuOpen={isMenuOpen} onClick={toggleMenu}>
      <ul>
        <li>
          <NavLink to='/portfolio2/' end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/portfolio2/contact' end>
            Contact
          </NavLink>
        </li>
        <li>
          <a href='/portfolio2/resume/mariusz_rozycki-cv-port.pdf' target='_blank' rel='noopener noreferrer'>
            Cv
          </a>
        </li>
      </ul>
    </S.Nav>
  );
};

export default Nav;
