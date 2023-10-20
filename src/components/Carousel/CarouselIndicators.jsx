import React from 'react';

const CarouselIndicators = ({ project, currentIndex, switchIndex }) => {
    return (
        <div className='carousel-indicators'>
            {project.map((_, idx) => (
                <button 
                key={idx}
                className={`carousel-indicator-item ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => switchIndex(idx)}
                ></button>
            ))}
            
        </div>
    );
};

export default CarouselIndicators;