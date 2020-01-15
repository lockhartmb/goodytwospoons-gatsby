import React from "react";
import BackgroundImage from "gatsby-background-image";
import styles from "./TestimonialsSection.module.scss";

const TestimonialsSection = ({ title, description, backgroundImage }) => {
  return (
    <BackgroundImage
      fluid={backgroundImage}
      className={styles.testimonialsSection}
    >
      <section className="section">
        <div className="wrapper">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </section>
    </BackgroundImage>
  );
};

export default TestimonialsSection;
