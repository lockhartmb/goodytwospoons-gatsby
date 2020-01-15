import React from "react";
import styles from "./AboutSection.module.scss";

const AboutSection = ({ title, description }) => {
  return (
    <section className="section">
      <div className="wrapper">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default AboutSection;
