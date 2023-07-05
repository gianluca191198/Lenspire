import React, { Fragment, useState } from 'react'; 
import HeaderFoto from '../resources/Header-foto.jpg'
import Buscador from './Buscador';
const Header = ({imagenes, setImagenes}) => {
    return ( 
        <Fragment>
            <nav className="navbar navbar-light nav-bar">
                <a className="titulo-nav-bar" href="#">Lenspire</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">Hidden brand</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                </ul>
            </div>
            </nav>
            <div>
                <img className='imagen-grande' key="header-img" src={HeaderFoto}></img>
                <div className='titulo'>
                    Lenspire
                </div>
                <Buscador
                    setImagenes={setImagenes}
                    />
            </div>
        </Fragment>
     );
}
 
export default Header;