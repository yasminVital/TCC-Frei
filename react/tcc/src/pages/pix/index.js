import { ContainerCarrinho } from './styled'

import { Link } from 'react-router-dom'

import Cabecalho from '../../components/cabecalho/cabecalho'
import Rodape from '../../components/rodape/rodape'
import Listras from '../../components/listras'
export default function Pix() {

    return (
        <ContainerCarrinho>
            <Cabecalho />
            <div className="titulo" style={{fontSize: '64px', marginLeft: '65px'}}>Realizar Pagamento</div>
           <Listras />
            <div className="cc"> 
                <div className="titles"> Pedido aguardando Pagamento ! </div>
                <div className="text"> 
                    Copie o código abaixo e utiliza o Pix Copia e Cola no aplicativo que você vai realizar o pagamento, com o valor total de: 1.400
                </div>
                <div className="cod"> 
                    <input disabled value="41734628067368373913979174548727"/>
                </div> 
            </div>
        </ ContainerCarrinho>

        )
    }