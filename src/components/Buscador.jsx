import React, {useState, useEffect} from 'react';
const Buscador = ({imagenes, setImagenes}) => {

    
    const apiKey = 'SudUi7PHizIEvv-99zhBa4q86SYxr_QA_xy13BhVmbY';
    const [query, setQuery] = useState('');
    const [imagenesCargadas, setImagenesCargadas] = useState(false);
    
    const fetchfotosPorQuery = async () => {
        fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
        headers: {
            Authorization: `Client-ID ${apiKey}`
        }
        })
        .then(response =>{ 
            response.json().then(response => {
            setImagenes(response.results);
            })
        })
        .catch(error => {
            console.log('Error:', error);
        });
    };

    const fetchfotos = async () => {
        fetch(`https://api.unsplash.com/photos/random?count=20`, {
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
            console.log("a")
            fetchfotos();
        }
    }, []);
    

    const handleInputChange = (event) => {
      const value = event.target.value;
      setQuery(value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formattedQuery = query.replace(/ /g, '+');
      fetchfotosPorQuery();
      
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