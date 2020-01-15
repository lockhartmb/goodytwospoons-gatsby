import React from "react";

const TestimonialsSection = ({ title, description }) => {
  return (
    <section className="section">
      <div className="wrapper">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
