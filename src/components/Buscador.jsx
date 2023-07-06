import React, {useState, useEffect} from 'react';
const Buscador = ({imagenes, setImagenes, paginaActual, setPaginasTotales, setPaginaActual}) => {

    
    const apiKey = 'SudUi7PHizIEvv-99zhBa4q86SYxr_QA_xy13BhVmbY';
    const [query, setQuery] = useState('');
    const [formattedQuery, setFormatedQuery] = useState('');


    useEffect(() => {
        if(formattedQuery){
            fetchfotosPorQuery();
        }else{
            fetchfotos();
        }
    },[formattedQuery]);

    useEffect(() => {
        if(formattedQuery){
            fetchfotosPorQuery();
        }else{
            fetchfotos();
        }
    },[paginaActual]);
    
    const fetchfotosPorQuery = async () => {
        fetch(`https://api.unsplash.com/search/photos?query=${formattedQuery}&page=${paginaActual}`, {
        headers: {
            Authorization: `Client-ID ${apiKey}`
        }
        })
        .then(response =>{ 
            response.json().then(response => {
            setImagenes(response.results);
            setPaginasTotales(response.total_pages);
            })
        })
        .catch(error => {
            console.log('Error:', error);
        });
    };

    const fetchfotos = async () => {
        fetch(`https://api.unsplash.com/photos/?count=30&page=${paginaActual}`, {
        headers: {
            Authorization: `Client-ID ${apiKey}`
        }
        })
        .then(response =>{ 
            response.json().then(response => {
            setImagenes(response);
            })
        })
        .catch(error => {
            console.log('Error:', error);
        });
    };

    useEffect(() => {
        if(imagenes === undefined){
            fetchfotos();
        }
    }, []);
    

    const handleInputChange = (event) => {
      const value = event.target.value;
      setQuery(value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const newQuery = query.replace(/ /g, '+');
      setFormatedQuery(newQuery);
      setPaginaActual(1)
    };

    return ( 
        <>
            <div>
                <form className="form-inline my-2 my-lg-0 buscador" onSubmit={handleSubmit}>
                    <input className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Buscar imagenes" 
                    aria-label="Buscar imagenes"
                    value={query}
                    onChange={handleInputChange}/>
                </form>
            </div>
        </>
     );
}
 
export default Buscador;