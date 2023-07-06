import React from 'react';
import ListaImagenes from './ListaImagenes';
const Favoritos = ({favoritos, setFavorito}) => {
    return ( 
        <>
            {
                favoritos?.length > 0 ?
                <div>
                    <div className='subtitulo'>Favoritos</div>
                    <ListaImagenes
                    imagenes={favoritos}
                    favoritos={favoritos}
                    setFavorito={setFavorito}
                    />
                </div>
                :
                <div className='favoritos-vacio'>
                    No tienes imagenes en favoritos.
                </div>
            }
        </>
     );
}
 
export default Favoritos;