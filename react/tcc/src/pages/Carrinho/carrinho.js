import { ContainerCarrinho } from './styled'
import Tiras from '../../components/listras/index'
import Cabecalho from '../../components/cabecalho/cabecalho'
import Rodape  from '../../components/rodape/rodape'
import CarrinhoItem from './/boxItem/index'
import Cookie from 'js-cookie'
import { useState, useEffect } from "react"
import { Link ,useHistory } from "react-router-dom"

export default function Carrinho(props) {
    const [produtos, setProdutos] = useState([]);
  

    // Chama a funcção 'carregarCarrinho' assim que a página abre 
    useEffect(carregarCarrinho, []);
  
  
  
    function carregarCarrinho() {
      // Lê o Array de Produtos do Carrinho do Cookie.
      // Se o Cookie estiver vazio, volta um Array vazio []
      // Se o Cookie não estiver vazio, converte o Cookie em Array pelo JSON.parse()
      let carrinho = Cookie.get('carrinho');
      carrinho = carrinho !== undefined 
                    ? JSON.parse(carrinho) 
                     : [];
  
      // Atualiza a variável de Estado com o Conteúdo do Cookie
      //setProdutos(carrinho);
    }

    return (
    <ContainerCarrinho>
        <Cabecalho />
        <div className="titulo" style={{fontSize: '64px', marginLeft: '65px'}}> Meu Carrinho</div>
        <Tiras/>
        <div className="box-tabela"> 
            

                {produtos.map(item => 
                    <CarrinhoItem key={item.id} 
                        info={item} 
                        />
                )}


        </div>
        <div className="cupom"> 
            <div className="cup-nome" style={{marginTop: '2px'}}> Cupom de Desconto</div>
            <div className="cup-input"> <input /> </div>
            <button style={{marginLeft: '30px', width: '10em', border: '2px solid #B7B7B7', backgroundColor: '#B7B7B7', borderRadius: '20px', outline: 'none'}}>Adicionar</button>
        </div>
        <div className="precos"> 
            <div className="box-preco"> 
                <div className="sb">Subtotal dos Pedidos: </div>
                <div className="pc"> 40,00</div>
            </div>
            <div className="box-preco"> 
                <div className="sb">Cupom de Desconto:</div>
                <div className="pc"> 20,00</div>
            </div>
            <div className="box-preco"> 
                <div className="sb"> Pagamento Total: </div>
                <div className="pc"> 20,00</div>
            </div>
        </div>
        <div className="botoes"> 
            <Link to="./Produtos"> <button> Continuar Comprando </button> </Link> 
            <Link to="./revisao"> <button>  Realizar pedido   </button> </Link> 
        </div>
        <Rodape />
    </ ContainerCarrinho>
    )
}