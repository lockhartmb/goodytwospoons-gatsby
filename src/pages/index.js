import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/header/Header'
import GoodiesSection from '../components/goodiessection/GoodiesSection'
import AboutSection from '../components/aboutsection/AboutSection'
import TestimonialsSection from '../components/testimonialssection/TestimonialsSection'
import Divider from '../components/divider/Divider'

export const HomePage = () => {
	const data = useStaticQuery(graphql`
		{
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
			lemonCupcake: allFile(filter: { name: { eq: "lemonCupcake" } }) {
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
			pinkCupcake: allFile(filter: { name: { eq: "pinkCupcake" } }) {
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
			dawna: allFile(filter: { name: { eq: "dawna" } }) {
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
	`)

	const backgroundImage = data.background.edges[0].node.childImageSharp.fluid
	const lemonCupcake = data.lemonCupcake.edges[0].node.childImageSharp.fluid
	const pinkCupcake = data.pinkCupcake.edges[0].node.childImageSharp.fluid
	const dawna = data.dawna.edges[0].node.childImageSharp.fluid

	return (
		<Layout>
			<Header />
			<main>
				<GoodiesSection backgroundImage={backgroundImage} />
				<Divider src={lemonCupcake} />
				<AboutSection backgroundImage={backgroundImage} profileImage={dawna} />
				<Divider src={pinkCupcake} />
				<TestimonialsSection backgroundImage={backgroundImage} />
			</main>
		</Layout>
	)
}

export default HomePage
