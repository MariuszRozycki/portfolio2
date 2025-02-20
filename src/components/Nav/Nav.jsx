import { NavLink } from "react-router-dom";
import * as S from "../Nav/Nav.styled";

const Nav = ({ isMenuOpen, toggleMenu }) => {
  return (
    <S.Nav $isMenuOpen={isMenuOpen} onClick={toggleMenu}>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </S.Nav>
  );
};

export default Nav;
