import { useState } from "react";

const useMobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return { toggleMenu, isMenuOpen, handleLinkClick };
};

export default useMobileNav;
