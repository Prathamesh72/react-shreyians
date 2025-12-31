import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h2>Prathamesh</h2>
      <button>Log IN</button>
    </div>
  );
}

export default Header;
