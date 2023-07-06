import './App.css';
import React, { useState, useEffect, useTransition } from 'react';
import ListaImagenes from './components/ListaImagenes';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favoritos from './components/Favoritos';

function App() {

    //Iniciamos nuestro local storage
    let favoritosGuardados = JSON.parse(localStorage.getItem('favoritos'));
    if(!favoritosGuardados) {
      favoritosGuardados = []
    };
    
    const haySiguientePagina = false;

  useEffect( () => {
    if(favoritosGuardados) {
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    } else {
      localStorage.setItem('favoritos', JSON.stringify([]));
    }
  }, [favoritosGuardados]);
  
    const [imagenes, setImagenes] = useState([]);
    const [favoritos, setFavorito] = useState(favoritosGuardados);
    const [paginasTotales, setPaginasTotales] = useState(0);
    const [paginaActual, setPaginaActual] = useState(1);

    const [transicionEnCurso, cambiarVista] = useTransition();
    const [vista, setVista] = useState('Home');

    function seleecionarVista(nuevaVista){
      cambiarVista( () => {
        setVista(nuevaVista)
      });
    }

  return (
    <div>
      <Header
        imagenes={imagenes}
        setImagenes={setImagenes}
        seleccionarVista={seleecionarVista}
        vista={vista}
        paginasTotales={paginasTotales}
        setPaginasTotales={setPaginasTotales}
        paginaActual={paginaActual}
        setPaginaActual={setPaginaActual}
      ></Header>
      { vista === 'Favoritos' && <Favoritos
                              key = "favoritos"
                              favoritos={favoritos}
                              setFavorito={setFavorito}/>}
      { vista === 'Home' &&  <ListaImagenes
                              favoritos={favoritos}
                              setFavorito={setFavorito}
                              key = "id"
                              imagenes={imagenes}
                              paginasTotales={paginasTotales}
                              paginaActual={paginaActual}
                              setPaginaActual={setPaginaActual}/>
      }
      <Footer/>
    </div>
  );
}

export default App;
