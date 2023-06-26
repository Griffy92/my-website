import React from 'react';
import Languages from './languages';
import Frameworks from './frameworks';
import Tools from './tools';

const Skills = () => {

    return (
        <div id="skills">
            
            <div className="skills-list">
                <Languages />
                <Frameworks />
                <Tools />
            </div>

            <div className="learning">
                {/* <p>{ currentlyLearning.text }</p> */}
                <p className="big-text">See below for projects I've worked on.</p>
            </div>

        </div>
    )
}

export default Skills

