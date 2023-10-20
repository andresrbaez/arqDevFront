import React, { useEffect, useState } from 'react';
import { getAllProjects } from '../api/projects.api'
import { useNavigate } from 'react-router-dom';
import proyectos from '../json/proyectos.json'

const ProjectsList = () => {

    const [projects, setProjects] = useState(proyectos);
    const [project, setProject] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {

    //     async function loadProjects() {
    //         const res = await getAllProjects()
    //         setProjects(res.data)
    //     }
    //     loadProjects()
    // }, [])

    // console.log(proyectos)

    const selectProject = (e) => {
        setProject(e);
        navigate(`/projects/${e.id}`)
    }

    return (
        <div className='gallery-grill'>
            {projects.map((e) => (
                <div onClick={() => selectProject(e)} key={e.id} className='gallery-box'>
                    <div className='cursor-pointer gallery-box_int' >
                        <img src={e.media} className='w-full project_img' />
                        <div className='cap'>
                            <h1 className='titleHover'>
                                {e.title}
                            </h1>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsList;
