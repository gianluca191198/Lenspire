import React from 'react';
import ListaImagenes from './ListaImagenes';
const Favoritos = ({favoritos, setFavorito}) => {
    return ( 
        <>
            <h1 className='subtitulo'>Favoritos</h1>
            <ListaImagenes
            imagenes={favoritos}
            favoritos={favoritos}
            setFavorito={setFavorito}
            
            />
        </>
     );
}
 
export default Favoritos;