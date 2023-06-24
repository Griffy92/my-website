import React from 'react';
import { skills } from '../content/skills';

const Skills = () => {

    const generateSkills = () => {
        return Object.keys(skills).map( ( heading ) => {
            return (
                <div>
                    <h2>{heading}</h2>
                    <ul>
                        { skills[heading].map( (skill) => {
                            return (
                                <li>{skill}</li>
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
                {generateSkills()}
            </div>
            
            <div className="learning">
                <p>Currently, I'm interested in learning / am learning GraphQL, Go and ThreeJs. I also plan to complete the AWS certificate.</p>
            </div>

        </div>
    )
}

export default Skills

