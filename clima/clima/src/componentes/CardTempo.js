import  React from "react"
import Tabela from './Tabela'
import Data from './Data'
import Foto from './Foto'


const CardTempo = props => {
    console.log(props)
    return (
      <div className="previsao">
        <Data 
        data = {props.data}
        previsao = {props.previsao}        
        />
        <Foto
        imagem = {props.imagem}
        descricao = {props.descricao}
        />
        <Tabela 
        maxima = {props.maxima}
        minima = {props.minima}      
        />
      </div>
    )
  }

  export default CardTempo
  
  
  