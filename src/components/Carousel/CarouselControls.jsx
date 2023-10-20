import React from 'react';

const CarouselControls = ({ prev, next }) => {
    return (
        <div>
            <button className='carousel-control left !p-0 flex justify-center items-center ml-3' onClick={prev} >
                <i className='bx bx-chevron-left text-[40px]' ></i>
            </button>
            <button className='carousel-control right !p-0 flex justify-center items-center mr-3' onClick={next} >
                <i className='bx bx-chevron-right text-[40px]'></i>
            </button>
            
        </div>
    );
};

export default CarouselControls;