import React, { useEffect, useRef, useState } from 'react';
import CarouselItem from './CarouselItem';
import CarouselControls from './CarouselControls';
import projectDB from '../../json/proyectos.json'
import { useParams } from 'react-router-dom';
import CarouselIndicators from './CarouselIndicators';

const Carousel = ({ interval = 5000, controls = false, indicators = false, autoPlay = true, width = 1000 }) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [project, setProject] = useState([]);
    const slideInterval = useRef();
    const params = useParams();


    const prev = () => {
        startSlideTimer()
        const index = currentSlide > 0 ? currentSlide - 1 : project.length - 1
        setCurrentSlide(index)
    }
    const next = () => {
        startSlideTimer()
        const index = currentSlide < project.length - 1 ? currentSlide + 1 : 0
        setCurrentSlide(index)
    }

    const switchIndex = (index) => {
        startSlideTimer()
        setCurrentSlide(index)
    }

    const startSlideTimer = () => {
        if(autoPlay){
            stopSlideTimer()
            slideInterval.current = setInterval(() => {
                setCurrentSlide(currentSlide => currentSlide < project.length - 1 ? currentSlide + 1 : 0)
            }, interval)
        }
    }

    const stopSlideTimer = () => {
        if (autoPlay && slideInterval.current) {
            clearInterval(slideInterval.current)
        }
    }

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const res = projectDB.filter((e) => e.id == params.id)
                setProject(res[0].media)
            }
        }
        loadTask()
    }, [])

    useEffect(() => {
        startSlideTimer()

        return () => stopSlideTimer()

    }, [])


    return (
        <div className={`carousel`} style={{ maxWidth: width }}>
            <div className='carousel-inner' style={{ transform: `translateX(${-currentSlide * 100}%)` }}>


                {project !== undefined && project.map((slide, idx) => (
                    <CarouselItem key={idx} slide={slide} stopSlide={stopSlideTimer} startSlide={startSlideTimer} />
                ))}


            </div>
            {indicators && <CarouselIndicators project={project} currentIndex={currentSlide} switchIndex={switchIndex} />}
            {controls && <CarouselControls prev={prev} next={next} />}
        </div>
    );
};

export default Carousel;