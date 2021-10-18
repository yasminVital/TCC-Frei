
import { ConteinerProdutos } from './styled'
import Categorias  from '../../../components/Categorias/categoria'
import Cabecalho from '../../../components/cabecalho/cabecalho'



import Rodape from '../../../components/rodape/rodape'



export default function DetalhesProdutos() {
  

    return(

        <ConteinerProdutos>
            <Cabecalho/>
            <div className = "Conteinerimg">

            <div className = "Detalhes">
              <Categorias/>

               <div className = "DetalhesProdutos">










                </div>
               </div>
              </div>
            <Rodape />
        </ConteinerProdutos>
    )
    
}