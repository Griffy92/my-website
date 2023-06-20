import * as React from "react"
import '../styles/index.scss'
 
const IndexPage = () => {

	return (
		<body>
			<div id="intro">
				<h1>Kia Ora, I'm Dom!</h1>
				<h2>Software Engineer</h2>
			</div>

			<div id="about">
				<p>I'm a career transitioner with a background in Account Management and Technical Operations in Ad-Tech. Through this role, I discovered coding and glimpsed it's elegance of doing things efficiently.</p>
				<p>I nurtured this intrigue in a Software Engineer course with General Assembly, which I completed recently. This was a rewarding experience where I learnt alot but at the same time, humbled by how I'm only scratching the surface.</p>
			</div>

			<div id="projects">
				<h2>Projects coming soon</h2>
			</div>

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

		</body>
	)
}

export default IndexPage

export const Head = () => <title>Dominic Wong</title>
