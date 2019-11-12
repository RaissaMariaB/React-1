import React from "react"




const Data = props => {
    return(
      <div>
        <h1 className = "previsao__data">
          {props.data}
        </h1>
        <p className = "previsao__resumo">
          {props.previsao}
        </p>
      </div>
    )
  }


  export default Data