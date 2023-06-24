import React from 'react';
import { skills, currentlyLearning } from '../content/skills';

const Skills = () => {

    const generateSkills = () => {
        return Object.keys(skills).map( ( heading ) => {
            return (
                <div key={heading} className="skill">
                    <h2 className="skill-h-size">{heading}</h2>
                    <ul>
                        { skills[heading].map( (skill) => {
                            return (
                                <li key={skill}>{skill}</li>
                            )
                        })}
                    </ul>
                </div>
            );
        });
    };

    return (
        <div id="skills">
            
            <div className="skills-list">
                { generateSkills() }
            </div>

            <div className="learning">
                <p>{ currentlyLearning.text }</p>
                <p className="big-text">See below for projects I've worked on.</p>
            </div>


        </div>
    )
}

export default Skills

