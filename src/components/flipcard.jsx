import React from 'react';

const Flipcard = ( {content} ) => {
    return (
        <div className="flipcard-container">
            <div className="card">
                <div className="front" style={{ backgroundImage: `url(${content.image})`}}></div>
                <div className="back">
                    <p>{content.desc}</p>
                    <p>{content.role}</p>
                    {/* TODO: Add button or link to individual project page */}
                </div>
            </div>
        </div>
    )
}

export default Flipcard;