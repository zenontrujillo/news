import React from 'react'
import PropTypes from 'prop-types'

const Page = (props) => {
	const { title, children } = props
	return (
		<html>
			<head>
				<meta charset="utf-8" />
				<title>{title}</title>
				<link rel="shortcut icon" href="/assets/favicon.ico" />
			</head>
			<body>
				<div id="container">
					<div id="app">
						{children}
					</div>
					<footer />
				</div>
				<script type="text/javascript" src="/assets/commons.js" />
				<script type="text/javascript" src="/assets/app.js"/>
			</body>
		</html>
	)
}

Page.displayName = 'Page'
Page.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string.isRequired,
}
Page.defaultProps = {
	title: 'News'
}

export default Page
