import * as React from 'react';
import Carousel from './carousel'

const Portfolio = () => {

    return (
        <div id="portfolio">
            <div className="skills">
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

            <div className="projects">
                <Carousel />
            </div>

        </div>
    )
}

export default Portfolio;