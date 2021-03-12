import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styles from './TestimonialsSection.module.scss'

const TestimonialsSection = ({ backgroundImage }) => {
	return (
		<BackgroundImage fluid={backgroundImage} className={styles.testimonialsSection}>
			<section className="section">
				<div className="wrapper">
					<h3>What people are saying</h3>
					<p>testimonials description</p>
				</div>
			</section>
		</BackgroundImage>
	)
}

export default TestimonialsSection
