import '../../styles/components/layout/Header.css';
import React from 'react';

const Header =(props)=> {
    return(
        <header>
            <div className='holder'>
                <div className='logo'>
                    <img src="imagenes/logoc.JPG" width="100" alt="cyberseguridad" id='Cyber'/>
                    <h1>Cybersegurity</h1>
                </div>
            </div>
        </header>
    );
}
export default Header;