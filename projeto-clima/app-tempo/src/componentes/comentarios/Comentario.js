import React from "react"
import DadosComentario from '../dados/DadosComentario'


// ou import React from "react"
// sempre é precisso importar e exportar os componentes criados


// o constructor vai construir os componentes da minha class e o super vai herdar esses componentes 
// o extends é utilizados para pegar como herança as propriedades de algum elemento
class Comentario extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>{
                 DadosComentario.map(indice =>(
                        <div>
                            <img className="comentario__perfil" src={indice.autora.imagem} />
                            <div>
                                <h3 className="comentario__nome">{indice.autora.nome}</h3>
                                <p className="comentario__subtitulo">{indice.subtitulo}</p>
                                <p>{indice.texto}</p>
                            </div>
                        </div>
         ))}
            </div>
            )
         }
    }



// const DetalhesAutor = (props) => {
//     return (
//       <div>
//         <h3 className="comentario__nome">{props.nome}</h3>
//         <p className="comentario__subtitulo">{props.subtitulo}</p>
//       </div>
//     );
//   }

//   const ComentarioTexto = props => <p>{props.comentario}</p>

//   const ComentarioDetalhes = props => {
//     return (
//       <div>
//         <DetalhesAutor
//           nome={props.nome}
//           subtitulo={props.subtitulo}
//         />
//         <hr />
//         <ComentarioTexto
//           comentario={props.comentario}
//         />
//       </div>
//     )
//   }


//   const Comentario = props => {
//     return (
//       <div className="comentario">
//         <img className="comentario__perfil" src={props.img} />
//         <ComentarioDetalhes
//           nome={props.nome}
//           subtitulo={props.subtitulo}
//           comentario={props.comentario}
//         />
//       </div>
//     )
//   }




export default Comentario

