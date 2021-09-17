import React from "react";
import styles from "./Header.module.css";
import Navbar from "../Nav/Navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <a href="#home">
          <h1 style={{ color: "#fff" }}>Logo</h1>
        </a>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
