import React from "react";
import { FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.scss";
import instagram from "../../img/social/instagram.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <h4>Call me today!</h4>
        <p className={styles.phoneNumber}>807-355-2032</p>
        <p>Follow me:</p>
        <a href="https://www.instagram.com/goodytwospoons/" target="_blank">
          <FaInstagram />
        </a>
        <p>© Goody Two Spoons. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
