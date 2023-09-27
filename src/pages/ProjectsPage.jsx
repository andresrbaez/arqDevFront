import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProjectsList from '../components/ProjectsList';

const ProjectsPage = () => {
    return (
        <div className="App">
            <NavBar />
            <div className='header w-full'>
                <div className='w-[35%]'>
                    <h1>
                        Juan Fernando Barona Morales
                    </h1>
                </div>
                <div className='text-justify w-[65%] px-12'>
                    <h2 className='title_h2'>
                        Diseño Industrial y Arquitectura
                    </h2>
                    <p>
                        Diseño de interiores y exteriores.
                        Paisajismo para contextos inmediatos de proyectos rurales y urbanos.
                        Fotorealismo para proyectos arquitectonicos y de diseño industrial.
                        Encargado de modelado 3D para proyectos arquitectonicos con niveles de LOD en tecnología BIM con Revit.
                    </p>
                    <p className='mt-4'>
                        Manejo de herramientas digitales tanto para diseño 3D, 2D, multimedia y CGL.
                        Certificado por Autodesk en BIM para Revit.
                        Manejo de 3Ds Max con Corona Render.
                        Manejo de Photoshop e Ilustrator para diseño gráfico y postproducción de imagenes fotorealistas.
                        Manejo de After Effects y Premiere para edición y producción de video.
                    </p>
                    <p className='mt-4'>
                        2 años de experiencia laboral en Dvoxel Render Studio.
                        6 meses de experiencia como residente de obra para Inversiones Echeverria.
                        Arquitecto Junior para Mallol Arquitectos
                    </p>
                </div>

            </div>
            <ProjectsList/>
            <Footer />

        </div>
    );
}

export default ProjectsPage;