import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='slider position'>
            </div>
            <div className='home'>
                <div className='home_name'>
                    <h1 className='title-name animate-fade-down animate-once animate-ease-out animate-normal animate-fill-forwards'>
                        Juan Fernando Barona Morales
                    </h1>
                </div>
                <button className='btn_home' onClick={() => navigate('/projects')}>
                    Entrar
                </button>
            </div>
        </>
    );
};

export default HomePage;