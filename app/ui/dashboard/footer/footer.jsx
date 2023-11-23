import React from "react";
import styles from "./footer.module.css";

const date = new Date();
const year = date.getFullYear();
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>SettClow</div>
      <div className={styles.text}>Made with ❤ by sett {year}</div>
    </div>
  );
};

export default Footer;
