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
          <NavLink to='/about' end>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='contact' end>
            Contact
          </NavLink>
        </li>
      </ul>
    </S.Nav>
  );
};

export default Nav;
