import React from 'react'
import Layout from '../components/Layout'
import HeaderShort from '../components/Header/HeaderShort'

const NotFoundPage = () => (
	<Layout>
		<HeaderShort />
		<section className="section">
			<div className="content">
				<h2>Page not found</h2>
			</div>
		</section>
	</Layout>
)

export default NotFoundPage
