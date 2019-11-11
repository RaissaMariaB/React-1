 import React from 'react';
import logo from './logo.svg';
import './App.css';

const contador = 0

const verificaContador = () => {
  if(contador === 0){
    return <p>Contador não iniciado</p>

  }else{
    return <p>Contador iniciado</p>
  }

}




function App() {
  return (
    <div className = "container__all">
      <h1>
        Contador  
      </h1>
        <p >{contador}</p>

      {verificaContador()}
      
        <div className = "buttons">
        <button>+1</button>
        <button>-1</button>
        <button className = "reset">Resetar</button>
      </div>
    </div>
  );
}

export default App;
