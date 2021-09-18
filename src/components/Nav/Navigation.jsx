import React from "react";
import Navlinks from "./Navlinks";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Navlinks />
    </nav>
  );
};

export default Navigation;
