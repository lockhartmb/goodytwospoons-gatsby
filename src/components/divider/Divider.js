import React from "react";
import styles from "./Divider.module.scss";
import BackgroundImage from "gatsby-background-image";

const Divider = ({ src }) => {
  return (
    <BackgroundImage
      fluid={src}
      className={styles.dividerSection}
    ></BackgroundImage>
  );
};

export default Divider;
