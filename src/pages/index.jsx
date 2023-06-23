import * as React from "react";
import '../styles/index.scss';
import Intro from '../components/intro'
import Portfolio from '../components/portfolio'
import Contact from '../components/contact'
import Skills from "../components/skills";
 
const IndexPage = () => {

	return (
		<body>
			<Intro />
			<Skills />
			<Portfolio />
			<Contact />
		</body>
	)
}

export default IndexPage

export const Head = () => <title>Dominic Wong</title>
