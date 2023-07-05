import './App.css';
import React, { useState, useEffect } from 'react';
import ListaImagenes from './components/ListaImagenes';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

    const [imagenes, setImagenes] = useState([]);

  return (
    <div>
      <Header
        imagenes={imagenes}
        setImagenes={setImagenes}
      ></Header>

      <ListaImagenes
        key = "id"
        imagenes={imagenes}
      />
      <Footer/>
    </div>
  );
}

export default App;
