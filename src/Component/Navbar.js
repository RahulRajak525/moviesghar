import React from "react";
import styles from "../Css/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navbar__title}>Movies Ghar</h1>
      <div className={styles.navbar__search}>
        <input type="text" placeholder="Search..." />
        <button>Reset</button>
      </div>
    </nav>
  );
};

export default Navbar;
