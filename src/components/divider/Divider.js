import React from "react";
import styles from "./Divider.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Divider = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "lemonCupcake" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const imageData = data.allFile.edges[0].node.childImageSharp.fluid;

  return (
    <BackgroundImage
      fluid={imageData}
      className={styles.dividerSection}
    ></BackgroundImage>
  );
};

export default Divider;
