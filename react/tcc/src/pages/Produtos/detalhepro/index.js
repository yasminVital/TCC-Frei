
import { ConteinerProdutos } from './styled'
import Categorias  from '../../../components/Categorias/categoria'
import Cabecalho from '../../../components/cabecalho/cabecalho'
import { Link } from 'react-router-dom'



import Rodape from '../../../components/rodape/rodape'



export default function DetalhesProdutos() {
  

    return(

        <ConteinerProdutos>
            <Cabecalho/>
            <div className = "Conteinerimg">

            <div className = "Detalhes">
              <Categorias/>
              

               <div className = "DetalhesProdutos">
              <h2>  Rocambole de chocolate </h2>

                <div className = "Produto" >
                <div className = "Imagem-produto"><img src="./assets/imagens/rocambole de chocolate.png" alt=""  /> </div>

                  <div className = "informaçõesproduto">
                        <div className = "informações">
                         <div className = "valor-Produto"> Preço: 5,00   </div>
                         <button className = "contador"> </button>
                         <button className = "adicionarCarrinho"><Link to = "/Carrinho">Adicionar ao Carrinho </Link></button>
                       </div>
                       
                       
                   </div>


                   </div>
                   












                </div>
               </div>
              </div>
            <Rodape />
        </ConteinerProdutos>
    )
    
}