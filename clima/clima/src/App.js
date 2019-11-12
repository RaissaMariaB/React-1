import React from 'react';

import CardTempo from './componentes/CardTempo'
import logo from './logo.svg';
import './App.css';
import sol from "./assets/sol.png"
import nuvem from "./assets/nuvens.png"




function App() {
  return (
    <div className = "previsao-container">
      <CardTempo  
        data = "31/05/2019"
        previsao = "Ensolarado"
        decricao = "imagem de sol"
        imagem = {sol}
        maxima = "31ºC"
        minima = "20ºC"      
      />
      <CardTempo 
        data = "01/06/2019"
        previsao = "Nublado"
        decricao = "imagem de nuvens"
        imagem = {nuvem}
        maxima = "25ºC"
        minima = "18ºC"      
      />

    </div>   
    
  );
}

export default App;
