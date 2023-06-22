import * as React from 'react';

const CarouselItem = ( {content, left, right} ) => {
    return (
        <>
            <img src={ content.image } alt="" />
        </>
    )
}

export default CarouselItem ;