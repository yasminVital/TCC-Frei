import { ContainerCarrinho } from './styled'

import Listras from '../../../components/listras'
import Cabecalho from '../../../components/cabecalho/cabecalho'
import Rodape from '../../../components/rodape/rodape'

export default function CarrinhoVazio() {

    return (
        <ContainerCarrinho>
            <Cabecalho />
            <div className="titulo" style={{fontSize: '64px', marginLeft: '65px'}}> Meu Carrinho</div>
            <Listras/>
            <div className="cc"> 
                <img src="./assets/imagens/vazio.png" alt="" />
            </div>
            <Rodape />
        </ ContainerCarrinho>

        )
    }