import React, { useState } from 'react';
import { projects } from '../content/Projects'
import CarouselItem from './carousel-item';

const Carousel = () => {
    const [ index, setIndex ] = useState(0);

    const updateIndex = ( newIndex ) => {
        if ( newIndex < 0 ) {
            setIndex( projects.length - 1 );
        } else {
            setIndex( newIndex % projects.length );
        }
    };

    return (
        <>
            <button onClick={ () => updateIndex( index - 1 ) }>&lt;</button>
            <div className="carousel" style={{ transform: `translateX(-${index * 100}%)`}}>
                { projects.map( (project) => {
                    return <CarouselItem content={project} />
                })}
            </div>
            <button onClick={ () => updateIndex( index + 1 ) } >&gt;</button>
        </>
    )
}

export default Carousel;