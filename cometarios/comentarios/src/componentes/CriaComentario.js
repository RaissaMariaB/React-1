import React from  "react"


const CriaComentario = props => {
    return (
      <div>
        <img className="img" src={props.imagem}></img>
        <div>
          <DetalheAutor
          nome = {props.nome}
          subtitulo = {props.subtitulo}
          />
          <hr />
          <ComentarioTexto
            comentario = {props.comentario}
          />
        </div>
      </div>
    )
  }
  
  const ComentarioTexto = props => <p>{props.comentario}</p>
  
  const DetalheAutor = props =>{
    return(
      <div>
          <h1 className="nome">{props.nome}</h1>
          <h2 className="subtitulo">{props.subtitulo}</h2>
    
      </div>
    )
  
  }

export default CriaComentario