import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/header/Header";
import GoodiesSection from "../components/goodiessection/GoodiesSection";
import AboutSection from "../components/aboutsection/AboutSection";
import TestimonialsSection from "../components/testimonialssection/TestimonialsSection";
import Divider from "../components/divider/Divider";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  goodiesTitle,
  goodiesDescription,
  aboutTitle,
  aboutText,
  aboutImage,
  pinkCupcake,
  lemonCupcake,
  backgroundImage
}) => {
  return (
    <>
      <Header heading={heading} subheading={subheading} />
      <main>
        <GoodiesSection
          title={goodiesTitle}
          description={goodiesDescription}
          backgroundImage={backgroundImage}
        />
        <Divider src={lemonCupcake} />
        <AboutSection
          title={aboutTitle}
          description={aboutText}
          backgroundImage={backgroundImage}
          aboutImage={aboutImage}
        />
        <Divider src={pinkCupcake} />
        <TestimonialsSection
          title="What people are saying"
          description="testimonials description"
          backgroundImage={backgroundImage}
        />
      </main>
    </>
  );
};

IndexPageTemplate.propTypes = {
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // title: PropTypes.string,
  // heading: PropTypes.string,
  // subheading: PropTypes.string,
  // mainpitch: PropTypes.object,
  // description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array
  // })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const pinkCupcake = data.pink.edges[0].node.childImageSharp.fluid;
  const lemonCupcake = data.lemon.edges[0].node.childImageSharp.fluid;
  const backgroundImage = data.background.edges[0].node.childImageSharp.fluid;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        goodiesTitle={frontmatter.goodies.goodiesTitle}
        goodiesDescription={frontmatter.goodies.goodiesDescription}
        aboutTitle={frontmatter.about.aboutTitle}
        aboutText={frontmatter.about.aboutText}
        aboutImage={frontmatter.about.image.childImageSharp.fixed}
        pinkCupcake={pinkCupcake}
        lemonCupcake={lemonCupcake}
        backgroundImage={backgroundImage}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  // data: PropTypes.shape({
  //   markdownRemark: PropTypes.shape({
  //     frontmatter: PropTypes.object
  //   })
  // })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        goodies {
          goodiesTitle
          goodiesText
        }
        about {
          aboutTitle
          aboutText
          image {
            childImageSharp {
              fixed(width: 300, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
    lemon: allFile(filter: { name: { eq: "lemonCupcake" } }) {
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
    pink: allFile(filter: { name: { eq: "pinkCupcake" } }) {
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
    background: allFile(filter: { name: { eq: "back" } }) {
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
`;
