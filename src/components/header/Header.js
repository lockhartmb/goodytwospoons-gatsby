import React from "react";
import { Link } from "gatsby";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.scss";
// import logo from "../../img/GTS.png";

const Header = ({ heading, subheading }) => {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <Navbar />
        <div className={styles.headerContent}>
          <h1>{heading}</h1>
          <h2>{subheading}</h2>
          <Link to="/gallery" className="buttonLink">
            Gallery
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
