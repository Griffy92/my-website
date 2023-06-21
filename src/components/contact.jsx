import * as React from 'react';
import lighthouse from '../images/moonrise-kingdom.jpg';

const Contact = () => {
    return (
        <div id="contact">
            <div className="reach-out">
                <h2>Contact me coming soon!</h2>
            </div>

            <div className="fun">
                <p>
                    You scrolled all the way down! Here's a picture that I really like from the film Moonrise Kingdom.
                </p>
                <img src={ lighthouse } alt="Girl on Lighthouse from Moonrise Kingdom film" />
            </div>
        </div>
    )
}

export default Contact;