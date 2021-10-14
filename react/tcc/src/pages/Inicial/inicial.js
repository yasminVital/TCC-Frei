import { ConteinerInicial } from './styled'

import Cabecalho from '../../components/cabecalho/cabecalho'
import Rodape  from '../../components/rodape/rodape'




export default function Inicial () {

    return (

        <ConteinerInicial> 
         <Cabecalho/>
        <div className= 'faixa2'>

            <div className = "ikkdfsksk">
            <div className= 'favoritos'>
                <div className= 'titulo01'>
                    Favoritos da sua mae
                </div>
                <div className= 'descricao01'>
                    Categoria mais pedidas e vendidas
                </div>

                <div className= 'subtitulosimg'>
                <div className= 'pães'>
                    Pães
                </div>
                <div className='doces'>
                    Doces
                </div>
                <div className= 'bebidas'>
                    Bebidas
                </div>
                </div>

                <div className='imgsub'>
                <div className = 'imgpaes'>
                    <img src="./assets/imagens/croissant-de-Queijo 1 (1).png" width="330" alt=""/>
                </div>  
                <div className = 'imgdoces'>
                    <img src="./assets/imagens/Bolo-de-Chocolate 1 (1).png" width="330" alt= ""/>
                </div>
                <div className = 'imgbebidas'>
                    <img src="./assets/imagens/Laranja 1 (1).png" width="330" alt=""/>
                </div>
                </div>
                </div>
                </div>
            
                </div>
                <Rodape />
            </ConteinerInicial>
    )
}