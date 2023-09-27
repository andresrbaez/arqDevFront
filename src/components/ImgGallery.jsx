import React from 'react';

const ImgGallery = ({ setShowImg, imgs }) => {
    return (
        <div className='verMas-modal'>
            <div
                className='verMas-modal_container'
                onClick={() => setShowImg(false)}
            ></div>
            <div className='verMas-modal_detalle h-auto'>
                    <div className='flex flex-col items-center'>
                        <img className='max-h-[95vh]' src={imgs} alt="" />
                    </div>
            </div>
        </div>
    );
};

export default ImgGallery;