module.exports = {
	siteMetadata: {
		title: 'Goody Two Spoons',
		description: 'Gluten free baking made fresh in Thunder Bay, Ontario.',
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Parisienne`, `Old Standard TT\:400,400i,700`],
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/img`,
				name: 'uploads',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/img`,
				name: 'images',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-relative-images',
						options: {
							name: 'uploads',
						},
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048,
						},
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static',
						},
					},
					{
						resolve: `gatsby-plugin-manifest`,
						options: {
							name: `GoodyTwoSpoons`,
							short_name: `GTS`,
							icon: `src/img/GTS.png`,
							start_url: `/`,
							background_color: `#f7f0eb`,
							theme_color: `#a2466c`,
							display: `standalone`,
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
			options: {
				develop: true, // Activates purging in npm run develop
				purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
			},
		}, // must be after other CSS plugins
		'gatsby-plugin-netlify', // make sure to keep it last in the array
	],
}
