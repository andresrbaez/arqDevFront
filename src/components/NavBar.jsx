import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className='navbar'>

            {/* <div className='logo'>
                <h4 className='logo_h font-bold text-[22px]'>JFBM</h4>
            </div> */}

            <div className='topics'>
                <Link to="/">
                    Home
                </Link>

                <Link to="/projects" >
                    Gallery
                </Link>
                
                {/* <Link to="/about-me" >
                    About Me
                </Link> */}
                
                <Link to="/contact" >
                    Contact
                </Link>
            </div>

        </div>
    );
};

export default NavBar;