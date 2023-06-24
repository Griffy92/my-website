import * as React from 'react';
import Flipcard from './flipcard';
import { projects } from '../content/Projects'

const Portfolio = () => {

    const generateProjects = () => {
        return projects.map((project) => {
            return (
                <div className="portfolio" id={project.name} key={project.name}>
                    <div className="info">
                        <h2>{project.name}</h2>
                        <p className="big-text">{project.tech}</p>
                    </div>
                    <Flipcard content={project} />
                </div>
            )
        })
    }

    return (
        <>  
            { generateProjects() }
        </>
    )
}

export default Portfolio;