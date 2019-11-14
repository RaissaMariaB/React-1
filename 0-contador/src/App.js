import React from 'react';
import './App.css';

class Contador extends React.Component {
  constructor() {
    super()
    this.state = {
      contador = 0
    }
  }

  adicionaUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador + 1
      }
    })
  }

  menosUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador - 1
      }
    })
  }

  reset = () => {
    this.setState( () => {
      return {
        contador : 0 
      }
    })
  }

  render() {
    return (
      <div>
        <button className="btnMaisUm" onclick={this.adicionaUm}> +1 </button >
        <button className="btnMenosUm" onClick={this.menosUm}> -1 </button>
        <button className="btnResetar" onClick={this.reset}> resetar </button>
      </div>
    )

  }

}

function App() {
  return (
    <div className = "App">
      <h2>
        Contador
      </h2>
      <Contador />   
import './App.css';   
import Contador from './componentes/Contador';

function App(props) {
  return (
    <div className="App">
      <h2>Contador</h2>
      <Contador />
    </div>
  )
}

export default App
