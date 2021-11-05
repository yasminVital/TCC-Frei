import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Avalicao from '../../../components/avaliação/avaliacao'





export default function Box(props) {
    return(
            
    <div className = "caixa1">
        <div className = "imagem">  <img src={props.info.imagem} alt=""  /> </div>
        <div className = "Produto"> {props.info.nome} </div>
        <Avalicao/>
        <div className = "Preco">  R$ {props.info.valor},00</div>
        <div className = "botão-compra"> 
        <Link to ={{
            pathname: '/Detalhe',
            state: props.info
        }} >
            <button> Comprar </button> 
        </Link>
        </div>

    </div>
    )
}