import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import useSelect from './hooks/useSelect';
import ListaNoticias from './components/ListaNoticias';

function App() {

  // Definir categoria y noticias
  const[categoria, guardarCategoria] = useState('');
  
  // state de noticas
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {

      const key = `8343e67fa1dc420aa0eae058c87196e1`;

      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${key}`

      const respusta = await fetch(url);
      const noticias = await respusta.json();

      guardarNoticias(noticias.articles);

      console.log(noticias.articles)
      
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias"/>
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria}/>
        <ListaNoticias noticias={noticias}/>
      </div>
    </Fragment>
    
  );
}

export default App;
