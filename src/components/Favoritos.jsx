import React from 'react';
import ListaImagenes from './ListaImagenes';
const Favoritos = ({favoritos, setFavorito}) => {
    return ( 
        <>
            <div className='subtitulo'>Favoritos</div>
            <ListaImagenes
            imagenes={favoritos}
            favoritos={favoritos}
            setFavorito={setFavorito}
            />
        </>
     );
}
 
export default Favoritos;