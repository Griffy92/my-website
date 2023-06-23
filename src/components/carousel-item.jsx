import React from 'react';

const CarouselItem = ( {content} ) => {

    return (
        <>  
            <img src={content.image} alt={content.name} />
        </>
    )
}

export default CarouselItem ;