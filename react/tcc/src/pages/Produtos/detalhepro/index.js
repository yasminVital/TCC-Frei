
import { ConteinerProdutos } from './styled'
import ContadorProduto from './contadorProduto/styled'
import Categorias  from '../../../components/Categorias/categoria'
import Cabecalho from '../../../components/cabecalho/cabecalho'
import { Link, useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'
import Rodape from '../../../components/rodape/rodape'
import { useState } from 'react'



export default function DetalhesProdutos(props) {


  const navigation = useHistory();
  


  function comprar() {
    // Lê o Array de Produtos do Carrinho do Cookie.
    // Se o Cookie estiver vazio, volta um Array vazio []
    // Se o Cookie não estiver vazio, converte o Cookie em Array pelo JSON.parse()
    let carrinho = Cookie.get('carrinho');
    carrinho = carrinho !== undefined 
               ? JSON.parse(carrinho) 
                : [];

                
    if (carrinho.some(item => item.id === produto.id) === false)
        carrinho.push({...produto });
        
        Cookie.set('carrinho', JSON.stringify(carrinho));
        navigation.push('/carrinho');

  }
  const [produto, setProduto] = useState(props.location.state);  


    return(

        <ConteinerProdutos>
            <Cabecalho/>
            <div className = "Conteinerimg">

            <div className = "Detalhes">
              <Categorias/>
              

               <div className = "DetalhesProdutos">
              <h2>  {produto.nome} </h2>

                <div className = "Produto" >
                <div className = "Imagem-produto"><img src= {produto.imagem}  alt=""  /> </div>  

                  <div className = "informaçõesproduto">
                        <div className = "informações">
                         <div className = "valor-Produto"> {produto.valor}   </div>
                          <ContadorProduto/>
                         <button className = "adicionarCarrinho"  onClick={comprar}>Adicionar ao Carrinho </button>
                       </div>

                       <div className = "conteinerDescricao">
                         <h3> DESCRIÇÃO DO PRODUTO:  </h3>
                         <div className = "Descrição-produto"> O Melhor Rocambole de chocolate que você pode encontra é aqui no FREI </div>
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