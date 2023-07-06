import React, { Fragment, useState } from 'react'; 
import HeaderFoto from '../resources/Header-foto.jpg'
import Buscador from './Buscador';
const Header = ({setImagenes, seleccionarVista, paginasTotales, setPaginasTotales, paginaActual, setPaginaActual}) => {
    return ( 
        <Fragment>
            <nav className="nav-bar">
                <a onClick={() => seleccionarVista('Home')} className="titulo-nav-bar" href="#">Lenspire</a>
                <a onClick={() => seleccionarVista('Home')} className="favoritos" href="#">Home</a>
                <a onClick={() => seleccionarVista('Favoritos')} className="favoritos" href="#">Favoritos</a>
            </nav>
            <div>
                <img className='imagen-grande' key="header-img" src={HeaderFoto}></img>
                <div className='titulo'>
                    Lenspire
                </div>
                <Buscador
                    setImagenes={setImagenes}
                    paginasTotales={paginasTotales}
                    setPaginasTotales={setPaginasTotales}
                    paginaActual={paginaActual}
                    setPaginaActual={setPaginaActual}
                    />
            </div>
        </Fragment>
     );
}
 
export default Header;