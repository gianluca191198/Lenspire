import React, { useState } from 'react';
import unliked from '../resources/unliked.png'
import liked from '../resources/liked.png'
const ListaImagenes = ({imagenes, setFavorito, favoritos, eliminarFavorito, paginasTotales, setPaginaActual, paginaActual}) => {

      
    function existeFavorito(foto){
        return favoritos.some(item => item.id === foto.id);
    }
    function agregarFavorito(foto){
        if(!existeFavorito(foto)){
            setFavorito([...favoritos, foto])
            foto.icono = liked;
        }else{
            console.log("Ya has agregado esta foto a favoritos");
        }
    }

    function eliminarFavorito(foto){
        const favoritosActualizado = favoritos.filter(favorito => favorito.id !== foto.id);
        setFavorito(favoritosActualizado);
        foto.icono = unliked;
    };

    function handlePrevPage(){
        setPaginaActual(paginaActual - 1);
    };
    
    function handleNextPage() {
        setPaginaActual(paginaActual + 1);
    };

    return ( 
        <div className='contenedor'>
            <div className='lista-imagenes thumbnail'>
                {imagenes?.map((foto) => (
                    <div className='tarjeta' key={foto.id}>
                        <img className="imagen" src={foto.urls.thumb} alt={foto.alt_description} />
                        <img onClick={() => { existeFavorito(foto) ? eliminarFavorito(foto) : agregarFavorito(foto)}} src={ existeFavorito(foto) ? liked: unliked} className='botones'></img>
                    </div>
                ))}
            </div>
            {
                paginasTotales ? 
                <div className='paginado'>
                    <button className='btn btn-secondary' onClick={handlePrevPage} disabled={paginaActual === 1}>Anterior</button>
                    <button className='btn btn-secondary' onClick={handleNextPage} disabled={paginaActual === paginasTotales}>Siguiente</button>
                </div>
                :
                <div></div>
            }
        </div>
     );
}
 
export default ListaImagenes;