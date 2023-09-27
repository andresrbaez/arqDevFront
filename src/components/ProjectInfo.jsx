import React from 'react';

const ProjectInfo = ({ project }) => {
    return (
        <div className='flex flex-row gap-12'>
            {project.id === 7 || project.id === 8 || project.id === 3 ?
                <>
                    <div className='w-[50%] text-justify'>
                        {project.description_1 !== "null" &&
                            <p>
                                {project.description_1}
                            </p>
                        }
                    </div>

                    <div className='w-[50%] text-justify'>
                        {project.description_2 !== "null" &&
                            <p>
                                {project.description_2}
                            </p>
                        }
                    </div>
                </> :
                <>
                    <div className='w-[50%] text-justify'>
                        {project.description_subtitle !== "null" &&
                            <span>
                                {project.description_subtitle}
                            </span>
                        }
                        {project.description_1 !== "null" &&
                            <p>
                                {project.description_1}
                            </p>
                        }
                        {project.description_2 !== "null" &&
                            <p className='mb-4'>
                                {project.description_2}
                            </p>
                        }
                        {project.description_5 !== null && project.description_5 !== undefined &&
                            <ul className='pl-5'>
                                {project.description_5.map((e, idx) => (
                                    <li key={idx} className='list-disc'> {e} </li>
                                ))}
                            </ul>
                        }
                    </div>

                    <div className='w-[50%] text-justify'>
                        {project.description_3 !== "null" &&
                            <p className='mb-4'>
                                {project.description_3}
                            </p>
                        }
                        {project.description_4 !== "null" &&
                            <p>
                                {project.description_4}
                            </p>
                        }
                        {project.description_6 !== null && project.description_5 !== undefined &&
                            <ul className='pl-5'>
                                {project.description_6.map((e, idx) => (
                                    <li key={idx} className='list-disc'> {e} </li>
                                ))}
                            </ul>
                        }
                    </div>
                </>
            }
        </div>
    );
};

export default ProjectInfo;