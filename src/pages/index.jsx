import * as React from "react";
import '../styles/index.scss';
import Intro from '../components/intro'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'
 
const IndexPage = () => {

	return (
		<body>
			<Intro />

			<Portfolio />

			<Contact />
		</body>
	)
}

export default IndexPage

export const Head = () => <title>Dominic Wong</title>
