import React from 'react';
import { Link } from 'gatsby';

const Flipcard = ( {content} ) => {
    return (
        <div className="flipcard-container">
            <div className="card">
                <div className="front" style={{ backgroundImage: `url(${content.image})`}}></div>
                <div className="back">
                    <p>{content.desc}</p>
                    <p>{content.role}</p>
                    <Link to="/">Find out more about {content.name}</Link>
                </div>
            </div>
        </div>
    )
}

export default Flipcard;