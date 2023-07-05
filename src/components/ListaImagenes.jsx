import React from 'react';
const ListaImagenes = ({imagenes}) => {
    return ( 
        <div className='contenedor'>
            <div className='lista-imagenes'>
                {imagenes.map((foto) => (
                    <div key={foto.id} className="imagen">
                        <img key={foto.id} src={foto.urls.thumb} alt={foto.alt_description} />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default ListaImagenes;