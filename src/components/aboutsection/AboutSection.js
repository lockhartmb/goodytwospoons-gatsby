import React from "react";
// import Img from "gatsby-image";
import styles from "./AboutSection.module.scss";
import { GiZigzagHieroglyph } from "react-icons/gi";
import BackgroundImage from "gatsby-background-image";

const AboutSection = ({ title, description, backgroundImage }) => {
  return (
    <BackgroundImage fluid={backgroundImage} className={styles.aboutSection}>
      <section className="section">
        <div className="wrapper">
          <h3>{title}</h3>
          <GiZigzagHieroglyph className="zigzag" />
          <div className="aboutContent">
            {/* <Img fluid={src} /> */}
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </section>
    </BackgroundImage>
  );
};

export default AboutSection;
