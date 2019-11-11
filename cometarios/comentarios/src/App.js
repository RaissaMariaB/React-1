import React from 'react';
import CriaComentario from "./componentes/CriaComentario"
import logo from './logo.svg';
import './App.css';
import cat from "./img/PERIQUITO.jpg"




function App() {
  return (
    <div className="App">
      <CriaComentario
      imagem = {cat}
      nome = "Raissa"
      subtitulo = "lindaaaa"
      comentario = "loremIpsum"
      />
      <CriaComentario
      imagem = {cat}
      nome = "Raissa"
      subtitulo = "uma princesa"
      comentario = "loremIpsum"
      />  

    </div>
  );
}

export default App;
