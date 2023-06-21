import * as React from "react";
import '../styles/index.scss';
import lighthouse from '../images/moonrise-kingdom.jpg';
import Intro from '../components/intro'
import Portfolio from '../components/portfolio'
 
const IndexPage = () => {

	return (
		<body>
			<Intro />

			<Portfolio />

			<div id="skills">
				<div>
					<h3>Languages</h3>
					<ul>
						<li>Javascript</li>
						<li>Ruby</li>
						<li>HTML</li>
						<li>CSS</li>
					</ul>
				</div>
				<div>
					<h3>Frameworks</h3>
					<ul>
						<li>React</li>
						<li>Ruby on Rails</li>
						<li>Gatsby</li>
						<li>Tailwind</li>
					</ul>
				</div>
				<div>
					<h3>Tools</h3>
					<ul>
						<li>Git</li>
						<li>PostgreSQL</li>
						<li>Notion</li>
						<li>Figma</li>
					</ul>
				</div>
			</div>

			<div id="contact">
				<h2>Contact me coming soon!</h2>
			</div>

			<div id="fun">
				<p>
					You scrolled all the way down! Here's a picture that I really like from the film Moonrise Kingdom.
				</p>
				<img src={ lighthouse } alt="Girl on Lighthouse from Moonrise Kingdom film" />
			</div>

		</body>
	)
}

export default IndexPage

export const Head = () => <title>Dominic Wong</title>
