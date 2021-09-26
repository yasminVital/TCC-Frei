import { ConteinerInicial } from './styled'

import Cabecalho from '../../components/cabecalho/cabecalho'




export default function Inicial () {

    return (

        <ConteinerInicial> 
         <Cabecalho/>
        <div className= 'faixa2'>

            <div className = "ikkdfsksk">
            <div className= 'favoritos'>
                <div className= 'titulo01'>
                    Favoritos da casa
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
                
                
                
            <div className = 'rodape'>
                
                <div className = 'part-roda1'> 
                    <div className='info-01'> 
                    Informações de contato
                    </div>
                    <div className='info-02'> 
                    Av. Coronel Octaviano de Freitas Costa, 463 - Socorro. São Paulo
                    </div>
                    <div className='info-03'> 
                    Telefone: (11) 5687-8876 | 96398-6252
                    </div>
                    <div className='info-04'> 
                    contato@testefigma.com
                    </div>
                </div>

                <div className= 'part-roda2'>
                    <div className = 'info-05'> 
                    Horário De  Funcionamento 
                    </div>
                    <div className = 'info-06'> 
                    De Segunda à Sexta-Feira
                        08:00 às 16:30
                    </div>
                </div>

                <div className= ' part-roda3'>
                    <div className= 'img'>
                       <img src="./assets/imagens/logo 13 (1).png" alt= ""/>
                    </div>
                    </div>
                    </div>
                <div className= 'final'>
                    <div className= 'exp'>
                    Todos os direitos reservados | STI ©
                </div>
                </div>
                </div>
            </ConteinerInicial>
    )
}