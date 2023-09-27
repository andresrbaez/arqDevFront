import React, { useEffect, useState, lazy } from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useNavigate, useParams } from 'react-router-dom';
import { getProject } from '../api/projects.api'
import ProjectGallery from '../components/ProjectGallery';
import ProjectInfo from '../components/ProjectInfo';

const LazyProjectGallery = lazy(() => import('../components/ProjectGallery'))
const Project = () => {
    const params = useParams();
    const navigate = useNavigate()

    const [project, setProject] = useState([])
    const [showImg, setShowImg] = useState(false)


    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const res = await getProject(params.id)
                setProject(res.data)
            }
        }
        loadTask()
    }, [])


    return (
        <>
            <NavBar />
            <div className='mt-28 flex flex-col'>
                <div className='mb-16'>
                    <img src={project.media} alt="" />
                </div>

                <div className='flex flex-row w-full justify-around mt-8'>
                    <div className='w-full'>
                        <h1 className='font-bold'>
                            {project.title}
                        </h1>
                    </div>
                    <div className='w-full px-48 text-justify'>
                        <p> <b>{project.type_project}</b> </p>
                        <p className='mb-4'> <b>Año {project.date}</b> </p>
                        {project.short_description !== "null" &&
                            <p className='mb-4'>{project.short_description}</p>
                        }
                        <ul className='mb-4'>
                            {project.modeling !== "null" &&
                                <li> Modelado: <b> {project.modeling} </b> </li>
                            }
                            {project.planimetry !== "null" &&
                                <li> Planimetría: <b> {project.planimetry} </b> </li>
                            }
                            {project.display !== "null" &&
                                <li> Visualización: <b> {project.display} </b> </li>
                            }
                            {project.software !== "null" &&
                                <li> Software: <b> {project.software} </b> </li>
                            }
                            {project.vegetation !== "null" &&
                                <li> Vegetación: <b> {project.vegetation} </b> </li>
                            }
                            {project.posproduction !== "null" &&
                                <li> Posproducción: <b> {project.posproduction} </b> </li>
                            }
                        </ul>

                    </div>

                </div>


                {/* Información Proyecto */}
                <ProjectInfo project={project} />


                <LazyProjectGallery project={project} setShowImg={setShowImg} showImg={showImg} />

                {params.id < 8 ?
                    <div className='mt-12 text-[22px]'>
                        <a className='cursor-pointer' href={`/projects/${parseInt(params.id) + 1}`}>
                            NEXT PROJECT
                        </a>
                    </div> :
                    <div className='mt-12 text-[22px]' onClick={() => navigate(`/projects`)}>
                        <span className='cursor-pointer' >
                            Back to gallery
                        </span>
                    </div>
                }


            </div>
            <Footer />
        </>
    );
};

export default Project;