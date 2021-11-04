import {ConteinerOP} from './styled'
import OptLista from "../../../components/BarOption/index"
import { Link } from 'react-router-dom'

export default function op () {

    return ( 
        <ConteinerOP>
            <div className= "PAGINA">

             <OptLista/>
            <div className = " caixa1">
                <div class = "kkk">
                <div className = "img"> 
                <img src= "./assets/imagens/5c48b961e2b44d01e38a26a2_NEX_produtos 1.png" height= "200"alt=""/>
                </div>

                 <div className = "subtitulo">
                    Cadastrar Produtos
                </div>      
            </div>
            </div>

            <div className = " caixa2">
                <div className = "img"> 
                <img src= "./assets/imagens/receber-pedidos-por-telefone-central-de-atendimento-da-loja-suporte-ao-cliente-pedido-facil-entrega-rapida-servico-comercial-personagem-de-desenho-animado-do-operador-de-call-center_335657-2564.jpg" height= "200"alt=""/>
                </div>

                <div className = "subtitulo">
                    Gerenciador de Pedidos
                </div>    
            </div>
            </div>
        </ConteinerOP>
       
     ) }

