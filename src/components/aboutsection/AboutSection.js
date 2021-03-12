import React from 'react'
import Img from 'gatsby-image'
import styles from './AboutSection.module.scss'
import { GiZigzagHieroglyph } from 'react-icons/gi'
import BackgroundImage from 'gatsby-background-image'

const AboutSection = ({ backgroundImage, profileImage }) => {
	return (
		<BackgroundImage fluid={backgroundImage} className={styles.aboutSection}>
			<section className="section">
				<div className="wrapper">
					<h3>About me</h3>
					<GiZigzagHieroglyph className="zigzag" />
					<div className="aboutContent">
						<Img fluid={profileImage} />
						<p className={styles.description}>
							Hi! I'm Dawna. I started baking gluten-free many years ago, as close friends and
							family members of mine were diagnosed with celiac disease and severe gluten allergies.
							I love a baking or cooking challenge and whatever I make has to taste good. Goody Two
							Spoons is all about celiac-safe, delicious, gluten-free treats!
						</p>
					</div>
				</div>
			</section>
		</BackgroundImage>
	)
}

export default AboutSection
