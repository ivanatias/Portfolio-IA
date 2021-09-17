import React from "react";
import styles from "./Navlinks.module.css";

const Navlinks = ({ isMobile, closeMenuOnClick }) => {
  return (
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <a
          href="#home"
          className={styles.navLink}
          onClick={() => (isMobile ? closeMenuOnClick() : null)}
        >
          {" "}
          Home{" "}
        </a>
      </li>
      <li className={styles.navItem}>
        <a
          href="#about"
          className={styles.navLink}
          onClick={() => (isMobile ? closeMenuOnClick() : null)}
        >
          {" "}
          About{" "}
        </a>
      </li>
      <li className={styles.navItem}>
        <a
          href="#services"
          className={styles.navLink}
          onClick={() => (isMobile ? closeMenuOnClick() : null)}
        >
          {" "}
          Services{" "}
        </a>
      </li>
      <li className={styles.navItem}>
        <a
          href="#projects"
          className={styles.navLink}
          onClick={() => (isMobile ? closeMenuOnClick() : null)}
        >
          {" "}
          Projects{" "}
        </a>
      </li>
      <li className={styles.navItem}>
        <a
          href="#contact"
          className={styles.navLink}
          onClick={() => (isMobile ? closeMenuOnClick() : null)}
        >
          {" "}
          Contact{" "}
        </a>
      </li>
    </ul>
  );
};

export default Navlinks;
