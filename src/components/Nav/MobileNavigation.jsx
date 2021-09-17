import React, { useState } from "react";
import Navlinks from "./Navlinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./MobileNavigation.module.css";

const MobileNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const hamburgerBtn = (
    <FontAwesomeIcon
      icon={faBars}
      size="lg"
      className={styles.menuBtn}
      onClick={() => setMenuOpen(!menuOpen)}
    />
  );

  const closeMenuBtn = (
    <FontAwesomeIcon
      icon={faTimes}
      size="lg"
      className={styles.menuBtn}
      onClick={() => setMenuOpen(!menuOpen)}
    />
  );

  const closeMobileNav = () => setMenuOpen(false);

  return (
    <nav className={styles.mobileNav}>
      {menuOpen ? closeMenuBtn : hamburgerBtn}
      {menuOpen ? (
        <Navlinks isMobile={true} closeMenuOnClick={closeMobileNav} />
      ) : null}
    </nav>
  );
};

export default MobileNavigation;
