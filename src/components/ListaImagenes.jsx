import React from 'react';
const ListaImagenes = ({imagenes}) => {
    return ( 
        <div className='contenedor'>
            <div className='lista-imagenes'>
                {imagenes.map((foto) => (
                        
                    <img className="imagen" key={foto.id} src={foto.urls.thumb} alt={foto.alt_description} />
                ))}
            </div>
        </div>
     );
}
 
export default ListaImagenes;