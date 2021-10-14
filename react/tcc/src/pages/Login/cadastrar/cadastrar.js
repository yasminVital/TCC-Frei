import {ConteinerCadastra} from './styled'

import Cabecalho from '../../../components/cabecalho/cabecalho'



export default function Cadastra() {
    return (

    <ConteinerCadastra>
        <Cabecalho/>
        <div className = "conteinercadastro">
            
            <div className = "Titulo">Cadastra-se:</div>


            <div className = "caixa1-inputs">
                <div className = "input-nome"> Nome: <input className = "Nome" try = "text" /> </div>
                <div className = "input-sobrenome">Sobrenome: <input className = "Sobrenome"/> </div>

                <div className = "input-sexo"> Sexo: <input className = "Sexo" />  </div>
                <div className = "input-CPF"> CPF:  <input className = "CPF"/>   </div>

                <div className = "input-data"> Data nascimento: <input className = "Date"/>   </div>
                <div className = "input-tele"> Telefone: <input className = "Telefone"/> </div>
            
            </div>






            </div>













    </ConteinerCadastra>




    )
    
}





