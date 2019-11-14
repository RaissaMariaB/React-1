// Sempre que um arquico novo for criado precisa ser importado aqui em cima

import React from 'react';
import Previsao from "./componentes/previsao/Previsao"
import Contador from "./componentes/contador/Contador"
import Comentario from "./componentes/comentarios/Comentario"




function App() {
  return (
    <div className="container" >

      <Previsao/>
      <Contador/>
      <Comentario/>
    </div>
  );
}


 
// o react so renderiza um elemento por função, no seu return; 
// não se pode usar class no react pq é palavra reservada, apenas className para setar classes






export default App;
