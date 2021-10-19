import {ConteinerProduto} from '../styled'
import Categorias  from '../../../components/Categorias/categoria'
import Cabecalho from '../../../components/cabecalho/cabecalho'
import Avalicao from '../../../components/avaliação/avaliacao'



import Rodape from '../../../components/rodape/rodape'


export default function doces (){
    return (
        <ConteinerProduto>
            <Cabecalho/>
            <div className = "Conteinerimg">
            <div className = "Produtos">
             <Categorias/>
             <div className = "ListaProdutos">
               
  
                 <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Pao-doce-coco-creme-Baixa-5 3.png" alt=""  /> </div>
                 <div className = "Produto"> Pão doce c/ coco </div>
                 <Avalicao/>
                 <div className = "Preco"> Valor: 2,50 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>


                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/sonho.png" alt=""  /> </div>
                 <div className = "Produto"> Sonho de creme </div>
                 <Avalicao/>
                 <div className = "Preco"> Valor: 3,50 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>


                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Bolo de Fubá.png" alt=""  /> </div>
                 <div className = "Produto"> Bolo de fubá </div>
                 <Avalicao/>
                 <div className = "Preco"> Valor: 3,50 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>


                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/image 1.png" alt=""  /> </div>
                 <div className = "Produto"> Bolo de pote chocolate </div>
                 <Avalicao/>
                 <div className = "Preco"> Valor: 2,00 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>
        
                 
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/bolo de pote.png" alt=""  /> </div>
                 <div className = "Produto"> Bolo de pote c/frutas </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 4,00 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>

                
                 
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Trouxinha Folhada Creme 1.png" alt=""  /> </div>
                 <div className = "Produto"> Trouxinha folhada creme </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 4,00 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>

                 
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/bolo com cobertura.png" alt=""  /> </div>
                 <div className = "Produto"> Bolo c/cobertura </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 3,00 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>

                 
                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/image 2.png" alt=""  /> </div>
                 <div className = "Produto"> Carolina de doce de leite </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 2,50 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>


                 <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Café 2.png" alt=""  /> </div>
                 <div className = "Produto"> Bomba de chocolate </div>
                 <Avalicao/>
                 <div className = "Preco"> Valor: 3,50 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>


                <div className = "caixa1">
                 <div className = "imagem"> <img src="./assets/imagens/Café 2.png" alt=""  /> </div>
                 <div className = "Produto"> Beijinho </div>
                 <Avalicao/>
                 <div className = "Preco">Valor: 1,50 R$ </div>
                 <div className = "botão-compra"> <button> Compra </button> </div>
                </div>
                </div>

              
              </div>
              </div>

              <Rodape />
        </ConteinerProduto>
    )
}