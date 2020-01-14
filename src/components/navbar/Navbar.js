import React, { useState } from "react";
import { Link } from "gatsby";
import styles from "./Navbar.module.scss";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
// import logo from "../../img/GTS.png";

const Navbar = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setHamburgerMenuOpen(!hamburgerMenuOpen);
  };

  return (
    <>
      <FiMenu
        className={styles.hamburgerIcon}
        onClick={() => toggleHamburger()}
      />
      {hamburgerMenuOpen && (
        <nav className={styles.menu}>
          <div className="wrapper">
            <p className="closeMenu">
              <MdClose onClick={() => toggleHamburger()} />
              <span className="visuallyHidden">Click to close menu</span>
            </p>

            <ul className="links pageLinks">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
