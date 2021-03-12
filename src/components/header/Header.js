import React from 'react'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Navbar from '../navbar/Navbar'
import styles from './Header.module.scss'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
	const data = useStaticQuery(graphql`
		{
			allFile(filter: { name: { eq: "hero" } }) {
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

	const src = data.allFile.edges[0].node.childImageSharp.fluid

	return (
		<BackgroundImage fluid={src} fadeIn={true}>
			<header className={styles.header}>
				<div className="wrapper">
					<Navbar />
					<div className={styles.headerContent}>
						<h1>Welcome to Goody Two Spoons</h1>
						<h2>Gluten-free baking</h2>
						<Link to="/gallery" className="buttonLink">
							Gallery
						</Link>
					</div>
				</div>
			</header>
		</BackgroundImage>
	)
}

export default Header
