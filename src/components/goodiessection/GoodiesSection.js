import React from 'react'
import { Link } from 'gatsby'
import styles from './GoodiesSection.module.scss'
import { GiZigzagHieroglyph } from 'react-icons/gi'
import GoodieItem from '../goodieItem/GoodieItem'
import BackgroundImage from 'gatsby-background-image'

const GoodiesSection = ({ backgroundImage }) => {
	return (
		<BackgroundImage fluid={backgroundImage} className={styles.goodiesSection}>
			<section className="section">
				<div className="wrapper">
					<h3>Goodies that I do</h3>
					<GiZigzagHieroglyph className="zigzag" />
					<p className={styles.description}>
						I make a variety of delicious gluten-free desserts including cakes, cupcakes, cookies,
						squares, and pies.
					</p>
					<div className={styles.gallery}>
						<GoodieItem caption="cupcakes" />
						<GoodieItem caption="sweets" />
						<GoodieItem caption="special occasions" />
					</div>
					<Link to="/menu" className="buttonLink">
						View menu
					</Link>
				</div>
			</section>
		</BackgroundImage>
	)
}

export default GoodiesSection
