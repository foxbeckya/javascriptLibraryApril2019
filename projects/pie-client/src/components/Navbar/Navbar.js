import React from 'react';
import piePic from '../../assets/pie.jpeg'
import Logout from './Logout/Logout';
import './Navbar.css';

const Navbar=(props) => {
    return(
        <nav>
            <img id='piePic' src={piePic} alt="Pie Picture"/>
            <Logout />
        </nav>
    )
}

export default Navbar; 