import React from "react"


const Tabela = props => {
    return(
      <table className = "previsao-temperatura">
          <tr className = "previsao-temperatura__linha">
            <th >
              Máxima
            </th>
            <td >
              {props.maxima}
            </td>
          </tr> 
          <tr className = "previsao-temperatura__linha">
            <th>          
            Mínima
            </th>
            <td>
              {props.minima}
            </td>
          </tr>
        </table>
    )
  }


  export default Tabela