import React from 'react';

const Flipcard = ( {content} ) => {
    return (
        <div className="flipcard-container">
            <div className="card">
                <div className="front" style={{ backgroundImage: `url(${content.image})`}}></div>
                <div className="back">
                    Back of card
                </div>
            </div>
        </div>
    )
}

export default Flipcard;