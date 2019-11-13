import React from 'react';
import './App.css';

class Contador extends React.Component {
  constructor() {
    super()
    this.state = {
      contador: 0,
      mostrar: true,
      block: false
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
    this.setState(() => {
      return {
        contador: 0,
        block:false
      }
    })
  }

  fecharContador = () => {
    // Aqui eu defino o que acontece com o estado
    this.setState((prevState) => {
      console.log(prevState)
      return {
        mostrar: !prevState.mostrar
        // É A MESMA COISA QUE ISSO > mostrar: prevState.mostrar === true ? false : true 
        // posso fazer uma condição como resposta  
      }
    })
  }

  block = () => {
    this.setState(() => {
      return {
        block: true
      }

    })


  }

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={this.fecharContador}>
          {this.state.mostrar === true ? "Bota os botão" : "Tira os botão"}
        </button><br />
        {/* Aqui eu faço a condição sempre usando >THIS< */}
        {this.state.mostrar === true ? '' : (
          <div>
            <div>
              <button disabled={this.state.block} className="btnMaisUm" onClick={this.adicionaUm}>+1</button>
              <button disabled={this.state.block} className="btnMenosUm" onClick={this.menosUm}>-1</button>
              <button className="btnResetar" onClick={this.reset}>resetar</button>
            </div>
            <div>
              <button className="block" onClick={this.block}>Block</button>
             </div>
          </div>

        )}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h2>
        Contador
      </h2>
      <Contador />
    </div>
  )
}

export default App


