import * as React from 'react';
import { introContent } from '../content/intro';

const Intro = () => {

    return (
        <div id="intro">

            <div className="greeting">
                <h1>Kia Ora, I'm Dom!</h1>
                <h2>{ introContent.occupation }</h2>
            </div>
            <div className="about-me">
                <p>{ introContent.pOne }</p>
                <p>{ introContent.pTwo }</p>
            </div>

        </div>
    );
};

export default Intro;