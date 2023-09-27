import React, { useEffect, useState } from 'react';
import ImgGallery from './ImgGallery';

const ProjectGallery = ({project, setShowImg, showImg}) => {
    const [imgs, setImgs] = useState()

    return (
        <div className='w-full mt-8'>
            <ul className='grid grid-cols-3 gap-1'>
                {project.length !== 0 && 
                    project.media.map((e, idx) => (
                    <li key={idx} className='w-full overflow-hidden h-[400px] cursor-pointer' onClick={() => {setShowImg(!showImg); setImgs(e)}} >
                        <img className='img-zoom' src={e} alt="" />
                    </li>
                    ))
                }
            </ul>

            {showImg === true && <ImgGallery setShowImg={setShowImg} imgs={imgs} />}
        </div>
    );
};

export default ProjectGallery;